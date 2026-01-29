package net.caden.tuningwrench;

import com.mojang.logging.LogUtils;
import net.caden.tuningwrench.client.TunersWrenchOverlay;
import net.caden.tuningwrench.client.TunersWrenchScrollHandler;
import net.caden.tuningwrench.item.ModCreativeModeTabs;
import net.caden.tuningwrench.item.ModItems;
import net.caden.tuningwrench.networking.TuningWrenchPacketHandler;
import net.minecraft.world.item.CreativeModeTabs;
import net.minecraft.world.level.ItemLike;
import net.neoforged.api.distmarker.Dist;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.ModContainer;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.fml.common.Mod;
import net.neoforged.fml.event.lifecycle.FMLClientSetupEvent;
import net.neoforged.fml.event.lifecycle.FMLCommonSetupEvent;
import net.neoforged.neoforge.client.event.InputEvent;
import net.neoforged.neoforge.client.event.RenderGuiLayerEvent;
import net.neoforged.neoforge.common.NeoForge;
import net.neoforged.neoforge.event.BuildCreativeModeTabContentsEvent;
import net.neoforged.neoforge.event.server.ServerStartingEvent;
import net.neoforged.neoforge.network.event.RegisterPayloadHandlersEvent;
import org.slf4j.Logger;

import static net.caden.tuningwrench.item.custom.TunersWrenchItem.COMPONENTS;

// The value here should match an entry in the META-INF/neoforge.mods.toml file
@Mod(TuningWrench.MODID)
public class TuningWrench {
    public static final String MODID = "tuningwrench";
    public static final Logger LOGGER = LogUtils.getLogger();

    public TuningWrench(IEventBus modEventBus, ModContainer modContainer) {
        ModCreativeModeTabs.register(modEventBus);

        ModItems.register(modEventBus);
        // Register the commonSetup method for modloading
        modEventBus.addListener(this::commonSetup);
        COMPONENTS.register(modEventBus);

        // Register Custom Events
        modEventBus.addListener(RegisterPayloadHandlersEvent.class, TuningWrenchPacketHandler::register);
        NeoForge.EVENT_BUS.addListener(InputEvent.MouseScrollingEvent.class, TunersWrenchScrollHandler::onScroll);
        NeoForge.EVENT_BUS.addListener(RenderGuiLayerEvent.Post.class, TunersWrenchOverlay::onRenderGui);

        // Register ourselves for server and other game events we are interested in
        NeoForge.EVENT_BUS.register(this);

        // Register the item to a creative tab
        modEventBus.addListener(this::addCreative);    }


    private void commonSetup(final FMLCommonSetupEvent event) {

    }

    private void addCreative(BuildCreativeModeTabContentsEvent event) {
        if(event.getTabKey() == CreativeModeTabs.INGREDIENTS) {
            event.accept(ModItems.TUNINGWRENCH.get());
        }
    }

    @SubscribeEvent
    public void onServerStarting(ServerStartingEvent event) {
    }

    // You can use EventBusSubscriber to automatically register all static methods in the class annotated with @SubscribeEvent
    @EventBusSubscriber(modid = MODID, bus = EventBusSubscriber.Bus.MOD, value = Dist.CLIENT)
    public static class ClientModEvents {
        @SubscribeEvent
        public static void onClientSetup(FMLClientSetupEvent event) {

        }
    }
}
