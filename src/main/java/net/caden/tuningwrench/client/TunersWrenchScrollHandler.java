package net.caden.tuningwrench.client;


import net.caden.tuningwrench.item.custom.TunersWrenchItem;
import net.caden.tuningwrench.networking.PacketUpdateWrenchMode;
import net.caden.tuningwrench.networking.TuningWrenchPacketHandler;
import net.caden.tuningwrench.item.ModItems;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.util.Mth;
import net.minecraft.world.item.ItemStack;
import net.neoforged.neoforge.client.event.InputEvent;
import net.neoforged.bus.api.SubscribeEvent;

import java.util.HashMap;
import java.util.Map;

public class TunersWrenchScrollHandler {

    public static final Map<Integer, String> MODE_NAMES = new HashMap<>();

    static {
        MODE_NAMES.put(0, "Traditional Bottom");
        MODE_NAMES.put(1, "Traditional Face Away");
        MODE_NAMES.put(2, "Traditional Face Towards");
        MODE_NAMES.put(3, "Pitch Match Bottom");
        MODE_NAMES.put(4, "Pitch Match Face Away");
        MODE_NAMES.put(5, "Pitch Match Face Towards");
    }


    private static final int MAX_MODES = 6;
    private static int mode;
    @SubscribeEvent
    public static void onScroll(InputEvent.MouseScrollingEvent event) {
        Minecraft mc = Minecraft.getInstance();
        if (mc.player == null) return;
        if (!Screen.hasAltDown()) return;

        ItemStack stack = mc.player.getMainHandItem();
        if (!stack.is(ModItems.TUNINGWRENCH.get())) return;

        if (stack.get(TunersWrenchItem.MODE) != null) {
            mode = stack.get(TunersWrenchItem.MODE);
        }
        mode += event.getScrollDeltaY() > 0 ? 1 : -1;
        mode = Mth.clamp(mode, 0, MAX_MODES - 1);

        stack.set(TunersWrenchItem.MODE, mode);
        TuningWrenchPacketHandler.sendToServer(new PacketUpdateWrenchMode(mode));


        event.setCanceled(true);
    }
}