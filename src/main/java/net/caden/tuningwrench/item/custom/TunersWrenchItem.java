package net.caden.tuningwrench.item.custom;

import com.finchy.pipeorgans.init.AllTags;
import com.mojang.serialization.Codec;
import com.simibubi.create.AllBlockEntityTypes;
import com.simibubi.create.AllBlocks;
import com.simibubi.create.AllSoundEvents;
import com.simibubi.create.Create;
import com.simibubi.create.content.redstone.link.RedstoneLinkBlock;
import com.simibubi.create.foundation.item.render.SimpleCustomRenderer;
import net.caden.tuningwrench.PipeUtils;
import net.caden.tuningwrench.TuningWrench;
import net.caden.tuningwrench.item.render.TunersWrenchItemRenderer;
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
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.level.ServerLevel;
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
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.properties.Property;
import net.neoforged.api.distmarker.Dist;
import net.neoforged.api.distmarker.OnlyIn;
import net.neoforged.fml.ModList;
import net.neoforged.neoforge.client.extensions.common.IClientItemExtensions;
import net.neoforged.neoforge.registries.DeferredRegister;
import org.jetbrains.annotations.NotNull;

import java.util.List;
import java.util.function.Consumer;
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

    @Override
    @OnlyIn(Dist.CLIENT)
    public void initializeClient(Consumer<IClientItemExtensions> consumer) {
        consumer.accept(SimpleCustomRenderer.create(this, new TunersWrenchItemRenderer()));
    }

    //custom tooltip
    @Override
    public void appendHoverText(@NotNull ItemStack stack, @NotNull TooltipContext context, List<Component> tooltip, @NotNull TooltipFlag flag) {

        tooltip.add(Component.translatable("tooltip.tuningwrench.tunerswrench1").withStyle(GRAY));

        tooltip.add(
                Component.translatable("tooltip.tuningwrench.tunerswrench2").withStyle(DARK_GRAY)
                        .append(
                                Component.literal("[SHIFT]")
                                        .withStyle(Screen.hasShiftDown() ? WHITE : GRAY)
                        )
                        .append(
                                Component.translatable("tooltip.tuningwrench.tunerswrench3")
                                        .withStyle(DARK_GRAY)
                        )
        );
        //shift extra info
        if (Screen.hasShiftDown()) {
            tooltip.add(Component.translatable("expanded.tooltip.tuningwrench.tunerswrench1").withStyle(GRAY));
            tooltip.add(Component.translatable("expanded.tooltip.tuningwrench.tunerswrench2").withStyle(style -> style.withColor(TextColor.fromRgb(0xC7954B))));
            tooltip.add(Component.translatable("expanded.tooltip.tuningwrench.tunerswrench3").withStyle(GRAY));
            tooltip.add(Component.translatable("expanded.tooltip.tuningwrench.tunerswrench4").withStyle(style -> style.withColor(TextColor.fromRgb(0xC7954B))));

        }
    }

    @Override
    public @NotNull InteractionResult useOn(UseOnContext pContext) {

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
            boolean isLink = false;
            ItemStack stackWithLink = null;

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
            net.deano.expanded_steam_whistles.init.AllTags.AllBlockTags EXPANDED_STEAM_WHISTLE = null;
            if (ModList.get().isLoaded("expanded_steam_whistles")) {
                EXPANDED_STEAM_WHISTLE = net.deano.expanded_steam_whistles.init.AllTags.AllBlockTags.FEELING_VALID;
                TuningWrench.LOGGER.debug("Is loaded!");
            }
            final TagKey<Block> VALID_EXTENSIONS = TagKey.create(
                    Registries.BLOCK,
                    ResourceLocation.fromNamespaceAndPath("tuningwrench", "valid_whistle_extensions")
            );
            if (blockEntity == null || !(blockEntity.getBlockState().is(AllTags.AllBlockTags.VALID_WHISTLE.tag) || blockEntity.getBlockState().is(VALID_EXTENSIONS))
                    || blockEntity.getType() == AllBlockEntityTypes.STEAM_WHISTLE.get()
                    || state.is(EXPANDED_STEAM_WHISTLE != null ? EXPANDED_STEAM_WHISTLE.tag : null)) {
                return InteractionResult.FAIL;
            } else {
                TuningWrench.LOGGER.debug("IS VALID");
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
            Property<?> wallProp = state.getBlock()
                    .getStateDefinition()
                    .getProperty("wall");
            assert sizeProp != null;
            assert wallProp != null;
            Comparable<?> sizePropValue = state.getValue(sizeProp);
            Comparable<?> wallPropValue = state.getValue(wallProp);
            String pipeSize = sizePropValue.toString().toLowerCase();
            boolean isOnWall = Boolean.parseBoolean(wallPropValue.toString());

            //get mode
            ItemStack held = player.getMainHandItem();
            int mode = held.get(MODE);

            //pitch (int) pipeSize (str) mode (int)
            String reqBlock = PipeUtils.getReqLinkBlock(blockId, pipeSize, pitch, mode);


            //get position of redstone link
            PipeUtils.OffsetResult result =
                    PipeUtils.getOffsetCoords(mode, player, positionCLicked, isOnWall);
            if (result == null) return InteractionResult.FAIL;
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
    //Helper class to recreate how Create's wrench does pickup

    private InteractionResult pickupRedstoneLink(UseOnContext pContext) {
        Level level = pContext.getLevel();
        BlockPos pos = pContext.getClickedPos();
        Player player = pContext.getPlayer();
        BlockState state = level.getBlockState(pos);

        if (!(level instanceof ServerLevel serverLevel))
            return InteractionResult.SUCCESS;

        if (player != null && !player.isCreative()) {
            Block.getDrops(state, serverLevel, pos,
                            level.getBlockEntity(pos), player, pContext.getItemInHand())
                    .forEach(stack ->
                            player.getInventory().placeItemBackInInventory(stack));
        }

        state.spawnAfterBreak(serverLevel, pos, ItemStack.EMPTY, true);
        level.destroyBlock(pos, false);

        AllSoundEvents.WRENCH_REMOVE
                .playOnServer(level, pos, 1f,
                        Create.RANDOM.nextFloat() * 0.5f + 0.5f);

        return InteractionResult.SUCCESS;
    }
}
