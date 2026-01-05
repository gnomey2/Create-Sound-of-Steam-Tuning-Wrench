/// <reference path="./globals.d.ts" />
/// <reference path="./registries.d.ts" />
declare const ServerEvents: {
    /**
     * @at *server*
    */
recipes(handler: (event: Internal.RecipesEventJS) => void):void,
    /**
     * @at *server*
    */
specialRecipeSerializers(handler: (event: Internal.SpecialRecipeSerializerManager) => void):void,
    /**
     * @at *server*
    */
compostableRecipes(handler: (event: Internal.CompostableRecipesEventJS) => void):void,
    /**
     * @at *server*
    */
entityLootTables(handler: (event: Internal.EntityLootEventJS) => void):void,
    /**
     * @at *server*
    */
tick(handler: (event: Internal.ServerEventJS) => void):void,
    /**
     * @at *server*
     * 
     * @cancellable
    */
command(extra: string, handler: (event: Internal.CommandEventJS) => void):void,
command(handler: (event: Internal.CommandEventJS) => void):void,
    /**
     * @at *server*
    */
blockLootTables(handler: (event: Internal.BlockLootEventJS) => void):void,
tags(type: "entity_type", handler: (event: TagEvent.EntityType) => void): void
tags(type: "minecraft:entity_type", handler: (event: TagEvent.EntityType) => void): void
tags(type: "point_of_interest_type", handler: (event: TagEvent.PointOfInterestType) => void): void
tags(type: "minecraft:point_of_interest_type", handler: (event: TagEvent.PointOfInterestType) => void): void
tags(type: "damage_type", handler: (event: TagEvent.DamageType) => void): void
tags(type: "minecraft:damage_type", handler: (event: TagEvent.DamageType) => void): void
tags(type: "game_event", handler: (event: TagEvent.GameEvent) => void): void
tags(type: "minecraft:game_event", handler: (event: TagEvent.GameEvent) => void): void
tags(type: "create:mounted_item_storage_type", handler: (event: TagEvent.MountedItemStorageType) => void): void
tags(type: "block", handler: (event: TagEvent.Block) => void): void
tags(type: "minecraft:block", handler: (event: TagEvent.Block) => void): void
tags(type: "worldgen/world_preset", handler: (event: TagEvent.WorldPreset) => void): void
tags(type: "minecraft:worldgen/world_preset", handler: (event: TagEvent.WorldPreset) => void): void
tags(type: "worldgen/biome", handler: (event: TagEvent.Biome) => void): void
tags(type: "minecraft:worldgen/biome", handler: (event: TagEvent.Biome) => void): void
tags(type: "recipe_serializer", handler: (event: TagEvent.RecipeSerializer) => void): void
tags(type: "minecraft:recipe_serializer", handler: (event: TagEvent.RecipeSerializer) => void): void
tags(type: "banner_pattern", handler: (event: TagEvent.BannerPattern) => void): void
tags(type: "minecraft:banner_pattern", handler: (event: TagEvent.BannerPattern) => void): void
tags(type: "instrument", handler: (event: TagEvent.Instrument) => void): void
tags(type: "minecraft:instrument", handler: (event: TagEvent.Instrument) => void): void
tags(type: "item", handler: (event: TagEvent.Item) => void): void
tags(type: "minecraft:item", handler: (event: TagEvent.Item) => void): void
tags(type: "create:contraption_type", handler: (event: TagEvent.ContraptionType) => void): void
tags(type: "cat_variant", handler: (event: TagEvent.CatVariant) => void): void
tags(type: "minecraft:cat_variant", handler: (event: TagEvent.CatVariant) => void): void
tags(type: "worldgen/structure", handler: (event: TagEvent.Structure) => void): void
tags(type: "minecraft:worldgen/structure", handler: (event: TagEvent.Structure) => void): void
tags(type: "painting_variant", handler: (event: TagEvent.PaintingVariant) => void): void
tags(type: "minecraft:painting_variant", handler: (event: TagEvent.PaintingVariant) => void): void
tags(type: "fluid", handler: (event: TagEvent.Fluid) => void): void
tags(type: "minecraft:fluid", handler: (event: TagEvent.Fluid) => void): void
tags(type: "worldgen/flat_level_generator_preset", handler: (event: TagEvent.FlatLevelGeneratorPreset) => void): void
tags(type: "minecraft:worldgen/flat_level_generator_preset", handler: (event: TagEvent.FlatLevelGeneratorPreset) => void): void
    /**
     * @at *server*
    */
loaded(handler: (event: Internal.ServerEventJS) => void):void,
    /**
     * @at *server*
     * 
     * @cancellable
    */
customCommand(extra: string, handler: (event: Internal.CustomCommandEventJS) => void):void,
customCommand(handler: (event: Internal.CustomCommandEventJS) => void):void,
    /**
     * @at *server*
    */
giftLootTables(handler: (event: Internal.GiftLootEventJS) => void):void,
    /**
     * @at *server*
    */
commandRegistry(handler: (event: Internal.CommandRegistryEventJS) => void):void,
    /**
     * @at *server*
    */
afterRecipes(handler: (event: Internal.AfterRecipesLoadedEventJS) => void):void,
    /**
     * @at *server*
    */
chestLootTables(handler: (event: Internal.ChestLootEventJS) => void):void,
    /**
     * @at *server*
    */
unloaded(handler: (event: Internal.ServerEventJS) => void):void,
    /**
     * @at *server*
    */
lowPriorityData(handler: (event: Internal.DataPackEventJS) => void):void,
    /**
     * @at *server*
    */
fishingLootTables(handler: (event: Internal.FishingLootEventJS) => void):void,
    /**
     * @at *server*
    */
genericLootTables(handler: (event: Internal.GenericLootEventJS) => void):void,
    /**
     * @at *server*
    */
highPriorityData(handler: (event: Internal.DataPackEventJS) => void):void,
};
declare const ItemEvents: {
    /**
     * Invoked when a player right clicks with an item **without targeting anything**.
     * 
     * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
rightClicked(extra: Internal.Item_, handler: (event: Internal.ItemClickedEventJS) => void):void,
rightClicked(handler: (event: Internal.ItemClickedEventJS) => void):void,
    /**
     * Invoked when a player crafts an item.
     * 
     * @at *server, client*
    */
crafted(extra: Internal.Item_, handler: (event: Internal.ItemCraftedEventJS) => void):void,
crafted(handler: (event: Internal.ItemCraftedEventJS) => void):void,
    /**
     * Invoked when a player drops an item.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
dropped(extra: Internal.Item_, handler: (event: Internal.ItemDroppedEventJS) => void):void,
dropped(handler: (event: Internal.ItemDroppedEventJS) => void):void,
    /**
     * Invoked when registering handlers for item tooltips.
     * 
     * `text` can be a component or a list of components.
     * 
     * @at *client*
    */
tooltip(handler: (event: Internal.ItemTooltipEventJS) => void):void,
    /**
     * @at *startup*
    */
modelProperties(handler: (event: Internal.ItemModelPropertiesEventJS) => void):void,
    /**
     * Invoked when a player right clicks with an item **without targeting anything**.
     * 
     * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
     * 
     * @at *server, client*
    */
firstRightClicked(extra: Internal.Item_, handler: (event: Internal.ItemClickedEventJS) => void):void,
firstRightClicked(handler: (event: Internal.ItemClickedEventJS) => void):void,
    /**
     * Invoked after all items are registered to modify them.
     * 
     * @at *startup*
    */
modification(handler: (event: Internal.ItemModificationEventJS) => void):void,
    /**
     * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
     * 
     * @at *server, client*
    */
pickedUp(extra: Internal.Item_, handler: (event: Internal.ItemPickedUpEventJS) => void):void,
pickedUp(handler: (event: Internal.ItemPickedUpEventJS) => void):void,
    /**
     * @at *server, client*
    */
destroyed(extra: Internal.Item_, handler: (event: Internal.ItemDestroyedEventJS) => void):void,
destroyed(handler: (event: Internal.ItemDestroyedEventJS) => void):void,
    /**
     * Invoked when a player right clicks on an entity.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
entityInteracted(extra: Internal.Item_, handler: (event: Internal.ItemEntityInteractedEventJS) => void):void,
entityInteracted(handler: (event: Internal.ItemEntityInteractedEventJS) => void):void,
    /**
     * Invoked when the game is starting up and the item tool tiers are being registered.
     * 
     * @at *startup*
    */
toolTierRegistry(handler: (event: Internal.ItemToolTierRegistryEventJS) => void):void,
    /**
     * Invoked when an entity eats food.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
foodEaten(extra: Internal.Item_, handler: (event: Internal.FoodEatenEventJS) => void):void,
foodEaten(handler: (event: Internal.FoodEatenEventJS) => void):void,
    /**
     * Invoked when a player right clicks with an item **without targeting anything**.
     * 
     * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
     * 
     * @at *server, client*
    */
firstLeftClicked(extra: Internal.Item_, handler: (event: Internal.ItemClickedEventJS) => void):void,
firstLeftClicked(handler: (event: Internal.ItemClickedEventJS) => void):void,
    /**
     * Invoked when the game is starting up and the armor tier registry is being built.
     * 
     * @at *startup*
    */
armorTierRegistry(handler: (event: Internal.ItemArmorTierRegistryEventJS) => void):void,
    /**
     * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
canPickUp(extra: Internal.Item_, handler: (event: Internal.ItemPickedUpEventJS) => void):void,
canPickUp(handler: (event: Internal.ItemPickedUpEventJS) => void):void,
    /**
     * Invoked when an item is smelted by a player.
     * 
     * @at *server, client*
    */
smelted(extra: Internal.Item_, handler: (event: Internal.ItemSmeltedEventJS) => void):void,
smelted(handler: (event: Internal.ItemSmeltedEventJS) => void):void,
};
declare const LevelEvents: {
    /**
     * @at *server*
    */
loaded(extra: string, handler: (event: Internal.SimpleLevelEventJS) => void):void,
loaded(handler: (event: Internal.SimpleLevelEventJS) => void):void,
    /**
     * @at *server*
    */
unloaded(extra: string, handler: (event: Internal.SimpleLevelEventJS) => void):void,
unloaded(handler: (event: Internal.SimpleLevelEventJS) => void):void,
    /**
     * Invoked right before an explosion happens.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
beforeExplosion(handler: (event: Internal.ExplosionEventJS$Before) => void):void,
    /**
     * @at *server, client*
    */
tick(extra: string, handler: (event: Internal.SimpleLevelEventJS) => void):void,
tick(handler: (event: Internal.SimpleLevelEventJS) => void):void,
    /**
     * Invoked right after an explosion happens.
     * 
     * @at *server, client*
    */
afterExplosion(handler: (event: Internal.ExplosionEventJS$After) => void):void,
};
declare const WorldgenEvents: {
    /**
     * @at *startup*
    */
add(handler: (event: Internal.AddWorldgenEventJS) => void):void,
    /**
     * @at *startup*
    */
remove(handler: (event: Internal.RemoveWorldgenEventJS) => void):void,
};
declare const NetworkEvents: {
    /**
     * Invoked when a network packet is received.
     * 
     * Note that the behaviour of this event is depending on the **script type**.
     * 
     * In `server_scripts`, this event is invoked on the server side when a packet is received from a client.
     * 
     * In `client_scripts`, this event is invoked on the client side when a packet is received from the server.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
dataReceived(extra: string, handler: (event: Internal.NetworkEventJS) => void):void,
};
declare const EntityEvents: {
    /**
     * Invoked when an entity is about to be added to the world.
     * 
     * This event also fires for existing entities when they are loaded from a save.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
spawned(extra: Internal.EntityType_<any>, handler: (event: Internal.EntitySpawnedEventJS) => void):void,
spawned(handler: (event: Internal.EntitySpawnedEventJS) => void):void,
    /**
     * @at *server, client*
     * 
     * @cancellable
    */
drops(extra: Internal.EntityType_<any>, handler: (event: Internal.LivingEntityDropsEventJS) => void):void,
drops(handler: (event: Internal.LivingEntityDropsEventJS) => void):void,
    /**
     * Invoked before an entity is spawned into the world.
     * 
     * Only entities from a `BaseSpawner` or world generation will trigger this event.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
checkSpawn(extra: Internal.EntityType_<any>, handler: (event: Internal.CheckLivingEntitySpawnEventJS) => void):void,
checkSpawn(handler: (event: Internal.CheckLivingEntitySpawnEventJS) => void):void,
    /**
     * Invoked before a living entity dies.
     * 
     * **NOTE**: You need to set hp to > 0 besides cancelling the event to prevent the entity from dying.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
death(extra: Internal.EntityType_<any>, handler: (event: Internal.LivingEntityDeathEventJS) => void):void,
death(handler: (event: Internal.LivingEntityDeathEventJS) => void):void,
    /**
     * Invoked before an entity is hurt by a damage source.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
hurt(extra: Internal.EntityType_<any>, handler: (event: Internal.LivingEntityHurtEventJS) => void):void,
hurt(handler: (event: Internal.LivingEntityHurtEventJS) => void):void,
};
declare const ClientEvents: {
    /**
     * @at *startup*
    */
init(handler: (event: Internal.ClientInitEventJS) => void):void,
    /**
     * Invoked when the debug info is rendered.
     * 
     * @at *client*
    */
rightDebugInfo(handler: (event: Internal.DebugInfoEventJS) => void):void,
    /**
     * Invoked when the debug info is rendered.
     * 
     * @at *client*
    */
leftDebugInfo(handler: (event: Internal.DebugInfoEventJS) => void):void,
    /**
     * @at *client*
    */
loggedIn(handler: (event: Internal.ClientEventJS) => void):void,
    /**
     * @at *client*
    */
atlasSpriteRegistry(extra: string, handler: (event: Internal.AtlasSpriteRegistryEventJS) => void):void,
    /**
     * @at *client*
    */
loggedOut(handler: (event: Internal.ClientEventJS) => void):void,
    /**
     * @at *client*
    */
paintScreen(handler: (event: Internal.PaintScreenEventJS) => void):void,
    /**
     * @at *client*
    */
tick(handler: (event: Internal.ClientEventJS) => void):void,
    /**
     * @at *client*
    */
painterUpdated(handler: (event: Internal.ClientEventJS) => void):void,
    /**
     * @at *client*
    */
lang(extra: string, handler: (event: Internal.LangEventJS) => void):void,
    /**
     * @at *client*
    */
highPriorityAssets(handler: (event: Internal.GenerateClientAssetsEventJS) => void):void,
};
declare const CreateEvents: {
    /**
     * @at *startup*
    */
boilerHeatHandler(handler: (event: Internal.BoilerHeaterHandlerEvent) => void):void,
    /**
     * @at *startup*
    */
pipeFluidEffect(handler: (event: Internal.SpecialFluidHandlerEvent) => void):void,
    /**
     * @at *startup*
    */
spoutHandler(handler: (event: Internal.SpecialSpoutHandlerEvent) => void):void,
};
declare const StartupEvents: {
    /**
     * @at *startup*
    */
init(handler: (event: Internal.StartupEventJS) => void):void,
registry(type: "minecraft:sound_event", handler: (event: Registry.SoundEvent) => void):void,
registry(type: "sound_event", handler: (event: Registry.SoundEvent) => void):void,
registry(type: "minecraft:fluid", handler: (event: Registry.Fluid) => void):void,
registry(type: "fluid", handler: (event: Registry.Fluid) => void):void,
registry(type: "minecraft:mob_effect", handler: (event: Registry.MobEffect) => void):void,
registry(type: "mob_effect", handler: (event: Registry.MobEffect) => void):void,
registry(type: "minecraft:block", handler: (event: Registry.Block) => void):void,
registry(type: "block", handler: (event: Registry.Block) => void):void,
registry(type: "minecraft:enchantment", handler: (event: Registry.Enchantment) => void):void,
registry(type: "enchantment", handler: (event: Registry.Enchantment) => void):void,
registry(type: "minecraft:entity_type", handler: (event: Registry.EntityType) => void):void,
registry(type: "entity_type", handler: (event: Registry.EntityType) => void):void,
registry(type: "minecraft:item", handler: (event: Registry.Item) => void):void,
registry(type: "item", handler: (event: Registry.Item) => void):void,
registry(type: "minecraft:potion", handler: (event: Registry.Potion) => void):void,
registry(type: "potion", handler: (event: Registry.Potion) => void):void,
registry(type: "minecraft:particle_type", handler: (event: Registry.ParticleType) => void):void,
registry(type: "particle_type", handler: (event: Registry.ParticleType) => void):void,
registry(type: "minecraft:block_entity_type", handler: (event: Registry.BlockEntityType) => void):void,
registry(type: "block_entity_type", handler: (event: Registry.BlockEntityType) => void):void,
registry(type: "minecraft:painting_variant", handler: (event: Registry.PaintingVariant) => void):void,
registry(type: "painting_variant", handler: (event: Registry.PaintingVariant) => void):void,
registry(type: "minecraft:custom_stat", handler: (event: Registry.CustomStat) => void):void,
registry(type: "custom_stat", handler: (event: Registry.CustomStat) => void):void,
registry(type: "minecraft:chunk_status", handler: (event: Registry.ChunkStatus) => void):void,
registry(type: "chunk_status", handler: (event: Registry.ChunkStatus) => void):void,
registry(type: "minecraft:rule_test", handler: (event: Registry.RuleTest) => void):void,
registry(type: "rule_test", handler: (event: Registry.RuleTest) => void):void,
registry(type: "minecraft:pos_rule_test", handler: (event: Registry.PosRuleTest) => void):void,
registry(type: "pos_rule_test", handler: (event: Registry.PosRuleTest) => void):void,
registry(type: "minecraft:menu", handler: (event: Registry.Menu) => void):void,
registry(type: "menu", handler: (event: Registry.Menu) => void):void,
registry(type: "minecraft:recipe_type", handler: (event: Registry.RecipeType) => void):void,
registry(type: "recipe_type", handler: (event: Registry.RecipeType) => void):void,
registry(type: "minecraft:recipe_serializer", handler: (event: Registry.RecipeSerializer) => void):void,
registry(type: "recipe_serializer", handler: (event: Registry.RecipeSerializer) => void):void,
registry(type: "minecraft:attribute", handler: (event: Registry.Attribute) => void):void,
registry(type: "attribute", handler: (event: Registry.Attribute) => void):void,
registry(type: "minecraft:game_event", handler: (event: Registry.GameEvent) => void):void,
registry(type: "game_event", handler: (event: Registry.GameEvent) => void):void,
registry(type: "minecraft:position_source_type", handler: (event: Registry.PositionSourceType) => void):void,
registry(type: "position_source_type", handler: (event: Registry.PositionSourceType) => void):void,
registry(type: "minecraft:stat_type", handler: (event: Registry.StatType) => void):void,
registry(type: "stat_type", handler: (event: Registry.StatType) => void):void,
registry(type: "minecraft:villager_type", handler: (event: Registry.VillagerType) => void):void,
registry(type: "villager_type", handler: (event: Registry.VillagerType) => void):void,
registry(type: "minecraft:villager_profession", handler: (event: Registry.VillagerProfession) => void):void,
registry(type: "villager_profession", handler: (event: Registry.VillagerProfession) => void):void,
registry(type: "minecraft:point_of_interest_type", handler: (event: Registry.PointOfInterestType) => void):void,
registry(type: "point_of_interest_type", handler: (event: Registry.PointOfInterestType) => void):void,
registry(type: "minecraft:memory_module_type", handler: (event: Registry.MemoryModuleType) => void):void,
registry(type: "memory_module_type", handler: (event: Registry.MemoryModuleType) => void):void,
registry(type: "minecraft:sensor_type", handler: (event: Registry.SensorType) => void):void,
registry(type: "sensor_type", handler: (event: Registry.SensorType) => void):void,
registry(type: "minecraft:schedule", handler: (event: Registry.Schedule) => void):void,
registry(type: "schedule", handler: (event: Registry.Schedule) => void):void,
registry(type: "minecraft:activity", handler: (event: Registry.Activity) => void):void,
registry(type: "activity", handler: (event: Registry.Activity) => void):void,
registry(type: "minecraft:loot_pool_entry_type", handler: (event: Registry.LootPoolEntryType) => void):void,
registry(type: "loot_pool_entry_type", handler: (event: Registry.LootPoolEntryType) => void):void,
registry(type: "minecraft:loot_function_type", handler: (event: Registry.LootFunctionType) => void):void,
registry(type: "loot_function_type", handler: (event: Registry.LootFunctionType) => void):void,
registry(type: "minecraft:loot_condition_type", handler: (event: Registry.LootConditionType) => void):void,
registry(type: "loot_condition_type", handler: (event: Registry.LootConditionType) => void):void,
registry(type: "minecraft:loot_number_provider_type", handler: (event: Registry.LootNumberProviderType) => void):void,
registry(type: "loot_number_provider_type", handler: (event: Registry.LootNumberProviderType) => void):void,
registry(type: "minecraft:loot_nbt_provider_type", handler: (event: Registry.LootNbtProviderType) => void):void,
registry(type: "loot_nbt_provider_type", handler: (event: Registry.LootNbtProviderType) => void):void,
registry(type: "minecraft:loot_score_provider_type", handler: (event: Registry.LootScoreProviderType) => void):void,
registry(type: "loot_score_provider_type", handler: (event: Registry.LootScoreProviderType) => void):void,
registry(type: "minecraft:command_argument_type", handler: (event: Registry.CommandArgumentType) => void):void,
registry(type: "command_argument_type", handler: (event: Registry.CommandArgumentType) => void):void,
registry(type: "minecraft:dimension_type", handler: (event: Registry.DimensionType) => void):void,
registry(type: "dimension_type", handler: (event: Registry.DimensionType) => void):void,
registry(type: "minecraft:dimension", handler: (event: Registry.Dimension) => void):void,
registry(type: "dimension", handler: (event: Registry.Dimension) => void):void,
registry(type: "minecraft:float_provider_type", handler: (event: Registry.FloatProviderType) => void):void,
registry(type: "float_provider_type", handler: (event: Registry.FloatProviderType) => void):void,
registry(type: "minecraft:int_provider_type", handler: (event: Registry.IntProviderType) => void):void,
registry(type: "int_provider_type", handler: (event: Registry.IntProviderType) => void):void,
registry(type: "minecraft:height_provider_type", handler: (event: Registry.HeightProviderType) => void):void,
registry(type: "height_provider_type", handler: (event: Registry.HeightProviderType) => void):void,
registry(type: "minecraft:block_predicate_type", handler: (event: Registry.BlockPredicateType) => void):void,
registry(type: "block_predicate_type", handler: (event: Registry.BlockPredicateType) => void):void,
registry(type: "minecraft:worldgen/noise_settings", handler: (event: Registry.WorldgenNoiseSettings) => void):void,
registry(type: "worldgen.noise_settings", handler: (event: Registry.WorldgenNoiseSettings) => void):void,
registry(type: "minecraft:worldgen/configured_carver", handler: (event: Registry.WorldgenConfiguredCarver) => void):void,
registry(type: "worldgen.configured_carver", handler: (event: Registry.WorldgenConfiguredCarver) => void):void,
registry(type: "minecraft:worldgen/configured_feature", handler: (event: Registry.WorldgenConfiguredFeature) => void):void,
registry(type: "worldgen.configured_feature", handler: (event: Registry.WorldgenConfiguredFeature) => void):void,
registry(type: "minecraft:worldgen/placed_feature", handler: (event: Registry.WorldgenPlacedFeature) => void):void,
registry(type: "worldgen.placed_feature", handler: (event: Registry.WorldgenPlacedFeature) => void):void,
registry(type: "minecraft:worldgen/structure", handler: (event: Registry.WorldgenStructure) => void):void,
registry(type: "worldgen.structure", handler: (event: Registry.WorldgenStructure) => void):void,
registry(type: "minecraft:worldgen/structure_set", handler: (event: Registry.WorldgenStructureSet) => void):void,
registry(type: "worldgen.structure_set", handler: (event: Registry.WorldgenStructureSet) => void):void,
registry(type: "minecraft:worldgen/processor_list", handler: (event: Registry.WorldgenProcessorList) => void):void,
registry(type: "worldgen.processor_list", handler: (event: Registry.WorldgenProcessorList) => void):void,
registry(type: "minecraft:worldgen/template_pool", handler: (event: Registry.WorldgenTemplatePool) => void):void,
registry(type: "worldgen.template_pool", handler: (event: Registry.WorldgenTemplatePool) => void):void,
registry(type: "minecraft:worldgen/biome", handler: (event: Registry.WorldgenBiome) => void):void,
registry(type: "worldgen.biome", handler: (event: Registry.WorldgenBiome) => void):void,
registry(type: "minecraft:worldgen/noise", handler: (event: Registry.WorldgenNoise) => void):void,
registry(type: "worldgen.noise", handler: (event: Registry.WorldgenNoise) => void):void,
registry(type: "minecraft:worldgen/density_function", handler: (event: Registry.WorldgenDensityFunction) => void):void,
registry(type: "worldgen.density_function", handler: (event: Registry.WorldgenDensityFunction) => void):void,
registry(type: "minecraft:worldgen/world_preset", handler: (event: Registry.WorldgenWorldPreset) => void):void,
registry(type: "worldgen.world_preset", handler: (event: Registry.WorldgenWorldPreset) => void):void,
registry(type: "minecraft:worldgen/flat_level_generator_preset", handler: (event: Registry.WorldgenFlatLevelGeneratorPreset) => void):void,
registry(type: "worldgen.flat_level_generator_preset", handler: (event: Registry.WorldgenFlatLevelGeneratorPreset) => void):void,
registry(type: "minecraft:worldgen/carver", handler: (event: Registry.WorldgenCarver) => void):void,
registry(type: "worldgen.carver", handler: (event: Registry.WorldgenCarver) => void):void,
registry(type: "minecraft:worldgen/feature", handler: (event: Registry.WorldgenFeature) => void):void,
registry(type: "worldgen.feature", handler: (event: Registry.WorldgenFeature) => void):void,
registry(type: "minecraft:worldgen/structure_placement", handler: (event: Registry.WorldgenStructurePlacement) => void):void,
registry(type: "worldgen.structure_placement", handler: (event: Registry.WorldgenStructurePlacement) => void):void,
registry(type: "minecraft:worldgen/structure_piece", handler: (event: Registry.WorldgenStructurePiece) => void):void,
registry(type: "worldgen.structure_piece", handler: (event: Registry.WorldgenStructurePiece) => void):void,
registry(type: "minecraft:worldgen/structure_type", handler: (event: Registry.WorldgenStructureType) => void):void,
registry(type: "worldgen.structure_type", handler: (event: Registry.WorldgenStructureType) => void):void,
registry(type: "minecraft:worldgen/placement_modifier_type", handler: (event: Registry.WorldgenPlacementModifierType) => void):void,
registry(type: "worldgen.placement_modifier_type", handler: (event: Registry.WorldgenPlacementModifierType) => void):void,
registry(type: "minecraft:worldgen/block_state_provider_type", handler: (event: Registry.WorldgenBlockStateProviderType) => void):void,
registry(type: "worldgen.block_state_provider_type", handler: (event: Registry.WorldgenBlockStateProviderType) => void):void,
registry(type: "minecraft:worldgen/foliage_placer_type", handler: (event: Registry.WorldgenFoliagePlacerType) => void):void,
registry(type: "worldgen.foliage_placer_type", handler: (event: Registry.WorldgenFoliagePlacerType) => void):void,
registry(type: "minecraft:worldgen/trunk_placer_type", handler: (event: Registry.WorldgenTrunkPlacerType) => void):void,
registry(type: "worldgen.trunk_placer_type", handler: (event: Registry.WorldgenTrunkPlacerType) => void):void,
registry(type: "minecraft:worldgen/tree_decorator_type", handler: (event: Registry.WorldgenTreeDecoratorType) => void):void,
registry(type: "worldgen.tree_decorator_type", handler: (event: Registry.WorldgenTreeDecoratorType) => void):void,
registry(type: "minecraft:worldgen/root_placer_type", handler: (event: Registry.WorldgenRootPlacerType) => void):void,
registry(type: "worldgen.root_placer_type", handler: (event: Registry.WorldgenRootPlacerType) => void):void,
registry(type: "minecraft:worldgen/feature_size_type", handler: (event: Registry.WorldgenFeatureSizeType) => void):void,
registry(type: "worldgen.feature_size_type", handler: (event: Registry.WorldgenFeatureSizeType) => void):void,
registry(type: "minecraft:worldgen/biome_source", handler: (event: Registry.WorldgenBiomeSource) => void):void,
registry(type: "worldgen.biome_source", handler: (event: Registry.WorldgenBiomeSource) => void):void,
registry(type: "minecraft:worldgen/chunk_generator", handler: (event: Registry.WorldgenChunkGenerator) => void):void,
registry(type: "worldgen.chunk_generator", handler: (event: Registry.WorldgenChunkGenerator) => void):void,
registry(type: "minecraft:worldgen/material_condition", handler: (event: Registry.WorldgenMaterialCondition) => void):void,
registry(type: "worldgen.material_condition", handler: (event: Registry.WorldgenMaterialCondition) => void):void,
registry(type: "minecraft:worldgen/material_rule", handler: (event: Registry.WorldgenMaterialRule) => void):void,
registry(type: "worldgen.material_rule", handler: (event: Registry.WorldgenMaterialRule) => void):void,
registry(type: "minecraft:worldgen/density_function_type", handler: (event: Registry.WorldgenDensityFunctionType) => void):void,
registry(type: "worldgen.density_function_type", handler: (event: Registry.WorldgenDensityFunctionType) => void):void,
registry(type: "minecraft:worldgen/structure_processor", handler: (event: Registry.WorldgenStructureProcessor) => void):void,
registry(type: "worldgen.structure_processor", handler: (event: Registry.WorldgenStructureProcessor) => void):void,
registry(type: "minecraft:worldgen/structure_pool_element", handler: (event: Registry.WorldgenStructurePoolElement) => void):void,
registry(type: "worldgen.structure_pool_element", handler: (event: Registry.WorldgenStructurePoolElement) => void):void,
registry(type: "minecraft:chat_type", handler: (event: Registry.ChatType) => void):void,
registry(type: "chat_type", handler: (event: Registry.ChatType) => void):void,
registry(type: "minecraft:cat_variant", handler: (event: Registry.CatVariant) => void):void,
registry(type: "cat_variant", handler: (event: Registry.CatVariant) => void):void,
registry(type: "minecraft:frog_variant", handler: (event: Registry.FrogVariant) => void):void,
registry(type: "frog_variant", handler: (event: Registry.FrogVariant) => void):void,
registry(type: "minecraft:banner_pattern", handler: (event: Registry.BannerPattern) => void):void,
registry(type: "banner_pattern", handler: (event: Registry.BannerPattern) => void):void,
registry(type: "minecraft:instrument", handler: (event: Registry.Instrument) => void):void,
registry(type: "instrument", handler: (event: Registry.Instrument) => void):void,
registry(type: "minecraft:trim_material", handler: (event: Registry.TrimMaterial) => void):void,
registry(type: "trim_material", handler: (event: Registry.TrimMaterial) => void):void,
registry(type: "minecraft:trim_pattern", handler: (event: Registry.TrimPattern) => void):void,
registry(type: "trim_pattern", handler: (event: Registry.TrimPattern) => void):void,
registry(type: "minecraft:creative_mode_tab", handler: (event: Registry.CreativeModeTab) => void):void,
registry(type: "creative_mode_tab", handler: (event: Registry.CreativeModeTab) => void):void,
registry(type: "minecraft:damage_type", handler: (event: Registry.DamageType) => void):void,
registry(type: "damage_type", handler: (event: Registry.DamageType) => void):void,
registry(type: "minecraft:rule_block_entity_modifier", handler: (event: Registry.RuleBlockEntityModifier) => void):void,
registry(type: "rule_block_entity_modifier", handler: (event: Registry.RuleBlockEntityModifier) => void):void,
registry(type: "minecraft:decorated_pot_patterns", handler: (event: Registry.DecoratedPotPatterns) => void):void,
registry(type: "decorated_pot_patterns", handler: (event: Registry.DecoratedPotPatterns) => void):void,
registry(type: "minecraft:worldgen/multi_noise_biome_source_parameter_list", handler: (event: Registry.WorldgenMultiNoiseBiomeSourceParameterList) => void):void,
registry(type: "worldgen.multi_noise_biome_source_parameter_list", handler: (event: Registry.WorldgenMultiNoiseBiomeSourceParameterList) => void):void,
registry(type: "create:contraption_type", handler: (event: Registry.ContraptionType) => void):void,
registry(type: "create:mounted_item_storage_type", handler: (event: Registry.MountedItemStorageType) => void):void,
registry(type: "create:potato_projectile/render_mode", handler: (event: Registry.PotatoProjectileRenderMode) => void):void,
registry(type: "create:fan_processing_type", handler: (event: Registry.FanProcessingType) => void):void,
registry(type: "create:display_target", handler: (event: Registry.DisplayTarget) => void):void,
registry(type: "create:potato_projectile/entity_hit_action", handler: (event: Registry.PotatoProjectileEntityHitAction) => void):void,
registry(type: "create:display_source", handler: (event: Registry.DisplaySource) => void):void,
registry(type: "create:arm_interaction_point_type", handler: (event: Registry.ArmInteractionPointType) => void):void,
registry(type: "create:potato_projectile/block_hit_action", handler: (event: Registry.PotatoProjectileBlockHitAction) => void):void,
registry(type: "create:mounted_fluid_storage_type", handler: (event: Registry.MountedFluidStorageType) => void):void,
registry(type: "create:item_attribute_type", handler: (event: Registry.ItemAttributeType) => void):void,
registry(type: "forge:biome_modifier_serializers", handler: (event: Registry.BiomeModifierSerializers) => void):void,
registry(type: "forge:display_contexts", handler: (event: Registry.DisplayContexts) => void):void,
registry(type: "forge:entity_data_serializers", handler: (event: Registry.EntityDataSerializers) => void):void,
registry(type: "forge:fluid_type", handler: (event: Registry.FluidType) => void):void,
registry(type: "forge:global_loot_modifier_serializers", handler: (event: Registry.GlobalLootModifierSerializers) => void):void,
registry(type: "forge:holder_set_type", handler: (event: Registry.HolderSetType) => void):void,
registry(type: "forge:structure_modifier_serializers", handler: (event: Registry.StructureModifierSerializers) => void):void,
registry(type: "immersive_portals:command_stick_type", handler: (event: Registry.CommandStickType) => void):void,
registry(type: "forge:structure_modifier", handler: (event: Registry.StructureModifier) => void):void,
registry(type: "forge:biome_modifier", handler: (event: Registry.BiomeModifier) => void):void,
registry(type: "create:potato_projectile/type", handler: (event: Registry.PotatoProjectileType) => void):void,
    /**
     * @at *startup*
    */
modifyCreativeTab(extra: string, handler: (event: Internal.CreativeTabEvent) => void):void,
    /**
     * @at *startup*
    */
recipeSchemaRegistry(handler: (event: Internal.RecipeSchemaRegistryEventJS) => void):void,
    /**
     * @at *startup*
    */
postInit(handler: (event: Internal.StartupEventJS) => void):void,
};
declare const BlockEvents: {
    /**
     * Invoked when a block is destroyed by a player.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
broken(extra: Internal.Block_, handler: (event: Internal.BlockBrokenEventJS) => void):void,
broken(handler: (event: Internal.BlockBrokenEventJS) => void):void,
    /**
     * Invoked when a detector block registered in KubeJS receives a block update.
     * 
     * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
     * 
     * @at *server, client*
    */
detectorPowered(extra: string, handler: (event: Internal.DetectorBlockEventJS) => void):void,
detectorPowered(handler: (event: Internal.DetectorBlockEventJS) => void):void,
    /**
     * Invoked when an entity attempts to trample farmland.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
farmlandTrampled(extra: Internal.Block_, handler: (event: Internal.FarmlandTrampledEventJS) => void):void,
farmlandTrampled(handler: (event: Internal.FarmlandTrampledEventJS) => void):void,
    /**
     * Invoked when a block is placed.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
placed(extra: Internal.Block_, handler: (event: Internal.BlockPlacedEventJS) => void):void,
placed(handler: (event: Internal.BlockPlacedEventJS) => void):void,
    /**
     * Invoked when a detector block registered in KubeJS receives a block update.
     * 
     * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
     * 
     * @at *server, client*
    */
detectorUnpowered(extra: string, handler: (event: Internal.DetectorBlockEventJS) => void):void,
detectorUnpowered(handler: (event: Internal.DetectorBlockEventJS) => void):void,
    /**
     * Invoked when a player left clicks on a block.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
leftClicked(extra: Internal.Block_, handler: (event: Internal.BlockLeftClickedEventJS) => void):void,
leftClicked(handler: (event: Internal.BlockLeftClickedEventJS) => void):void,
    /**
     * Invoked when a player right clicks on a block.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
rightClicked(extra: Internal.Block_, handler: (event: Internal.BlockRightClickedEventJS) => void):void,
rightClicked(handler: (event: Internal.BlockRightClickedEventJS) => void):void,
    /**
     * Invoked when a detector block registered in KubeJS receives a block update.
     * 
     * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
     * 
     * @at *server, client*
    */
detectorChanged(extra: string, handler: (event: Internal.DetectorBlockEventJS) => void):void,
detectorChanged(handler: (event: Internal.DetectorBlockEventJS) => void):void,
    /**
     * @at *startup*
    */
modification(handler: (event: Internal.BlockModificationEventJS) => void):void,
};
declare const PlayerEvents: {
    /**
     * Invoked when a player sends a chat message.
     * 
     * If cancelled (`PlayerEvents.chat`), the message will not be sent.
     * 
     * @at *server*
    */
decorateChat(handler: (event: Internal.PlayerChatDecorateEventJS) => void):void,
    /**
     * Invoked when a player opens a chest.
     * 
     * Same as `PlayerEvents.inventoryOpened`, but only for chests.
     * 
     * @at *server, client*
    */
chestOpened(extra: Internal.MenuType_<any>, handler: (event: Internal.ChestEventJS) => void):void,
chestOpened(handler: (event: Internal.ChestEventJS) => void):void,
    /**
     * Invoked when a player gets an advancement.
     * 
     * @at *server*
     * 
     * @cancellable
    */
advancement(extra: string, handler: (event: Internal.PlayerAdvancementEventJS) => void):void,
advancement(handler: (event: Internal.PlayerAdvancementEventJS) => void):void,
    /**
     * Invoked when a player sends a chat message.
     * 
     * If cancelled (`PlayerEvents.chat`), the message will not be sent.
     * 
     * @at *server*
     * 
     * @cancellable
    */
chat(handler: (event: Internal.PlayerChatDecorateEventJS) => void):void,
    /**
     * Invoked when a player opens a chest.
     * 
     * Same as `PlayerEvents.inventoryOpened`, but only for chests.
     * 
     * @at *server, client*
    */
chestClosed(extra: Internal.MenuType_<any>, handler: (event: Internal.ChestEventJS) => void):void,
chestClosed(handler: (event: Internal.ChestEventJS) => void):void,
    /**
     * @at *server*
    */
loggedIn(handler: (event: Internal.SimplePlayerEventJS) => void):void,
    /**
     * @at *server*
    */
loggedOut(handler: (event: Internal.SimplePlayerEventJS) => void):void,
    /**
     * Invoked when a player opens or closes a container.
     * 
     * @at *server, client*
    */
inventoryClosed(extra: Internal.MenuType_<any>, handler: (event: Internal.InventoryEventJS) => void):void,
inventoryClosed(handler: (event: Internal.InventoryEventJS) => void):void,
    /**
     * Invoked when a player's inventory changes.
     * 
     * @at *server, client*
    */
inventoryChanged(extra: Internal.Item_, handler: (event: Internal.InventoryChangedEventJS) => void):void,
inventoryChanged(handler: (event: Internal.InventoryChangedEventJS) => void):void,
    /**
     * Invoked when a player opens or closes a container.
     * 
     * @at *server, client*
    */
inventoryOpened(extra: Internal.MenuType_<any>, handler: (event: Internal.InventoryEventJS) => void):void,
inventoryOpened(handler: (event: Internal.InventoryEventJS) => void):void,
    /**
     * @at *server, client*
    */
tick(handler: (event: Internal.SimplePlayerEventJS) => void):void,
    /**
     * Invoked when a player respawns.
     * 
     * The reason of respawn can be either death or returning from the end.
     * 
     * @at *server*
    */
respawned(handler: (event: Internal.PlayerRespawnedEventJS) => void):void,
};
declare const ProbeJSEvents: {
    /**
     * @at *server*
    */
fileSaved(extra: string, handler: (event: Internal.VSCodeFileSavedEventJS) => void):void,
fileSaved(handler: (event: Internal.VSCodeFileSavedEventJS) => void):void,
    /**
     * @at *server*
    */
generateDoc(handler: (event: Internal.DocGenerationEventJS) => void):void,
};
