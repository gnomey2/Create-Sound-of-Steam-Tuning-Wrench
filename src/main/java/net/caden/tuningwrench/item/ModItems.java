package net.caden.tuningwrench.item;

import net.caden.tuningwrench.TuningWrench;
import net.caden.tuningwrench.item.custom.TunersWrenchItem;
import net.minecraft.world.item.Item;
import net.minecraftforge.eventbus.api.IEventBus;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;
import net.minecraftforge.registries.RegistryObject;

public class ModItems {
    public static final DeferredRegister<Item> ITEMS =
            DeferredRegister.create(ForgeRegistries.ITEMS, TuningWrench.MODID);

    public static final RegistryObject<Item> TUNINGWRENCH = ITEMS.register("tunerswrench",
            () -> new TunersWrenchItem(new Item.Properties()));

    public static void register(IEventBus eventBus) {
        ITEMS.register(eventBus);
    }
}
