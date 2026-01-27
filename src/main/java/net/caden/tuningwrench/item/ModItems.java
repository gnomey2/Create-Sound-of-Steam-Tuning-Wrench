package net.caden.tuningwrench.item;

import net.caden.tuningwrench.TuningWrench;
import net.caden.tuningwrench.item.custom.TunersWrenchItem;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.world.item.Item;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.neoforge.registries.DeferredHolder;
import net.neoforged.neoforge.registries.DeferredRegister;

public class ModItems {
    public static final DeferredRegister<Item> ITEMS =
            DeferredRegister.create(BuiltInRegistries.ITEM, TuningWrench.MODID);

    public static final DeferredHolder<Item, Item> TUNINGWRENCH = ITEMS.register("tunerswrench",
            () -> new TunersWrenchItem(new Item.Properties()));

    public static void register(IEventBus eventBus) {
        ITEMS.register(eventBus);
    }
}