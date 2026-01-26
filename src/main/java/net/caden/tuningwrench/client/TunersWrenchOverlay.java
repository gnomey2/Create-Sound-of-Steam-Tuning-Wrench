package net.caden.tuningwrench.client;

import net.caden.tuningwrench.TuningWrench;
import net.caden.tuningwrench.item.ModItems;
import net.minecraft.client.Minecraft;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.client.event.RenderGuiOverlayEvent;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.common.Mod;

import static net.caden.tuningwrench.client.TunersWrenchScrollHandler.MODE_NAMES;

@Mod.EventBusSubscriber(
        modid = TuningWrench.MODID,
        value = Dist.CLIENT,
        bus = Mod.EventBusSubscriber.Bus.FORGE
)
public class TunersWrenchOverlay {

    @SubscribeEvent
    public static void onRenderGui(RenderGuiOverlayEvent.Post event) {
        Minecraft mc = Minecraft.getInstance();
        if (mc.player == null || mc.options.hideGui) return;

        ItemStack stack = mc.player.getMainHandItem();
        if (!stack.is(ModItems.TUNINGWRENCH.get())) return;

        int mode = stack.getOrCreateTag().getInt("Mode");
        String modeName = MODE_NAMES.getOrDefault(mode, "Unknown");

        int width = mc.getWindow().getGuiScaledWidth();
        int height = mc.getWindow().getGuiScaledHeight();

        int x = width / 2 - 50;
        int y = height - 60;

        event.getGuiGraphics().drawString(mc.font, Component.literal("Mode: " + modeName), x, y, 0xFFFFFF);

    }
}
