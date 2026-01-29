package net.caden.tuningwrench.networking;

import net.caden.tuningwrench.TuningWrench;
import net.neoforged.neoforge.network.PacketDistributor;
import net.neoforged.neoforge.network.event.RegisterPayloadHandlersEvent;

public final class TuningWrenchPacketHandler {

    private TuningWrenchPacketHandler() {}

    public static void register(RegisterPayloadHandlersEvent event) {
        event.registrar(TuningWrench.MODID)
                .playToServer(
                        PacketUpdateWrenchMode.TYPE,
                        PacketUpdateWrenchMode.STREAM_CODEC,
                        PacketUpdateWrenchMode::handle
                );
    }

    // Client → Server
    public static void sendToServer(PacketUpdateWrenchMode pkt) {
        PacketDistributor.sendToServer(pkt);
    }
}
