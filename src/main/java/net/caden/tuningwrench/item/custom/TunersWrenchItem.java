package net.caden.tuningwrench.item.custom;

import com.finchy.pipeorgans.init.AllBlockEntities;
import com.finchy.pipeorgans.init.AllTags;
import com.simibubi.create.AllBlockEntityTypes;
import com.simibubi.create.AllBlocks;
import com.simibubi.create.content.decoration.steamWhistle.WhistleBlockEntity;
import com.simibubi.create.content.equipment.wrench.IWrenchable;
import com.simibubi.create.content.redstone.link.RedstoneLinkBlock;
import net.caden.tuningwrench.PipeUtils;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.core.NonNullList;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.TextColor;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.tags.BlockTags;
import net.minecraft.tags.TagKey;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.inventory.AbstractContainerMenu;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.item.context.UseOnContext;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.GrassBlock;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.properties.Property;
import java.util.List;
import static net.minecraft.ChatFormatting.*;


public class TunersWrenchItem extends Item {
    public TunersWrenchItem(Properties pProperties) {
        super(pProperties);
    }

    //custom tooltip
    @Override
    public void appendHoverText(ItemStack stack, Level level, List<Component> tooltip, TooltipFlag flag) {

        tooltip.add(Component.literal("Hold Alt and scroll to change mode").withStyle(GRAY));

        tooltip.add(
            Component.literal("Hold ").withStyle(DARK_GRAY)
                    .append(
                            Component.literal("[SHIFT]")
                                    .withStyle(Screen.hasShiftDown() ? WHITE : GRAY)
                    )
                    .append(
                            Component.literal(" for more")
                                    .withStyle(DARK_GRAY)
                    )
        );
        //shift extra info
        if (Screen.hasShiftDown()) {
            tooltip.add(Component.literal("Traditional:").withStyle(GRAY));
            tooltip.add(Component.literal("Configures links as if it is a normal pipe organ. Every stop will be set as if it is a 8' (best for when playing with keyboard)").withStyle(style -> style.withColor(TextColor.fromRgb(0xC7954B))));
            tooltip.add(Component.literal("Match Pitch:").withStyle(GRAY));
            tooltip.add(Component.literal("Matches the pitch of the pipe (best for playing midi files)").withStyle(style -> style.withColor(TextColor.fromRgb(0xC7954B))));

        }
    }


    @Override
    public InteractionResult useOn(UseOnContext pContext) {

        BlockPos positionCLicked = pContext.getClickedPos();
        BlockState state = pContext.getLevel().getBlockState(positionCLicked);
        BlockEntity blockEntity = pContext.getLevel().getBlockEntity(positionCLicked);

        //Redstone Link pickup logic
        Player player = pContext.getPlayer();
        if (player == null)
            return InteractionResult.PASS;

        if (player.isShiftKeyDown() && state.getBlock() instanceof RedstoneLinkBlock) {
            return pickupRedstoneLink(pContext);
        }

        //Now you can do the linking magic
        if(!pContext.getLevel().isClientSide()) {
            Boolean isLink = false;
            ItemStack stackWithLink = null;

            if (!player.isCreative()) {
                AbstractContainerMenu playerInv = player.inventoryMenu;
                NonNullList items = playerInv.getItems();

                for (int i = 0; i < player.getInventory().getContainerSize(); i++) {
                    ItemStack stack = player.getInventory().getItem(i);

                    if (stack.is(AllBlocks.REDSTONE_LINK.asItem())) {
                        stackWithLink = stack;
                        isLink = true;
                        break;
                    }
                }
                if (!isLink) {
                    return InteractionResult.FAIL;
                }
                //player.sendSystemMessage(Component.literal(""));
            }

            //get the tag for the expanded steam whistle without breaking everything
            TagKey<Block> EXPANDED_STEAM_WHISTLE =
                    BlockTags.create(ResourceLocation.fromNamespaceAndPath("expanded_steam_whistles", "feeling_valid"));



            if (blockEntity == null || !(blockEntity.getBlockState().is(AllTags.AllBlockTags.VALID_WHISTLE.tag)
                    || blockEntity.getType() == AllBlockEntityTypes.STEAM_WHISTLE.get()
                    || state.is(EXPANDED_STEAM_WHISTLE))) {
                return InteractionResult.FAIL;
            }
            //get name
            Block block = state.getBlock();
            String blockIdUntrimmed = block.toString();
            String blockId = blockIdUntrimmed.substring(blockIdUntrimmed.indexOf('{') + 1, blockIdUntrimmed.indexOf('}'));


            //get pitch
            CompoundTag tag = blockEntity.saveWithoutMetadata();
            int pitch = tag.getInt("Pitch");

            //get size
            Property<?> sizeProp = state.getBlock()
                    .getStateDefinition()
                    .getProperty("size");
            String pipeSize = "";
            if (sizeProp != null) {
                Comparable<?> value = state.getValue(sizeProp);

                pipeSize = value.toString().toLowerCase();
            }

            //get mode
            ItemStack held = player.getMainHandItem();
            int mode = held.getOrCreateTag().getInt("Mode");

            //pitch (int) pipeSize (str) mode (int)
            String reqBlock = PipeUtils.getReqLinkBlock(blockId, pipeSize, pitch, mode);



            //get position of redstone link
            PipeUtils.OffsetResult result =
                    PipeUtils.getOffsetCoords(mode, player, positionCLicked);

            BlockPos linkPos = result.pos();
            if(!player.level().isEmptyBlock(linkPos)) {
                return InteractionResult.FAIL;
            }

            Direction facing = result.facing();

            PipeUtils.placeRedstoneLink(player.level(), linkPos, blockId, reqBlock, facing);

            if(!player.isCreative()) {
                if(isLink && stackWithLink != null) {
                    stackWithLink.shrink(1);
                }
            }
        }

        return InteractionResult.SUCCESS;
    }

    //Helper class to recreate how Create's wrench does pickup

    private InteractionResult pickupRedstoneLink(UseOnContext pContext) {
        Level level = pContext.getLevel();
        BlockPos pos = pContext.getClickedPos();
        Player player = pContext.getPlayer();
        BlockState state = level.getBlockState(pos);

        if (!(level instanceof net.minecraft.server.level.ServerLevel serverLevel))
            return InteractionResult.SUCCESS;

        if (player != null && !player.isCreative()) {
            Block.getDrops(state, serverLevel, pos,
                            level.getBlockEntity(pos), player, pContext.getItemInHand())
                    .forEach(stack ->
                            player.getInventory().placeItemBackInInventory(stack));
        }

        state.spawnAfterBreak(serverLevel, pos, ItemStack.EMPTY, true);
        level.destroyBlock(pos, false);

        com.simibubi.create.AllSoundEvents.WRENCH_REMOVE
                .playOnServer(level, pos, 1f,
                        com.simibubi.create.Create.RANDOM.nextFloat() * 0.5f + 0.5f);

        return InteractionResult.SUCCESS;
    }
}
