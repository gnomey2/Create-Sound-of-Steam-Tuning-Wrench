package net.caden.tuningwrench;

import com.simibubi.create.AllBlocks;
import com.simibubi.create.content.redstone.link.RedstoneLinkBlock;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.nbt.CompoundTag;
import java.util.List;

public class PipeUtils {


    public static String getReqLinkBlock(String pipe, String size, int pitch, int mode) {
        int fullLengthOffset = 0;

        if (pitch == 12) {
            fullLengthOffset = -1;
            pitch = 0;
        }

        int octave = (mode > 2) ? PipeConstants.PIPE_OCTAVES.getOrDefault(pipe, 6)
                + PipeConstants.SIZE_OFFSET.getOrDefault(size, 0)
                + fullLengthOffset : 6 + PipeConstants.SIZE_OFFSET.getOrDefault(size, 0)
                + fullLengthOffset;





        int noteIndex = (12 - pitch) % 12;
        int noteOctave = pitch > 6 ? octave - 1 : octave; // octave changes at C
        String note = PipeConstants.NOTES.get(noteIndex);

        // Determine the low end of the range
        boolean isLowRange = switch (note) {
            case "C", "C#", "D", "D#", "E", "F" -> true;
            default -> false;
        };
        int rangeLow = isLowRange ? noteOctave - 1 : noteOctave;

        int paletteIndex = rangeLow + 1; // F#-1 → 0, F#0 → 1, etc.
        if (paletteIndex < 0 || paletteIndex >= PipeConstants.PALETTES_BY_RANGE.size()) {
            paletteIndex = 0; // fallback
        }

        String paletteName = PipeConstants.PALETTES_BY_RANGE.get(paletteIndex);
        List<String> colors = PipeConstants.PALETTES.get(paletteName);
        String color = colors.get(noteIndex % colors.size());

        return "minecraft:" + color + "_" + paletteName;
    }

    public static void placeRedstoneLink(Level level, BlockPos pos, String pipeId, String requiredBlockId, Direction facing) {
        // 1. Set block state with facing
        BlockState state = AllBlocks.REDSTONE_LINK.get() // replace with your block
                .defaultBlockState()
                .setValue(RedstoneLinkBlock.FACING, facing)
                .setValue(RedstoneLinkBlock.RECEIVER, true);
        level.setBlock(pos, state, 3); // flag 3 = update + notify neighbors

        // 2. Get block entity
        BlockEntity be = level.getBlockEntity(pos);
        if (be == null) return;

        // 3. Write NBT data
        CompoundTag tag = be.saveWithoutMetadata();
        CompoundTag first = new CompoundTag();
        first.putByte("Count", (byte) 1);
        first.putString("id", pipeId);

        CompoundTag last = new CompoundTag();
        last.putByte("Count", (byte) 1);
        last.putString("id", requiredBlockId);

        tag.put("FrequencyFirst", first);
        tag.put("FrequencyLast", last);

        be.load(tag); // apply NBT to the block entity
        be.setChanged(); // mark dirty so it syncs to clients
    }
    public record OffsetResult(BlockPos pos, Direction facing) {}


    public static OffsetResult getOffsetCoords(int mode, Player player, BlockPos initialPos) {
        int x = initialPos.getX();
        int y = initialPos.getY();
        int z = initialPos.getZ();

        Direction facing = Direction.DOWN;

        switch (mode) {
            case 0, 3 -> {
                y -= 2;
                facing = Direction.DOWN;
            }

            case 1, 2, 4, 5 -> {
                y -= 1;

                // Convert player yaw to cardinal direction
                float yaw = player.getYRot();
                Direction dir;

                if (yaw >= -45 && yaw < 45) dir = Direction.SOUTH;
                else if (yaw >= 45 && yaw < 135) dir = Direction.WEST;
                else if (yaw >= -135 && yaw < -45) dir = Direction.EAST;
                else dir = Direction.NORTH;

                if (mode == 1 || mode == 4) {
                    facing = dir;
                    switch (dir) {
                        case NORTH -> z -= 1;
                        case SOUTH -> z += 1;
                        case WEST  -> x -= 1;
                        case EAST  -> x += 1;
                    }
                } else { // mode 2
                    facing = dir.getOpposite();
                    switch (dir) {
                        case NORTH -> z += 1;
                        case SOUTH -> z -= 1;
                        case WEST  -> x += 1;
                        case EAST  -> x -= 1;
                    }
                }
            }

            default -> throw new IllegalArgumentException("Invalid mode: " + mode);
        }

        return new OffsetResult(new BlockPos(x, y, z), facing);
    }

    private static String opposite(String dir) {
        return switch (dir) {
            case "north" -> "south";
            case "south" -> "north";
            case "east" -> "west";
            case "west" -> "east";
            default -> dir;
        };
    }
}

