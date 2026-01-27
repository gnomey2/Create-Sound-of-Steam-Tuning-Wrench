package net.caden.tuningwrench.item.custom;

import com.finchy.pipeorgans.init.AllTags;
import com.mojang.serialization.Codec;
import com.simibubi.create.AllBlockEntityTypes;
import com.simibubi.create.AllBlocks;
import net.caden.tuningwrench.PipeUtils;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.core.HolderLookup;
import net.minecraft.core.NonNullList;
import net.minecraft.core.component.DataComponentType;
import net.minecraft.core.registries.Registries;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.TextColor;
import net.minecraft.network.codec.ByteBufCodecs;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.inventory.AbstractContainerMenu;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.item.context.UseOnContext;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.properties.Property;
import net.neoforged.neoforge.registries.DeferredRegister;
import org.jetbrains.annotations.NotNull;

import java.util.List;
import java.util.function.Supplier;

import static net.caden.tuningwrench.TuningWrench.MODID;
import static net.minecraft.ChatFormatting.*;


public class TunersWrenchItem extends Item {
    public static final DeferredRegister.DataComponents COMPONENTS =
            DeferredRegister.createDataComponents(Registries.DATA_COMPONENT_TYPE, MODID);

    public static final Supplier<DataComponentType<Integer>> MODE =
            COMPONENTS.register("mode",
                    () -> DataComponentType.<Integer>builder()
                            .persistent(Codec.INT)
                            .networkSynchronized(ByteBufCodecs.INT)
                            .build());

    public TunersWrenchItem(Properties pProperties) {
        super(pProperties);
    }

    //custom tooltip
    @Override
    public void appendHoverText(@NotNull ItemStack stack, @NotNull TooltipContext context, List<Component> tooltip, @NotNull TooltipFlag flag) {

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
    public @NotNull InteractionResult useOn(UseOnContext pContext) {
        if(!pContext.getLevel().isClientSide()) {
            Player player = pContext.getPlayer();
            boolean isLink = false;
            ItemStack stackWithLink = null;

            assert player != null;
            if (!player.isCreative()) {
                AbstractContainerMenu playerInv = player.inventoryMenu;
                NonNullList<ItemStack> items = playerInv.getItems();

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


            BlockPos positionCLicked = pContext.getClickedPos();
            BlockState state = pContext.getLevel().getBlockState(positionCLicked);
            BlockEntity blockEntity = pContext.getLevel().getBlockEntity(positionCLicked);
            if (blockEntity == null || !(blockEntity.getBlockState().is(AllTags.AllBlockTags.VALID_WHISTLE.tag) || blockEntity.equals(AllBlockEntityTypes.STEAM_WHISTLE))) {
                return InteractionResult.FAIL;
            }
            //get name
            Block block = state.getBlock();
            String blockIdUntrimmed = block.toString();
            String blockId = blockIdUntrimmed.substring(blockIdUntrimmed.indexOf('{') + 1, blockIdUntrimmed.indexOf('}'));


            //get pitch
            assert blockEntity.getLevel() != null;
            HolderLookup.Provider registries =
                        blockEntity.getLevel().registryAccess();

                CompoundTag tag = blockEntity.saveWithoutMetadata(registries);

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
            int mode = held.get(MODE);


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
                if(isLink) {
                    stackWithLink.shrink(1);
                }
            }

        }
        return InteractionResult.SUCCESS;
    }
}