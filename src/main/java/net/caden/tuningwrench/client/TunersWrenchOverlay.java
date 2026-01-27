package net.caden.tuningwrench.client;

import net.caden.tuningwrench.item.ModItems;
import net.caden.tuningwrench.item.custom.TunersWrenchItem;
import net.minecraft.client.Minecraft;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.ItemStack;
import net.neoforged.neoforge.client.event.RenderGuiLayerEvent;
import net.neoforged.bus.api.SubscribeEvent;

import static net.caden.tuningwrench.client.TunersWrenchScrollHandler.MODE_NAMES;

public class TunersWrenchOverlay {
    private static int mode;
    @SubscribeEvent
    public static void onRenderGui(RenderGuiLayerEvent.Post event) {
        Minecraft mc = Minecraft.getInstance();
        if (mc.player == null || mc.options.hideGui) return;

        ItemStack stack = mc.player.getMainHandItem();
        if (!stack.is(ModItems.TUNINGWRENCH.get())) return;

        if (stack.get(TunersWrenchItem.MODE) != null) {
            mode = stack.get(TunersWrenchItem.MODE);
        }
        String modeName = MODE_NAMES.getOrDefault(mode, "Unknown");

        int width = mc.getWindow().getGuiScaledWidth();
        int height = mc.getWindow().getGuiScaledHeight();

        int x = width / 2 - 50;
        int y = height - 60;

        event.getGuiGraphics().drawString(mc.font, Component.literal("Mode: " + modeName), x, y, 0xFFFFFF);

    }
}