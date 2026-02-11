package net.caden.tuningwrench.client;


import net.caden.tuningwrench.TuningWrench;
import net.caden.tuningwrench.item.custom.TunersWrenchItem;
import net.caden.tuningwrench.networking.PacketUpdateWrenchMode;
import net.caden.tuningwrench.networking.TuningWrenchPacketHandler;
import net.caden.tuningwrench.item.ModItems;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.network.chat.Component;
import net.minecraft.util.Mth;
import net.minecraft.world.item.ItemStack;
import net.neoforged.neoforge.client.event.InputEvent;
import net.neoforged.bus.api.SubscribeEvent;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static net.caden.tuningwrench.Config.CONFIG;

public class TunersWrenchScrollHandler {

    public static final Map<Integer, Component> MODE_NAMES = new HashMap<>();
    private static final List<? extends String> additionalModeNames = CONFIG.names.get();

    static {
        MODE_NAMES.put(0, Component.translatable("modes.tuningwrench.0"));
        MODE_NAMES.put(1, Component.translatable("modes.tuningwrench.1"));
        MODE_NAMES.put(2, Component.translatable("modes.tuningwrench.2"));
        MODE_NAMES.put(3, Component.translatable("modes.tuningwrench.3"));
        MODE_NAMES.put(4, Component.translatable("modes.tuningwrench.4"));
        MODE_NAMES.put(5, Component.translatable("modes.tuningwrench.5"));
        MODE_NAMES.put(6, Component.translatable("modes.tuningwrench.6"));
        for (int i = 0; i < additionalModeNames.size(); i++) {
            MODE_NAMES.put(i + 7, Component.literal(additionalModeNames.get(i)));
        }
    }


    private static final int MAX_MODES = 7 + additionalModeNames.size();
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