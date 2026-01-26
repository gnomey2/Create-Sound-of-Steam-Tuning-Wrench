package net.caden.tuningwrench.item.custom;

import net.caden.tuningwrench.PipeUtils;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.core.Registry;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.Component;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.context.UseOnContext;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.properties.Property;

import java.util.List;


public class TunersWrenchItem extends Item {
    public TunersWrenchItem(Properties pProperties) {
        super(pProperties);
    }


    @Override
    public InteractionResult useOn(UseOnContext pContext) {
        if(!pContext.getLevel().isClientSide()) {
            BlockPos positionCLicked = pContext.getClickedPos();
            Player player = pContext.getPlayer();
            assert player != null;
            BlockState state = pContext.getLevel().getBlockState(positionCLicked);
            BlockEntity blockEntity = pContext.getLevel().getBlockEntity(positionCLicked);
            if(blockEntity == null) {
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

            //player.sendSystemMessage(Component.literal(reqBlock));

            //get position of redstone link
            PipeUtils.OffsetResult result =
                    PipeUtils.getOffsetCoords(mode, player, positionCLicked);

            BlockPos linkPos = result.pos();
            Direction facing = result.facing();

            PipeUtils.placeRedstoneLink(player.level(), linkPos, blockId, reqBlock, facing);




        }

        return InteractionResult.SUCCESS;
    }

}
