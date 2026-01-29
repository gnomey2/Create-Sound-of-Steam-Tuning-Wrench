package net.caden.tuningwrench.networking;

import net.caden.tuningwrench.item.ModItems;
import net.caden.tuningwrench.item.custom.TunersWrenchItem;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.network.codec.StreamCodec;
import net.minecraft.network.protocol.common.custom.CustomPacketPayload;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.world.item.ItemStack;
import net.neoforged.neoforge.network.handling.IPayloadContext;
import org.jetbrains.annotations.NotNull;

public record PacketUpdateWrenchMode(int mode) implements CustomPacketPayload {

    public static final ResourceLocation ID =
            ResourceLocation.fromNamespaceAndPath("tuningwrench", "update_wrench_mode");


    public static final Type<PacketUpdateWrenchMode> TYPE =
            new Type<>(ID);

    public static final StreamCodec<FriendlyByteBuf, PacketUpdateWrenchMode> STREAM_CODEC =
            StreamCodec.of(PacketUpdateWrenchMode::encode, PacketUpdateWrenchMode::decode);

    // Encode
    private static void encode(FriendlyByteBuf buf, PacketUpdateWrenchMode pkt) {
        buf.writeInt(pkt.mode);
    }

    // Decode
    private static PacketUpdateWrenchMode decode(FriendlyByteBuf buf) {
        return new PacketUpdateWrenchMode(buf.readInt());
    }

    @Override
    public @NotNull Type<? extends CustomPacketPayload> type() {
        return TYPE;
    }

    // Handle on server
    public static void handle(PacketUpdateWrenchMode pkt, IPayloadContext ctx) {
        ctx.enqueueWork(() -> {
            if (!(ctx.player() instanceof ServerPlayer player)) return;

            ItemStack held = player.getMainHandItem();
            if (held.is(ModItems.TUNINGWRENCH.get())) {
                held.set(TunersWrenchItem.MODE, pkt.mode());
            }
        });
    }
}
