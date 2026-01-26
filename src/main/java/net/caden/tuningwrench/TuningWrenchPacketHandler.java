package net.caden.tuningwrench;

import net.minecraft.resources.ResourceLocation;
import net.minecraftforge.network.NetworkRegistry;
import net.minecraftforge.network.simple.SimpleChannel;

public class TuningWrenchPacketHandler {

    private static final String PROTOCOL_VERSION = "1";
    public static final SimpleChannel CHANNEL = NetworkRegistry.newSimpleChannel(
            new ResourceLocation(TuningWrench.MODID, "main"),
            () -> PROTOCOL_VERSION,
            PROTOCOL_VERSION::equals,
            PROTOCOL_VERSION::equals
    );

    private static int id = 0;

    public static void register() {
        CHANNEL.registerMessage(
                id++,
                PacketUpdateWrenchMode.class,
                PacketUpdateWrenchMode::encode,
                PacketUpdateWrenchMode::decode,
                PacketUpdateWrenchMode::handle
        );
    }

    public static void sendToServer(PacketUpdateWrenchMode pkt) {
        CHANNEL.sendToServer(pkt);
    }
}
