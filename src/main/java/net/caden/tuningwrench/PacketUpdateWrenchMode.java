package net.caden.tuningwrench;

import net.caden.tuningwrench.item.ModItems;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.network.NetworkEvent;

import java.util.function.Supplier;

public record PacketUpdateWrenchMode(int mode) {

    // Encode to the buffer
    public static void encode(PacketUpdateWrenchMode pkt, FriendlyByteBuf buf) {
        buf.writeInt(pkt.mode);
    }

    // Decode from the buffer
    public static PacketUpdateWrenchMode decode(FriendlyByteBuf buf) {
        return new PacketUpdateWrenchMode(buf.readInt());
    }

    // Handle packet on server
    public static void handle(PacketUpdateWrenchMode pkt, Supplier<NetworkEvent.Context> ctx) {
        ctx.get().enqueueWork(() -> {
            ServerPlayer player = ctx.get().getSender();
            if (player != null) {
                ItemStack held = player.getMainHandItem();
                if (held.is(ModItems.TUNINGWRENCH.get())) {
                    held.getOrCreateTag().putInt("Mode", pkt.mode);
                }
            }
        });
        ctx.get().setPacketHandled(true);
    }
}

