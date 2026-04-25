package net.caden.tuningwrench.client;


import net.caden.tuningwrench.PacketUpdateWrenchMode;
import net.caden.tuningwrench.TuningWrenchPacketHandler;
import net.caden.tuningwrench.item.ModItems;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.Component;
import net.minecraft.util.Mth;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.client.event.InputEvent;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.common.Mod;

import java.util.HashMap;
import java.util.Map;

@Mod.EventBusSubscriber(value = Dist.CLIENT, bus = Mod.EventBusSubscriber.Bus.FORGE)
public class TunersWrenchScrollHandler {

    public static final Map<Integer, String> MODE_NAMES = new HashMap<>();

    static {
        MODE_NAMES.put(0, Component.translatable("modes.tuningwrench.0").getString());
        MODE_NAMES.put(1, Component.translatable("modes.tuningwrench.1").getString());
        MODE_NAMES.put(2, Component.translatable("modes.tuningwrench.2").getString());
        MODE_NAMES.put(3, Component.translatable("modes.tuningwrench.3").getString());
        MODE_NAMES.put(4, Component.translatable("modes.tuningwrench.4").getString());
        MODE_NAMES.put(5, Component.translatable("modes.tuningwrench.5").getString());
    }


    private static final int MAX_MODES = 6;

    @SubscribeEvent
    public static void onScroll(InputEvent.MouseScrollingEvent event) {
        Minecraft mc = Minecraft.getInstance();
        if (mc.player == null) return;
        if (!Screen.hasAltDown()) return;

        ItemStack stack = mc.player.getMainHandItem();
        if (!stack.is(ModItems.TUNINGWRENCH.get())) return;

        CompoundTag tag = stack.getOrCreateTag();
        int mode = tag.getInt("Mode");

        mode += event.getScrollDelta() > 0 ? 1 : -1;
        mode = Mth.clamp(mode, 0, MAX_MODES - 1);

        tag.putInt("Mode", mode);
        TuningWrenchPacketHandler.sendToServer(new PacketUpdateWrenchMode(mode));


        event.setCanceled(true);
    }
}
