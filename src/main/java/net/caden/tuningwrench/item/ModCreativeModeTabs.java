package net.caden.tuningwrench.item;

import net.caden.tuningwrench.TuningWrench;
import net.minecraft.core.registries.Registries;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.CreativeModeTab;
import net.minecraft.world.item.ItemStack;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.neoforge.registries.DeferredHolder;
import net.neoforged.neoforge.registries.DeferredRegister;

public class ModCreativeModeTabs {
    public static final DeferredRegister<CreativeModeTab> CREATIVE_MODE_TABS =
            DeferredRegister.create(Registries.CREATIVE_MODE_TAB, TuningWrench.MODID);

    public static final DeferredHolder<CreativeModeTab, CreativeModeTab> TUNING_WRENCH_TAB = CREATIVE_MODE_TABS.register("tuningwrenchtab",
            () -> CreativeModeTab.builder().icon(() -> new ItemStack(ModItems.TUNINGWRENCH.get()))
                    .title(Component.translatable("creativetab.tuningwrenchtab"))
                    .displayItems((pParameters, pOutput) -> {
                        //items in tab
                        pOutput.accept(ModItems.TUNINGWRENCH.get());

                    })
                    .build());

    public static void register(IEventBus eventBus) {
        CREATIVE_MODE_TABS.register(eventBus);
    }
}