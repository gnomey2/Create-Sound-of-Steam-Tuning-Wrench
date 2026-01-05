/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class InputConstants$Key {
        getDisplayName(): Internal.Component;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        getType(): Internal.InputConstants$Type;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        getName(): string;
        wait(arg0: number): void;
        getValue(): number;
        equals(arg0: any): boolean;
        getNumericKeyValue(): Internal.OptionalInt;
        get displayName(): Internal.Component
        get class(): typeof any
        get type(): Internal.InputConstants$Type
        get name(): string
        get value(): number
        get numericKeyValue(): Internal.OptionalInt
    }
    type InputConstants$Key_ = InputConstants$Key;
    class MultiBufferSource$BufferSource implements Internal.MultiBufferSource {
        endBatch(arg0: Internal.RenderType_): void;
        getClass(): typeof any;
        endLastBatch(): void;
        static immediate(arg0: Internal.BufferBuilder_): Internal.MultiBufferSource$BufferSource;
        toString(): string;
        notifyAll(): void;
        getBuffer(arg0: Internal.RenderType_): Internal.VertexConsumer;
        notify(): void;
        static immediateWithBuffers(arg0: Internal.Map_<Internal.RenderType, Internal.BufferBuilder>, arg1: Internal.BufferBuilder_): Internal.MultiBufferSource$BufferSource;
        wait(arg0: number, arg1: number): void;
        endBatch(): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type MultiBufferSource$BufferSource_ = MultiBufferSource$BufferSource;
    class CactusBlock extends Internal.Block implements Internal.IPlantable {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        getPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly AGE: (Internal.IntegerProperty) & (Internal.IntegerProperty);
        static readonly MAX_AGE: (15) & (number);
    }
    type CactusBlock_ = CactusBlock;
    class ClientboundCustomChatCompletionsPacket extends Internal.Record implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.ClientboundCustomChatCompletionsPacket$Action_, arg1: Internal.List_<string>)
        handle(arg0: Internal.PacketListener_): void;
        entries(): Internal.List<string>;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        action(): Internal.ClientboundCustomChatCompletionsPacket$Action;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
    }
    type ClientboundCustomChatCompletionsPacket_ = ClientboundCustomChatCompletionsPacket;
    class ArgumentSignatures$Entry extends Internal.Record {
        constructor(arg0: string, arg1: Internal.MessageSignature_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        name(): string;
        getClass(): typeof any;
        signature(): Internal.MessageSignature;
        write(arg0: Internal.FriendlyByteBuf_): void;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type ArgumentSignatures$Entry_ = ArgumentSignatures$Entry;
    class PackType extends Internal.Enum<Internal.PackType> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static values(): Internal.PackType[];
        toString(): string;
        notifyAll(): void;
        static valueOf(arg0: string): Internal.PackType;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        getDeclaringClass(): typeof Internal.PackType;
        "compareTo(net.minecraft.server.packs.PackType)"(arg0: Internal.PackType_): number;
        name(): string;
        hashCode(): number;
        compareTo(arg0: Internal.PackType_): number;
        ordinal(): number;
        wait(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.PackType>>;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        getDirectory(): string;
        get class(): typeof any
        get declaringClass(): typeof Internal.PackType
        get directory(): string
        static readonly CLIENT_RESOURCES: (Internal.PackType) & (Internal.PackType);
        static readonly SERVER_DATA: (Internal.PackType) & (Internal.PackType);
    }
    type PackType_ = "client_resources" | PackType | "server_data";
    class PainterObjectStorage {
        constructor(p: Internal.Painter_)
        getClass(): typeof any;
        createScreenObjects(): any[];
        toString(): string;
        notifyAll(): void;
        handle(root: Internal.CompoundTag_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getObject(key: string): Internal.PainterObject;
        wait(): void;
        clear(): void;
        getObjects(): Internal.Collection<Internal.PainterObject>;
        wait(arg0: number): void;
        remove(id: string): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get objects(): Internal.Collection<Internal.PainterObject>
        readonly painter: Internal.Painter;
    }
    type PainterObjectStorage_ = PainterObjectStorage;
    abstract class MinecraftServer extends Internal.ReentrantBlockableEventLoop<Internal.TickTask> implements Internal.MinecraftServerKJS, Internal.IEMinecraftServer_Misc, Internal.CommandSource, Internal.IEMinecraftServer, Internal.AutoCloseable {
        constructor(arg0: Internal.Thread_, arg1: Internal.LevelStorageSource$LevelStorageAccess_, arg2: Internal.PackRepository_, arg3: Internal.WorldStem_, arg4: Internal.Proxy_, arg5: Internal.DataFixer_, arg6: Internal.Services_, arg7: any_)
        getConnection(): Internal.ServerConnectionListener;
        self(): this;
        getCompressionThreshold(): number;
        getPlayerIdleTimeout(): number;
        abstract fillServerSystemReport(arg0: Internal.SystemReport_): Internal.SystemReport;
        getResourceManager(): Internal.ResourceManager;
        getProxy(): Internal.Proxy;
        setDefaultGameType(arg0: Internal.GameType_): void;
        getAdvancement(id: ResourceLocation_): Internal.AdvancementJS;
        saveEverything(arg0: boolean, arg1: boolean, arg2: boolean): boolean;
        "submit(java.util.function.Supplier)"<V>(arg0: Internal.Supplier_<V>): Internal.CompletableFuture<V>;
        registries(): Internal.LayeredRegistryAccess<Internal.RegistryLayer>;
        askEither<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Internal.Either<Source, Internal.Exception>>, Internal.TickTask>): Internal.CompletableFuture<Source>;
        /**
         * @deprecated
        */
        markWorldsDirty(): void;
        "tell(java.lang.Object)"(arg0: any): void;
        "tell(net.minecraft.network.chat.Component)"(message: Internal.Component_): void;
        usesAuthentication(): boolean;
        tell(arg0: any): void;
        scheduleInTicks(ticks: number, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        getScaledTrackingDistance(arg0: number): number;
        runCommandSilent(command: string): number;
        scheduleRepeatingInTicks(ticks: number, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        publishServer(arg0: Internal.GameType_, arg1: boolean, arg2: number): boolean;
        getFrameTimer(): Internal.FrameTimer;
        hasGui(): boolean;
        getPendingTasksCount(): number;
        setDemo(arg0: boolean): void;
        alwaysAccepts(): boolean;
        isUnderSpawnProtection(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        managedBlock(arg0: Internal.BooleanSupplier_): void;
        /**
         * @deprecated
        */
        forgeGetWorldMap(): Internal.Map<Internal.ResourceKey<Internal.Level>, Internal.ServerLevel>;
        logChatMessage(arg0: Internal.Component_, arg1: Internal.ChatType$Bound_, arg2: string): void;
        abstract isDedicated(): boolean;
        getWorldPath(arg0: Internal.LevelResource_): Internal.Path;
        "doRunTask(java.lang.Runnable)"(arg0: Internal.Runnable_): void;
        executeIfPossible(arg0: Internal.Runnable_): void;
        getClass(): typeof any;
        cancelRecordingMetrics(): void;
        isSingleplayer(): boolean;
        getServerResources(): Internal.MinecraftServer$ReloadableResources;
        setPreventProxyConnections(arg0: boolean): void;
        ask<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Source>, Internal.TickTask>): Internal.CompletableFuture<Source>;
        isRecordingMetrics(): boolean;
        getPersistentData(): Internal.CompoundTag;
        ip_getExecutor(): Internal.Executor;
        setPlayerList(arg0: Internal.PlayerList_): void;
        setLocalIp(arg0: string): void;
        executeBlocking(arg0: Internal.Runnable_): void;
        getScheduledEvents(): Internal.ScheduledEvents;
        createGameModeForPlayer(arg0: Internal.ServerPlayer_): Internal.ServerPlayerGameMode;
        isNetherEnabled(): boolean;
        reloadResources(arg0: Internal.Collection_<string>): Internal.CompletableFuture<void>;
        isEnforceWhitelist(): boolean;
        isCurrentlySaving(): boolean;
        hidesOnlinePlayers(): boolean;
        getProfileRepository(): Internal.GameProfileRepository;
        getProfileCache(): Internal.GameProfileCache;
        getCommandStorage(): Internal.CommandStorage;
        wait(arg0: number): void;
        setDifficulty(arg0: Internal.Difficulty_, arg1: boolean): void;
        static spin<S extends Internal.MinecraftServer>(arg0: Internal.Function_<Internal.Thread, S>): S;
        enforceSecureProfile(): boolean;
        setFlightAllowed(arg0: boolean): void;
        static configurePackRepository(arg0: Internal.PackRepository_, arg1: Internal.DataPackConfig_, arg2: boolean, arg3: Internal.FeatureFlagSet_): Internal.WorldDataConfiguration;
        getServerModName(): string;
        acceptsFailure(): boolean;
        getNextTickTime(): number;
        isHardcore(): boolean;
        startTimeProfiler(): void;
        abstract isPublished(): boolean;
        getPlayerCount(): number;
        getOverworld(): Internal.ServerLevel;
        getName(): Internal.Component;
        abstract getRateLimitPacketsPerSecond(): number;
        sendData(channel: string, data: Internal.CompoundTag_): void;
        getServerResourcePack(): Internal.Optional<Internal.MinecraftServer$ServerResourcePackInfo>;
        getSingleplayerProfile(): Internal.GameProfile;
        fillSystemReport(arg0: Internal.SystemReport_): Internal.SystemReport;
        isReady(): boolean;
        setPort(arg0: number): void;
        name(): string;
        abstract shouldInformAdmins(): boolean;
        getMetricsDataNonClientOnly(): Internal.FrameTimer;
        wait(): void;
        setDifficultyLocked(arg0: boolean): void;
        stop(): void;
        setPvpAllowed(arg0: boolean): void;
        forceSynchronousWrites(): boolean;
        getTickTime(arg0: Internal.ResourceKey_<Internal.Level>): number[];
        abstract getFunctionCompilationLevel(): number;
        isResourcePackRequired(): boolean;
        getProfiler(): Internal.ProfilerFiller;
        getAverageTickTime(): number;
        ip_setStopped(arg0: boolean): void;
        scheduleRepeating(timer: Internal.TemporalAmount_, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        submit(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        setSingleplayerProfile(arg0: Internal.GameProfile_): void;
        static of<Msg>(arg0: string, arg1: Internal.Consumer_<Msg>): Internal.ProcessorHandle<Msg>;
        kickUnlistedPlayers(arg0: Internal.CommandSourceStack_): void;
        getRunningThread(): Internal.Thread;
        startRecordingMetrics(arg0: Internal.Consumer_<Internal.ProfileResults>, arg1: Internal.Consumer_<Internal.Path>): void;
        getWorldScreenshotFile(): Internal.Optional<Internal.Path>;
        getStructureManager(): Internal.StructureTemplateManager;
        halt(arg0: boolean): void;
        levelKeys(): Internal.Set<Internal.ResourceKey<Internal.Level>>;
        getSpawnProtectionRadius(): number;
        getProfileKeySignatureValidator(): Internal.SignatureValidator;
        setStatusMessage(message: Internal.Component_): void;
        getRecipeManager(): Internal.RecipeManager;
        doRunTask(arg0: Internal.Runnable_): void;
        getWorldData(): Internal.WorldData;
        execute(arg0: Internal.Runnable_): void;
        "doRunTask(net.minecraft.server.TickTask)"(arg0: Internal.TickTask_): void;
        setMotd(arg0: string): void;
        isSameThread(): boolean;
        getPreventProxyConnections(): boolean;
        equals(arg0: any): boolean;
        isFlightAllowed(): boolean;
        localvar$zca000$wrapResourceManager(original: Internal.CloseableResourceManager_): Internal.CloseableResourceManager;
        pollTask(): boolean;
        submit<V>(arg0: Internal.Supplier_<V>): Internal.CompletableFuture<V>;
        isTimeProfilerRunning(): boolean;
        onServerCrash(arg0: Internal.CrashReport_): void;
        setEnforceWhitelist(arg0: boolean): void;
        getFunctions(): Internal.ServerFunctionManager;
        isShutdown(): boolean;
        stopTimeProfiler(): Internal.ProfileResults;
        getDefaultGameType(): Internal.GameType;
        getTickCount(): number;
        dumpServerProperties(arg0: Internal.Path_): void;
        "getLevel(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<Internal.Level>): Internal.ServerLevel;
        getPackRepository(): Internal.PackRepository;
        getPlayerList(): Internal.PlayerList;
        getDisplayName(): Internal.Component;
        finishRecordingMetrics(): void;
        getLevel(arg0: Internal.ResourceKey_<Internal.Level>): Internal.ServerLevel;
        getPlayer(selector: Internal.PlayerSelector_): Internal.ServerPlayer;
        getChatDecorator(): Internal.ChatDecorator;
        getPort(): number;
        ip_removeDimensionFromWorldMap(arg0: Internal.ResourceKey_<any>): void;
        getGameRules(): Internal.GameRules;
        getCommands(): Internal.Commands;
        tickChildren(arg0: Internal.BooleanSupplier_): void;
        isSpawningAnimals(): boolean;
        getServerDirectory(): Internal.File;
        setUsesAuthentication(arg0: boolean): void;
        getAllLevels(): Internal.Iterable<Internal.ServerLevel>;
        isStopped(): boolean;
        toString(): string;
        "getLevel(net.minecraft.resources.ResourceLocation)"(dimension: ResourceLocation_): Internal.ServerLevel;
        sendData(channel: string): void;
        notifyAll(): void;
        getStatusJson(): string;
        getCustomBossEvents(): Internal.CustomBossEvents;
        getLocalIp(): string;
        saveAllChunks(arg0: boolean, arg1: boolean, arg2: boolean): boolean;
        portal_getAreAllWorldsLoaded(): boolean;
        areNpcsEnabled(): boolean;
        getAbsoluteMaxWorldSize(): number;
        getForcedGameType(): Internal.GameType;
        sendSystemMessage(arg0: Internal.Component_): void;
        acceptsSuccess(): boolean;
        invalidateStatus(): void;
        overworld(): Internal.ServerLevel;
        getLevel(dimension: ResourceLocation_): Internal.ServerLevel;
        getStatus(): Internal.ServerStatus;
        setPlayerIdleTimeout(arg0: number): void;
        getScoreboard(): Internal.ServerScoreboard;
        tickServer(arg0: Internal.BooleanSupplier_): void;
        addTickable(arg0: Internal.Runnable_): void;
        createCommandSourceStack(): Internal.CommandSourceStack;
        tell(arg0: Internal.TickTask_): void;
        notify(): void;
        schedule(timer: Internal.TemporalAmount_, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        abstract isCommandBlockEnabled(): boolean;
        getFile(arg0: string): Internal.File;
        getSpawnRadius(arg0: Internal.ServerLevel_): number;
        repliesToStatus(): boolean;
        stopRecordingMetrics(): void;
        "submit(java.lang.Runnable)"(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        getAdvancements(): Internal.ServerAdvancementManager;
        getMaxChainedNeighborUpdates(): number;
        forceTimeSynchronization(): void;
        getMotd(): string;
        isRunning(): boolean;
        getSessionService(): Internal.MinecraftSessionService;
        ip_waitUntilNextTick(): void;
        abstract getOperatorUserPermissionLevel(): number;
        profiledMetrics(): Internal.List<Internal.MetricSampler>;
        registryAccess(): Internal.RegistryAccess$Frozen;
        scheduleExecutables(): boolean;
        getMaxPlayers(): number;
        submitAsync(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        isSpawningMonsters(): boolean;
        getKeyPair(): Internal.KeyPair;
        isPvpAllowed(): boolean;
        wait(arg0: number, arg1: number): void;
        getServerVersion(): string;
        ip_getStorageSource(): Internal.LevelStorageSource$LevelStorageAccess;
        abstract isSingleplayerOwner(arg0: Internal.GameProfile_): boolean;
        doRunTask(arg0: Internal.TickTask_): void;
        onServerExit(): void;
        createTextFilterForPlayer(arg0: Internal.ServerPlayer_): Internal.TextFilter;
        isDemo(): boolean;
        getReloadableResources(): Internal.MinecraftServer$ReloadableResources;
        getProfilePermissions(arg0: Internal.GameProfile_): number;
        getData(): Internal.AttachedData<any>;
        getLootData(): Internal.LootDataManager;
        getEntities(): Internal.EntityArrayList;
        "tell(net.minecraft.server.TickTask)"(arg0: Internal.TickTask_): void;
        abstract isEpollEnabled(): boolean;
        ip_addDimensionToWorldMap(arg0: Internal.ResourceKey_<any>, arg1: Internal.ServerLevel_): void;
        tell(message: Internal.Component_): void;
        abstract shouldRconBroadcast(): boolean;
        getModdedStatus(): Internal.ModCheck;
        getPlayerNames(): string[];
        getPlayers(): Internal.EntityArrayList;
        hashCode(): number;
        close(): void;
        getFixerUpper(): Internal.DataFixer;
        restoreInventories(): Internal.Map<any, any>;
        runCommand(command: string): number;
        get connection(): Internal.ServerConnectionListener
        get compressionThreshold(): number
        get playerIdleTimeout(): number
        get resourceManager(): Internal.ResourceManager
        get proxy(): Internal.Proxy
        set defaultGameType(arg0: Internal.GameType_)
        get frameTimer(): Internal.FrameTimer
        get pendingTasksCount(): number
        set demo(arg0: boolean)
        get dedicated(): boolean
        get class(): typeof any
        get singleplayer(): boolean
        get serverResources(): Internal.MinecraftServer$ReloadableResources
        set preventProxyConnections(arg0: boolean)
        get recordingMetrics(): boolean
        get persistentData(): Internal.CompoundTag
        set playerList(arg0: Internal.PlayerList_)
        set localIp(arg0: string)
        get scheduledEvents(): Internal.ScheduledEvents
        get netherEnabled(): boolean
        get enforceWhitelist(): boolean
        get currentlySaving(): boolean
        get profileRepository(): Internal.GameProfileRepository
        get profileCache(): Internal.GameProfileCache
        get commandStorage(): Internal.CommandStorage
        set flightAllowed(arg0: boolean)
        get serverModName(): string
        get nextTickTime(): number
        get hardcore(): boolean
        get published(): boolean
        get playerCount(): number
        get overworld(): Internal.ServerLevel
        get name(): Internal.Component
        get rateLimitPacketsPerSecond(): number
        get serverResourcePack(): Internal.Optional<Internal.MinecraftServer$ServerResourcePackInfo>
        get singleplayerProfile(): Internal.GameProfile
        get ready(): boolean
        set port(arg0: number)
        get metricsDataNonClientOnly(): Internal.FrameTimer
        set difficultyLocked(arg0: boolean)
        set pvpAllowed(arg0: boolean)
        get functionCompilationLevel(): number
        get resourcePackRequired(): boolean
        get profiler(): Internal.ProfilerFiller
        get averageTickTime(): number
        set singleplayerProfile(arg0: Internal.GameProfile_)
        get runningThread(): Internal.Thread
        get worldScreenshotFile(): Internal.Optional<Internal.Path>
        get structureManager(): Internal.StructureTemplateManager
        get spawnProtectionRadius(): number
        get profileKeySignatureValidator(): Internal.SignatureValidator
        set statusMessage(message: Internal.Component_)
        get recipeManager(): Internal.RecipeManager
        get worldData(): Internal.WorldData
        set motd(arg0: string)
        get sameThread(): boolean
        get preventProxyConnections(): boolean
        get flightAllowed(): boolean
        get timeProfilerRunning(): boolean
        set enforceWhitelist(arg0: boolean)
        get functions(): Internal.ServerFunctionManager
        get shutdown(): boolean
        get defaultGameType(): Internal.GameType
        get tickCount(): number
        get packRepository(): Internal.PackRepository
        get playerList(): Internal.PlayerList
        get displayName(): Internal.Component
        get chatDecorator(): Internal.ChatDecorator
        get port(): number
        get gameRules(): Internal.GameRules
        get commands(): Internal.Commands
        get spawningAnimals(): boolean
        get serverDirectory(): Internal.File
        set usesAuthentication(arg0: boolean)
        get allLevels(): Internal.Iterable<Internal.ServerLevel>
        get stopped(): boolean
        get statusJson(): string
        get customBossEvents(): Internal.CustomBossEvents
        get localIp(): string
        get absoluteMaxWorldSize(): number
        get forcedGameType(): Internal.GameType
        get status(): Internal.ServerStatus
        set playerIdleTimeout(arg0: number)
        get scoreboard(): Internal.ServerScoreboard
        get commandBlockEnabled(): boolean
        get advancements(): Internal.ServerAdvancementManager
        get maxChainedNeighborUpdates(): number
        get motd(): string
        get running(): boolean
        get sessionService(): Internal.MinecraftSessionService
        get operatorUserPermissionLevel(): number
        get maxPlayers(): number
        get spawningMonsters(): boolean
        get keyPair(): Internal.KeyPair
        get pvpAllowed(): boolean
        get serverVersion(): string
        get demo(): boolean
        get reloadableResources(): Internal.MinecraftServer$ReloadableResources
        get data(): Internal.AttachedData<any>
        get lootData(): Internal.LootDataManager
        get entities(): Internal.EntityArrayList
        get epollEnabled(): boolean
        get moddedStatus(): Internal.ModCheck
        get playerNames(): string[]
        get players(): Internal.EntityArrayList
        get fixerUpper(): Internal.DataFixer
        static readonly START_CHUNK_RADIUS: (11) & (number);
        static readonly ABSOLUTE_MAX_WORLD_SIZE: (29999984) & (number);
        static readonly DEMO_SETTINGS: (Internal.LevelSettings) & (Internal.LevelSettings);
        readonly storageSource: Internal.LevelStorageSource$LevelStorageAccess;
        static readonly VANILLA_BRAND: ("vanilla") & (string);
        static readonly ANONYMOUS_PLAYER_PROFILE: (Internal.GameProfile) & (Internal.GameProfile);
        readonly tickTimes: number[];
        nextTickTime: number;
        static readonly MS_PER_TICK: (50) & (number);
    }
    type MinecraftServer_ = MinecraftServer;
    abstract class ScreenEvent$MouseDragged extends Internal.ScreenEvent$MouseInput {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
        setCanceled(arg0: boolean): void;
        getResult(): Internal.Event$Result;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        getMouseX(): number;
        getScreen(): Internal.Screen;
        notifyAll(): void;
        getMouseY(): number;
        getMouseButton(): number;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        getDragY(): number;
        getDragX(): number;
        set canceled(arg0: boolean)
        get result(): Internal.Event$Result
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get mouseX(): number
        get screen(): Internal.Screen
        get mouseY(): number
        get mouseButton(): number
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get dragY(): number
        get dragX(): number
    }
    type ScreenEvent$MouseDragged_ = ScreenEvent$MouseDragged;
    class Matcher implements Internal.MatchResult {
        start(): number;
        "appendReplacement(java.lang.StringBuffer,java.lang.String)"(arg0: Internal.StringBuffer_, arg1: string): this;
        "replaceFirst(java.lang.String)"(arg0: string): string;
        pattern(): Internal.Pattern;
        appendReplacement(arg0: Internal.StringBuffer_, arg1: string): this;
        notify(): void;
        reset(arg0: Internal.CharSequence_): this;
        replaceFirst(arg0: string): string;
        appendTail(arg0: Internal.StringBuilder_): Internal.StringBuilder;
        "start(java.lang.String)"(arg0: string): number;
        "replaceAll(java.util.function.Function)"(arg0: Internal.Function_<Internal.MatchResult, string>): string;
        groupCount(): number;
        replaceFirst(arg0: Internal.Function_<Internal.MatchResult, string>): string;
        region(arg0: number, arg1: number): this;
        start(arg0: number): number;
        hasTransparentBounds(): boolean;
        appendReplacement(arg0: Internal.StringBuilder_, arg1: string): this;
        "start(int)"(arg0: number): number;
        useTransparentBounds(arg0: boolean): this;
        "appendTail(java.lang.StringBuffer)"(arg0: Internal.StringBuffer_): Internal.StringBuffer;
        "replaceFirst(java.util.function.Function)"(arg0: Internal.Function_<Internal.MatchResult, string>): string;
        regionEnd(): number;
        toMatchResult(): Internal.MatchResult;
        "appendReplacement(java.lang.StringBuilder,java.lang.String)"(arg0: Internal.StringBuilder_, arg1: string): this;
        wait(): void;
        "group(int)"(arg0: number): string;
        start(arg0: string): number;
        group(arg0: number): string;
        hitEnd(): boolean;
        getClass(): typeof any;
        matches(): boolean;
        find(arg0: number): boolean;
        end(arg0: number): number;
        end(arg0: string): number;
        reset(): this;
        results(): Internal.Stream<Internal.MatchResult>;
        wait(arg0: number, arg1: number): void;
        "end(java.lang.String)"(arg0: string): number;
        find(): boolean;
        "end(int)"(arg0: number): number;
        lookingAt(): boolean;
        "replaceAll(java.lang.String)"(arg0: string): string;
        end(): number;
        group(arg0: string): string;
        toString(): string;
        replaceAll(arg0: Internal.Function_<Internal.MatchResult, string>): string;
        requireEnd(): boolean;
        "group(java.lang.String)"(arg0: string): string;
        hasAnchoringBounds(): boolean;
        notifyAll(): void;
        appendTail(arg0: Internal.StringBuffer_): Internal.StringBuffer;
        useAnchoringBounds(arg0: boolean): this;
        hashCode(): number;
        usePattern(arg0: Internal.Pattern_): this;
        "appendTail(java.lang.StringBuilder)"(arg0: Internal.StringBuilder_): Internal.StringBuilder;
        replaceAll(arg0: string): string;
        wait(arg0: number): void;
        group(): string;
        static quoteReplacement(arg0: string): string;
        equals(arg0: any): boolean;
        regionStart(): number;
        get class(): typeof any
    }
    type Matcher_ = Matcher;
    class FieldPosition {
        constructor(arg0: Internal.Format$Field_)
        constructor(arg0: Internal.Format$Field_, arg1: number)
        constructor(arg0: number)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        getField(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setEndIndex(arg0: number): void;
        hashCode(): number;
        getFieldAttribute(): Internal.Format$Field;
        wait(): void;
        getBeginIndex(): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        setBeginIndex(arg0: number): void;
        getEndIndex(): number;
        get class(): typeof any
        get field(): number
        set endIndex(arg0: number)
        get fieldAttribute(): Internal.Format$Field
        get beginIndex(): number
        set beginIndex(arg0: number)
        get endIndex(): number
    }
    type FieldPosition_ = FieldPosition;
    interface StructurePoolElementType <P extends Internal.StructurePoolElement> {
        abstract codec(): Internal.Codec<P>;
        register<P extends Internal.StructurePoolElement>(arg0: string, arg1: Internal.Codec_<P>): this;
        (): Internal.Codec_<P>;
        readonly LIST: Internal.StructurePoolElementType<Internal.ListPoolElement>;
        readonly LEGACY: Internal.StructurePoolElementType<Internal.LegacySinglePoolElement>;
        readonly FEATURE: Internal.StructurePoolElementType<Internal.FeaturePoolElement>;
        readonly EMPTY: Internal.StructurePoolElementType<Internal.EmptyPoolElement>;
        readonly SINGLE: Internal.StructurePoolElementType<Internal.SinglePoolElement>;
    }
    type StructurePoolElementType_<P extends Internal.StructurePoolElement> = (()=> Internal.Codec_<P>) | Special.StructurePoolElement | StructurePoolElementType<P>;
    interface WithAttachedData <T> extends Internal.MessageSenderKJS {
        getDisplayName(): Internal.Component;
        setStatusMessage(message: Internal.Component_): void;
        getName(): Internal.Component;
        runCommandSilent(command: string): number;
        tell(message: Internal.Component_): void;
        abstract getData(): Internal.AttachedData<T>;
        runCommand(command: string): number;
        get displayName(): Internal.Component
        set statusMessage(message: Internal.Component_)
        get name(): Internal.Component
        get data(): Internal.AttachedData<T>
        (): Internal.AttachedData_<T>;
    }
    type WithAttachedData_<T> = (()=> Internal.AttachedData_<T>) | WithAttachedData<T>;
    class HandCrankBlockEntity extends Internal.GeneratingKineticBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        clearKineticInformation(): void;
        static switchToBlockState(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getRenderedHandle(): Internal.SuperByteBuffer;
        requestModelDataUpdate(): void;
        turn(arg0: boolean): void;
        containedFluidTooltip(arg0: Internal.List_<Internal.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        destroy(): void;
        write(arg0: Internal.CompoundTag_, arg1: boolean): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        getGeneratedSpeed(): number;
        isCustomConnection(arg0: Internal.KineticBlockEntity_, arg1: Internal.BlockState_, arg2: Internal.BlockState_): boolean;
        readClient(arg0: Internal.CompoundTag_): void;
        isVirtual(): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        remove(): void;
        load(arg0: Internal.CompoundTag_): void;
        award(arg0: Internal.CreateAdvancement_): void;
        setChanged(): void;
        getFlickerScore(): number;
        saveWithoutMetadata(): Internal.CompoundTag;
        static convertToAngular(arg0: number): number;
        "getUpdatePacket()"(): Internal.Packet<any>;
        packetTarget(): Internal.PacketDistributor$PacketTarget;
        setRemoved(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        writeSafe(arg0: Internal.CompoundTag_): void;
        attachKinetics(): void;
        getType(): Internal.BlockEntityType<any>;
        static convertToDirection(arg0: number, arg1: Internal.Direction_): number;
        writeClient(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        setNetwork(arg0: number): void;
        onSpeedChanged(arg0: number): void;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        refreshBlockState(): void;
        getRenderBoundingBox(): Internal.AABB;
        getOrCreateNetwork(): Internal.KineticNetwork;
        getClass(): typeof any;
        sendToMenu(arg0: Internal.FriendlyByteBuf_): void;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        addBehaviours(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        createNetworkId(): number;
        onChunkUnloaded(): void;
        shouldRenderShaft(): boolean;
        setSource(arg0: BlockPos_): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        attachBehaviourLate(arg0: Internal.BlockEntityBehaviour_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        clearRemoved(): void;
        getUpdatePacket(): Internal.Packet<any>;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        setLazyTickRate(arg0: number): void;
        needsSpeedUpdate(): boolean;
        awardIfNear(arg0: Internal.CreateAdvancement_, arg1: number): void;
        containedChunk(): Internal.LevelChunk;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        markVirtual(): void;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        forEachBehaviour(arg0: Internal.Consumer_<Internal.BlockEntityBehaviour>): void;
        invalidate(): void;
        tickAudio(): void;
        removeSource(): void;
        wait(arg0: number): void;
        addPropagationLocations(arg0: Internal.IRotate_, arg1: Internal.BlockState_, arg2: Internal.List_<BlockPos>): Internal.List<BlockPos>;
        reviveCaps(): void;
        sendData(): void;
        getBehaviour<T extends Internal.BlockEntityBehaviour>(arg0: Internal.BehaviourType_<T>): T;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        calculateStressApplied(): number;
        setLevel(arg0: Internal.Level_): void;
        notify(): void;
        addBehavioursDeferred(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        updateFromNetwork(arg0: number, arg1: number, arg2: number): void;
        onLoad(): void;
        calculateAddedStressCapacity(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        hasSource(): boolean;
        initialize(): void;
        invalidateCaps(): void;
        isOverStressed(): boolean;
        getBlockState(): Internal.BlockState;
        warnOfMovement(): void;
        getSpeed(): number;
        tick(): void;
        canPlayerUse(arg0: Internal.Player_): boolean;
        static convertToLinear(arg0: number): number;
        lazyTick(): void;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        addToTooltip(arg0: Internal.List_<Internal.Component>, arg1: boolean): boolean;
        m_183515_(arg0: Internal.CompoundTag_): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        isSource(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        detachKinetics(): void;
        notifyUpdate(): void;
        isSpeedRequirementFulfilled(): boolean;
        setSpeed(arg0: number): void;
        wait(arg0: number, arg1: number): void;
        isChunkUnloaded(): boolean;
        getLevel(): Internal.Level;
        getRequiredItems(arg0: Internal.BlockState_): Internal.ItemRequirement;
        applyNewSpeed(arg0: number, arg1: number): void;
        onlyOpCanSetNbt(): boolean;
        removeBehaviour(arg0: Internal.BehaviourType_<any>): void;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getTheoreticalSpeed(): number;
        updateGeneratedRotation(): void;
        getIcon(arg0: boolean): Internal.ItemStack;
        propagateRotationTo(arg0: Internal.KineticBlockEntity_, arg1: Internal.BlockState_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: boolean, arg5: boolean): number;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getIndependentAngle(arg0: number): number;
        blockHolderGetter(): Internal.HolderGetter<Internal.Block>;
        hasNetwork(): boolean;
        getAllBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        serializeNBT(): Internal.CompoundTag;
        registerAwardables(arg0: Internal.List_<Internal.BlockEntityBehaviour>, ...arg1: Internal.CreateAdvancement_[]): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getModelData(): Internal.ModelData;
        addToGoggleTooltip(arg0: Internal.List_<Internal.Component>, arg1: boolean): boolean;
        getRotationAngleOffset(arg0: Internal.Direction$Axis_): number;
        equals(arg0: any): boolean;
        get renderedHandle(): Internal.SuperByteBuffer
        get generatedSpeed(): number
        get virtual(): boolean
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get flickerScore(): number
        get "updatePacket()"(): Internal.Packet<any>
        get type(): Internal.BlockEntityType<any>
        set network(arg0: number)
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get renderBoundingBox(): Internal.AABB
        get orCreateNetwork(): Internal.KineticNetwork
        get class(): typeof any
        set source(arg0: BlockPos_)
        get updatePacket(): Internal.Packet<any>
        set lazyTickRate(arg0: number)
        get persistentData(): Internal.CompoundTag
        get updateTag(): Internal.CompoundTag
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get overStressed(): boolean
        get blockState(): Internal.BlockState
        get speed(): number
        get source(): boolean
        get speedRequirementFulfilled(): boolean
        set speed(arg0: number)
        get chunkUnloaded(): boolean
        get level(): Internal.Level
        get theoreticalSpeed(): number
        get allBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get modelData(): Internal.ModelData
        chasingVelocity: number;
        independentAngle: number;
        inUse: number;
        backwards: boolean;
    }
    type HandCrankBlockEntity_ = HandCrankBlockEntity;
    class TallGrassBlock extends Internal.BushBlock implements Internal.IForgeShearable, Internal.BonemealableBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isShearable(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        getPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        onSheared(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: number): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type TallGrassBlock_ = TallGrassBlock;
    interface IItemHandlerModifiable extends Internal.IItemHandler {
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        abstract setStackInSlot(arg0: number, arg1: Internal.ItemStack_): void;
        isEmpty(): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        "extractItem(int,int,boolean)"(i: number, i1: number, b: boolean): Internal.ItemStack;
        find(): number;
        abstract getSlots(): number;
        extractItem(i: number, i1: number, b: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        setChanged(): void;
        abstract "getSlots()"(): number;
        kjs$self(): Internal.IItemHandler;
        getStackInSlot(i: number): Internal.ItemStack;
        getHeight(): number;
        countNonEmpty(): number;
        abstract "insertItem(int,net.minecraft.world.item.ItemStack,boolean)"(arg0: number, arg1: Internal.ItemStack_, arg2: boolean): Internal.ItemStack;
        "getStackInSlot(int)"(i: number): Internal.ItemStack;
        asContainer(): Internal.Container;
        "getSlotLimit(int)"(i: number): number;
        getWidth(): number;
        getSlotLimit(i: number): number;
        getAllItems(): Internal.List<Internal.ItemStack>;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        insertItem(i: number, itemStack: Internal.ItemStack_, b: boolean): Internal.ItemStack;
        abstract "isItemValid(int,net.minecraft.world.item.ItemStack)"(arg0: number, arg1: Internal.ItemStack_): boolean;
        abstract "setStackInSlot(int,net.minecraft.world.item.ItemStack)"(arg0: number, arg1: Internal.ItemStack_): void;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        isItemValid(i: number, itemStack: Internal.ItemStack_): boolean;
        get empty(): boolean
        get slots(): number
        get "slots()"(): number
        get height(): number
        get width(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
    }
    type IItemHandlerModifiable_ = IItemHandlerModifiable;
    interface EnchantmentBuilder$PostFunction {
        abstract apply(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        (arg0: Internal.LivingEntity, arg1: Internal.Entity, arg2: number): void;
    }
    type EnchantmentBuilder$PostFunction_ = ((arg0: Internal.LivingEntity, arg1: Internal.Entity, arg2: number)=> void) | EnchantmentBuilder$PostFunction;
    class GaugeBlock extends Internal.DirectionalAxisKineticBlock implements Internal.IBE<Internal.GaugeBlockEntity> {
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getRotationAxis(arg0: Internal.BlockState_): Internal.Direction$Axis;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        getBlockEntityType(): Internal.BlockEntityType<Internal.GaugeBlockEntity>;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.GaugeBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        static playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        getPreferredFacing(arg0: Internal.BlockPlaceContext_): Internal.Direction;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getParticleInitialRadius(): number;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        transform(arg0: Internal.BlockState_, arg1: Internal.StructureTransform_): Internal.BlockState;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.GaugeBlockEntity>): void;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        wait(): void;
        static playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        hideStressImpact(): boolean;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getBlockEntityClass(): typeof Internal.GaugeBlockEntity;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.GaugeBlockEntity;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        static stress(arg0: Internal.BlockBehaviour$Properties_): Internal.GaugeBlock;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        shouldRenderHeadOnFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_): boolean;
        getParticleTargetRadius(): number;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getFriction(): number;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.GaugeBlockEntity>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        static speed(arg0: Internal.BlockBehaviour$Properties_): Internal.GaugeBlock;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        getMinimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        showCapacityWithAnnotation(): boolean;
        static stateById(arg0: number): Internal.BlockState;
        hasShaftTowards(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_): boolean;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        get blockEntityType(): Internal.BlockEntityType<Internal.GaugeBlockEntity>
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get particleInitialRadius(): number
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        get blockEntityClass(): typeof Internal.GaugeBlockEntity
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        get particleTargetRadius(): number
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get minimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly GAUGE: (Internal.GaugeShaper) & (Internal.GaugeShaper);
    }
    type GaugeBlock_ = GaugeBlock;
    class PackagerLinkBlockEntity extends Internal.LinkWithBulbBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        playEffect(): void;
        requestModelDataUpdate(): void;
        destroy(): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        readClient(arg0: Internal.CompoundTag_): void;
        isVirtual(): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        remove(): void;
        fetchSummaryFromPackager(arg0: Internal.IdentifiedInventory_): Internal.InventorySummary;
        load(arg0: Internal.CompoundTag_): void;
        award(arg0: Internal.CreateAdvancement_): void;
        setChanged(): void;
        getPackager(): Internal.PackagerBlockEntity;
        saveWithoutMetadata(): Internal.CompoundTag;
        "getUpdatePacket()"(): Internal.Packet<any>;
        packetTarget(): Internal.PacketDistributor$PacketTarget;
        setRemoved(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        writeSafe(arg0: Internal.CompoundTag_): void;
        getType(): Internal.BlockEntityType<any>;
        writeClient(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        refreshBlockState(): void;
        getRenderBoundingBox(): Internal.AABB;
        getClass(): typeof any;
        sendToMenu(arg0: Internal.FriendlyByteBuf_): void;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        addBehaviours(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        onChunkUnloaded(): void;
        pulse(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        attachBehaviourLate(arg0: Internal.BlockEntityBehaviour_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        clearRemoved(): void;
        getUpdatePacket(): Internal.Packet<any>;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        setLazyTickRate(arg0: number): void;
        getBulbOffset(arg0: Internal.BlockState_): Vec3d;
        awardIfNear(arg0: Internal.CreateAdvancement_, arg1: number): void;
        containedChunk(): Internal.LevelChunk;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        markVirtual(): void;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        forEachBehaviour(arg0: Internal.Consumer_<Internal.BlockEntityBehaviour>): void;
        invalidate(): void;
        wait(arg0: number): void;
        reviveCaps(): void;
        sendData(): void;
        getGlow(arg0: number): number;
        getBehaviour<T extends Internal.BlockEntityBehaviour>(arg0: Internal.BehaviourType_<T>): T;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        setLevel(arg0: Internal.Level_): void;
        notify(): void;
        addBehavioursDeferred(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        getBulbFacing(arg0: Internal.BlockState_): Internal.Direction;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        initialize(): void;
        invalidateCaps(): void;
        getBlockState(): Internal.BlockState;
        tick(): void;
        canPlayerUse(arg0: Internal.Player_): boolean;
        lazyTick(): void;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        m_183515_(arg0: Internal.CompoundTag_): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        notifyUpdate(): void;
        wait(arg0: number, arg1: number): void;
        isChunkUnloaded(): boolean;
        getLevel(): Internal.Level;
        getRequiredItems(arg0: Internal.BlockState_): Internal.ItemRequirement;
        onlyOpCanSetNbt(): boolean;
        removeBehaviour(arg0: Internal.BehaviourType_<any>): void;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        blockHolderGetter(): Internal.HolderGetter<Internal.Block>;
        getAllBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>;
        processRequest(arg0: Internal.ItemStack_, arg1: number, arg2: string, arg3: number, arg4: Internal.MutableBoolean_, arg5: number, arg6: Internal.PackageOrderWithCrafts_, arg7: Internal.IdentifiedInventory_): net.createmod.catnip.data.Pair<Internal.PackagerBlockEntity, Internal.PackagingRequest>;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        serializeNBT(): Internal.CompoundTag;
        registerAwardables(arg0: Internal.List_<Internal.BlockEntityBehaviour>, ...arg1: Internal.CreateAdvancement_[]): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        sendPulseNextSync(): void;
        getModelData(): Internal.ModelData;
        equals(arg0: any): boolean;
        get virtual(): boolean
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get packager(): Internal.PackagerBlockEntity
        get "updatePacket()"(): Internal.Packet<any>
        get type(): Internal.BlockEntityType<any>
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        get updatePacket(): Internal.Packet<any>
        set lazyTickRate(arg0: number)
        get persistentData(): Internal.CompoundTag
        get updateTag(): Internal.CompoundTag
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get blockState(): Internal.BlockState
        get chunkUnloaded(): boolean
        get level(): Internal.Level
        get allBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get modelData(): Internal.ModelData
        behaviour: Internal.LogisticallyLinkedBehaviour;
        placedBy: Internal.UUID;
    }
    type PackagerLinkBlockEntity_ = PackagerLinkBlockEntity;
    interface PositionalRandomFactory {
        abstract fromHashOf(arg0: string): Internal.RandomSource;
        abstract at(arg0: number, arg1: number, arg2: number): Internal.RandomSource;
        fromHashOf(arg0: ResourceLocation_): Internal.RandomSource;
        "fromHashOf(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): Internal.RandomSource;
        abstract "fromHashOf(java.lang.String)"(arg0: string): Internal.RandomSource;
        at(arg0: BlockPos_): Internal.RandomSource;
        abstract parityConfigString(arg0: Internal.StringBuilder_): void;
    }
    type PositionalRandomFactory_ = PositionalRandomFactory;
    class StandardBogeyBlock extends Internal.AbstractBogeyBlock<Internal.StandardBogeyBlockEntity> implements Internal.ProperWaterloggedBlock, Internal.IBE<Internal.StandardBogeyBlockEntity>, Internal.SpecialBlockItemRequirement {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.BogeySizes$BogeySize_)
        allowsSingleBogeyCarriage(): boolean;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isUpsideDown(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        static playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getWheelRadius(): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        getBlockEntityType(): Internal.BlockEntityType<Internal.StandardBogeyBlockEntity>;
        setRequiresTool(v: boolean): void;
        getConnectorAnchorOffset(arg0: boolean): Vec3d;
        withWater(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): Internal.BlockState;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getWheelPointSpacing(): number;
        getMatchingBogey(arg0: Internal.Direction_, arg1: boolean): Internal.BlockState;
        getDefaultStyle(): Internal.BogeyStyle;
        getSize(): Internal.BogeySizes$BogeySize;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.StandardBogeyBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        getStateOfSize(arg0: Internal.AbstractBogeyBlockEntity_, arg1: Internal.BogeySizes$BogeySize_): Internal.BlockState;
        getStickySurfaces(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.EnumSet<Internal.Direction>;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        wait(): void;
        static playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        static withWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): Internal.BlockState;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        getBlockEntityClass(): typeof Internal.StandardBogeyBlockEntity;
        propertiesToCopy(): Internal.List<Internal.Property<any>>;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        captureBlockEntityForTrain(): boolean;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canBeUpsideDown(): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        getBogeyUpDirection(): Internal.Direction;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        abstract getRequiredItems(arg0: Internal.BlockState_, arg1: Internal.BlockEntity_): Internal.ItemRequirement;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        getNextStyle(arg0: Internal.Level_, arg1: BlockPos_): Internal.BogeyStyle;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        getNextSize(arg0: Internal.AbstractBogeyBlockEntity_): Internal.BlockState;
        getValidPathfindingTypes(arg0: Internal.BogeyStyle_): Internal.Set<Internal.TrackMaterial$TrackType>;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getTrackType(arg0: Internal.BogeyStyle_): Internal.TrackMaterial$TrackType;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.StandardBogeyBlockEntity>;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        updateWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): void;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isTrackAxisAlongFirstCoordinate(arg0: Internal.BlockState_): boolean;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        getNextSize(arg0: Internal.Level_, arg1: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        fluidState(arg0: Internal.BlockState_): Internal.FluidState;
        isOnIncompatibleTrack(arg0: Internal.Carriage_, arg1: boolean): boolean;
        getVersion(arg0: Internal.BlockState_, arg1: boolean): Internal.BlockState;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.StandardBogeyBlockEntity;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        getConnectorAnchorOffset(): Vec3d;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        static registerStandardBogey(arg0: ResourceLocation_): void;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getNextStyle(arg0: Internal.BogeyStyle_): Internal.BogeyStyle;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.StandardBogeyBlockEntity>): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get wheelRadius(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        get blockEntityType(): Internal.BlockEntityType<Internal.StandardBogeyBlockEntity>
        set requiresTool(v: boolean)
        get wheelPointSpacing(): number
        get defaultStyle(): Internal.BogeyStyle
        get size(): Internal.BogeySizes$BogeySize
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        get blockEntityClass(): typeof Internal.StandardBogeyBlockEntity
        set soundType(arg0: SoundType_)
        get bogeyUpDirection(): Internal.Direction
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get connectorAnchorOffset(): Vec3d
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type StandardBogeyBlock_ = StandardBogeyBlock;
    class BlockColumnConfiguration extends Internal.Record implements Internal.FeatureConfiguration {
        constructor(arg0: Internal.List_<Internal.BlockColumnConfiguration$Layer>, arg1: Internal.Direction_, arg2: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg3: boolean)
        getClass(): typeof any;
        static layer(arg0: Internal.IntProvider_, arg1: Internal.BlockStateProvider_): Internal.BlockColumnConfiguration$Layer;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        toString(): string;
        static simple(arg0: Internal.IntProvider_, arg1: Internal.BlockStateProvider_): Internal.BlockColumnConfiguration;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        allowedPlacement(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        layers(): Internal.List<Internal.BlockColumnConfiguration$Layer>;
        wait(): void;
        wait(arg0: number): void;
        prioritizeTip(): boolean;
        equals(arg0: any): boolean;
        direction(): Internal.Direction;
        get class(): typeof any
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        static readonly CODEC: Internal.Codec<Internal.BlockColumnConfiguration>;
    }
    type BlockColumnConfiguration_ = BlockColumnConfiguration;
    class RenderType$CompositeRenderType extends Internal.RenderType {
        static cutout(): Internal.RenderType;
        static entityTranslucentEmissive(arg0: ResourceLocation_): Internal.RenderType;
        static textIntensitySeeThrough(arg0: ResourceLocation_): Internal.RenderType;
        static beaconBeam(arg0: ResourceLocation_, arg1: boolean): Internal.RenderType;
        static entitySolid(arg0: ResourceLocation_): Internal.RenderType;
        affectsCrumbling(): boolean;
        outline(): Internal.Optional<Internal.RenderType>;
        static lines(): Internal.RenderType;
        static textBackgroundSeeThrough(): Internal.RenderType;
        notify(): void;
        static entityCutout(arg0: ResourceLocation_): Internal.RenderType;
        static entityTranslucent(arg0: ResourceLocation_): Internal.RenderType;
        static entityNoOutline(arg0: ResourceLocation_): Internal.RenderType;
        clearRenderState(): void;
        static entityShadow(arg0: ResourceLocation_): Internal.RenderType;
        static tripwire(): Internal.RenderType;
        static entityCutoutNoCull(arg0: ResourceLocation_): Internal.RenderType;
        setupRenderState(): void;
        static translucentNoCrumbling(): Internal.RenderType;
        static entityGlint(): Internal.RenderType;
        static debugFilledBox(): Internal.RenderType;
        static guiOverlay(): Internal.RenderType;
        static energySwirl(arg0: ResourceLocation_, arg1: number, arg2: number): Internal.RenderType;
        getChunkLayerId(): number;
        static text(arg0: ResourceLocation_): Internal.RenderType;
        static outline(arg0: ResourceLocation_): Internal.RenderType;
        static textBackground(): Internal.RenderType;
        static endPortal(): Internal.RenderType;
        mode(): Internal.VertexFormat$Mode;
        static guiTextHighlight(): Internal.RenderType;
        static leash(): Internal.RenderType;
        static glintTranslucent(): Internal.RenderType;
        static catnip$create(arg0: string, arg1: Internal.VertexFormat_, arg2: Internal.VertexFormat$Mode_, arg3: number, arg4: boolean, arg5: boolean, arg6: Internal.RenderType$CompositeState_): Internal.RenderType$CompositeRenderType;
        static create(arg0: string, arg1: Internal.VertexFormat_, arg2: Internal.VertexFormat$Mode_, arg3: number, arg4: Internal.RenderType$CompositeState_): Internal.RenderType$CompositeRenderType;
        static entityCutoutNoCull(arg0: ResourceLocation_, arg1: boolean): Internal.RenderType;
        static translucentMovingBlock(): Internal.RenderType;
        static itemEntityTranslucentCull(arg0: ResourceLocation_): Internal.RenderType;
        static armorCutoutNoCull(arg0: ResourceLocation_): Internal.RenderType;
        static armorGlint(): Internal.RenderType;
        static debugLineStrip(arg0: number): Internal.RenderType;
        end(arg0: Internal.BufferBuilder_, arg1: Internal.VertexSorting_): void;
        isOutline(): boolean;
        wait(): void;
        static glintDirect(): Internal.RenderType;
        static entityGlintDirect(): Internal.RenderType;
        static debugSectionQuads(): Internal.RenderType;
        static eyes(arg0: ResourceLocation_): Internal.RenderType;
        static entityCutoutNoCullZOffset(arg0: ResourceLocation_, arg1: boolean): Internal.RenderType;
        bufferSize(): number;
        static textSeeThrough(arg0: ResourceLocation_): Internal.RenderType;
        static entityTranslucent(arg0: ResourceLocation_, arg1: boolean): Internal.RenderType;
        getClass(): typeof any;
        static catnip$create_$md$3cdd5f$0(arg0: string, arg1: Internal.VertexFormat_, arg2: Internal.VertexFormat$Mode_, arg3: number, arg4: boolean, arg5: boolean, arg6: Internal.RenderType$CompositeState_): Internal.RenderType$CompositeRenderType;
        static create(arg0: string, arg1: Internal.VertexFormat_, arg2: Internal.VertexFormat$Mode_, arg3: number, arg4: boolean, arg5: boolean, arg6: Internal.RenderType$CompositeState_): Internal.RenderType$CompositeRenderType;
        static entitySmoothCutout(arg0: ResourceLocation_): Internal.RenderType;
        static solid(): Internal.RenderType;
        static dragonExplosionAlpha(arg0: ResourceLocation_): Internal.RenderType;
        wait(arg0: number, arg1: number): void;
        static endGateway(): Internal.RenderType;
        static textIntensity(arg0: ResourceLocation_): Internal.RenderType;
        static glint(): Internal.RenderType;
        static entityTranslucentEmissive(arg0: ResourceLocation_, arg1: boolean): Internal.RenderType;
        format(): Internal.VertexFormat;
        canConsolidateConsecutiveGeometry(): boolean;
        static waterMask(): Internal.RenderType;
        static gui(): Internal.RenderType;
        static chunkBufferLayers(): Internal.List<Internal.RenderType>;
        static entityCutoutNoCullZOffset(arg0: ResourceLocation_): Internal.RenderType;
        static debugQuads(): Internal.RenderType;
        static lineStrip(): Internal.RenderType;
        toString(): string;
        static textPolygonOffset(arg0: ResourceLocation_): Internal.RenderType;
        static crumbling(arg0: ResourceLocation_): Internal.RenderType;
        static guiGhostRecipeOverlay(): Internal.RenderType;
        notifyAll(): void;
        static entityDecal(arg0: ResourceLocation_): Internal.RenderType;
        static armorEntityGlint(): Internal.RenderType;
        static cutoutMipped(): Internal.RenderType;
        asOptional(): Internal.Optional<Internal.RenderType>;
        static lightning(): Internal.RenderType;
        hashCode(): number;
        wait(arg0: number): void;
        static translucent(): Internal.RenderType;
        static entityTranslucentCull(arg0: ResourceLocation_): Internal.RenderType;
        equals(arg0: any): boolean;
        static textIntensityPolygonOffset(arg0: ResourceLocation_): Internal.RenderType;
        get chunkLayerId(): number
        get outline(): boolean
        get class(): typeof any
    }
    type RenderType$CompositeRenderType_ = RenderType$CompositeRenderType;
    class AppendLoot implements Internal.RuleBlockEntityModifier {
        constructor(arg0: ResourceLocation_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getType(): Internal.RuleBlockEntityModifierType<any>;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        apply(arg0: Internal.RandomSource_, arg1: Internal.CompoundTag_): Internal.CompoundTag;
        get class(): typeof any
        get type(): Internal.RuleBlockEntityModifierType<any>
        static readonly CODEC: Internal.Codec<Internal.AppendLoot>;
    }
    type AppendLoot_ = AppendLoot;
    class LinearPosTest extends Internal.PosRuleTest {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        test(arg0: BlockPos_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.RandomSource_): boolean;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.LinearPosTest>;
    }
    type LinearPosTest_ = LinearPosTest;
    class LevelRenderer implements Internal.ResourceManagerReloadListener, Internal.IEWorldRenderer, Internal.LevelRendererAccessor, com.simibubi.create.foundation.mixin.accessor.LevelRendererAccessor, Internal.AutoCloseable {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.EntityRenderDispatcher_, arg2: Internal.BlockEntityRenderDispatcher_, arg3: Internal.RenderBuffers_)
        getFrustum(): Internal.Frustum;
        getItemEntityTarget(): Internal.RenderTarget;
        needsUpdate(): void;
        entityTarget(): Internal.RenderTarget;
        updateGlobalBlockEntities(arg0: Internal.Collection_<Internal.BlockEntity>, arg1: Internal.Collection_<Internal.BlockEntity>): void;
        getCloudsTarget(): Internal.RenderTarget;
        static renderLineBox(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number): void;
        notify(): void;
        killFrustum(): void;
        getTranslucentTarget(): Internal.RenderTarget;
        create$getCullingFrustum(): Internal.Frustum;
        prepareCullFrustum(arg0: Internal.PoseStack_, arg1: Vec3d_, arg2: Matrix4f_): void;
        static renderVoxelShape(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: Internal.VoxelShape_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: boolean): void;
        countRenderedChunks(): number;
        addRecentlyCompiledChunk(arg0: Internal.ChunkRenderDispatcher$RenderChunk_): void;
        ip_getEntityRenderDispatcher(): Internal.EntityRenderDispatcher;
        tickRain(arg0: Internal.Camera_): void;
        hasRenderedAllChunks(): boolean;
        setBlocksDirty(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        setLevel(arg0: Internal.ClientLevel_): void;
        ip_getBuiltChunkStorage(): Internal.ViewArea;
        static getLightColor(arg0: Internal.BlockAndTintGetter_, arg1: Internal.BlockState_, arg2: BlockPos_): number;
        addParticle(arg0: Internal.ParticleOptions_, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        static "addChainedFilledBoxVertices(com.mojang.blaze3d.vertex.PoseStack,com.mojang.blaze3d.vertex.VertexConsumer,double,double,double,double,double,double,float,float,float,float)"(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        renderClouds(arg0: Internal.PoseStack_, arg1: Matrix4f_, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getTotalChunks(): number;
        tick(): void;
        doEntityOutline(): void;
        static renderLineBox(arg0: Internal.VertexConsumer_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        getEntityStatistics(): string;
        wait(): void;
        getTicks(): number;
        resize(arg0: number, arg1: number): void;
        getChunkBuilder(): Internal.ChunkRenderDispatcher;
        getClass(): typeof any;
        portal_getTransparencyShader(): Internal.PostChain;
        /**
         * @deprecated
        */
        playStreamingMusic(arg0: Internal.SoundEvent_, arg1: BlockPos_): void;
        flywheel$getTicks(): number;
        getChunkStatistics(): string;
        initOutline(): void;
        static addChainedFilledBoxVertices(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        setSectionDirty(arg0: number, arg1: number, arg2: number): void;
        isChunkCompiled(arg0: BlockPos_): boolean;
        portal_setTransparencyShader(arg0: Internal.PostChain_): void;
        create$getCapturedFrustum(): Internal.Frustum;
        static addChainedFilledBoxVertices(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        wait(arg0: number, arg1: number): void;
        destroyBlockProgress(arg0: number, arg1: BlockPos_, arg2: number): void;
        static renderLineBox(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        addParticle(arg0: Internal.ParticleOptions_, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        captureFrustum(): void;
        portal_getChunkInfoList(): Internal.ObjectArrayList<any>;
        renderSky(arg0: Internal.PoseStack_, arg1: Matrix4f_, arg2: number, arg3: Internal.Camera_, arg4: boolean, arg5: Internal.Runnable_): void;
        getName(): string;
        shouldShowEntityOutlines(): boolean;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        static "addChainedFilledBoxVertices(com.mojang.blaze3d.vertex.PoseStack,com.mojang.blaze3d.vertex.VertexConsumer,float,float,float,float,float,float,float,float,float,float)"(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        ip_getRenderBuffers(): Internal.RenderBuffers;
        blockChanged(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: number): void;
        getChunkRenderDispatcher(): Internal.ChunkRenderDispatcher;
        static renderLineBox(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: Internal.AABB_, arg3: number, arg4: number, arg5: number, arg6: number): void;
        toString(): string;
        globalLevelEvent(arg0: number, arg1: BlockPos_, arg2: number): void;
        notifyAll(): void;
        onResourceManagerReload(arg0: Internal.ResourceManager_): void;
        playStreamingMusic(arg0: Internal.SoundEvent_, arg1: BlockPos_, arg2: Internal.RecordItem_): void;
        portal_setChunkInfoList(arg0: Internal.ObjectArrayList_<any>): void;
        allChanged(): void;
        portal_setFrustum(arg0: Internal.Frustum_): void;
        setBlockDirty(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.BlockState_): void;
        getParticlesTarget(): Internal.RenderTarget;
        ip_setRenderBuffers(arg0: Internal.RenderBuffers_): void;
        renderLevel(arg0: Internal.PoseStack_, arg1: number, arg2: number, arg3: boolean, arg4: Internal.Camera_, arg5: Internal.GameRenderer_, arg6: Internal.LightTexture_, arg7: Matrix4f_): void;
        setSectionDirtyWithNeighbors(arg0: number, arg1: number, arg2: number): void;
        levelEvent(arg0: number, arg1: BlockPos_, arg2: number): void;
        getLastViewDistance(): number;
        hashCode(): number;
        portal_getFrustum(): Internal.Frustum;
        getWeatherTarget(): Internal.RenderTarget;
        close(): void;
        clear(): void;
        wait(arg0: number): void;
        ip_myRenderEntity(arg0: Internal.Entity_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.PoseStack_, arg6: Internal.MultiBufferSource_): void;
        static getLightColor(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_): number;
        graphicsChanged(): void;
        equals(arg0: any): boolean;
        portal_fullyDispose(): void;
        get frustum(): Internal.Frustum
        get itemEntityTarget(): Internal.RenderTarget
        get cloudsTarget(): Internal.RenderTarget
        get translucentTarget(): Internal.RenderTarget
        set level(arg0: Internal.ClientLevel_)
        get totalChunks(): number
        get entityStatistics(): string
        get ticks(): number
        get chunkBuilder(): Internal.ChunkRenderDispatcher
        get class(): typeof any
        get chunkStatistics(): string
        get name(): string
        get chunkRenderDispatcher(): Internal.ChunkRenderDispatcher
        get particlesTarget(): Internal.RenderTarget
        get lastViewDistance(): number
        get weatherTarget(): Internal.RenderTarget
        static readonly CHUNK_SIZE: (16) & (number);
        static readonly DIRECTIONS: Internal.Direction[];
    }
    type LevelRenderer_ = LevelRenderer;
    abstract class Type$TypeError {
        constructor(arg0: string)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type Type$TypeError_ = Type$TypeError;
    abstract class Reader implements Internal.Closeable, Internal.Readable {
        getClass(): typeof any;
        toString(): string;
        read(): number;
        markSupported(): boolean;
        mark(arg0: number): void;
        notifyAll(): void;
        "read(char[])"(arg0: string[]): number;
        abstract read(arg0: string[], arg1: number, arg2: number): number;
        ready(): boolean;
        skip(arg0: number): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static nullReader(): Internal.Reader;
        "read(java.nio.CharBuffer)"(arg0: Internal.CharBuffer_): number;
        transferTo(arg0: Internal.Writer_): number;
        hashCode(): number;
        read(arg0: Internal.CharBuffer_): number;
        wait(): void;
        abstract close(): void;
        wait(arg0: number): void;
        read(arg0: string[]): number;
        reset(): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type Reader_ = Reader;
    interface CreativeModeTab$Output {
        acceptAll(arg0: Internal.Collection_<Internal.ItemStack>, arg1: Internal.CreativeModeTab$TabVisibility_): void;
        accept(arg0: Internal.ItemStack_): void;
        "accept(net.minecraft.world.level.ItemLike,net.minecraft.world.item.CreativeModeTab$TabVisibility)"(arg0: Internal.ItemLike_, arg1: Internal.CreativeModeTab$TabVisibility_): void;
        abstract accept(arg0: Internal.ItemStack_, arg1: Internal.CreativeModeTab$TabVisibility_): void;
        "accept(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): void;
        abstract "accept(net.minecraft.world.item.ItemStack,net.minecraft.world.item.CreativeModeTab$TabVisibility)"(arg0: Internal.ItemStack_, arg1: Internal.CreativeModeTab$TabVisibility_): void;
        accept(arg0: Internal.ItemLike_, arg1: Internal.CreativeModeTab$TabVisibility_): void;
        acceptAll(arg0: Internal.Collection_<Internal.ItemStack>): void;
        accept(arg0: Internal.ItemLike_): void;
        "accept(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): void;
    }
    type CreativeModeTab$Output_ = CreativeModeTab$Output;
    interface DoubleListIterator extends Internal.DoubleBidirectionalIterator, Internal.ListIterator<number> {
        /**
         * @deprecated
        */
        add(arg0: any): void;
        abstract nextIndex(): number;
        forEachRemaining(arg0: any): void;
        forEachRemaining(arg0: it.unimi.dsi.fastutil.doubles.DoubleConsumer_): void;
        "forEachRemaining(java.util.function.DoubleConsumer)"(arg0: Internal.DoubleConsumer_): void;
        /**
         * @deprecated
        */
        next(): any;
        /**
         * @deprecated
        */
        set(arg0: any): void;
        /**
         * @deprecated
        */
        "add(java.lang.Double)"(arg0: number): void;
        abstract nextDouble(): number;
        "forEachRemaining(it.unimi.dsi.fastutil.doubles.DoubleConsumer)"(arg0: it.unimi.dsi.fastutil.doubles.DoubleConsumer_): void;
        abstract previousDouble(): number;
        /**
         * @deprecated
        */
        "set(java.lang.Object)"(arg0: any): void;
        /**
         * @deprecated
        */
        "set(java.lang.Double)"(arg0: number): void;
        remove(): void;
        /**
         * @deprecated
        */
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        add(arg0: number): void;
        /**
         * @deprecated
        */
        set(arg0: number): void;
        forEachRemaining(arg0: Internal.DoubleConsumer_): void;
        /**
         * @deprecated
        */
        "add(java.lang.Object)"(arg0: any): void;
        /**
         * @deprecated
        */
        previous(): any;
        abstract previousIndex(): number;
        skip(arg0: number): number;
        "add(double)"(arg0: number): void;
        add(arg0: number): void;
        abstract hasPrevious(): boolean;
        set(arg0: number): void;
        "forEachRemaining(java.lang.Object)"(arg0: any): void;
        /**
         * @deprecated
        */
        "forEachRemaining(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        "set(double)"(arg0: number): void;
        back(arg0: number): number;
        abstract hasNext(): boolean;
        /**
         * @deprecated
        */
        set "(java.lang.Object)"(arg0: any)
        /**
         * @deprecated
        */
        set "(java.lang.Double)"(arg0: number)
        set "(double)"(arg0: number)
    }
    type DoubleListIterator_ = DoubleListIterator;
    interface PrivateKey extends Internal.Key, Internal.Destroyable {
        abstract getAlgorithm(): string;
        abstract getFormat(): string;
        destroy(): void;
        isDestroyed(): boolean;
        abstract getEncoded(): number[];
        get algorithm(): string
        get format(): string
        get destroyed(): boolean
        get encoded(): number[]
        /**
         * @deprecated
        */
        readonly serialVersionUID: (6034044314589513430) & (number);
    }
    type PrivateKey_ = PrivateKey;
    class NetworkEvent$Context {
        getClass(): typeof any;
        setPacketHandled(arg0: boolean): void;
        getPacketDispatcher(): Internal.NetworkEvent$PacketDispatcher;
        toString(): string;
        notifyAll(): void;
        attr<T>(arg0: Internal.AttributeKey_<T>): io.netty.util.Attribute<T>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        enqueueWork(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        getPacketHandled(): boolean;
        getDirection(): Internal.NetworkDirection;
        wait(): void;
        wait(arg0: number): void;
        getSender(): Internal.ServerPlayer;
        equals(arg0: any): boolean;
        getNetworkManager(): Internal.Connection;
        get class(): typeof any
        set packetHandled(arg0: boolean)
        get packetDispatcher(): Internal.NetworkEvent$PacketDispatcher
        get packetHandled(): boolean
        get direction(): Internal.NetworkDirection
        get sender(): Internal.ServerPlayer
        get networkManager(): Internal.Connection
    }
    type NetworkEvent$Context_ = NetworkEvent$Context;
    class EntityRendererProvider$Context {
        constructor(arg0: Internal.EntityRenderDispatcher_, arg1: Internal.ItemRenderer_, arg2: Internal.BlockRenderDispatcher_, arg3: Internal.ItemInHandRenderer_, arg4: Internal.ResourceManager_, arg5: Internal.EntityModelSet_, arg6: Internal.Font_)
        getClass(): typeof any;
        toString(): string;
        getItemRenderer(): Internal.ItemRenderer;
        getModelManager(): Internal.ModelManager;
        notifyAll(): void;
        getBlockRenderDispatcher(): Internal.BlockRenderDispatcher;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getResourceManager(): Internal.ResourceManager;
        bakeLayer(arg0: Internal.ModelLayerLocation_): Internal.ModelPart;
        getFont(): Internal.Font;
        hashCode(): number;
        getItemInHandRenderer(): Internal.ItemInHandRenderer;
        getModelSet(): Internal.EntityModelSet;
        wait(): void;
        getEntityRenderDispatcher(): Internal.EntityRenderDispatcher;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get itemRenderer(): Internal.ItemRenderer
        get modelManager(): Internal.ModelManager
        get blockRenderDispatcher(): Internal.BlockRenderDispatcher
        get resourceManager(): Internal.ResourceManager
        get font(): Internal.Font
        get itemInHandRenderer(): Internal.ItemInHandRenderer
        get modelSet(): Internal.EntityModelSet
        get entityRenderDispatcher(): Internal.EntityRenderDispatcher
    }
    type EntityRendererProvider$Context_ = EntityRendererProvider$Context;
    class ModConfig {
        constructor(arg0: Internal.ModConfig$Type_, arg1: Internal.IConfigSpec_<any>, arg2: Internal.ModContainer_)
        constructor(arg0: Internal.ModConfig$Type_, arg1: Internal.IConfigSpec_<any>, arg2: Internal.ModContainer_, arg3: string)
        getClass(): typeof any;
        toString(): string;
        getConfigData(): Internal.CommentedConfig;
        notifyAll(): void;
        getModId(): string;
        getHandler(): Internal.ConfigFileTypeHandler;
        notify(): void;
        save(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getFileName(): string;
        getType(): Internal.ModConfig$Type;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        acceptSyncedConfig(arg0: number[]): void;
        getSpec<T extends Internal.IConfigSpec<T>>(): Internal.IConfigSpec<T>;
        getFullPath(): Internal.Path;
        get class(): typeof any
        get configData(): Internal.CommentedConfig
        get modId(): string
        get handler(): Internal.ConfigFileTypeHandler
        get fileName(): string
        get type(): Internal.ModConfig$Type
        get spec(): Internal.IConfigSpec<T>
        get fullPath(): Internal.Path
    }
    type ModConfig_ = ModConfig;
    class ServerStatus$Version extends Internal.Record {
        constructor(name: string, protocol: number)
        name(): string;
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        protocol(): number;
        notifyAll(): void;
        wait(arg0: number): void;
        static current(): Internal.ServerStatus$Version;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.ServerStatus$Version>;
    }
    type ServerStatus$Version_ = ServerStatus$Version;
    class TimeArgument implements Internal.ArgumentType<number> {
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        listSuggestions<S>(arg0: Internal.CommandContext_<S>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getExamples(): Internal.Collection<string>;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static time(arg0: number): Internal.TimeArgument;
        static time(): Internal.TimeArgument;
        equals(arg0: any): boolean;
        parse(arg0: Internal.StringReader_): any;
        get class(): typeof any
        get examples(): Internal.Collection<string>
    }
    type TimeArgument_ = TimeArgument;
    class Message {
        constructor(arg0: string, arg1: any_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        getTypeColour(): number[];
        wait(arg0: number): void;
        getText(): string;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get typeColour(): number[]
        get text(): string
    }
    type Message_ = Message;
    class RegisterEvent extends Internal.Event implements Internal.IModBusEvent {
        constructor()
        setCanceled(arg0: boolean): void;
        getResult(): Internal.Event$Result;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        getForgeRegistry<T>(): Internal.IForgeRegistry<T>;
        register<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>, arg1: ResourceLocation_, arg2: Internal.Supplier_<T>): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        register<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>, arg1: Internal.Consumer_<Internal.RegisterEvent$RegisterHelper<T>>): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        getVanillaRegistry<T>(): Internal.Registry<T>;
        equals(arg0: any): boolean;
        getRegistryKey(): Internal.ResourceKey<Internal.Registry<any>>;
        set canceled(arg0: boolean)
        get result(): Internal.Event$Result
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get forgeRegistry(): Internal.IForgeRegistry<T>
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get vanillaRegistry(): Internal.Registry<T>
        get registryKey(): Internal.ResourceKey<Internal.Registry<any>>
    }
    type RegisterEvent_ = RegisterEvent;
    class FloatArgumentInfo$Template implements Internal.ArgumentTypeInfo$Template<Internal.FloatArgumentType> {
        getClass(): typeof any;
        instantiate(arg0: Internal.CommandBuildContext_): Internal.ArgumentType<any>;
        type(): Internal.ArgumentTypeInfo<Internal.FloatArgumentType, any>;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type FloatArgumentInfo$Template_ = FloatArgumentInfo$Template;
    class ZombieHorse extends Internal.AbstractHorse {
        constructor(arg0: Internal.EntityType_<Internal.ZombieHorse>, arg1: Internal.Level_)
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isSuppressingBounce(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        isOnFire(): boolean;
        getOwner(): Internal.LivingEntity;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        getFallFlyingTicks(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        dropLeash(arg0: boolean, arg1: boolean): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        setXxa(arg0: number): void;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        setMotionZ(z: number): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getBlockY(): number;
        isSpectator(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        getRandomZ(arg0: number): number;
        setAggressive(arg0: boolean): void;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        getRemovalReason(): Internal.Entity$RemovalReason;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        isEating(): boolean;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        invalidateCaps(): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        getName(): Internal.Component;
        playAmbientSound(): void;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getKillCredit(): Internal.LivingEntity;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        sinkInFluid(arg0: Internal.FluidType_): void;
        hasPermissions(arg0: number): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        onlyOpCanSetNbt(): boolean;
        fireImmune(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        create$callSpawnItemParticles(arg0: Internal.ItemStack_, arg1: number): void;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: Internal.Component_): void;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        getHeadRotSpeed(): number;
        getYHeadRot(): number;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        getWalkTargetValue(arg0: BlockPos_): number;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        die(arg0: DamageSource_): void;
        removeAllEffects(): boolean;
        fedFood(arg0: Internal.Player_, arg1: Internal.ItemStack_): Internal.InteractionResult;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        getSaddleSoundEvent(): Internal.SoundEvent;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getLeashHolder(): Internal.Entity;
        getX(arg0: number): number;
        getSensing(): Internal.Sensing;
        getLegsArmorItem(): Internal.ItemStack;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        shouldDropExperience(): boolean;
        hasPassenger(arg0: Internal.Entity_): boolean;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): Internal.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        getArrowCount(): number;
        getMoveControl(): Internal.MoveControl;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        setStanding(arg0: boolean): void;
        playSound(arg0: Internal.SoundEvent_): void;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        ate(): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        notify(): void;
        setPersistenceRequired(): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        canFallInLove(): boolean;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        getRotationVector(): Internal.Vec2;
        getHurtDir(): number;
        isSprinting(): boolean;
        isMaxGroupSizeReached(arg0: number): boolean;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        clearSleepingPos(): void;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        getLastHurtMob(): Internal.LivingEntity;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        getLastDamageSource(): DamageSource;
        getSoundSource(): Internal.SoundSource;
        isJumping(): boolean;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        ageUp(arg0: number): void;
        ip_isCollidingWithPortal(): boolean;
        getRestrictCenter(): BlockPos;
        isLeftHanded(): boolean;
        removeVehicle(): void;
        setZ(z: number): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        finalizeSpawnChildFromBreeding(arg0: Internal.ServerLevel_, arg1: Internal.Animal_, arg2: Internal.AgeableMob_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        setIsJumping(arg0: boolean): void;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        getArmorCoverPercentage(): number;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        canChangeDimensions(): boolean;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        getTotalMovementSpeed(): number;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        attack(hp: number): void;
        modifyExpressionValue$zkk000$create$playerHidingAsBoxIsCrouchingNotSwimming(arg0: boolean, arg1: Internal.Pose_): boolean;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getAttributes(): Internal.AttributeMap;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        spawnChildFromBreeding(arg0: Internal.ServerLevel_, arg1: Internal.Animal_): void;
        setInLoveTime(arg0: number): void;
        isSwimming(): boolean;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        getPortalWaitTime(): number;
        getBlockStateOn(): Internal.BlockState;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        setOwnerUUID(arg0: Internal.UUID_): void;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(x: number, y: number, z: number, yaw: number, pitch: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        isUndead(): boolean;
        static createBaseHorseAttributes(): Internal.AttributeSupplier$Builder;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        getStepHeight(): number;
        stopUsingItem(): void;
        isSleeping(): boolean;
        acceptsFailure(): boolean;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setCanPickUpLoot(arg0: boolean): void;
        getMainHandItem(): Internal.ItemStack;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        canEatGrass(): boolean;
        setSilent(arg0: boolean): void;
        openCustomInventoryScreen(arg0: Internal.Player_): void;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        hasExactlyOnePlayerPassenger(): boolean;
        canBeSeenAsEnemy(): boolean;
        setLeftHanded(arg0: boolean): void;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        isUsingItem(): boolean;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        onPlayerJump(arg0: number): void;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        serializeNBT(): Internal.CompoundTag;
        getForgePersistentData(): Internal.CompoundTag;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        canMate(arg0: Internal.Animal_): boolean;
        maxUpStep(): number;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        isAlive(): boolean;
        startSleeping(arg0: BlockPos_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        getTags(): Internal.Set<string>;
        getViewVector(arg0: number): Vec3d;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        onPathfindingStart(): void;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        isLeashed(): boolean;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        ageUp(arg0: number, arg1: boolean): void;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        setPose(arg0: Internal.Pose_): void;
        getReachDistance(): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        canWearArmor(): boolean;
        getBreedOffspring(arg0: Internal.ServerLevel_, arg1: Internal.AgeableMob_): Internal.AgeableMob;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
        static ip_CollideWithShapes_$md$3cdd5f$0(arg0: Vec3d_, arg1: Internal.AABB_, arg2: Internal.List_<any>): Vec3d;
        "getServer()"(): Internal.MinecraftServer;
        getAmbientStandSound(): Internal.SoundEvent;
        mobInteract(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        wasExperienceConsumed(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        foodEaten(is: Internal.ItemStack_): void;
        onClientRemoval(): void;
        self(): Internal.LivingEntity;
        ip_unsetRemoved(): void;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        setRotation(yaw: number, pitch: number): void;
        modifyReturnValue$zkk000$create$onFireImmune(arg0: boolean): boolean;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        setBred(arg0: boolean): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        getJumpControl(): Internal.JumpControl;
        getFeetArmorItem(): Internal.ItemStack;
        isSaddleable(): boolean;
        static getViewScale(): number;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        requiresCustomPersistence(): boolean;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        getCombatTracker(): Internal.CombatTracker;
        getCustomJump(): number;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        canBreed(): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        ip_getPortalCollisionHandler(): Internal.PortalCollisionHandler;
        tell(message: Internal.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        isFullyFrozen(): boolean;
        ip_notifyCollidingWithPortal(arg0: Internal.Entity_): void;
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getScale(): number;
        isSuppressingSlidingDownLadder(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(arg0: Internal.SoundEvent_): void;
        getPitch(): number;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        rotate(arg0: Internal.Rotation_): number;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        getMaxTemper(): number;
        clearRestriction(): void;
        "self()"(): Internal.LivingEntity;
        getAge(): number;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        isAggressive(): boolean;
        isWearingArmor(): boolean;
        setYya(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        isFood(arg0: Internal.ItemStack_): boolean;
        setBaby(arg0: boolean): void;
        getTemper(): number;
        getLastHurtByMob(): Internal.LivingEntity;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        tameWithName(arg0: Internal.Player_): boolean;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        removeFreeWill(): void;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        distanceToSqr(arg0: Vec3d_): number;
        getEyeInFluidType(): Internal.FluidType;
        isSteppingCarefully(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        isFallFlying(): boolean;
        getEncodeId(): string;
        makeMad(): void;
        getY(arg0: number): number;
        getMaxHeadXRot(): number;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        isSaddled(): boolean;
        canEnterPose(arg0: Internal.Pose_): boolean;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setHealth(arg0: number): void;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        getAmbientStandInterval(): number;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        getUsedItemHand(): Internal.InteractionHand;
        ip_setPortalCollisionHandler(arg0: Internal.PortalCollisionHandler_): void;
        setDefaultMovementSpeed(speed: number): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        getBrain(): Internal.Brain<any>;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getControllingPassenger(): Internal.LivingEntity;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        getScriptType(): Internal.ScriptType;
        equipSaddle(arg0: Internal.SoundSource_): void;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getEyeY(): number;
        skipDropExperience(): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        getStandAnim(arg0: number): number;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        isAffectedByPotions(): boolean;
        addTag(arg0: string): boolean;
        playerTouch(arg0: Internal.Player_): void;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        isWithinRestriction(arg0: BlockPos_): boolean;
        getTeam(): Internal.Team;
        setTicksFrozen(arg0: number): void;
        isArmor(arg0: Internal.ItemStack_): boolean;
        getUseItem(): Internal.ItemStack;
        getMyRidingOffset(): number;
        ip_setWorld(arg0: Internal.Level_): void;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        hasCustomName(): boolean;
        ip_getCollidingPortal(): Internal.Portal;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        getX(): number;
        isVehicle(): boolean;
        setTemper(arg0: number): void;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: Internal.Component_): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        getMaxHeadYRot(): number;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        canBeLeashed(arg0: Internal.Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        handleInsidePortal(arg0: BlockPos_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        isOnRails(): boolean;
        getStingerCount(): number;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        setYaw(arg0: number): void;
        ip_setPositionWithoutTriggeringCallback(arg0: Vec3d_): void;
        getPickRadius(): number;
        isPathFinding(): boolean;
        isRemoved(): boolean;
        handleStopJump(): void;
        getEatAnim(arg0: number): number;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        spawnAnim(): void;
        getJumpBoostPower(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        self(): Internal.Entity;
        refreshDimensions(): void;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getEyePosition(arg0: number): Vec3d;
        setShiftKeyDown(arg0: boolean): void;
        getPassengers(): Internal.EntityArrayList;
        standIfPossible(): void;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        getFirstPassenger(): Internal.Entity;
        heal(arg0: number): void;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        checkSlowFallDistance(): void;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getLookAngle(): Vec3d;
        ip_tickCollidingPortal(): void;
        getAmbientSoundInterval(): number;
        setArrowCount(arg0: number): void;
        getMotionZ(): number;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        isTamed(): boolean;
        getBedOrientation(): Internal.Direction;
        ejectPassengers(): void;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        getProfile(): Internal.GameProfile;
        setInLove(arg0: Internal.Player_): void;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        getLookControl(): Internal.LookControl;
        ip_isRecentlyCollidingWithPortal(): boolean;
        isBred(): boolean;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        static getSpeedUpSecondsWhenFeeding(arg0: number): number;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        position(): Vec3d;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        displayFireAnimation(): boolean;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        onLeaveCombat(): void;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        getFeetBlockState(): Internal.BlockState;
        isWithinRestriction(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        getSleepingPos(): Internal.Optional<BlockPos>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): Internal.Component;
        getClass(): typeof any;
        "self()"(): Internal.Entity;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        getJumpCooldown(): number;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        setAge(arg0: number): void;
        getTarget(): Internal.LivingEntity;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        isInLove(): boolean;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        isInWater(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        ip_getActiveCollisionBox(arg0: Internal.AABB_): Internal.AABB;
        handleStartJump(arg0: number): void;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        swing(arg0: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        getRootVehicle(): Internal.Entity;
        getOwnerUUID(): Internal.UUID;
        onPathfindingDone(): void;
        save(arg0: Internal.CompoundTag_): boolean;
        static ip_CollideWithShapes(arg0: Vec3d_, arg1: Internal.AABB_, arg2: Internal.List_<Internal.VoxelShape>): Vec3d;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        isNoGravity(): boolean;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        getMouthAnim(arg0: number): number;
        resetLove(): void;
        isImmobile(): boolean;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getSpeed(): number;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        imm_ptl_canTeleportThroughPortal(arg0: Internal.Entity_): boolean;
        wait(): void;
        getUuid(): Internal.UUID;
        setOffHandItem(item: Internal.ItemStack_): void;
        spawn(): void;
        setNoAi(arg0: boolean): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        canPickUpLoot(): boolean;
        kill(): void;
        onEnterCombat(): void;
        animateHurt(arg0: number): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        hasRestriction(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        deserializeNBT(arg0: Internal.Tag_): void;
        setEating(arg0: boolean): void;
        revive(): void;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        addDeltaMovement(arg0: Vec3d_): void;
        setTamed(arg0: boolean): void;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): Internal.Component;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTicksRequiredToFreeze(): number;
        catnip$callSetLevel(arg0: Internal.Level_): void;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        getMaxSpawnClusterSize(): number;
        ip_getOrCreatePortalCollisionHandler(): Internal.PortalCollisionHandler;
        canJump(): boolean;
        getUsername(): string;
        getInLoveTime(): number;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        setJumping(arg0: boolean): void;
        getPickResult(): Internal.ItemStack;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        getRandomY(): number;
        getDisplayName(): Internal.Component;
        getMobType(): Internal.MobType;
        travel(arg0: Vec3d_): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        ip_clearCollidingPortal(): void;
        notifyAll(): void;
        hasInventoryChanged(arg0: Internal.Container_): boolean;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        discard(): void;
        sendSystemMessage(arg0: Internal.Component_): void;
        acceptsSuccess(): boolean;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getLoveCause(): Internal.ServerPlayer;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        setId(arg0: number): void;
        getHorizontalFacing(): Internal.Direction;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getType(): string;
        static checkAnimalSpawnRules(arg0: Internal.EntityType_<Internal.Animal>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        checkDespawn(): void;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        extinguish(): void;
        equipArmor(arg0: Internal.Player_, arg1: Internal.ItemStack_): void;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "swing(net.minecraft.world.InteractionHand)"(hand: Internal.InteractionHand_): void;
        modifyTemper(arg0: number): number;
        isInvertedHealAndHarm(): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        containerChanged(arg0: Internal.Container_): void;
        runCommand(command: string): number;
        isStanding(): boolean;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        set defaultMovementSpeedMultiplier(speed: number)
        get suppressingBounce(): boolean
        set target(arg0: Internal.LivingEntity_)
        get onFire(): boolean
        get owner(): Internal.LivingEntity
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        set xxa(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        set motionZ(z: number)
        get blockY(): number
        get spectator(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        set aggressive(arg0: boolean)
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        get eating(): boolean
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get name(): Internal.Component
        get controlledVehicle(): Internal.Entity
        get armorValue(): number
        get killCredit(): Internal.LivingEntity
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        get maxFallDistance(): number
        get ticksFrozen(): number
        get voicePitch(): number
        set statusMessage(message: Internal.Component_)
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get headRotSpeed(): number
        get YHeadRot(): number
        set absorptionAmount(arg0: number)
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get glowing(): boolean
        get attackable(): boolean
        get saddleSoundEvent(): Internal.SoundEvent
        get underWater(): boolean
        get leashHolder(): Internal.Entity
        get sensing(): Internal.Sensing
        get legsArmorItem(): Internal.ItemStack
        get deltaMovement(): Vec3d
        set secondsOnFire(arg0: number)
        get "displayName()"(): Internal.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get moveControl(): Internal.MoveControl
        set standing(arg0: boolean)
        get defaultMovementSpeed(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        get lastHurtMob(): Internal.LivingEntity
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get lastDamageSource(): DamageSource
        get soundSource(): Internal.SoundSource
        get jumping(): boolean
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        get restrictCenter(): BlockPos
        get leftHanded(): boolean
        set z(z: number)
        get y(): number
        set isJumping(arg0: boolean)
        get blocking(): boolean
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get attributes(): Internal.AttributeMap
        get spawnCancelled(): boolean
        set inLoveTime(arg0: number)
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get portalWaitTime(): number
        get blockStateOn(): Internal.BlockState
        set ownerUUID(arg0: Internal.UUID_)
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get undead(): boolean
        get stepHeight(): number
        get sleeping(): boolean
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        set canPickUpLoot(arg0: boolean)
        get mainHandItem(): Internal.ItemStack
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get tags(): Internal.Set<string>
        get lastAttacker(): Internal.LivingEntity
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        set position(block: Internal.BlockContainerJS_)
        get leashed(): boolean
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        get ambientStandSound(): Internal.SoundEvent
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set bred(arg0: boolean)
        set chestArmorItem(item: Internal.ItemStack_)
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get feetArmorItem(): Internal.ItemStack
        get saddleable(): boolean
        get viewScale(): number
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        get customJump(): number
        get noAi(): boolean
        get chestArmorItem(): Internal.ItemStack
        get fullyFrozen(): boolean
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get blockZ(): number
        get silent(): boolean
        get pitch(): number
        get random(): Internal.RandomSource
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get maxTemper(): number
        get age(): number
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        get wearingArmor(): boolean
        set yya(arg0: number)
        set baby(arg0: boolean)
        get temper(): number
        get lastHurtByMob(): Internal.LivingEntity
        get inWaterOrBubble(): boolean
        get portalCooldown(): number
        get item(): Internal.ItemStack
        get ignoringBlockTriggers(): boolean
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get fallFlying(): boolean
        get encodeId(): string
        get maxHeadXRot(): number
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        get saddled(): boolean
        set totalMovementSpeedMultiplier(speed: number)
        set health(arg0: number)
        get ambientStandInterval(): number
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get eyeY(): number
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get affectedByPotions(): boolean
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        get living(): boolean
        get x(): number
        get vehicle(): boolean
        set temper(arg0: number)
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: Internal.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get maxHeadYRot(): number
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get lootTableSeed(): number
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        get potionEffects(): Internal.EntityPotionEffectsJS
        get onRails(): boolean
        get stingerCount(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        set yaw(arg0: number)
        get pickRadius(): number
        get pathFinding(): boolean
        get removed(): boolean
        get jumpBoostPower(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get firstPassenger(): Internal.Entity
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        get lookAngle(): Vec3d
        get ambientSoundInterval(): number
        set arrowCount(arg0: number)
        get motionZ(): number
        get persistenceRequired(): boolean
        get invisible(): boolean
        get tamed(): boolean
        get bedOrientation(): Internal.Direction
        get profile(): Internal.GameProfile
        set inLove(arg0: Internal.Player_)
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        get bred(): boolean
        get offHandItem(): Internal.ItemStack
        get crouching(): boolean
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get withinRestriction(): boolean
        get sleepingPos(): Internal.Optional<BlockPos>
        get customName(): Internal.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get jumpCooldown(): number
        get boundingBoxForCulling(): Internal.AABB
        set age(arg0: number)
        get target(): Internal.LivingEntity
        get inLove(): boolean
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
        get rootVehicle(): Internal.Entity
        get ownerUUID(): Internal.UUID
        get noGravity(): boolean
        get immobile(): boolean
        get speed(): number
        get uuid(): Internal.UUID
        set offHandItem(item: Internal.ItemStack_)
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get headArmorItem(): Internal.ItemStack
        set eating(arg0: boolean)
        get bbWidth(): number
        set tamed(arg0: boolean)
        get "name()"(): Internal.Component
        get ticksRequiredToFreeze(): number
        get maxSpawnClusterSize(): number
        get username(): string
        get inLoveTime(): number
        get pickable(): boolean
        set YHeadRot(arg0: number)
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get randomY(): number
        get displayName(): Internal.Component
        get mobType(): Internal.MobType
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get loveCause(): Internal.ServerPlayer
        get lastClimbablePos(): Internal.Optional<BlockPos>
        set id(arg0: number)
        get horizontalFacing(): Internal.Direction
        get type(): string
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get restrictRadius(): number
        get invertedHealAndHarm(): boolean
        get freezing(): boolean
        get standing(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
    }
    type ZombieHorse_ = ZombieHorse;
    class EvokerFangs extends Internal.Entity implements Internal.TraceableEntity {
        constructor(arg0: Internal.EntityType_<Internal.EvokerFangs>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.LivingEntity_)
        ip_notifyCollidingWithPortal(arg0: Internal.Entity_): void;
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        isSuppressingBounce(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
        getPitch(): number;
        isOnFire(): boolean;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        rotate(arg0: Internal.Rotation_): number;
        getOwner(): Internal.LivingEntity;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        gameEvent(arg0: Internal.GameEvent_): void;
        alwaysAccepts(): boolean;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        isVisuallyCrawling(): boolean;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMotionZ(z: number): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        ignoreExplosion(): boolean;
        canFreeze(): boolean;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        getBlockY(): number;
        isSpectator(): boolean;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        getRandomZ(arg0: number): number;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getPosition(arg0: number): Vec3d;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        getRemovalReason(): Internal.Entity$RemovalReason;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        canUpdate(arg0: boolean): void;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        distanceToSqr(arg0: Vec3d_): number;
        getEyeInFluidType(): Internal.FluidType;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        isSteppingCarefully(): boolean;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        getEncodeId(): string;
        getY(arg0: number): number;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        invalidateCaps(): void;
        getName(): Internal.Component;
        canEnterPose(arg0: Internal.Pose_): boolean;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        ip_setPortalCollisionHandler(arg0: Internal.PortalCollisionHandler_): void;
        hasPermissions(arg0: number): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getRemainingFireTicks(): number;
        getControllingPassenger(): Internal.LivingEntity;
        getScriptType(): Internal.ScriptType;
        onlyOpCanSetNbt(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        fireImmune(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        getMaxFallDistance(): number;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        getEyeY(): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        setStatusMessage(message: Internal.Component_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        isDescending(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        getYHeadRot(): number;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        addTag(arg0: string): boolean;
        playerTouch(arg0: Internal.Player_): void;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        getTeam(): Internal.Team;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        setTicksFrozen(arg0: number): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        getMyRidingOffset(): number;
        ip_setWorld(arg0: Internal.Level_): void;
        canStartSwimming(): boolean;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        hasCustomName(): boolean;
        ip_getCollidingPortal(): Internal.Portal;
        isLiving(): boolean;
        getX(): number;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        isVehicle(): boolean;
        isAttackable(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: Internal.Component_): void;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        getTeamId(): string;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        isUnderWater(): boolean;
        stopRiding(): void;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        getX(arg0: number): number;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        hasPassenger(arg0: Internal.Entity_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): Internal.Component;
        handleInsidePortal(arg0: BlockPos_): void;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        getAnimationProgress(arg0: number): number;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        isOnRails(): boolean;
        restoreFrom(arg0: Internal.Entity_): void;
        getDimensionChangingDelay(): number;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        setYaw(arg0: number): void;
        ip_setPositionWithoutTriggeringCallback(arg0: Vec3d_): void;
        getPickRadius(): number;
        notify(): void;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        getStringUuid(): string;
        isRemoved(): boolean;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        getRotationVector(): Internal.Vec2;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        refreshDimensions(): void;
        self(): Internal.Entity;
        isSprinting(): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getMotionY(): number;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getEyePosition(arg0: number): Vec3d;
        setShiftKeyDown(arg0: boolean): void;
        getPassengers(): Internal.EntityArrayList;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getServer(): Internal.MinecraftServer;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        isAddedToWorld(): boolean;
        getFirstPassenger(): Internal.Entity;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        checkSlowFallDistance(): void;
        getSoundSource(): Internal.SoundSource;
        getPose(): Internal.Pose;
        touchingUnloadedChunk(): boolean;
        getLookAngle(): Vec3d;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        ip_tickCollidingPortal(): void;
        ip_isCollidingWithPortal(): boolean;
        getMotionZ(): number;
        removeVehicle(): void;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        setZ(z: number): void;
        ejectPassengers(): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getProfile(): Internal.GameProfile;
        static setViewScale(arg0: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        ip_isRecentlyCollidingWithPortal(): boolean;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        position(): Vec3d;
        displayFireAnimation(): boolean;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        setY(y: number): void;
        lavaHurt(): void;
        getFeetBlockState(): Internal.BlockState;
        handleDamageEvent(arg0: DamageSource_): void;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        canChangeDimensions(): boolean;
        getCommandSenderWorld(): Internal.Level;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getCustomName(): Internal.Component;
        getClass(): typeof any;
        getMaxAirSupply(): number;
        isVisuallySwimming(): boolean;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        attack(hp: number): void;
        modifyExpressionValue$zkk000$create$playerHidingAsBoxIsCrouchingNotSwimming(arg0: boolean, arg1: Internal.Pose_): boolean;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getFacing(): Internal.Direction;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        isSwimming(): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setPortalCooldown(): void;
        setX(x: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        isInWater(): boolean;
        getPortalWaitTime(): number;
        getBlockStateOn(): Internal.BlockState;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        ip_getActiveCollisionBox(arg0: Internal.AABB_): Internal.AABB;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        getRootVehicle(): Internal.Entity;
        save(arg0: Internal.CompoundTag_): boolean;
        static ip_CollideWithShapes(arg0: Vec3d_, arg1: Internal.AABB_, arg2: Internal.List_<Internal.VoxelShape>): Vec3d;
        isNoGravity(): boolean;
        getStepHeight(): number;
        acceptsFailure(): boolean;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        updateSwimming(): void;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        imm_ptl_canTeleportThroughPortal(arg0: Internal.Entity_): boolean;
        setPos(arg0: Vec3d_): void;
        wait(): void;
        getUuid(): Internal.UUID;
        spawn(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        setSilent(arg0: boolean): void;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        hasExactlyOnePlayerPassenger(): boolean;
        kill(): void;
        isOnPortalCooldown(): boolean;
        animateHurt(arg0: number): void;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        getParts(): Internal.PartEntity<any>[];
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        deserializeNBT(arg0: Internal.Tag_): void;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        revive(): void;
        serializeNBT(): Internal.CompoundTag;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        addDeltaMovement(arg0: Vec3d_): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        "getName()"(): Internal.Component;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        getTicksRequiredToFreeze(): number;
        /**
         * @deprecated
        */
        maxUpStep(): number;
        catnip$callSetLevel(arg0: Internal.Level_): void;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        ip_getOrCreatePortalCollisionHandler(): Internal.PortalCollisionHandler;
        isAlive(): boolean;
        getBbHeight(): number;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        getTags(): Internal.Set<string>;
        getViewVector(arg0: number): Vec3d;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getPercentFrozen(): number;
        getPickResult(): Internal.ItemStack;
        setPortalCooldown(arg0: number): void;
        getRandomY(): number;
        getDisplayName(): Internal.Component;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        setPose(arg0: Internal.Pose_): void;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        ip_clearCollidingPortal(): void;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        notifyAll(): void;
        getPassengersRidingOffset(): number;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        static ip_CollideWithShapes_$md$3cdd5f$0(arg0: Vec3d_, arg1: Internal.AABB_, arg2: Internal.List_<any>): Vec3d;
        "getServer()"(): Internal.MinecraftServer;
        isFrame(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        discard(): void;
        onClientRemoval(): void;
        ip_unsetRemoved(): void;
        sendSystemMessage(arg0: Internal.Component_): void;
        acceptsSuccess(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        setNoGravity(arg0: boolean): void;
        setRotation(yaw: number, pitch: number): void;
        modifyReturnValue$zkk000$create$onFireImmune(arg0: boolean): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        setId(arg0: number): void;
        getHorizontalFacing(): Internal.Direction;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getType(): string;
        getLightProbePosition(arg0: number): Vec3d;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        checkDespawn(): void;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        static getViewScale(): number;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        getVisualRotationYInDegrees(): number;
        setOwner(arg0: Internal.LivingEntity_): void;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        isDiscrete(): boolean;
        setNbt(nbt: Internal.CompoundTag_): void;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        extinguish(): void;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        ip_getPortalCollisionHandler(): Internal.PortalCollisionHandler;
        tell(message: Internal.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        isFullyFrozen(): boolean;
        runCommand(command: string): number;
        setSharedFlagOnFire(arg0: boolean): void;
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get suppressingBounce(): boolean
        get blockZ(): number
        get silent(): boolean
        get pitch(): number
        get onFire(): boolean
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get owner(): Internal.LivingEntity
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        get visuallyCrawling(): boolean
        set motionZ(z: number)
        get blockY(): number
        get spectator(): boolean
        get inWaterOrBubble(): boolean
        get persistentData(): Internal.CompoundTag
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get ignoringBlockTriggers(): boolean
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get encodeId(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        get name(): Internal.Component
        get controlledVehicle(): Internal.Entity
        get eyePosition(): Vec3d
        get eyeHeight(): number
        get yaw(): number
        set customNameVisible(arg0: boolean)
        get remainingFireTicks(): number
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        get maxFallDistance(): number
        get id(): number
        get ticksFrozen(): number
        get eyeY(): number
        set statusMessage(message: Internal.Component_)
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get descending(): boolean
        get YHeadRot(): number
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get myRidingOffset(): number
        set deltaMovement(arg0: Vec3d_)
        get living(): boolean
        get x(): number
        get glowing(): boolean
        get vehicle(): boolean
        get attackable(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: Internal.Component_)
        get teamId(): string
        get underWater(): boolean
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get deltaMovement(): Vec3d
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        set secondsOnFire(arg0: number)
        get "displayName()"(): Internal.Component
        get onRails(): boolean
        get dimensionChangingDelay(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        set yaw(arg0: number)
        get pickRadius(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        get stringUuid(): string
        get removed(): boolean
        set swimming(arg0: boolean)
        get rotationVector(): Internal.Vec2
        get sprinting(): boolean
        get motionY(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get firstPassenger(): Internal.Entity
        get soundSource(): Internal.SoundSource
        get pose(): Internal.Pose
        get lookAngle(): Vec3d
        get motionZ(): number
        get invisible(): boolean
        set z(z: number)
        get y(): number
        get profile(): Internal.GameProfile
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get airSupply(): number
        get crouching(): boolean
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get commandSenderWorld(): Internal.Level
        get customName(): Internal.Component
        get class(): typeof any
        get maxAirSupply(): number
        get visuallySwimming(): boolean
        get facing(): Internal.Direction
        get swimming(): boolean
        get boundingBoxForCulling(): Internal.AABB
        set sprinting(arg0: boolean)
        set x(x: number)
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
        get portalWaitTime(): number
        get blockStateOn(): Internal.BlockState
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get rootVehicle(): Internal.Entity
        get noGravity(): boolean
        get stepHeight(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        get uuid(): Internal.UUID
        set silent(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get alwaysTicking(): boolean
        get bbWidth(): number
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get "name()"(): Internal.Component
        get inFluidType(): boolean
        get ticksRequiredToFreeze(): number
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get username(): string
        get tags(): Internal.Set<string>
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get percentFrozen(): number
        get pickResult(): Internal.ItemStack
        set portalCooldown(arg0: number)
        get randomY(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set pose(arg0: Internal.Pose_)
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get passengersRidingOffset(): number
        get "server()"(): Internal.MinecraftServer
        get frame(): boolean
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set noGravity(arg0: boolean)
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        set id(arg0: number)
        get horizontalFacing(): Internal.Direction
        get type(): string
        get passenger(): boolean
        get viewScale(): number
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get visualRotationYInDegrees(): number
        set owner(arg0: Internal.LivingEntity_)
        get teamColor(): number
        get discrete(): boolean
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get freezing(): boolean
        get fullyFrozen(): boolean
        set sharedFlagOnFire(arg0: boolean)
        static readonly ATTACK_DURATION: (20) & (number);
        static readonly LIFE_OFFSET: (2) & (number);
        static readonly ATTACK_TRIGGER_TICKS: (14) & (number);
    }
    type EvokerFangs_ = EvokerFangs;
    class RegisterItemDecorationsEvent extends Internal.Event implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.Map_<Internal.Item, Internal.List<Internal.IItemDecorator>>)
        setCanceled(arg0: boolean): void;
        getResult(): Internal.Event$Result;
        getClass(): typeof any;
        register(arg0: Internal.ItemLike_, arg1: Internal.IItemDecorator_): void;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        set canceled(arg0: boolean)
        get result(): Internal.Event$Result
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type RegisterItemDecorationsEvent_ = RegisterItemDecorationsEvent;
    class BlockBehaviour$OffsetType extends Internal.Enum<Internal.BlockBehaviour$OffsetType> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        getDeclaringClass(): typeof Internal.BlockBehaviour$OffsetType;
        toString(): string;
        compareTo(arg0: Internal.BlockBehaviour$OffsetType_): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static values(): Internal.BlockBehaviour$OffsetType[];
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        static valueOf(arg0: string): Internal.BlockBehaviour$OffsetType;
        wait(arg0: number): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.BlockBehaviour$OffsetType>>;
        "compareTo(net.minecraft.world.level.block.state.BlockBehaviour$OffsetType)"(arg0: Internal.BlockBehaviour$OffsetType_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.BlockBehaviour$OffsetType
        static readonly NONE: (Internal.BlockBehaviour$OffsetType) & (Internal.BlockBehaviour$OffsetType);
        static readonly XZ: (Internal.BlockBehaviour$OffsetType) & (Internal.BlockBehaviour$OffsetType);
        static readonly XYZ: (Internal.BlockBehaviour$OffsetType) & (Internal.BlockBehaviour$OffsetType);
    }
    type BlockBehaviour$OffsetType_ = BlockBehaviour$OffsetType | "xyz" | "none" | "xz";
    class ChestBlockEntity extends Internal.RandomizableContainerBlockEntity implements Internal.LidBlockEntity {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        stopOpen(arg0: Internal.Player_): void;
        requestModelDataUpdate(): void;
        getOpenNess(arg0: number): number;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        setBlockState(arg0: Internal.BlockState_): void;
        removeItem(arg0: number, arg1: number): Internal.ItemStack;
        load(arg0: Internal.CompoundTag_): void;
        setChanged(): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        "setChanged()"(): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        kjs$self(): Internal.Container;
        getWidth(): number;
        setRemoved(): void;
        "isEmpty()"(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomName(): boolean;
        getType(): Internal.BlockEntityType<any>;
        getItem(arg0: number): Internal.ItemStack;
        getCustomName(): Internal.Component;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        getDisplayName(): Internal.Component;
        getClass(): typeof any;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        setCustomName(arg0: Internal.Component_): void;
        countItem(arg0: Internal.Item_): number;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        startOpen(arg0: Internal.Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        createMenu(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Player_): Internal.AbstractContainerMenu;
        getUpdatePacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        clearRemoved(): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        getHeight(): number;
        countNonEmpty(): number;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        unpackLootTable(arg0: Internal.Player_): void;
        recheckOpen(): void;
        clear(): void;
        wait(arg0: number): void;
        static swapContents(arg0: Internal.ChestBlockEntity_, arg1: Internal.ChestBlockEntity_): void;
        static getOpenCount(arg0: Internal.BlockGetter_, arg1: BlockPos_): number;
        clearContent(): void;
        reviveCaps(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        static tryClear(arg0: any): void;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        setLevel(arg0: Internal.Level_): void;
        notify(): void;
        getSlots(): number;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        onLoad(): void;
        getContainerSize(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        static lidAnimateTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.ChestBlockEntity_): void;
        setItem(arg0: number, arg1: Internal.ItemStack_): void;
        invalidateCaps(): void;
        getName(): Internal.Component;
        getBlockState(): Internal.BlockState;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        static setLootTable(arg0: Internal.BlockGetter_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: ResourceLocation_): void;
        removeItemNoUpdate(arg0: number): Internal.ItemStack;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setLootTable(arg0: ResourceLocation_, arg1: number): void;
        count(ingredient: Internal.Ingredient_): number;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        count(): number;
        saveWithId(): Internal.CompoundTag;
        isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        onlyOpCanSetNbt(): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        saveWithFullMetadata(): Internal.CompoundTag;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        asContainer(): Internal.Container;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        serializeNBT(): Internal.CompoundTag;
        stillValid(arg0: Internal.Player_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        static canUnlock(arg0: Internal.Player_, arg1: Internal.LockCode_, arg2: Internal.Component_): boolean;
        getModelData(): Internal.ModelData;
        isMutable(): boolean;
        find(ingredient: Internal.Ingredient_): number;
        canOpen(arg0: Internal.Player_): boolean;
        equals(arg0: any): boolean;
        set blockState(arg0: Internal.BlockState_)
        get width(): number
        get "empty()"(): boolean
        get type(): Internal.BlockEntityType<any>
        get customName(): Internal.Component
        get renderBoundingBox(): Internal.AABB
        get displayName(): Internal.Component
        get class(): typeof any
        set customName(arg0: Internal.Component_)
        get updatePacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get height(): number
        get persistentData(): Internal.CompoundTag
        get updateTag(): Internal.CompoundTag
        set level(arg0: Internal.Level_)
        get slots(): number
        get blockPos(): BlockPos
        get removed(): boolean
        get containerSize(): number
        get name(): Internal.Component
        get blockState(): Internal.BlockState
        get maxStackSize(): number
        get empty(): boolean
        get level(): Internal.Level
        get allItems(): Internal.List<Internal.ItemStack>
        get modelData(): Internal.ModelData
        get mutable(): boolean
    }
    type ChestBlockEntity_ = ChestBlockEntity;
    class TrackBlockOutline$BezierPointSelection extends Internal.Record {
        constructor(blockEntity: Internal.TrackBlockEntity_, loc: Internal.BezierTrackPointLocation_, vec: Vec3d_, angles: Vec3d_, direction: Vec3d_)
        blockEntity(): Internal.TrackBlockEntity;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        angles(): Vec3d;
        wait(): void;
        vec(): Vec3d;
        wait(arg0: number): void;
        loc(): Internal.BezierTrackPointLocation;
        equals(arg0: any): boolean;
        direction(): Vec3d;
        get class(): typeof any
    }
    type TrackBlockOutline$BezierPointSelection_ = TrackBlockOutline$BezierPointSelection;
    class ClientboundBlockChangedAckPacket extends Internal.Record implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        sequence(): number;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
    }
    type ClientboundBlockChangedAckPacket_ = ClientboundBlockChangedAckPacket;
    interface Hash$Strategy <K> {
        abstract equals(arg0: K, arg1: K): boolean;
        abstract hashCode(arg0: K): number;
    }
    type Hash$Strategy_<K> = Hash$Strategy<K>;
    class ChainConveyorBlock extends Internal.KineticBlock implements Internal.IHaveBigOutline, Internal.IBE<Internal.ChainConveyorBlockEntity> {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getRotationAxis(arg0: Internal.BlockState_): Internal.Direction$Axis;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        static playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.ChainConveyorBlockEntity>;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getBlockEntityType(): Internal.BlockEntityType<Internal.ChainConveyorBlockEntity>;
        getParticleInitialRadius(): number;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        wait(): void;
        static playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        hideStressImpact(): boolean;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.ChainConveyorBlockEntity;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        getParticleTargetRadius(): number;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.ChainConveyorBlockEntity>): void;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        getMinimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel;
        getBlockEntityClass(): typeof Internal.ChainConveyorBlockEntity;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.ChainConveyorBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        showCapacityWithAnnotation(): boolean;
        static stateById(arg0: number): Internal.BlockState;
        hasShaftTowards(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_): boolean;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get blockEntityType(): Internal.BlockEntityType<Internal.ChainConveyorBlockEntity>
        get particleInitialRadius(): number
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        get particleTargetRadius(): number
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get minimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel
        get blockEntityClass(): typeof Internal.ChainConveyorBlockEntity
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type ChainConveyorBlock_ = ChainConveyorBlock;
    class EnumArgument$Info$Template implements Internal.ArgumentTypeInfo$Template<Internal.EnumArgument<T>> {
        getClass(): typeof any;
        instantiate(arg0: Internal.CommandBuildContext_): Internal.ArgumentType<any>;
        toString(): string;
        notifyAll(): void;
        "instantiate(net.minecraft.commands.CommandBuildContext)"(arg0: Internal.CommandBuildContext_): Internal.EnumArgument<T>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        instantiate(arg0: Internal.CommandBuildContext_): Internal.EnumArgument<T>;
        type(): Internal.ArgumentTypeInfo<Internal.EnumArgument<T>, any>;
        wait(): void;
        wait(arg0: number): void;
        "instantiate(net.minecraft.commands.CommandBuildContext)"(arg0: Internal.CommandBuildContext_): Internal.ArgumentType<any>;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type EnumArgument$Info$Template_ = EnumArgument$Info$Template;
    abstract class FileSystemProvider {
        getClass(): typeof any;
        abstract readAttributes<A extends Internal.BasicFileAttributes>(arg0: Internal.Path_, arg1: A, ...arg2: any_[]): A;
        abstract move(arg0: Internal.Path_, arg1: Internal.Path_, ...arg2: any_[]): void;
        static installedProviders(): Internal.List<Internal.FileSystemProvider>;
        abstract "delete"(arg0: Internal.Path_): void;
        createLink(arg0: Internal.Path_, arg1: Internal.Path_): void;
        abstract "newFileSystem(java.net.URI,java.util.Map)"(arg0: Internal.URI_, arg1: Internal.Map_<string, any>): Internal.FileSystem;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        abstract "readAttributes(java.nio.file.Path,java.lang.String,java.nio.file.LinkOption[])"(arg0: Internal.Path_, arg1: string, ...arg2: any_[]): Internal.Map<string, any>;
        abstract getFileStore(arg0: Internal.Path_): Internal.FileStore;
        newFileChannel(arg0: Internal.Path_, arg1: Internal.Set_<Internal.OpenOption>, ...arg2: any_<any>[]): Internal.FileChannel;
        abstract getFileAttributeView<V extends Internal.FileAttributeView>(arg0: Internal.Path_, arg1: V, ...arg2: any_[]): V;
        abstract createDirectory(arg0: Internal.Path_, ...arg1: any_<any>[]): void;
        createSymbolicLink(arg0: Internal.Path_, arg1: Internal.Path_, ...arg2: any_<any>[]): void;
        abstract getScheme(): string;
        newAsynchronousFileChannel(arg0: Internal.Path_, arg1: Internal.Set_<Internal.OpenOption>, arg2: Internal.ExecutorService_, ...arg3: any_<any>[]): Internal.AsynchronousFileChannel;
        abstract newDirectoryStream(arg0: Internal.Path_, arg1: Internal.DirectoryStream$Filter_<Internal.Path>): Internal.DirectoryStream<Internal.Path>;
        abstract newFileSystem(arg0: Internal.URI_, arg1: Internal.Map_<string, any>): Internal.FileSystem;
        abstract readAttributes(arg0: Internal.Path_, arg1: string, ...arg2: any_[]): Internal.Map<string, any>;
        abstract isSameFile(arg0: Internal.Path_, arg1: Internal.Path_): boolean;
        readSymbolicLink(arg0: Internal.Path_): Internal.Path;
        toString(): string;
        abstract isHidden(arg0: Internal.Path_): boolean;
        "newFileSystem(java.nio.file.Path,java.util.Map)"(arg0: Internal.Path_, arg1: Internal.Map_<string, any>): Internal.FileSystem;
        newOutputStream(arg0: Internal.Path_, ...arg1: Internal.OpenOption_[]): Internal.OutputStream;
        newFileSystem(arg0: Internal.Path_, arg1: Internal.Map_<string, any>): Internal.FileSystem;
        notifyAll(): void;
        abstract checkAccess(arg0: Internal.Path_, ...arg1: any_[]): void;
        abstract setAttribute(arg0: Internal.Path_, arg1: string, arg2: any, ...arg3: any_[]): void;
        hashCode(): number;
        abstract "readAttributes(java.nio.file.Path,java.lang.Class,java.nio.file.LinkOption[])"<A extends Internal.BasicFileAttributes>(arg0: Internal.Path_, arg1: A, ...arg2: any_[]): A;
        abstract copy(arg0: Internal.Path_, arg1: Internal.Path_, ...arg2: any_[]): void;
        wait(): void;
        abstract newByteChannel(arg0: Internal.Path_, arg1: Internal.Set_<Internal.OpenOption>, ...arg2: any_<any>[]): Internal.SeekableByteChannel;
        wait(arg0: number): void;
        deleteIfExists(arg0: Internal.Path_): boolean;
        newInputStream(arg0: Internal.Path_, ...arg1: Internal.OpenOption_[]): Internal.InputStream;
        abstract getFileSystem(arg0: Internal.URI_): Internal.FileSystem;
        equals(arg0: any): boolean;
        abstract getPath(arg0: Internal.URI_): Internal.Path;
        get class(): typeof any
        get scheme(): string
    }
    type FileSystemProvider_ = FileSystemProvider;
    class EventHandlerContainer {
        constructor(extraId: any, handler: Internal.IEventHandler_, source: string, line: number)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        add(extraId: any, handler: Internal.IEventHandler_, source: string, line: number): void;
        wait(arg0: number): void;
        handle(event: Internal.EventJS_, exh: Internal.EventExceptionHandler_): Internal.EventResult;
        static isEmpty(array: Internal.EventHandlerContainer_[]): boolean;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        readonly source: string;
        readonly handler: Internal.IEventHandler;
        readonly extraId: any;
        readonly line: number;
    }
    type EventHandlerContainer_ = EventHandlerContainer;
    class TransportedItemStackHandlerBehaviour$TransportedResult {
        static convertTo(arg0: Internal.List_<Internal.TransportedItemStack>): Internal.TransportedItemStackHandlerBehaviour$TransportedResult;
        hasHeldOutput(): boolean;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        static convertTo(arg0: Internal.TransportedItemStack_): Internal.TransportedItemStackHandlerBehaviour$TransportedResult;
        notify(): void;
        static removeItem(): Internal.TransportedItemStackHandlerBehaviour$TransportedResult;
        static convertToAndLeaveHeld(arg0: Internal.List_<Internal.TransportedItemStack>, arg1: Internal.TransportedItemStack_): Internal.TransportedItemStackHandlerBehaviour$TransportedResult;
        wait(arg0: number, arg1: number): void;
        static "convertTo(java.util.List)"(arg0: Internal.List_<Internal.TransportedItemStack>): Internal.TransportedItemStackHandlerBehaviour$TransportedResult;
        getOutputs(): Internal.List<Internal.TransportedItemStack>;
        static "convertTo(com.simibubi.create.content.kinetics.belt.transport.TransportedItemStack)"(arg0: Internal.TransportedItemStack_): Internal.TransportedItemStackHandlerBehaviour$TransportedResult;
        doesNothing(): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        didntChangeFrom(arg0: Internal.ItemStack_): boolean;
        getHeldOutput(): Internal.TransportedItemStack;
        equals(arg0: any): boolean;
        static doNothing(): Internal.TransportedItemStackHandlerBehaviour$TransportedResult;
        get class(): typeof any
        get outputs(): Internal.List<Internal.TransportedItemStack>
        get heldOutput(): Internal.TransportedItemStack
    }
    type TransportedItemStackHandlerBehaviour$TransportedResult_ = TransportedItemStackHandlerBehaviour$TransportedResult;
    class FactoryPanelSupportBehaviour extends Internal.BlockEntityBehaviour {
        constructor(arg0: Internal.SmartBlockEntity_, arg1: Internal.Supplier_<boolean>, arg2: Internal.Supplier_<boolean>, arg3: Internal.Runnable_)
        getLinkedPanels(): Internal.List<Internal.FactoryPanelPosition>;
        getClass(): typeof any;
        notifyPanels(): void;
        isSafeNBT(): boolean;
        destroy(): void;
        write(arg0: Internal.CompoundTag_, arg1: boolean): void;
        onNeighborChanged(arg0: BlockPos_): void;
        static get<T extends Internal.BlockEntityBehaviour>(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BehaviourType_<T>): T;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        notifyLink(): void;
        getPos(): BlockPos;
        isOutput(): boolean;
        unload(): void;
        read(arg0: Internal.CompoundTag_, arg1: boolean): void;
        connect(arg0: Internal.FactoryPanelBehaviour_): void;
        setLazyTickRate(arg0: number): void;
        static get<T extends Internal.BlockEntityBehaviour>(arg0: Internal.BlockEntity_, arg1: Internal.BehaviourType_<T>): T;
        initialize(): void;
        shouldPanelBePowered(): boolean;
        getWorld(): Internal.Level;
        toString(): string;
        notifyAll(): void;
        shouldBePoweredTristate(): boolean;
        writeSafe(arg0: Internal.CompoundTag_): void;
        tick(): void;
        lazyTick(): void;
        hashCode(): number;
        getRequiredItems(): Internal.ItemRequirement;
        wait(): void;
        disconnect(arg0: Internal.FactoryPanelBehaviour_): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        onBlockChanged(arg0: Internal.BlockState_): void;
        getType(): Internal.BehaviourType<any>;
        get linkedPanels(): Internal.List<Internal.FactoryPanelPosition>
        get class(): typeof any
        get safeNBT(): boolean
        get pos(): BlockPos
        get output(): boolean
        set lazyTickRate(arg0: number)
        get world(): Internal.Level
        get requiredItems(): Internal.ItemRequirement
        get type(): Internal.BehaviourType<any>
        static readonly TYPE: Internal.BehaviourType<Internal.FactoryPanelSupportBehaviour>;
    }
    type FactoryPanelSupportBehaviour_ = FactoryPanelSupportBehaviour;
    class ServerScoreboard extends Internal.Scoreboard {
        constructor(arg0: Internal.MinecraftServer_)
        getPlayerScores(arg0: Internal.Objective_): Internal.Collection<Internal.Score>;
        getDisplayObjective(arg0: number): Internal.Objective;
        createData(arg0: Internal.CompoundTag_): Internal.ScoreboardSaveData;
        removePlayerFromTeam(arg0: string, arg1: Internal.PlayerTeam_): void;
        notify(): void;
        static getDisplaySlotByName(arg0: string): number;
        getObjectiveDisplaySlotCount(arg0: Internal.Objective_): number;
        onObjectiveChanged(arg0: Internal.Objective_): void;
        onObjectiveAdded(arg0: Internal.Objective_): void;
        getStartTrackingPackets(arg0: Internal.Objective_): Internal.List<Internal.Packet<any>>;
        onPlayerRemoved(arg0: string): void;
        removeObjective(arg0: Internal.Objective_): void;
        addObjective(arg0: string, arg1: Internal.ObjectiveCriteria_, arg2: Internal.Component_, arg3: Internal.ObjectiveCriteria$RenderType_): Internal.Objective;
        onTeamRemoved(arg0: Internal.PlayerTeam_): void;
        startTrackingObjective(arg0: Internal.Objective_): void;
        addPlayerTeam(arg0: string): Internal.PlayerTeam;
        onTeamChanged(arg0: Internal.PlayerTeam_): void;
        getPlayerTeam(arg0: string): Internal.PlayerTeam;
        resetPlayerScore(arg0: string, arg1: Internal.Objective_): void;
        getOrCreatePlayerScore(arg0: string, arg1: Internal.Objective_): Internal.Score;
        getPlayerTeams(): Internal.Collection<Internal.PlayerTeam>;
        wait(): void;
        getStopTrackingPackets(arg0: Internal.Objective_): Internal.List<Internal.Packet<any>>;
        getObjective(arg0: string): Internal.Objective;
        getClass(): typeof any;
        stopTrackingObjective(arg0: Internal.Objective_): void;
        getPlayersTeam(arg0: string): Internal.PlayerTeam;
        "getPlayerScores(java.lang.String)"(arg0: string): Internal.Map<Internal.Objective, Internal.Score>;
        hasPlayerScore(arg0: string, arg1: Internal.Objective_): boolean;
        onTeamAdded(arg0: Internal.PlayerTeam_): void;
        addDirtyListener(arg0: Internal.Runnable_): void;
        removePlayerTeam(arg0: Internal.PlayerTeam_): void;
        wait(arg0: number, arg1: number): void;
        static getDisplaySlotName(arg0: number): string;
        onScoreChanged(arg0: Internal.Score_): void;
        createData(): Internal.ScoreboardSaveData;
        getPlayerScores(arg0: string): Internal.Map<Internal.Objective, Internal.Score>;
        forAllObjectives(arg0: Internal.ObjectiveCriteria_, arg1: string, arg2: Internal.Consumer_<Internal.Score>): void;
        removePlayerFromTeam(arg0: string): boolean;
        getOrCreateObjective(arg0: string): Internal.Objective;
        toString(): string;
        "getPlayerScores(net.minecraft.world.scores.Objective)"(arg0: Internal.Objective_): Internal.Collection<Internal.Score>;
        notifyAll(): void;
        getObjectives(): Internal.Collection<Internal.Objective>;
        entityRemoved(arg0: Internal.Entity_): void;
        onPlayerScoreRemoved(arg0: string, arg1: Internal.Objective_): void;
        addPlayerToTeam(arg0: string, arg1: Internal.PlayerTeam_): boolean;
        hasObjective(arg0: string): boolean;
        getObjectiveNames(): Internal.Collection<string>;
        getTrackedPlayers(): Internal.Collection<string>;
        getTeamNames(): Internal.Collection<string>;
        hashCode(): number;
        onObjectiveRemoved(arg0: Internal.Objective_): void;
        static getDisplaySlotNames(): string[];
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        setDisplayObjective(arg0: number, arg1: Internal.Objective_): void;
        get playerTeams(): Internal.Collection<Internal.PlayerTeam>
        get class(): typeof any
        get objectives(): Internal.Collection<Internal.Objective>
        get objectiveNames(): Internal.Collection<string>
        get trackedPlayers(): Internal.Collection<string>
        get teamNames(): Internal.Collection<string>
        get displaySlotNames(): string[]
    }
    type ServerScoreboard_ = ServerScoreboard;
    abstract class GameRules$Value <T extends Internal.GameRules$Value<T>> {
        constructor(arg0: Internal.GameRules$Type_<T>)
        getClass(): typeof any;
        onChanged(arg0: Internal.MinecraftServer_): void;
        setFromArgument(arg0: Internal.CommandContext_<Internal.CommandSourceStack>, arg1: string): void;
        abstract getCommandResult(): number;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        abstract serialize(): string;
        wait(): void;
        abstract deserialize(arg0: string): void;
        abstract setFrom(arg0: T, arg1: Internal.MinecraftServer_): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get commandResult(): number
    }
    type GameRules$Value_<T extends Internal.GameRules$Value<T>> = GameRules$Value<T>;
    class LayerConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: number, arg1: Internal.BlockState_)
        getClass(): typeof any;
        hashCode(): number;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        readonly height: number;
        readonly state: Internal.BlockState;
        static readonly CODEC: Internal.Codec<Internal.LayerConfiguration>;
    }
    type LayerConfiguration_ = LayerConfiguration;
    class RefinedRadianceItem extends Internal.NoGravMagicalDohickyItem {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): Internal.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type RefinedRadianceItem_ = RefinedRadianceItem;
    interface ReputationEventHandler {
        abstract onReputationEventFrom(arg0: Internal.ReputationEventType_, arg1: Internal.Entity_): void;
        (arg0: Internal.ReputationEventType, arg1: Internal.Entity): void;
    }
    type ReputationEventHandler_ = ReputationEventHandler | ((arg0: Internal.ReputationEventType, arg1: Internal.Entity)=> void);
    interface Reference2LongFunction <K> extends it.unimi.dsi.fastutil.Function<K, number>, Internal.ToLongFunction<K> {
        composeObject<T>(arg0: Internal.Object2ReferenceFunction_<T, K>): Internal.Object2LongFunction<T>;
        composeLong(arg0: Internal.Long2ReferenceFunction_<K>): Internal.Long2LongFunction;
        composeChar(arg0: Internal.Char2ReferenceFunction_<K>): Internal.Char2LongFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenObject<T>(arg0: Internal.Long2ObjectFunction_<T>): Internal.Reference2ObjectFunction<K, T>;
        removeLong(arg0: any): number;
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        andThenByte(arg0: Internal.Long2ByteFunction_): Internal.Reference2ByteFunction<K>;
        composeFloat(arg0: Internal.Float2ReferenceFunction_<K>): Internal.Float2LongFunction;
        composeReference<T>(arg0: Internal.Reference2ReferenceFunction_<T, K>): Internal.Reference2LongFunction<T>;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        containsKey(arg0: any): boolean;
        andThenInt(arg0: Internal.Long2IntFunction_): Internal.Reference2IntFunction<K>;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        abstract getLong(arg0: any): number;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        andThenChar(arg0: Internal.Long2CharFunction_): Internal.Reference2CharFunction<K>;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        composeDouble(arg0: Internal.Double2ReferenceFunction_<K>): Internal.Double2LongFunction;
        andThenFloat(arg0: Internal.Long2FloatFunction_): Internal.Reference2FloatFunction<K>;
        applyAsLong(arg0: K): number;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Long)"(arg0: K, arg1: number): number;
        defaultReturnValue(): number;
        andThenDouble(arg0: Internal.Long2DoubleFunction_): Internal.Reference2DoubleFunction<K>;
        apply(arg0: K): number;
        andThenShort(arg0: Internal.Long2ShortFunction_): Internal.Reference2ShortFunction<K>;
        composeShort(arg0: Internal.Short2ReferenceFunction_<K>): Internal.Short2LongFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenReference<T>(arg0: Internal.Long2ReferenceFunction_<T>): Internal.Reference2ReferenceFunction<K, T>;
        composeInt(arg0: Internal.Int2ReferenceFunction_<K>): Internal.Int2LongFunction;
        getOrDefault(arg0: any, arg1: number): number;
        size(): number;
        clear(): void;
        "getOrDefault(java.lang.Object,long)"(arg0: any, arg1: number): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Long)"(arg0: any, arg1: number): number;
        andThenLong(arg0: Internal.Long2LongFunction_): this;
        composeByte(arg0: Internal.Byte2ReferenceFunction_<K>): Internal.Byte2LongFunction;
        "put(java.lang.Object,long)"(arg0: K, arg1: number): number;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: number): void;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        (arg0: any): number;
    }
    type Reference2LongFunction_<K> = ((arg0: any)=> number) | Reference2LongFunction<K>;
    abstract class StructurePlacement {
        isStructureChunk(arg0: Internal.ChunkGeneratorStructureState_, arg1: number, arg2: number): boolean;
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getLocatePos(arg0: Internal.ChunkPos_): BlockPos;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        abstract type(): Internal.StructurePlacementType<any>;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.StructurePlacement>;
    }
    type StructurePlacement_ = StructurePlacement;
    class OceanMonumentStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        static simpleCodec<S extends Internal.Structure>(arg0: Internal.Function_<Internal.Structure$StructureSettings, S>): Internal.Codec<S>;
        getClass(): typeof any;
        findGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        generate(arg0: Internal.RegistryAccess_, arg1: Internal.ChunkGenerator_, arg2: Internal.BiomeSource_, arg3: Internal.RandomState_, arg4: Internal.StructureTemplateManager_, arg5: number, arg6: Internal.ChunkPos_, arg7: number, arg8: Internal.LevelHeightAccessor_, arg9: Internal.Predicate_<Internal.Holder<Internal.Biome>>): Internal.StructureStart;
        toString(): string;
        biomes(): Internal.HolderSet<Internal.Biome>;
        findValidGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        spawnOverrides(): Internal.Map<Internal.MobCategory, Internal.StructureSpawnOverride>;
        step(): Internal.GenerationStep$Decoration;
        notifyAll(): void;
        notify(): void;
        terrainAdaptation(): Internal.TerrainAdjustment;
        wait(arg0: number, arg1: number): void;
        adjustBoundingBox(arg0: Internal.BoundingBox_): Internal.BoundingBox;
        static regeneratePiecesAfterLoad(arg0: Internal.ChunkPos_, arg1: number, arg2: Internal.PiecesContainer_): Internal.PiecesContainer;
        hashCode(): number;
        type(): Internal.StructureType<any>;
        static settingsCodec<S extends Internal.Structure>(arg0: Internal.RecordCodecBuilder$Instance_<S>): Internal.RecordCodecBuilder<S, Internal.Structure$StructureSettings>;
        wait(): void;
        modifiableStructureInfo(): Internal.ModifiableStructureInfo;
        wait(arg0: number): void;
        afterPlace(arg0: Internal.WorldGenLevel_, arg1: Internal.StructureManager_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: Internal.BoundingBox_, arg5: Internal.ChunkPos_, arg6: Internal.PiecesContainer_): void;
        equals(arg0: any): boolean;
        getModifiedStructureSettings(): Internal.Structure$StructureSettings;
        get class(): typeof any
        set tingsCodec(arg0: Internal.RecordCodecBuilder$Instance_<S>)
        get modifiedStructureSettings(): Internal.Structure$StructureSettings
        static readonly CODEC: Internal.Codec<Internal.OceanMonumentStructure>;
    }
    type OceanMonumentStructure_ = OceanMonumentStructure;
    class Sound implements Internal.Weighted<Internal.Sound> {
        constructor(arg0: string, arg1: Internal.SampledFloat_, arg2: Internal.SampledFloat_, arg3: number, arg4: Internal.Sound$Type_, arg5: boolean, arg6: boolean, arg7: number)
        getClass(): typeof any;
        getType(): Internal.Sound$Type;
        getVolume(): Internal.SampledFloat;
        getLocation(): ResourceLocation;
        getPitch(): Internal.SampledFloat;
        toString(): string;
        getSound(arg0: Internal.RandomSource_): any;
        notifyAll(): void;
        getAttenuationDistance(): number;
        notify(): void;
        shouldStream(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        getPath(): ResourceLocation;
        wait(arg0: number): void;
        getWeight(): number;
        equals(arg0: any): boolean;
        preloadIfRequired(arg0: Internal.SoundEngine_): void;
        shouldPreload(): boolean;
        get class(): typeof any
        get type(): Internal.Sound$Type
        get volume(): Internal.SampledFloat
        get location(): ResourceLocation
        get pitch(): Internal.SampledFloat
        get attenuationDistance(): number
        get path(): ResourceLocation
        get weight(): number
        static readonly SOUND_LISTER: (Internal.FileToIdConverter) & (Internal.FileToIdConverter);
    }
    type Sound_ = Sound;
    interface PotatoProjectileBlockHitAction {
        abstract execute(arg0: Internal.LevelAccessor_, arg1: Internal.ItemStack_, arg2: Internal.BlockHitResult_): boolean;
        abstract codec(): Internal.Codec<Internal.PotatoProjectileBlockHitAction>;
        readonly CODEC: Internal.Codec<Internal.PotatoProjectileBlockHitAction>;
    }
    type PotatoProjectileBlockHitAction_ = PotatoProjectileBlockHitAction;
    class ServerboundClientCommandPacket$Action extends Internal.Enum<Internal.ServerboundClientCommandPacket$Action> {
        compareTo(arg0: Internal.ServerboundClientCommandPacket$Action_): number;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        "compareTo(net.minecraft.network.protocol.game.ServerboundClientCommandPacket$Action)"(arg0: Internal.ServerboundClientCommandPacket$Action_): number;
        toString(): string;
        notifyAll(): void;
        static values(): Internal.ServerboundClientCommandPacket$Action[];
        getDeclaringClass(): typeof Internal.ServerboundClientCommandPacket$Action;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ServerboundClientCommandPacket$Action>>;
        static valueOf(arg0: string): Internal.ServerboundClientCommandPacket$Action;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.ServerboundClientCommandPacket$Action
        static readonly REQUEST_STATS: (Internal.ServerboundClientCommandPacket$Action) & (Internal.ServerboundClientCommandPacket$Action);
        static readonly PERFORM_RESPAWN: (Internal.ServerboundClientCommandPacket$Action) & (Internal.ServerboundClientCommandPacket$Action);
    }
    type ServerboundClientCommandPacket$Action_ = "request_stats" | "perform_respawn" | ServerboundClientCommandPacket$Action;
    interface ZipConstants {
        readonly EXTHDR: number;
        readonly LOCCRC: number;
        readonly LOCHOW: number;
        readonly CENSIZ: number;
        readonly EXTLEN: number;
        readonly ENDSIZ: number;
        readonly CENVEM: number;
        readonly CENHDR: number;
        readonly LOCNAM: number;
        readonly EXTSIZ: number;
        readonly LOCVER: number;
        readonly ENDCOM: number;
        readonly CENSIG: number;
        readonly CENLEN: number;
        readonly CENCOM: number;
        readonly ENDOFF: number;
        readonly LOCSIG: number;
        readonly LOCHDR: number;
        readonly ENDSUB: number;
        readonly EXTCRC: number;
        readonly CENHOW: number;
        readonly LOCLEN: number;
        readonly LOCSIZ: number;
        readonly CENCRC: number;
        readonly CENVER: number;
        readonly CENTIM: number;
        readonly CENNAM: number;
        readonly CENATT: number;
        readonly CENDSK: number;
        readonly LOCEXT: number;
        readonly LOCFLG: number;
        readonly LOCTIM: number;
        readonly CENFLG: number;
        readonly CENEXT: number;
        readonly ENDSIG: number;
        readonly EXTSIG: number;
        readonly ENDHDR: number;
        readonly CENATX: number;
        readonly CENOFF: number;
        readonly ENDTOT: number;
    }
    type ZipConstants_ = ZipConstants;
    class CarrotBlock extends Internal.CropBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        isMaxAge(arg0: Internal.BlockState_): boolean;
        getPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        getMaxAge(): number;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        growCrops(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        getAge(arg0: Internal.BlockState_): number;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getStateForAge(arg0: number): Internal.BlockState;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        create$callGetAgeProperty(): Internal.IntegerProperty;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        get maxAge(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type CarrotBlock_ = CarrotBlock;
    interface IModFileInfo {
        abstract getConfig(): Internal.IConfigurable;
        abstract getMods(): Internal.List<Internal.IModInfo>;
        abstract getLicense(): string;
        abstract showAsResourcePack(): boolean;
        abstract moduleName(): string;
        abstract versionString(): string;
        abstract usesServices(): Internal.List<string>;
        abstract requiredLanguageLoaders(): Internal.List<Internal.IModFileInfo$LanguageSpec>;
        abstract getFile(): Internal.IModFile;
        abstract getFileProperties(): Internal.Map<string, any>;
        get config(): Internal.IConfigurable
        get mods(): Internal.List<Internal.IModInfo>
        get license(): string
        get file(): Internal.IModFile
        get fileProperties(): Internal.Map<string, any>
    }
    type IModFileInfo_ = IModFileInfo;
    interface Component extends com.mojang.brigadier.Message, Internal.FormattedText {
        abstract getVisualOrderText(): Internal.FormattedCharSequence;
        toFlatList(): Internal.List<Internal.Component>;
        translatable(arg0: string): Internal.MutableComponent;
        empty(): Internal.MutableComponent;
        translatable(arg0: string, ...arg1: any[]): Internal.MutableComponent;
        visit<T>(arg0: Internal.FormattedText$ContentConsumer_<T>): Internal.Optional<T>;
        abstract getStyle(): Internal.Style;
        visit<T>(arg0: Internal.FormattedText$StyledContentConsumer_<T>, arg1: Internal.Style_): Internal.Optional<T>;
        getString(arg0: number): string;
        abstract getSiblings(): Internal.List<Internal.Component>;
        getString(): string;
        nbt(arg0: string, arg1: boolean, arg2: Internal.Optional_<Internal.Component>, arg3: Internal.DataSource_): Internal.MutableComponent;
        nullToEmpty(arg0: string): this;
        translatableWithFallback(arg0: string, arg1: string, ...arg2: any[]): Internal.MutableComponent;
        "composite(net.minecraft.network.chat.FormattedText[])"(...arg0: Internal.FormattedText_[]): Internal.FormattedText;
        of(arg0: string, arg1: Internal.Style_): Internal.FormattedText;
        plainCopy(): Internal.MutableComponent;
        keybind(arg0: string): Internal.MutableComponent;
        translatableWithFallback(arg0: string, arg1: string): Internal.MutableComponent;
        contains(arg0: Internal.Component_): boolean;
        score(arg0: string, arg1: string): Internal.MutableComponent;
        composite(...arg0: Internal.FormattedText_[]): Internal.FormattedText;
        composite(arg0: Internal.List_<Internal.FormattedText>): Internal.FormattedText;
        of(arg0: string): Internal.FormattedText;
        abstract getContents(): Internal.ComponentContents;
        "composite(java.util.List)"(arg0: Internal.List_<Internal.FormattedText>): Internal.FormattedText;
        toFlatList(arg0: Internal.Style_): Internal.List<Internal.Component>;
        selector(arg0: string, arg1: Internal.Optional_<Internal.Component>): Internal.MutableComponent;
        copy(): Internal.MutableComponent;
        literal(arg0: string): Internal.MutableComponent;
        get visualOrderText(): Internal.FormattedCharSequence
        get style(): Internal.Style
        get siblings(): Internal.List<Internal.Component>
        get string(): string
        get contents(): Internal.ComponentContents
    }
    type Component_ = Component;
    interface Byte2ReferenceFunction <V> extends Internal.IntFunction<V>, it.unimi.dsi.fastutil.Function<number, V> {
        composeLong(arg0: Internal.Long2ByteFunction_): Internal.Long2ReferenceFunction<V>;
        "apply(java.lang.Byte)"(arg0: number): V;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        composeFloat(arg0: Internal.Float2ByteFunction_): Internal.Float2ReferenceFunction<V>;
        andThenObject<T>(arg0: Internal.Reference2ObjectFunction_<V, T>): Internal.Byte2ObjectFunction<T>;
        composeShort(arg0: Internal.Short2ByteFunction_): Internal.Short2ReferenceFunction<V>;
        "put(byte,java.lang.Object)"(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        "getOrDefault(byte,java.lang.Object)"(arg0: number, arg1: V): V;
        abstract get(arg0: number): V;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        apply(arg0: number): V;
        remove(arg0: number): V;
        composeByte(arg0: Internal.Byte2ByteFunction_): this;
        apply(arg0: number): V;
        andThenFloat(arg0: Internal.Reference2FloatFunction_<V>): Internal.Byte2FloatFunction;
        andThenByte(arg0: Internal.Reference2ByteFunction_<V>): Internal.Byte2ByteFunction;
        composeInt(arg0: Internal.Int2ByteFunction_): Internal.Int2ReferenceFunction<V>;
        getOrDefault(arg0: number, arg1: V): V;
        defaultReturnValue(): V;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        andThenDouble(arg0: Internal.Reference2DoubleFunction_<V>): Internal.Byte2DoubleFunction;
        "containsKey(byte)"(arg0: number): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: V): V;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        composeChar(arg0: Internal.Char2ByteFunction_): Internal.Char2ReferenceFunction<V>;
        composeObject<T>(arg0: Internal.Object2ByteFunction_<T>): Internal.Object2ReferenceFunction<T, V>;
        put(arg0: number, arg1: V): V;
        andThenLong(arg0: Internal.Reference2LongFunction_<V>): Internal.Byte2LongFunction;
        andThenInt(arg0: Internal.Reference2IntFunction_<V>): Internal.Byte2IntFunction;
        andThenReference<T>(arg0: Internal.Reference2ReferenceFunction_<V, T>): Internal.Byte2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        composeReference<T>(arg0: Internal.Reference2ByteFunction_<T>): Internal.Reference2ReferenceFunction<T, V>;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): V;
        "remove(byte)"(arg0: number): V;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        abstract "get(byte)"(arg0: number): V;
        andThenShort(arg0: Internal.Reference2ShortFunction_<V>): Internal.Byte2ShortFunction;
        andThenChar(arg0: Internal.Reference2CharFunction_<V>): Internal.Byte2CharFunction;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        size(): number;
        clear(): void;
        /**
         * @deprecated
        */
        "put(java.lang.Byte,java.lang.Object)"(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        "apply(int)"(arg0: number): V;
        composeDouble(arg0: Internal.Double2ByteFunction_): Internal.Double2ReferenceFunction<V>;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): V;
    }
    type Byte2ReferenceFunction_<V> = Byte2ReferenceFunction<V>;
    class TagKeyComponent <T> extends Internal.Record implements Internal.RecipeComponent<Internal.TagKey<T>> {
        constructor(registry: Internal.ResourceKey_<Internal.Registry<T>>, registryType: typeof any)
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.TagKey<T>>, json: Internal.JsonObject_): void;
        getClass(): typeof any;
        replaceOutput(recipe: Internal.RecipeJS_, original: Internal.TagKey_<T>, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): Internal.TagKey<T>;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        registryType(): typeof any;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<Internal.TagKey<T>, O>;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, Internal.TagKey<T>>>;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, Internal.TagKey<T>>>;
        isInput(recipe: Internal.RecipeJS_, value: Internal.TagKey_<T>, match: Internal.ReplacementMatch_): boolean;
        write(recipe: Internal.RecipeJS_, value: Internal.TagKey_<T>): Internal.JsonPrimitive;
        role(): Internal.ComponentRole;
        notify(): void;
        componentClass(): typeof any;
        wait(arg0: number, arg1: number): void;
        asArray(): Internal.ArrayRecipeComponent<Internal.TagKey<T>>;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<Internal.TagKey<T>>;
        orSelf(): Internal.RecipeComponent<Internal.TagKey<T>>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<Internal.TagKey<T>>;
        registry(): Internal.ResourceKey<Internal.Registry<T>>;
        key(name: string): Internal.RecipeKey<Internal.TagKey<T>>;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        checkValueHasChanged(oldValue: Internal.TagKey_<T>, newValue: Internal.TagKey_<T>): boolean;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<Internal.TagKey<T>>;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,net.minecraft.tags.TagKey)"(recipe: Internal.RecipeJS_, value: Internal.TagKey_<T>): Internal.JsonPrimitive;
        isOutput(recipe: Internal.RecipeJS_, value: Internal.TagKey_<T>, match: Internal.ReplacementMatch_): boolean;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.TagKey<T>>, map: Internal.Map_<any, any>): void;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.TagKey<T>>, json: Internal.JsonObject_): void;
        static builder(): Internal.RecipeComponentBuilder;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<Internal.TagKey<T>, O>;
        toString(): string;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        checkEmpty(key: Internal.RecipeKey_<Internal.TagKey<T>>, value: Internal.TagKey_<T>): string;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<Internal.TagKey<T>>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<Internal.TagKey<T>>;
        notifyAll(): void;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        read(arg0: Internal.RecipeJS_, arg1: any): any;
        hashCode(): number;
        replaceInput(recipe: Internal.RecipeJS_, original: Internal.TagKey_<T>, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): Internal.TagKey<T>;
        wait(): void;
        wait(arg0: number): void;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object)"(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        equals(o: any): boolean;
        get class(): typeof any
        static readonly ENTITY_TYPE: Internal.RecipeComponent<Internal.TagKey<Internal.EntityType<any>>>;
        static readonly BIOME: Internal.RecipeComponent<Internal.TagKey<Internal.Biome>>;
        static readonly DYNAMIC: (Internal.DynamicRecipeComponent) & (Internal.DynamicRecipeComponent);
        static readonly FLUID: Internal.RecipeComponent<Internal.TagKey<Internal.Fluid>>;
        static readonly BLOCK: Internal.RecipeComponent<Internal.TagKey<Internal.Block>>;
        static readonly ITEM: Internal.RecipeComponent<Internal.TagKey<Internal.Item>>;
    }
    type TagKeyComponent_<T> = TagKeyComponent<T>;
    interface SpecialBlockEntityItemRequirement {
        abstract getRequiredItems(arg0: Internal.BlockState_): Internal.ItemRequirement;
        (arg0: Internal.BlockState): Internal.ItemRequirement_;
    }
    type SpecialBlockEntityItemRequirement_ = SpecialBlockEntityItemRequirement | ((arg0: Internal.BlockState)=> Internal.ItemRequirement_);
    class PotatoRecoveryEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, arg1: Internal.EnchantmentCategory_, arg2: Internal.EquipmentSlot_[])
        getClass(): typeof any;
        getDamageProtection(arg0: number, arg1: DamageSource_): number;
        getFullname(arg0: number): Internal.Component;
        isCompatibleWith(arg0: Internal.Enchantment_): boolean;
        getRarity(): Internal.Enchantment$Rarity;
        isTradeable(): boolean;
        isTreasureOnly(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getMaxCost(arg0: number): number;
        isDiscoverable(): boolean;
        getMinCost(arg0: number): number;
        static byId(arg0: number): Internal.Enchantment;
        doPostHurt(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        getDescriptionId(): string;
        toString(): string;
        getMaxLevel(): number;
        doPostAttack(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        notifyAll(): void;
        getSlotItems(arg0: Internal.LivingEntity_): Internal.Map<Internal.EquipmentSlot, Internal.ItemStack>;
        getMinLevel(): number;
        /**
         * @deprecated
        */
        getDamageBonus(arg0: number, arg1: Internal.MobType_): number;
        hashCode(): number;
        isCurse(): boolean;
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        wait(): void;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
        wait(arg0: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_): boolean;
        equals(arg0: any): boolean;
        canEnchant(arg0: Internal.ItemStack_): boolean;
        isAllowedOnBooks(): boolean;
        get class(): typeof any
        get rarity(): Internal.Enchantment$Rarity
        get tradeable(): boolean
        get treasureOnly(): boolean
        get discoverable(): boolean
        get descriptionId(): string
        get maxLevel(): number
        get minLevel(): number
        get curse(): boolean
        get allowedOnBooks(): boolean
    }
    type PotatoRecoveryEnchantment_ = PotatoRecoveryEnchantment;
    class TrackBlockEntity extends Internal.SmartBlockEntity implements Internal.TransformableBlockEntity, Internal.IMergeableBE {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        requestModelDataUpdate(): void;
        addConnection(arg0: Internal.BezierConnection_): void;
        destroy(): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        readClient(arg0: Internal.CompoundTag_): void;
        isVirtual(): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        remove(): void;
        load(arg0: Internal.CompoundTag_): void;
        award(arg0: Internal.CreateAdvancement_): void;
        setChanged(): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        bind(arg0: Internal.ResourceKey_<Internal.Level>, arg1: BlockPos_): void;
        "getUpdatePacket()"(): Internal.Packet<any>;
        packetTarget(): Internal.PacketDistributor$PacketTarget;
        setRemoved(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        writeSafe(arg0: Internal.CompoundTag_): void;
        getType(): Internal.BlockEntityType<any>;
        writeClient(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        transform(arg0: Internal.BlockEntity_, arg1: Internal.StructureTransform_): void;
        hasInteractableConnections(): boolean;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        getRenderBoundingBox(): Internal.AABB;
        refreshBlockState(): void;
        getConnections(): Internal.Map<BlockPos, Internal.BezierConnection>;
        getClass(): typeof any;
        sendToMenu(arg0: Internal.FriendlyByteBuf_): void;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        addBehaviours(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        attachBehaviourLate(arg0: Internal.BlockEntityBehaviour_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        clearRemoved(): void;
        getUpdatePacket(): Internal.Packet<any>;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        setLazyTickRate(arg0: number): void;
        awardIfNear(arg0: Internal.CreateAdvancement_, arg1: number): void;
        containedChunk(): Internal.LevelChunk;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        markVirtual(): void;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        forEachBehaviour(arg0: Internal.Consumer_<Internal.BlockEntityBehaviour>): void;
        invalidate(): void;
        wait(arg0: number): void;
        reviveCaps(): void;
        sendData(): void;
        getBehaviour<T extends Internal.BlockEntityBehaviour>(arg0: Internal.BehaviourType_<T>): T;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        validateConnections(): void;
        setLevel(arg0: Internal.Level_): void;
        notify(): void;
        addBehavioursDeferred(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        removeConnection(arg0: BlockPos_): void;
        initialize(): void;
        accept(arg0: Internal.BlockEntity_): void;
        invalidateCaps(): void;
        getBlockState(): Internal.BlockState;
        removeInboundConnections(arg0: boolean): void;
        tick(): void;
        canPlayerUse(arg0: Internal.Player_): boolean;
        lazyTick(): void;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        m_183515_(arg0: Internal.CompoundTag_): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        manageFakeTracksAlong(arg0: Internal.BezierConnection_, arg1: boolean): void;
        saveWithId(): Internal.CompoundTag;
        notifyUpdate(): void;
        isTilted(): boolean;
        wait(arg0: number, arg1: number): void;
        isChunkUnloaded(): boolean;
        getLevel(): Internal.Level;
        getRequiredItems(arg0: Internal.BlockState_): Internal.ItemRequirement;
        onlyOpCanSetNbt(): boolean;
        removeBehaviour(arg0: Internal.BehaviourType_<any>): void;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        blockHolderGetter(): Internal.HolderGetter<Internal.Block>;
        getAllBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        serializeNBT(): Internal.CompoundTag;
        registerAwardables(arg0: Internal.List_<Internal.BlockEntityBehaviour>, ...arg1: Internal.CreateAdvancement_[]): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getModelData(): Internal.ModelData;
        equals(arg0: any): boolean;
        get virtual(): boolean
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get "updatePacket()"(): Internal.Packet<any>
        get type(): Internal.BlockEntityType<any>
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get renderBoundingBox(): Internal.AABB
        get connections(): Internal.Map<BlockPos, Internal.BezierConnection>
        get class(): typeof any
        get updatePacket(): Internal.Packet<any>
        set lazyTickRate(arg0: number)
        get persistentData(): Internal.CompoundTag
        get updateTag(): Internal.CompoundTag
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get blockState(): Internal.BlockState
        get tilted(): boolean
        get chunkUnloaded(): boolean
        get level(): Internal.Level
        get allBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get modelData(): Internal.ModelData
        boundLocation: net.createmod.catnip.data.Pair<Internal.ResourceKey<Internal.Level>, BlockPos>;
        tilt: Internal.TrackBlockEntityTilt;
    }
    type TrackBlockEntity_ = TrackBlockEntity;
    class VariantBlockStateGenerator$Variant {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        model(s: string): Internal.VariantBlockStateGenerator$Model;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        toJson(): Internal.JsonElement;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type VariantBlockStateGenerator$Variant_ = VariantBlockStateGenerator$Variant;
    class AudioFormat$Encoding {
        constructor(arg0: string)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly PCM_SIGNED: (Internal.AudioFormat$Encoding) & (Internal.AudioFormat$Encoding);
        static readonly ULAW: (Internal.AudioFormat$Encoding) & (Internal.AudioFormat$Encoding);
        static readonly PCM_UNSIGNED: (Internal.AudioFormat$Encoding) & (Internal.AudioFormat$Encoding);
        static readonly PCM_FLOAT: (Internal.AudioFormat$Encoding) & (Internal.AudioFormat$Encoding);
        static readonly ALAW: (Internal.AudioFormat$Encoding) & (Internal.AudioFormat$Encoding);
    }
    type AudioFormat$Encoding_ = AudioFormat$Encoding;
    class AssetJsonGenerator extends Internal.ResourceGenerator {
        constructor(m: Internal.Map_<ResourceLocation, any>)
        getClass(): typeof any;
        add(id: ResourceLocation_, data: Internal.Supplier_<number[]>, alwaysForget: boolean): void;
        static asItemModelLocation(id: ResourceLocation_): ResourceLocation;
        toString(): string;
        notifyAll(): void;
        itemModel(id: ResourceLocation_, consumer: Internal.Consumer_<Internal.ModelGenerator>): void;
        blockState(id: ResourceLocation_, consumer: Internal.Consumer_<Internal.VariantBlockStateGenerator>): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        json(id: ResourceLocation_, json: Internal.JsonElement_): void;
        wait(): void;
        add(id: ResourceLocation_, data: Internal.Supplier_<number[]>): void;
        wait(arg0: number): void;
        blockModel(id: ResourceLocation_, consumer: Internal.Consumer_<Internal.ModelGenerator>): void;
        equals(arg0: any): boolean;
        multipartState(id: ResourceLocation_, consumer: Internal.Consumer_<Internal.MultipartBlockStateGenerator>): void;
        stencil(target: ResourceLocation_, stencil: string, colors: Internal.JsonObject_): void;
        get class(): typeof any
    }
    type AssetJsonGenerator_ = AssetJsonGenerator;
    class PlayerInteractEvent$LeftClickEmpty extends Internal.PlayerInteractEvent {
        constructor()
        constructor(arg0: Internal.Player_)
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        setPhase(arg0: Internal.EventPriority_): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        getPos(): BlockPos;
        isCancelable(): boolean;
        getListenerList(): Internal.ListenerList;
        getHand(): Internal.InteractionHand;
        getFace(): Internal.Direction;
        getResult(): Internal.Event$Result;
        toString(): string;
        getCancellationResult(): Internal.InteractionResult;
        getEntity(): Internal.LivingEntity;
        notifyAll(): void;
        getSide(): Internal.LogicalSide;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        setCancellationResult(arg0: Internal.InteractionResult_): void;
        equals(arg0: any): boolean;
        getItemStack(): Internal.ItemStack;
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get level(): Internal.Level
        get pos(): BlockPos
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get hand(): Internal.InteractionHand
        get face(): Internal.Direction
        get result(): Internal.Event$Result
        get cancellationResult(): Internal.InteractionResult
        get entity(): Internal.LivingEntity
        get side(): Internal.LogicalSide
        set result(arg0: Internal.Event$Result_)
        get phase(): Internal.EventPriority
        set cancellationResult(arg0: Internal.InteractionResult_)
        get itemStack(): Internal.ItemStack
    }
    type PlayerInteractEvent$LeftClickEmpty_ = PlayerInteractEvent$LeftClickEmpty;
    interface LevelKJS extends Internal.WithAttachedData<Internal.Level>, Internal.ScriptTypeHolder {
        getDisplayName(): Internal.Component;
        "getBlock(net.minecraft.world.level.block.entity.BlockEntity)"(blockEntity: Internal.BlockEntity_): Internal.BlockContainerJS;
        getDimension(): ResourceLocation;
        getName(): Internal.Component;
        self(): Internal.Level;
        getEntities(): Internal.EntityArrayList;
        createEntity(type: Internal.EntityType_<any>): Internal.Entity;
        spawnParticles(options: Internal.ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        runCommandSilent(command: string): number;
        tell(message: Internal.Component_): void;
        createExplosion(x: number, y: number, z: number): Internal.ExplosionJS;
        abstract getData(): Internal.AttachedData<Internal.Level>;
        spawnFireworks(x: number, y: number, z: number, f: Internal.FireworksJS_): void;
        createEntityList(entities: Internal.Collection_<Internal.Entity>): Internal.EntityArrayList;
        setStatusMessage(message: Internal.Component_): void;
        getPlayers(): Internal.EntityArrayList;
        "getBlock(net.minecraft.core.BlockPos)"(pos: BlockPos_): Internal.BlockContainerJS;
        getEntitiesWithin(aabb: Internal.AABB_): Internal.EntityArrayList;
        getSide(): Internal.ScriptType;
        getBlock(x: number, y: number, z: number): Internal.BlockContainerJS;
        isOverworld(): boolean;
        getBlock(pos: BlockPos_): Internal.BlockContainerJS;
        runCommand(command: string): number;
        getBlock(blockEntity: Internal.BlockEntity_): Internal.BlockContainerJS;
        get displayName(): Internal.Component
        get dimension(): ResourceLocation
        get name(): Internal.Component
        get entities(): Internal.EntityArrayList
        get data(): Internal.AttachedData<Internal.Level>
        set statusMessage(message: Internal.Component_)
        get players(): Internal.EntityArrayList
        get side(): Internal.ScriptType
        get overworld(): boolean
        (): Internal.AttachedData_<Internal.Level>;
    }
    type LevelKJS_ = LevelKJS | (()=> Internal.AttachedData_<Internal.Level>);
    interface ChronoZonedDateTime <D extends Internal.ChronoLocalDate> extends Internal.Comparable<Internal.ChronoZonedDateTime<any>>, Internal.Temporal {
        isAfter(arg0: Internal.ChronoZonedDateTime_<any>): boolean;
        toLocalTime(): Internal.LocalTime;
        toInstant(): Internal.Instant;
        plus(arg0: number, arg1: Internal.TemporalUnit_): Internal.Temporal;
        compareTo(arg0: any): number;
        abstract toLocalDateTime(): Internal.ChronoLocalDateTime<D>;
        abstract getZone(): Internal.ZoneId;
        "with"(arg0: Internal.TemporalAdjuster_): this;
        getLong(arg0: Internal.TemporalField_): number;
        timeLineOrder(): Internal.Comparator<Internal.ChronoZonedDateTime<any>>;
        "compareTo(java.time.chrono.ChronoZonedDateTime)"(arg0: Internal.ChronoZonedDateTime_<any>): number;
        minus(arg0: number, arg1: Internal.TemporalUnit_): Internal.Temporal;
        abstract "with"(arg0: Internal.TemporalField_, arg1: number): this;
        compareTo(arg0: Internal.ChronoZonedDateTime_<any>): number;
        abstract isSupported(arg0: Internal.TemporalField_): boolean;
        format(arg0: Internal.DateTimeFormatter_): string;
        abstract getOffset(): Internal.ZoneOffset;
        getChronology(): Internal.Chronology;
        abstract "isSupported(java.time.temporal.TemporalField)"(arg0: Internal.TemporalField_): boolean;
        abstract toString(): string;
        abstract withZoneSameInstant(arg0: Internal.ZoneId_): this;
        isEqual(arg0: Internal.ChronoZonedDateTime_<any>): boolean;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        abstract until(arg0: Internal.Temporal_, arg1: Internal.TemporalUnit_): number;
        isSupported(arg0: Internal.TemporalUnit_): boolean;
        isBefore(arg0: Internal.ChronoZonedDateTime_<any>): boolean;
        from(arg0: Internal.TemporalAccessor_): Internal.ChronoZonedDateTime<any>;
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        abstract withEarlierOffsetAtOverlap(): this;
        abstract hashCode(): number;
        get(arg0: Internal.TemporalField_): number;
        plus(arg0: Internal.TemporalAmount_): this;
        abstract withZoneSameLocal(arg0: Internal.ZoneId_): this;
        "compareTo(java.lang.Object)"(arg0: any): number;
        abstract equals(arg0: any): boolean;
        toLocalDate(): D;
        "isSupported(java.time.temporal.TemporalUnit)"(arg0: Internal.TemporalUnit_): boolean;
        toEpochSecond(): number;
        minus(arg0: Internal.TemporalAmount_): Internal.Temporal;
        abstract withLaterOffsetAtOverlap(): this;
        get zone(): Internal.ZoneId
        get offset(): Internal.ZoneOffset
        get chronology(): Internal.Chronology
    }
    type ChronoZonedDateTime_<D extends Internal.ChronoLocalDate> = ChronoZonedDateTime<D>;
    class BuriedTreasureStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        static simpleCodec<S extends Internal.Structure>(arg0: Internal.Function_<Internal.Structure$StructureSettings, S>): Internal.Codec<S>;
        getClass(): typeof any;
        findGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        generate(arg0: Internal.RegistryAccess_, arg1: Internal.ChunkGenerator_, arg2: Internal.BiomeSource_, arg3: Internal.RandomState_, arg4: Internal.StructureTemplateManager_, arg5: number, arg6: Internal.ChunkPos_, arg7: number, arg8: Internal.LevelHeightAccessor_, arg9: Internal.Predicate_<Internal.Holder<Internal.Biome>>): Internal.StructureStart;
        toString(): string;
        biomes(): Internal.HolderSet<Internal.Biome>;
        findValidGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        spawnOverrides(): Internal.Map<Internal.MobCategory, Internal.StructureSpawnOverride>;
        step(): Internal.GenerationStep$Decoration;
        notifyAll(): void;
        notify(): void;
        terrainAdaptation(): Internal.TerrainAdjustment;
        wait(arg0: number, arg1: number): void;
        adjustBoundingBox(arg0: Internal.BoundingBox_): Internal.BoundingBox;
        hashCode(): number;
        type(): Internal.StructureType<any>;
        static settingsCodec<S extends Internal.Structure>(arg0: Internal.RecordCodecBuilder$Instance_<S>): Internal.RecordCodecBuilder<S, Internal.Structure$StructureSettings>;
        wait(): void;
        modifiableStructureInfo(): Internal.ModifiableStructureInfo;
        wait(arg0: number): void;
        afterPlace(arg0: Internal.WorldGenLevel_, arg1: Internal.StructureManager_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: Internal.BoundingBox_, arg5: Internal.ChunkPos_, arg6: Internal.PiecesContainer_): void;
        equals(arg0: any): boolean;
        getModifiedStructureSettings(): Internal.Structure$StructureSettings;
        get class(): typeof any
        set tingsCodec(arg0: Internal.RecordCodecBuilder$Instance_<S>)
        get modifiedStructureSettings(): Internal.Structure$StructureSettings
        static readonly CODEC: Internal.Codec<Internal.BuriedTreasureStructure>;
    }
    type BuriedTreasureStructure_ = BuriedTreasureStructure;
    class BiomeSpecialEffects$GrassColorModifier extends Internal.Enum<Internal.BiomeSpecialEffects$GrassColorModifier> implements Internal.IExtensibleEnum, Internal.StringRepresentable {
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static create(arg0: string, arg1: string, arg2: Internal.BiomeSpecialEffects$GrassColorModifier$ColorModifier_): Internal.BiomeSpecialEffects$GrassColorModifier;
        getSerializedName(): string;
        static values(): Internal.BiomeSpecialEffects$GrassColorModifier[];
        getDeclaringClass(): typeof Internal.BiomeSpecialEffects$GrassColorModifier;
        notify(): void;
        "compareTo(net.minecraft.world.level.biome.BiomeSpecialEffects$GrassColorModifier)"(arg0: Internal.BiomeSpecialEffects$GrassColorModifier_): number;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        getName(): string;
        static byName(arg0: string): Internal.BiomeSpecialEffects$GrassColorModifier;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        compareTo(arg0: Internal.BiomeSpecialEffects$GrassColorModifier_): number;
        static createCodecForExtensibleEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, E>): Internal.Codec<E>;
        toString(): string;
        init(): void;
        notifyAll(): void;
        modifyColor(arg0: number, arg1: number, arg2: number): number;
        name(): string;
        hashCode(): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.BiomeSpecialEffects$GrassColorModifier>>;
        static valueOf(arg0: string): Internal.BiomeSpecialEffects$GrassColorModifier;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.BiomeSpecialEffects$GrassColorModifier
        get name(): string
        static readonly DARK_FOREST: Internal.BiomeSpecialEffects$GrassColorModifier;
        static readonly CODEC: Internal.Codec<Internal.BiomeSpecialEffects$GrassColorModifier>;
        static readonly SWAMP: Internal.BiomeSpecialEffects$GrassColorModifier;
        static readonly NONE: Internal.BiomeSpecialEffects$GrassColorModifier;
    }
    type BiomeSpecialEffects$GrassColorModifier_ = "dark_forest" | BiomeSpecialEffects$GrassColorModifier | "none" | "swamp";
    class PersistentEntitySectionManager <T extends Internal.EntityAccess> implements Internal.AutoCloseable, Internal.IEServerEntityManager {
        constructor(arg0: T, arg1: any_<T>, arg2: any_<T>)
        addNewEntityWithoutEvent(arg0: T): boolean;
        canPositionTick(arg0: Internal.ChunkPos_): boolean;
        getClass(): typeof any;
        gatherStats(): string;
        notify(): void;
        isLoaded(arg0: Internal.UUID_): boolean;
        wait(arg0: number, arg1: number): void;
        areEntitiesLoaded(arg0: number): boolean;
        "updateChunkStatus(net.minecraft.world.level.ChunkPos,net.minecraft.server.level.FullChunkStatus)"(arg0: Internal.ChunkPos_, arg1: Internal.FullChunkStatus_): void;
        "updateChunkStatus(net.minecraft.world.level.ChunkPos,net.minecraft.world.level.entity.Visibility)"(arg0: Internal.ChunkPos_, arg1: Internal.Visibility_): void;
        saveAll(): void;
        updateChunkStatus(arg0: Internal.ChunkPos_, arg1: Internal.Visibility_): void;
        autoSave(): void;
        toString(): string;
        addLegacyChunkEntities(arg0: Internal.Stream_<T>): void;
        notifyAll(): void;
        addWorldGenChunkEntities(arg0: Internal.Stream_<T>): void;
        addNewEntity(arg0: T): boolean;
        "canPositionTick(net.minecraft.core.BlockPos)"(arg0: BlockPos_): boolean;
        updateChunkStatus(arg0: Internal.ChunkPos_, arg1: Internal.FullChunkStatus_): void;
        tick(): void;
        getEntityGetter(): Internal.LevelEntityGetter<T>;
        hashCode(): number;
        wait(): void;
        "canPositionTick(net.minecraft.world.level.ChunkPos)"(arg0: Internal.ChunkPos_): boolean;
        canPositionTick(arg0: BlockPos_): boolean;
        close(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        dumpSections(arg0: Internal.Writer_): void;
        get class(): typeof any
        get entityGetter(): Internal.LevelEntityGetter<T>
    }
    type PersistentEntitySectionManager_<T extends Internal.EntityAccess> = PersistentEntitySectionManager<T>;
    class CombinedTankWrapper implements Internal.IFluidHandler {
        constructor(...arg0: Internal.IFluidHandler_[])
        getClass(): typeof any;
        getFluidInTank(arg0: number): Internal.FluidStack;
        drain(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        toString(): string;
        notifyAll(): void;
        isFluidValid(arg0: number, arg1: Internal.FluidStack_): boolean;
        getTankCapacity(arg0: number): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "drain(int,net.minecraftforge.fluids.capability.IFluidHandler$FluidAction)"(arg0: number, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        enforceVariety(): this;
        fill(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): number;
        drain(arg0: number, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        hashCode(): number;
        wait(): void;
        getTanks(): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        "drain(net.minecraftforge.fluids.FluidStack,net.minecraftforge.fluids.capability.IFluidHandler$FluidAction)"(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        get class(): typeof any
        get tanks(): number
    }
    type CombinedTankWrapper_ = CombinedTankWrapper;
    class CommandSyntaxException extends Internal.Exception {
        constructor(arg0: Internal.CommandExceptionType_, arg1: com.mojang.brigadier.Message_, arg2: string, arg3: number)
        constructor(arg0: Internal.CommandExceptionType_, arg1: com.mojang.brigadier.Message_)
        getClass(): typeof any;
        "printStackTrace(java.io.PrintStream)"(arg0: Internal.PrintStream_): void;
        getMessage(): string;
        getInput(): string;
        getCause(): Internal.Throwable;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getSuppressed(): Internal.Throwable[];
        fillInStackTrace(): Internal.Throwable;
        addSuppressed(arg0: Internal.Throwable_): void;
        getContext(): string;
        getType(): Internal.CommandExceptionType;
        setStackTrace(arg0: Internal.StackTraceElement_[]): void;
        printStackTrace(arg0: Internal.PrintStream_): void;
        getLocalizedMessage(): string;
        getCursor(): number;
        toString(): string;
        notifyAll(): void;
        "printStackTrace(java.io.PrintWriter)"(arg0: Internal.PrintWriter_): void;
        getStackTrace(): Internal.StackTraceElement[];
        getRawMessage(): com.mojang.brigadier.Message;
        printStackTrace(arg0: Internal.PrintWriter_): void;
        hashCode(): number;
        wait(): void;
        printStackTrace(): void;
        initCause(arg0: Internal.Throwable_): Internal.Throwable;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get message(): string
        get input(): string
        get cause(): Internal.Throwable
        get suppressed(): Internal.Throwable[]
        get context(): string
        get type(): Internal.CommandExceptionType
        set stackTrace(arg0: Internal.StackTraceElement_[])
        get localizedMessage(): string
        get cursor(): number
        get stackTrace(): Internal.StackTraceElement[]
        get rawMessage(): com.mojang.brigadier.Message
        static ENABLE_COMMAND_STACK_TRACES: (false) & (boolean);
        static BUILT_IN_EXCEPTIONS: (Internal.BrigadierExceptions) & (Internal.BuiltInExceptionProvider);
        static readonly CONTEXT_AMOUNT: (10) & (number);
    }
    type CommandSyntaxException_ = CommandSyntaxException;
    abstract class FlyingMob extends Internal.Mob {
        ip_notifyCollidingWithPortal(arg0: Internal.Entity_): void;
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getScale(): number;
        isSuppressingSlidingDownLadder(): boolean;
        isSuppressingBounce(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
        getPitch(): number;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        isOnFire(): boolean;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        rotate(arg0: Internal.Rotation_): number;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        getFallFlyingTicks(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        dropLeash(arg0: boolean, arg1: boolean): void;
        clearRestriction(): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        "self()"(): Internal.LivingEntity;
        setXxa(arg0: number): void;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        setUUID(arg0: Internal.UUID_): void;
        getNoActionTime(): number;
        checkBelowWorld(): void;
        isVisuallyCrawling(): boolean;
        isAggressive(): boolean;
        setYya(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMotionZ(z: number): void;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        getBlockY(): number;
        setBaby(arg0: boolean): void;
        getLastHurtByMob(): Internal.LivingEntity;
        isSpectator(): boolean;
        isInWaterOrBubble(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        getRandomZ(arg0: number): number;
        setAggressive(arg0: boolean): void;
        releaseUsingItem(): void;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getPosition(arg0: number): Vec3d;
        removeFreeWill(): void;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        getRemovalReason(): Internal.Entity$RemovalReason;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        distanceToSqr(arg0: Vec3d_): number;
        getEyeInFluidType(): Internal.FluidType;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        isSteppingCarefully(): boolean;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        isFallFlying(): boolean;
        getEncodeId(): string;
        getY(arg0: number): number;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        getMaxHeadXRot(): number;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        setInvisible(arg0: boolean): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        invalidateCaps(): void;
        getName(): Internal.Component;
        canEnterPose(arg0: Internal.Pose_): boolean;
        playAmbientSound(): void;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        setHealth(arg0: number): void;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getKillCredit(): Internal.LivingEntity;
        getYaw(): number;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getUsedItemHand(): Internal.InteractionHand;
        ip_setPortalCollisionHandler(arg0: Internal.PortalCollisionHandler_): void;
        setDefaultMovementSpeed(speed: number): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        hasPermissions(arg0: number): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getBrain(): Internal.Brain<any>;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        isAutoSpinAttack(): boolean;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        getControllingPassenger(): Internal.LivingEntity;
        getRemainingFireTicks(): number;
        getScriptType(): Internal.ScriptType;
        onlyOpCanSetNbt(): boolean;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        fireImmune(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getId(): number;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        canBeHitByProjectile(): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        create$callSpawnItemParticles(arg0: Internal.ItemStack_, arg1: number): void;
        getEyeY(): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: Internal.Component_): void;
        skipDropExperience(): void;
        setSleepingPos(arg0: BlockPos_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        getHeadRotSpeed(): number;
        getYHeadRot(): number;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        dismountsUnderwater(): boolean;
        isAffectedByPotions(): boolean;
        addTag(arg0: string): boolean;
        playerTouch(arg0: Internal.Player_): void;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        isWithinRestriction(arg0: BlockPos_): boolean;
        getTeam(): Internal.Team;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        getMyRidingOffset(): number;
        ip_setWorld(arg0: Internal.Level_): void;
        canStartSwimming(): boolean;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        hasCustomName(): boolean;
        ip_getCollidingPortal(): Internal.Portal;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        getX(): number;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        isVehicle(): boolean;
        die(arg0: DamageSource_): void;
        removeAllEffects(): boolean;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: Internal.Component_): void;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        getTeamId(): string;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getMaxHeadYRot(): number;
        getLeashHolder(): Internal.Entity;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        getX(arg0: number): number;
        shouldRiderSit(): boolean;
        getSensing(): Internal.Sensing;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        getLegsArmorItem(): Internal.ItemStack;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getLootTableSeed(): number;
        getDeltaMovement(): Vec3d;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        shouldDropExperience(): boolean;
        hasPassenger(arg0: Internal.Entity_): boolean;
        canBeLeashed(arg0: Internal.Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): Internal.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        handleInsidePortal(arg0: BlockPos_): void;
        getArrowCount(): number;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        getMoveControl(): Internal.MoveControl;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        isOnRails(): boolean;
        getStingerCount(): number;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        ate(): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        setYaw(arg0: number): void;
        ip_setPositionWithoutTriggeringCallback(arg0: Vec3d_): void;
        getPickRadius(): number;
        notify(): void;
        setPersistenceRequired(): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        isRemoved(): boolean;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        spawnAnim(): void;
        getJumpBoostPower(): number;
        getRotationVector(): Internal.Vec2;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        self(): Internal.Entity;
        refreshDimensions(): void;
        getHurtDir(): number;
        isSprinting(): boolean;
        isMaxGroupSizeReached(arg0: number): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getEyePosition(arg0: number): Vec3d;
        setShiftKeyDown(arg0: boolean): void;
        getPassengers(): Internal.EntityArrayList;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        clearSleepingPos(): void;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getLastHurtMob(): Internal.LivingEntity;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        isAddedToWorld(): boolean;
        getFirstPassenger(): Internal.Entity;
        heal(arg0: number): void;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        checkSlowFallDistance(): void;
        getLastDamageSource(): DamageSource;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        getSoundSource(): Internal.SoundSource;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        getLookAngle(): Vec3d;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        ip_tickCollidingPortal(): void;
        getAmbientSoundInterval(): number;
        ip_isCollidingWithPortal(): boolean;
        getRestrictCenter(): BlockPos;
        setArrowCount(arg0: number): void;
        getMotionZ(): number;
        isLeftHanded(): boolean;
        removeVehicle(): void;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        setZ(z: number): void;
        getBedOrientation(): Internal.Direction;
        ejectPassengers(): void;
        getY(): number;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        getProfile(): Internal.GameProfile;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        getLookControl(): Internal.LookControl;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        ip_isRecentlyCollidingWithPortal(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        position(): Vec3d;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        getArmorCoverPercentage(): number;
        displayFireAnimation(): boolean;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        onLeaveCombat(): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        lavaHurt(): void;
        getFeetBlockState(): Internal.BlockState;
        handleDamageEvent(arg0: DamageSource_): void;
        isWithinRestriction(): boolean;
        canChangeDimensions(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        getTotalMovementSpeed(): number;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        getSleepingPos(): Internal.Optional<BlockPos>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): Internal.Component;
        getClass(): typeof any;
        "self()"(): Internal.Entity;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        attack(hp: number): void;
        modifyExpressionValue$zkk000$create$playerHidingAsBoxIsCrouchingNotSwimming(arg0: boolean, arg1: Internal.Pose_): boolean;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        getAttributes(): Internal.AttributeMap;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        isSwimming(): boolean;
        getTarget(): Internal.LivingEntity;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        isInWater(): boolean;
        getPortalWaitTime(): number;
        getBlockStateOn(): Internal.BlockState;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        /**
         * @deprecated
        */
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        ip_getActiveCollisionBox(arg0: Internal.AABB_): Internal.AABB;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        swing(arg0: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        getRootVehicle(): Internal.Entity;
        onPathfindingDone(): void;
        save(arg0: Internal.CompoundTag_): boolean;
        isUndead(): boolean;
        static ip_CollideWithShapes(arg0: Vec3d_, arg1: Internal.AABB_, arg2: Internal.List_<Internal.VoxelShape>): Vec3d;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        isNoGravity(): boolean;
        getStepHeight(): number;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        stopUsingItem(): void;
        isSleeping(): boolean;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        acceptsFailure(): boolean;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        updateSwimming(): void;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getLastHurtMobTimestamp(): number;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        getSpeed(): number;
        setRemainingFireTicks(arg0: number): void;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        imm_ptl_canTeleportThroughPortal(arg0: Internal.Entity_): boolean;
        setPos(arg0: Vec3d_): void;
        wait(): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getUuid(): Internal.UUID;
        setCanPickUpLoot(arg0: boolean): void;
        setOffHandItem(item: Internal.ItemStack_): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setNoAi(arg0: boolean): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        setSilent(arg0: boolean): void;
        canPickUpLoot(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        hasExactlyOnePlayerPassenger(): boolean;
        kill(): void;
        canBeSeenAsEnemy(): boolean;
        onEnterCombat(): void;
        setLeftHanded(arg0: boolean): void;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        animateHurt(arg0: number): void;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        hasRestriction(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        getHeadArmorItem(): Internal.ItemStack;
        handleEntityEvent(arg0: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        getParts(): Internal.PartEntity<any>[];
        isUsingItem(): boolean;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        deserializeNBT(arg0: Internal.Tag_): void;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        revive(): void;
        serializeNBT(): Internal.CompoundTag;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        addDeltaMovement(arg0: Vec3d_): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): Internal.Component;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTicksRequiredToFreeze(): number;
        maxUpStep(): number;
        catnip$callSetLevel(arg0: Internal.Level_): void;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        setGlowing(arg0: boolean): void;
        getMaxSpawnClusterSize(): number;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        ip_getOrCreatePortalCollisionHandler(): Internal.PortalCollisionHandler;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        isAlive(): boolean;
        startSleeping(arg0: BlockPos_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        getTags(): Internal.Set<string>;
        getViewVector(arg0: number): Vec3d;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        setJumping(arg0: boolean): void;
        onPathfindingStart(): void;
        getPickResult(): Internal.ItemStack;
        getPercentFrozen(): number;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        setPortalCooldown(arg0: number): void;
        getRandomY(): number;
        getDisplayName(): Internal.Component;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        getMobType(): Internal.MobType;
        isLeashed(): boolean;
        travel(arg0: Vec3d_): void;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        setPose(arg0: Internal.Pose_): void;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        getReachDistance(): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        ip_clearCollidingPortal(): void;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        notifyAll(): void;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
        static ip_CollideWithShapes_$md$3cdd5f$0(arg0: Vec3d_, arg1: Internal.AABB_, arg2: Internal.List_<any>): Vec3d;
        "getServer()"(): Internal.MinecraftServer;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        wasExperienceConsumed(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        foodEaten(is: Internal.ItemStack_): void;
        discard(): void;
        onClientRemoval(): void;
        self(): Internal.LivingEntity;
        ip_unsetRemoved(): void;
        sendSystemMessage(arg0: Internal.Component_): void;
        acceptsSuccess(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        setRotation(yaw: number, pitch: number): void;
        modifyReturnValue$zkk000$create$onFireImmune(arg0: boolean): boolean;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        calculateEntityAnimation(arg0: boolean): void;
        setId(arg0: number): void;
        getHorizontalFacing(): Internal.Direction;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getType(): string;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onAboveBubbleCol(arg0: boolean): void;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        checkDespawn(): void;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        getJumpControl(): Internal.JumpControl;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        static getViewScale(): number;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        requiresCustomPersistence(): boolean;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        isDiscrete(): boolean;
        setNbt(nbt: Internal.CompoundTag_): void;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        getCombatTracker(): Internal.CombatTracker;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        extinguish(): void;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        "swing(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        ip_getPortalCollisionHandler(): Internal.PortalCollisionHandler;
        tell(message: Internal.Component_): void;
        isInvertedHealAndHarm(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        isFullyFrozen(): boolean;
        runCommand(command: string): number;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        set defaultMovementSpeedMultiplier(speed: number)
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get suppressingBounce(): boolean
        get blockZ(): number
        get silent(): boolean
        set target(arg0: Internal.LivingEntity_)
        get pitch(): number
        get random(): Internal.RandomSource
        get onFire(): boolean
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        set xxa(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        set yya(arg0: number)
        set motionZ(z: number)
        get blockY(): number
        set baby(arg0: boolean)
        get lastHurtByMob(): Internal.LivingEntity
        get spectator(): boolean
        get inWaterOrBubble(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set aggressive(arg0: boolean)
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get ignoringBlockTriggers(): boolean
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get fallFlying(): boolean
        get encodeId(): string
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get maxHeadXRot(): number
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        get name(): Internal.Component
        set totalMovementSpeedMultiplier(speed: number)
        get controlledVehicle(): Internal.Entity
        set health(arg0: number)
        get armorValue(): number
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get killCredit(): Internal.LivingEntity
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        get autoSpinAttack(): boolean
        get controllingPassenger(): Internal.LivingEntity
        get remainingFireTicks(): number
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        get maxFallDistance(): number
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get ticksFrozen(): number
        get eyeY(): number
        get voicePitch(): number
        set statusMessage(message: Internal.Component_)
        set sleepingPos(arg0: BlockPos_)
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get descending(): boolean
        get headRotSpeed(): number
        get YHeadRot(): number
        get affectedByPotions(): boolean
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        set absorptionAmount(arg0: number)
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get living(): boolean
        get glowing(): boolean
        get x(): number
        get vehicle(): boolean
        get attackable(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: Internal.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get underWater(): boolean
        get maxHeadYRot(): number
        get leashHolder(): Internal.Entity
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get sensing(): Internal.Sensing
        get legsArmorItem(): Internal.ItemStack
        get lootTableSeed(): number
        get deltaMovement(): Vec3d
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        set secondsOnFire(arg0: number)
        get "displayName()"(): Internal.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get potionEffects(): Internal.EntityPotionEffectsJS
        get moveControl(): Internal.MoveControl
        get onRails(): boolean
        get stingerCount(): number
        get defaultMovementSpeed(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        set yaw(arg0: number)
        get pickRadius(): number
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        get removed(): boolean
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get jumpBoostPower(): number
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get lastHurtMob(): Internal.LivingEntity
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get firstPassenger(): Internal.Entity
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        get lastDamageSource(): DamageSource
        get soundSource(): Internal.SoundSource
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        get lookAngle(): Vec3d
        get ambientSoundInterval(): number
        get restrictCenter(): BlockPos
        set arrowCount(arg0: number)
        get motionZ(): number
        get leftHanded(): boolean
        get persistenceRequired(): boolean
        get invisible(): boolean
        set z(z: number)
        get bedOrientation(): Internal.Direction
        get y(): number
        get profile(): Internal.GameProfile
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        get blocking(): boolean
        get offHandItem(): Internal.ItemStack
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get crouching(): boolean
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get withinRestriction(): boolean
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get sleepingPos(): Internal.Optional<BlockPos>
        get customName(): Internal.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get attributes(): Internal.AttributeMap
        get spawnCancelled(): boolean
        get boundingBoxForCulling(): Internal.AABB
        get swimming(): boolean
        get target(): Internal.LivingEntity
        set sprinting(arg0: boolean)
        set x(x: number)
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
        get portalWaitTime(): number
        get blockStateOn(): Internal.BlockState
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get rootVehicle(): Internal.Entity
        get undead(): boolean
        get noGravity(): boolean
        get stepHeight(): number
        get sleeping(): boolean
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        get speed(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        get uuid(): Internal.UUID
        set canPickUpLoot(arg0: boolean)
        set offHandItem(item: Internal.ItemStack_)
        get mainHandItem(): Internal.ItemStack
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get bbWidth(): number
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get "name()"(): Internal.Component
        get inFluidType(): boolean
        get ticksRequiredToFreeze(): number
        set glowing(arg0: boolean)
        get maxSpawnClusterSize(): number
        get alive(): boolean
        get bbHeight(): number
        get username(): string
        get tags(): Internal.Set<string>
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get lastAttacker(): Internal.LivingEntity
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get percentFrozen(): number
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        set portalCooldown(arg0: number)
        get randomY(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        get mobType(): Internal.MobType
        get leashed(): boolean
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get passengersRidingOffset(): number
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get lastClimbablePos(): Internal.Optional<BlockPos>
        set id(arg0: number)
        get horizontalFacing(): Internal.Direction
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get teamColor(): number
        get discrete(): boolean
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        get restrictRadius(): number
        get noAi(): boolean
        get chestArmorItem(): Internal.ItemStack
        get invertedHealAndHarm(): boolean
        get freezing(): boolean
        get fullyFrozen(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
    }
    type FlyingMob_ = FlyingMob;
    class ItemProviderEntry <T extends Internal.ItemLike> extends Internal.RegistryEntry<T> implements Internal.ItemLike {
        constructor(arg0: Internal.AbstractRegistrate_<any>, arg1: Internal.RegistryObject_<T>)
        getClass(): typeof any;
        getSibling<R, E extends R>(arg0: Internal.ResourceKey_<Internal.Registry<R>>): Internal.RegistryEntry<E>;
        static of<T>(arg0: Internal.Supplier_<T>, arg1: com.tterrag.registrate.util.nullness.NonNullSupplier_<string>): com.tterrag.registrate.util.nullness.NonNullSupplier<T>;
        /**
         * @deprecated
        */
        "updateReference(net.minecraftforge.registries.IForgeRegistry)"(arg0: Internal.IForgeRegistry_<T>): void;
        "getSibling(net.minecraft.resources.ResourceKey)"<R, E extends R>(arg0: Internal.ResourceKey_<Internal.Registry<R>>): Internal.RegistryEntry<E>;
        ifPresent(arg0: Internal.Consumer_<T>): void;
        getSibling<R, E extends R>(arg0: Internal.IForgeRegistry_<R>): Internal.RegistryEntry<E>;
        flatMap<U>(arg0: Internal.Function_<T, Internal.Optional<U>>): Internal.Optional<U>;
        is<R>(arg0: R): boolean;
        notify(): void;
        "getSibling(net.minecraftforge.registries.IForgeRegistry)"<R, E extends R>(arg0: Internal.IForgeRegistry_<R>): Internal.RegistryEntry<E>;
        static empty<T>(): Internal.RegistryEntry<T>;
        wait(arg0: number, arg1: number): void;
        lazyMap<U>(arg0: Internal.Function_<T, U>): Internal.Supplier<U>;
        "is(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        isPresent(): boolean;
        getId(): ResourceLocation;
        "updateReference(net.minecraftforge.registries.RegisterEvent)"(arg0: Internal.RegisterEvent_): void;
        map<U>(arg0: Internal.Function_<T, U>): Internal.Optional<U>;
        getHolder(): Internal.Optional<Internal.Holder<T>>;
        orElseThrow<X extends Internal.Throwable>(arg0: Internal.Supplier_<X>): T;
        get(): T;
        getUnchecked(): T;
        /**
         * @deprecated
        */
        updateReference(arg0: Internal.IForgeRegistry_<T>): void;
        isIn(arg0: Internal.ItemStack_): boolean;
        updateReference(arg0: Internal.RegisterEvent_): void;
        toString(): string;
        asStack(arg0: number): Internal.ItemStack;
        stream(): Internal.Stream<T>;
        getKey(): Internal.ResourceKey<T>;
        notifyAll(): void;
        asItem(): Internal.Item;
        static of<T>(arg0: Internal.Supplier_<T>): com.tterrag.registrate.util.nullness.NonNullSupplier<T>;
        orElseGet(arg0: Internal.Supplier_<T>): T;
        is(arg0: Internal.Item_): boolean;
        static lazy<T>(arg0: Internal.Supplier_<T>): com.tterrag.registrate.util.nullness.NonNullSupplier<T>;
        filter(arg0: Internal.Predicate_<T>): Internal.RegistryEntry<T>;
        hashCode(): number;
        orElse(arg0: T): T;
        wait(): void;
        lazy(): com.tterrag.registrate.util.nullness.NonNullSupplier<T>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        asStack(): Internal.ItemStack;
        "is(java.lang.Object)"<R>(arg0: R): boolean;
        get class(): typeof any
        get present(): boolean
        get id(): ResourceLocation
        get holder(): Internal.Optional<Internal.Holder<T>>
        get unchecked(): T
        get key(): Internal.ResourceKey<T>
    }
    type ItemProviderEntry_<T extends Internal.ItemLike> = ItemProviderEntry<T>;
    interface SampledFloat {
        abstract sample(arg0: Internal.RandomSource_): number;
        (arg0: Internal.RandomSource): number;
    }
    type SampledFloat_ = ((arg0: Internal.RandomSource)=> number) | SampledFloat;
    class SuggestionContext <S> {
        constructor(arg0: Internal.CommandNode_<S>, arg1: number)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        readonly startPos: number;
        readonly parent: Internal.CommandNode<S>;
    }
    type SuggestionContext_<S> = SuggestionContext<S>;
    class MenuBuilder <T extends Internal.AbstractContainerMenu, S extends Internal.Screen & Internal.MenuAccess<T>, P> extends Internal.AbstractBuilder<Internal.MenuType<any>, Internal.MenuType<T>, P, Internal.MenuBuilder<T, S, P>> {
        constructor(arg0: Internal.AbstractRegistrate_<any>, arg1: P, arg2: string, arg3: Internal.BuilderCallback_, arg4: Internal.MenuBuilder$ForgeMenuFactory_<T>, arg5: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.MenuBuilder$ScreenFactory<T, S>>)
        constructor(arg0: Internal.AbstractRegistrate_<any>, arg1: P, arg2: string, arg3: Internal.BuilderCallback_, arg4: Internal.MenuBuilder$MenuFactory_<T>, arg5: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.MenuBuilder$ScreenFactory<T, S>>)
        getClass(): typeof any;
        onRegisterAfter<OR>(arg0: Internal.ResourceKey_<Internal.Registry<OR>>, arg1: com.tterrag.registrate.util.nullness.NonNullConsumer_<Internal.MenuType<T>>): this;
        get(): any;
        static of<T>(arg0: Internal.Supplier_<T>, arg1: com.tterrag.registrate.util.nullness.NonNullSupplier_<string>): com.tterrag.registrate.util.nullness.NonNullSupplier<T>;
        removeTag<TP extends Internal.TagsProvider<R> & Internal.RegistrateTagsProvider<R>>(arg0: Internal.ProviderType_<TP>, ...arg1: Internal.TagKey_<Internal.MenuType<any>>[]): this;
        getOwner(): Internal.AbstractRegistrate<any>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        asSupplier(): com.tterrag.registrate.util.nullness.NonNullSupplier<Internal.MenuType<T>>;
        setData<D extends Internal.RegistrateProvider>(arg0: Internal.ProviderType_<D>, arg1: Internal.NonNullBiConsumer_<Internal.DataGenContext<Internal.MenuType<any>, Internal.MenuType<T>>, D>): this;
        getRegistryKey(): Internal.ResourceKey<Internal.Registry<Internal.MenuType<any>>>;
        onRegister(arg0: com.tterrag.registrate.util.nullness.NonNullConsumer_<Internal.MenuType<T>>): this;
        getName(): string;
        lang(arg0: Internal.NonNullFunction_<Internal.MenuType<T>, string>): this;
        lang(arg0: Internal.NonNullFunction_<Internal.MenuType<T>, string>, arg1: string): this;
        build(): P;
        transform<R2, T2 extends R2, P2, S2 extends Internal.Builder<R2, T2, P2, S2>>(arg0: com.tterrag.registrate.util.nullness.NonNullFunction_<Internal.MenuBuilder<T, S, P>, S2>): S2;
        toString(): string;
        getEntry(): Internal.MenuType<T>;
        notifyAll(): void;
        static of<T>(arg0: Internal.Supplier_<T>): com.tterrag.registrate.util.nullness.NonNullSupplier<T>;
        getParent(): P;
        static lazy<T>(arg0: Internal.Supplier_<T>): com.tterrag.registrate.util.nullness.NonNullSupplier<T>;
        lazy(): com.tterrag.registrate.util.nullness.NonNullSupplier<Internal.RegistryEntry<T>>;
        addMiscData<D extends Internal.RegistrateProvider>(arg0: Internal.ProviderType_<D>, arg1: com.tterrag.registrate.util.nullness.NonNullConsumer_<D>): this;
        hashCode(): number;
        register(): Internal.MenuEntry<T>;
        wait(): void;
        wait(arg0: number): void;
        tag<TP extends Internal.TagsProvider<R> & Internal.RegistrateTagsProvider<R>>(arg0: Internal.ProviderType_<TP>, ...arg1: Internal.TagKey_<Internal.MenuType<any>>[]): this;
        equals(arg0: any): boolean;
        get class(): typeof any
        get owner(): Internal.AbstractRegistrate<any>
        get registryKey(): Internal.ResourceKey<Internal.Registry<Internal.MenuType<any>>>
        get name(): string
        get entry(): Internal.MenuType<T>
        get parent(): P
    }
    type MenuBuilder_<T extends Internal.AbstractContainerMenu, S extends Internal.Screen & Internal.MenuAccess<T>, P> = MenuBuilder<T, S, P>;
    class RealmsServer$WorldType extends Internal.Enum<Internal.RealmsServer$WorldType> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        "compareTo(com.mojang.realmsclient.dto.RealmsServer$WorldType)"(arg0: Internal.RealmsServer$WorldType_): number;
        static valueOf(arg0: string): Internal.RealmsServer$WorldType;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.RealmsServer$WorldType>>;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        compareTo(arg0: Internal.RealmsServer$WorldType_): number;
        getDeclaringClass(): typeof Internal.RealmsServer$WorldType;
        static values(): Internal.RealmsServer$WorldType[];
        get class(): typeof any
        get declaringClass(): typeof Internal.RealmsServer$WorldType
        static readonly ADVENTUREMAP: (Internal.RealmsServer$WorldType) & (Internal.RealmsServer$WorldType);
        static readonly NORMAL: (Internal.RealmsServer$WorldType) & (Internal.RealmsServer$WorldType);
        static readonly EXPERIENCE: (Internal.RealmsServer$WorldType) & (Internal.RealmsServer$WorldType);
        static readonly MINIGAME: (Internal.RealmsServer$WorldType) & (Internal.RealmsServer$WorldType);
        static readonly INSPIRATION: (Internal.RealmsServer$WorldType) & (Internal.RealmsServer$WorldType);
    }
    type RealmsServer$WorldType_ = "normal" | "adventuremap" | "minigame" | "inspiration" | "experience" | RealmsServer$WorldType;
    class SecondaryPoiSensor extends Internal.Sensor<Internal.Villager> {
        constructor()
        getClass(): typeof any;
        toString(): string;
        static isEntityTargetable(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        notifyAll(): void;
        static isEntityAttackableIgnoringLineOfSight(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        static isEntityAttackable(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        wait(arg0: number): void;
        tick(arg0: Internal.ServerLevel_, arg1: Internal.Villager_): void;
        equals(arg0: any): boolean;
        requires(): Internal.Set<Internal.MemoryModuleType<any>>;
        get class(): typeof any
    }
    type SecondaryPoiSensor_ = SecondaryPoiSensor;
    class TrackerBarBlockEntity extends Internal.KineticBlockEntity implements Internal.MenuProvider {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        clearKineticInformation(): void;
        static switchToBlockState(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        onRollChanged(): void;
        requestModelDataUpdate(): void;
        containedFluidTooltip(arg0: Internal.List_<Internal.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        destroy(): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        getGeneratedSpeed(): number;
        isCustomConnection(arg0: Internal.KineticBlockEntity_, arg1: Internal.BlockState_, arg2: Internal.BlockState_): boolean;
        readClient(arg0: Internal.CompoundTag_): void;
        isVirtual(): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        remove(): void;
        load(arg0: Internal.CompoundTag_): void;
        award(arg0: Internal.CreateAdvancement_): void;
        setChanged(): void;
        getFlickerScore(): number;
        saveWithoutMetadata(): Internal.CompoundTag;
        static convertToAngular(arg0: number): number;
        "getUpdatePacket()"(): Internal.Packet<any>;
        packetTarget(): Internal.PacketDistributor$PacketTarget;
        setRemoved(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        writeSafe(arg0: Internal.CompoundTag_): void;
        attachKinetics(): void;
        getType(): Internal.BlockEntityType<any>;
        static convertToDirection(arg0: number, arg1: Internal.Direction_): number;
        writeClient(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        setNetwork(arg0: number): void;
        onSpeedChanged(arg0: number): void;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        refreshBlockState(): void;
        getRenderBoundingBox(): Internal.AABB;
        getDisplayName(): Internal.Component;
        getOrCreateNetwork(): Internal.KineticNetwork;
        getClass(): typeof any;
        sendToMenu(arg0: Internal.FriendlyByteBuf_): void;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        addBehaviours(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        onChunkUnloaded(): void;
        setSource(arg0: BlockPos_): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        attachBehaviourLate(arg0: Internal.BlockEntityBehaviour_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        createMenu(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Player_): Internal.AbstractContainerMenu;
        clearRemoved(): void;
        getUpdatePacket(): Internal.Packet<any>;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        setLazyTickRate(arg0: number): void;
        needsSpeedUpdate(): boolean;
        awardIfNear(arg0: Internal.CreateAdvancement_, arg1: number): void;
        containedChunk(): Internal.LevelChunk;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        markVirtual(): void;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        forEachBehaviour(arg0: Internal.Consumer_<Internal.BlockEntityBehaviour>): void;
        invalidate(): void;
        tickAudio(): void;
        removeSource(): void;
        wait(arg0: number): void;
        addPropagationLocations(arg0: Internal.IRotate_, arg1: Internal.BlockState_, arg2: Internal.List_<BlockPos>): Internal.List<BlockPos>;
        onBlockRemoved(): void;
        getButtonsEnabled(): boolean;
        reviveCaps(): void;
        sendData(): void;
        stopAllNotes(): void;
        getBehaviour<T extends Internal.BlockEntityBehaviour>(arg0: Internal.BehaviourType_<T>): T;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        pressTogglePlayButton(): void;
        calculateStressApplied(): number;
        setLevel(arg0: Internal.Level_): void;
        notify(): void;
        addBehavioursDeferred(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        updateFromNetwork(arg0: number, arg1: number, arg2: number): void;
        onLoad(): void;
        calculateAddedStressCapacity(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        hasSource(): boolean;
        setButtonsEnabled(arg0: boolean): void;
        initialize(): void;
        invalidateCaps(): void;
        handleNote(arg0: Internal.ShortMessage_): void;
        isOverStressed(): boolean;
        getBlockState(): Internal.BlockState;
        warnOfMovement(): void;
        getSpeed(): number;
        tick(): void;
        canPlayerUse(arg0: Internal.Player_): boolean;
        static convertToLinear(arg0: number): number;
        lazyTick(): void;
        pressStopButton(): void;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        addToTooltip(arg0: Internal.List_<Internal.Component>, arg1: boolean): boolean;
        m_183515_(arg0: Internal.CompoundTag_): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        isSource(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        detachKinetics(): void;
        notifyUpdate(): void;
        isSpeedRequirementFulfilled(): boolean;
        setSpeed(arg0: number): void;
        wait(arg0: number, arg1: number): void;
        isChunkUnloaded(): boolean;
        getLevel(): Internal.Level;
        getRequiredItems(arg0: Internal.BlockState_): Internal.ItemRequirement;
        onlyOpCanSetNbt(): boolean;
        removeBehaviour(arg0: Internal.BehaviourType_<any>): void;
        getRollerAngle(arg0: number): number;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getTheoreticalSpeed(): number;
        getIcon(arg0: boolean): Internal.ItemStack;
        propagateRotationTo(arg0: Internal.KineticBlockEntity_, arg1: Internal.BlockState_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: boolean, arg5: boolean): number;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        blockHolderGetter(): Internal.HolderGetter<Internal.Block>;
        hasNetwork(): boolean;
        getAllBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        serializeNBT(): Internal.CompoundTag;
        registerAwardables(arg0: Internal.List_<Internal.BlockEntityBehaviour>, ...arg1: Internal.CreateAdvancement_[]): void;
        getScrollSpeed(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getModelData(): Internal.ModelData;
        addToGoggleTooltip(arg0: Internal.List_<Internal.Component>, arg1: boolean): boolean;
        getRotationAngleOffset(arg0: Internal.Direction$Axis_): number;
        equals(arg0: any): boolean;
        get generatedSpeed(): number
        get virtual(): boolean
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get flickerScore(): number
        get "updatePacket()"(): Internal.Packet<any>
        get type(): Internal.BlockEntityType<any>
        set network(arg0: number)
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get renderBoundingBox(): Internal.AABB
        get displayName(): Internal.Component
        get orCreateNetwork(): Internal.KineticNetwork
        get class(): typeof any
        set source(arg0: BlockPos_)
        get updatePacket(): Internal.Packet<any>
        set lazyTickRate(arg0: number)
        get persistentData(): Internal.CompoundTag
        get buttonsEnabled(): boolean
        get updateTag(): Internal.CompoundTag
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        set buttonsEnabled(arg0: boolean)
        get overStressed(): boolean
        get blockState(): Internal.BlockState
        get speed(): number
        get source(): boolean
        get speedRequirementFulfilled(): boolean
        set speed(arg0: number)
        get chunkUnloaded(): boolean
        get level(): Internal.Level
        get theoreticalSpeed(): number
        get allBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get scrollSpeed(): number
        get modelData(): Internal.ModelData
        inventory: Internal.TrackerBarBlockEntity$TrackerBarInventory;
        rollerAngle: number;
        static readonly MAX_ROLLER_VELOCITY: (21.666) & (number);
        static readonly SCROLL_SPEED: (0.03125) & (number);
    }
    type TrackerBarBlockEntity_ = TrackerBarBlockEntity;
    class DragonEggBlock extends Internal.FallingBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        static isFree(arg0: Internal.BlockState_): boolean;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onLand(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.FallingBlockEntity_): void;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        onBrokenAfterFall(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FallingBlockEntity_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        getFallDamageSource(arg0: Internal.Entity_): DamageSource;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        getDustColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type DragonEggBlock_ = DragonEggBlock;
    class IntrinsicHolderTagsProvider$IntrinsicTagAppender <T> extends Internal.TagsProvider$TagAppender<T> implements Internal.IForgeIntrinsicHolderTagAppender<T> {
        remove(arg0: Internal.ResourceKey_<T>, ...arg1: Internal.ResourceKey_<T>[]): this;
        getClass(): typeof any;
        "remove(net.minecraft.tags.TagKey,net.minecraft.tags.TagKey[])"(arg0: Internal.TagKey_<any>, arg1: Internal.TagKey_<any>[]): Internal.TagsProvider$TagAppender<any>;
        "remove(java.lang.Object,java.lang.Object[])"(arg0: T, ...arg1: T[]): this;
        "addOptionalTag(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): Internal.TagsProvider$TagAppender<T>;
        remove(arg0: Internal.TagKey_<any>): Internal.TagsProvider$TagAppender<any>;
        getModID(): string;
        "add(net.minecraft.tags.TagEntry)"(arg0: Internal.TagEntry_): Internal.TagsProvider$TagAppender<T>;
        getInternalBuilder(): Internal.TagBuilder;
        notify(): void;
        "addOptionalTag(net.minecraft.tags.TagKey)"(arg0: Internal.TagKey_<T>): Internal.TagsProvider$TagAppender<T>;
        wait(arg0: number, arg1: number): void;
        replace(arg0: boolean): Internal.TagsProvider$TagAppender<any>;
        addOptional(arg0: ResourceLocation_): Internal.TagsProvider$TagAppender<T>;
        remove(arg0: ResourceLocation_): Internal.TagsProvider$TagAppender<any>;
        add(...arg0: Internal.ResourceKey_<T>[]): Internal.TagsProvider$TagAppender<T>;
        add(arg0: Internal.ResourceKey_<T>): Internal.TagsProvider$TagAppender<T>;
        remove(arg0: T, ...arg1: T[]): this;
        remove(arg0: Internal.TagKey_<any>, arg1: Internal.TagKey_<any>[]): Internal.TagsProvider$TagAppender<any>;
        "add(net.minecraft.resources.ResourceKey[])"(...arg0: Internal.ResourceKey_<T>[]): Internal.TagsProvider$TagAppender<T>;
        "add(java.lang.Object[])"(...arg0: T[]): this;
        remove(arg0: ResourceLocation_, arg1: ResourceLocation_[]): Internal.TagsProvider$TagAppender<any>;
        "remove(net.minecraft.tags.TagKey)"(arg0: Internal.TagKey_<any>): Internal.TagsProvider$TagAppender<any>;
        remove(arg0: T): this;
        add(arg0: T): this;
        toString(): string;
        "remove(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<any>): Internal.TagsProvider$TagAppender<any>;
        add(...arg0: T[]): this;
        addOptionalTags(...arg0: Internal.TagKey_<T>[]): Internal.TagsProvider$TagAppender<T>;
        notifyAll(): void;
        "remove(java.lang.Object)"(arg0: T): this;
        add(arg0: Internal.TagEntry_): Internal.TagsProvider$TagAppender<T>;
        addOptionalTag(arg0: Internal.TagKey_<T>): Internal.TagsProvider$TagAppender<T>;
        "remove(net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation[])"(arg0: ResourceLocation_, arg1: ResourceLocation_[]): Internal.TagsProvider$TagAppender<any>;
        addTag(arg0: Internal.TagKey_<any>): Internal.TagsProvider$TagAppender<any>;
        "remove(net.minecraft.resources.ResourceKey,net.minecraft.resources.ResourceKey[])"(arg0: Internal.ResourceKey_<T>, ...arg1: Internal.ResourceKey_<T>[]): this;
        hashCode(): number;
        addOptionalTag(arg0: ResourceLocation_): Internal.TagsProvider$TagAppender<T>;
        wait(): void;
        getKey(arg0: T): Internal.ResourceKey<T>;
        wait(arg0: number): void;
        "add(java.lang.Object)"(arg0: T): this;
        addTags(...arg0: Internal.TagKey_<T>[]): this;
        replace(): Internal.TagsProvider$TagAppender<any>;
        equals(arg0: any): boolean;
        remove(arg0: Internal.ResourceKey_<any>): Internal.TagsProvider$TagAppender<any>;
        "add(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<T>): Internal.TagsProvider$TagAppender<T>;
        "remove(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): Internal.TagsProvider$TagAppender<any>;
        get class(): typeof any
        get modID(): string
        get internalBuilder(): Internal.TagBuilder
    }
    type IntrinsicHolderTagsProvider$IntrinsicTagAppender_<T> = IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
    abstract class PlacementFilter extends Internal.PlacementModifier {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getPositions(arg0: Internal.PlacementContext_, arg1: Internal.RandomSource_, arg2: BlockPos_): Internal.Stream<BlockPos>;
        wait(): void;
        abstract type(): Internal.PlacementModifierType<any>;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type PlacementFilter_ = PlacementFilter;
    class DamageEffects extends Internal.Enum<Internal.DamageEffects> implements Internal.StringRepresentable {
        getClass(): typeof any;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.DamageEffects>>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        "compareTo(net.minecraft.world.damagesource.DamageEffects)"(arg0: Internal.DamageEffects_): number;
        static values(): Internal.DamageEffects[];
        getSerializedName(): string;
        getDeclaringClass(): typeof Internal.DamageEffects;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        sound(): Internal.SoundEvent;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        toString(): string;
        notifyAll(): void;
        static valueOf(arg0: string): Internal.DamageEffects;
        name(): string;
        hashCode(): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        compareTo(arg0: Internal.DamageEffects_): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.DamageEffects
        static readonly THORNS: (Internal.DamageEffects) & (Internal.DamageEffects);
        static readonly CODEC: Internal.Codec<Internal.DamageEffects>;
        static readonly HURT: (Internal.DamageEffects) & (Internal.DamageEffects);
        static readonly POKING: (Internal.DamageEffects) & (Internal.DamageEffects);
        static readonly DROWNING: (Internal.DamageEffects) & (Internal.DamageEffects);
        static readonly FREEZING: (Internal.DamageEffects) & (Internal.DamageEffects);
        static readonly BURNING: (Internal.DamageEffects) & (Internal.DamageEffects);
    }
    type DamageEffects_ = "thorns" | "drowning" | "hurt" | DamageEffects | "burning" | "poking" | "freezing";
    interface OptionInstance$CycleableValueSet$ValueSetter <T> {
        abstract set(arg0: Internal.OptionInstance_<T>, arg1: T): void;
        (arg0: Internal.OptionInstance<T>, arg1: T): void;
    }
    type OptionInstance$CycleableValueSet$ValueSetter_<T> = OptionInstance$CycleableValueSet$ValueSetter<T> | ((arg0: Internal.OptionInstance<T>, arg1: T)=> void);
    class OptionalDynamic <T> extends Internal.DynamicLike<T> {
        constructor(arg0: Internal.DynamicOps_<T>, arg1: Internal.DataResult_<Internal.Dynamic<T>>)
        asMapOpt<K, V>(arg0: Internal.Function_<Internal.Dynamic<T>, K>, arg1: Internal.Function_<Internal.Dynamic<T>, V>): Internal.DataResult<Internal.Map<K, V>>;
        createIntList(arg0: Internal.IntStream_): Internal.Dynamic<any>;
        createBoolean(arg0: boolean): Internal.Dynamic<T>;
        "readMap(com.mojang.serialization.Decoder,java.util.function.Function)"<K, V>(arg0: Internal.Decoder_<K>, arg1: Internal.Function_<K, Internal.Decoder<V>>): Internal.DataResult<Internal.List<com.mojang.datafixers.util.Pair<K, V>>>;
        getGeneric(arg0: T): Internal.DataResult<T>;
        readMap<K, V>(arg0: Internal.Decoder_<K>, arg1: Internal.Decoder_<V>): Internal.DataResult<Internal.List<com.mojang.datafixers.util.Pair<K, V>>>;
        getOps(): Internal.DynamicOps<T>;
        notify(): void;
        createNumeric(arg0: number): Internal.Dynamic<T>;
        asNumber(arg0: number): number;
        asIntStream(): Internal.IntStream;
        asString(): Internal.DataResult<string>;
        createDouble(arg0: number): Internal.Dynamic<T>;
        asByte(arg0: number): number;
        readList<E>(arg0: Internal.Function_<Internal.Dynamic<any>, Internal.DataResult<E>>): Internal.DataResult<Internal.List<E>>;
        asMap<K, V>(arg0: Internal.Function_<Internal.Dynamic<T>, K>, arg1: Internal.Function_<Internal.Dynamic<T>, V>): Internal.Map<K, V>;
        getElementGeneric(arg0: T, arg1: T): T;
        getElement(arg0: string): Internal.DataResult<T>;
        getElement(arg0: string, arg1: T): T;
        asLong(arg0: number): number;
        into<V>(arg0: Internal.Function_<Internal.Dynamic<T>, V>): Internal.DataResult<V>;
        asShort(arg0: number): number;
        asDouble(arg0: number): number;
        emptyMap(): Internal.Dynamic<T>;
        asFloat(arg0: number): number;
        asNumber(): Internal.DataResult<number>;
        readMap<K, V>(arg0: Internal.Decoder_<K>, arg1: Internal.Function_<K, Internal.Decoder<V>>): Internal.DataResult<Internal.List<com.mojang.datafixers.util.Pair<K, V>>>;
        asString(arg0: string): string;
        wait(): void;
        createFloat(arg0: number): Internal.Dynamic<T>;
        read<A>(arg0: Internal.Decoder_<A>): Internal.DataResult<A>;
        decode<A>(arg0: Internal.Decoder_<A>): Internal.DataResult<com.mojang.datafixers.util.Pair<A, T>>;
        flatMap<U>(arg0: Internal.Function_<Internal.Dynamic<T>, Internal.DataResult<U>>): Internal.DataResult<U>;
        asStream(): Internal.Stream<Internal.Dynamic<T>>;
        "readList(java.util.function.Function)"<E>(arg0: Internal.Function_<Internal.Dynamic<any>, Internal.DataResult<E>>): Internal.DataResult<Internal.List<E>>;
        get(arg0: string): this;
        createByte(arg0: number): Internal.Dynamic<T>;
        getClass(): typeof any;
        emptyList(): Internal.Dynamic<T>;
        asLongStreamOpt(): Internal.DataResult<Internal.LongStream>;
        createList(arg0: Internal.Stream_<Internal.Dynamic<any>>): Internal.Dynamic<T>;
        get(): Internal.DataResult<Internal.Dynamic<T>>;
        wait(arg0: number, arg1: number): void;
        readMap<R>(arg0: Internal.DataResult_<R>, arg1: Internal.Function3_<R, Internal.Dynamic<T>, Internal.Dynamic<T>, Internal.DataResult<R>>): Internal.DataResult<R>;
        createMap(arg0: Internal.Map_<Internal.Dynamic<any>, Internal.Dynamic<any>>): Internal.Dynamic<T>;
        asIntStreamOpt(): Internal.DataResult<Internal.IntStream>;
        asByteBuffer(): Internal.ByteBuffer;
        createLongList(arg0: Internal.LongStream_): Internal.Dynamic<any>;
        readList<E>(arg0: Internal.Decoder_<E>): Internal.DataResult<Internal.List<E>>;
        orElseEmptyList(): Internal.Dynamic<T>;
        asInt(arg0: number): number;
        createShort(arg0: number): Internal.Dynamic<T>;
        createString(arg0: string): Internal.Dynamic<T>;
        asBoolean(arg0: boolean): boolean;
        getElementGeneric(arg0: T): Internal.DataResult<T>;
        toString(): string;
        notifyAll(): void;
        asList<U>(arg0: Internal.Function_<Internal.Dynamic<T>, U>): Internal.List<U>;
        map<U>(arg0: Internal.Function_<Internal.Dynamic<T>, U>): Internal.DataResult<U>;
        createByteList(arg0: Internal.ByteBuffer_): Internal.Dynamic<any>;
        asByteBufferOpt(): Internal.DataResult<Internal.ByteBuffer>;
        orElseEmptyMap(): Internal.Dynamic<T>;
        hashCode(): number;
        "readList(com.mojang.serialization.Decoder)"<E>(arg0: Internal.Decoder_<E>): Internal.DataResult<Internal.List<E>>;
        result(): Internal.Optional<Internal.Dynamic<T>>;
        asLongStream(): Internal.LongStream;
        asListOpt<U>(arg0: Internal.Function_<Internal.Dynamic<T>, U>): Internal.DataResult<Internal.List<U>>;
        asStreamOpt(): Internal.DataResult<Internal.Stream<Internal.Dynamic<T>>>;
        asMapOpt(): Internal.DataResult<Internal.Stream<com.mojang.datafixers.util.Pair<Internal.Dynamic<T>, Internal.Dynamic<T>>>>;
        wait(arg0: number): void;
        createInt(arg0: number): Internal.Dynamic<T>;
        createLong(arg0: number): Internal.Dynamic<T>;
        "readMap(com.mojang.serialization.Decoder,com.mojang.serialization.Decoder)"<K, V>(arg0: Internal.Decoder_<K>, arg1: Internal.Decoder_<V>): Internal.DataResult<Internal.List<com.mojang.datafixers.util.Pair<K, V>>>;
        equals(arg0: any): boolean;
        "readMap(com.mojang.serialization.DataResult,com.mojang.datafixers.util.Function3)"<R>(arg0: Internal.DataResult_<R>, arg1: Internal.Function3_<R, Internal.Dynamic<T>, Internal.Dynamic<T>, Internal.DataResult<R>>): Internal.DataResult<R>;
        get ops(): Internal.DynamicOps<T>
        get class(): typeof any
    }
    type OptionalDynamic_<T> = OptionalDynamic<T>;
    class GameRules$IntegerValue extends Internal.GameRules$Value<Internal.GameRules$IntegerValue> {
        constructor(arg0: Internal.GameRules$Type_<Internal.GameRules$IntegerValue>, arg1: number)
        set(arg0: number, arg1: Internal.MinecraftServer_): void;
        getClass(): typeof any;
        onChanged(arg0: Internal.MinecraftServer_): void;
        setFromArgument(arg0: Internal.CommandContext_<Internal.CommandSourceStack>, arg1: string): void;
        getCommandResult(): number;
        toString(): string;
        notifyAll(): void;
        static create(arg0: number): Internal.GameRules$Type<Internal.GameRules$IntegerValue>;
        "setFrom(net.minecraft.world.level.GameRules$Value,net.minecraft.server.MinecraftServer)"(arg0: Internal.GameRules$Value_<any>, arg1: Internal.MinecraftServer_): void;
        static create(arg0: number, arg1: Internal.BiConsumer_<Internal.MinecraftServer, Internal.GameRules$IntegerValue>): Internal.GameRules$Type<Internal.GameRules$IntegerValue>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setFrom(arg0: Internal.GameRules$Value_<any>, arg1: Internal.MinecraftServer_): void;
        hashCode(): number;
        serialize(): string;
        setFrom(arg0: Internal.GameRules$IntegerValue_, arg1: Internal.MinecraftServer_): void;
        tryDeserialize(arg0: string): boolean;
        wait(): void;
        abstract deserialize(arg0: string): void;
        wait(arg0: number): void;
        "setFrom(net.minecraft.world.level.GameRules$IntegerValue,net.minecraft.server.MinecraftServer)"(arg0: Internal.GameRules$IntegerValue_, arg1: Internal.MinecraftServer_): void;
        equals(arg0: any): boolean;
        get(): number;
        get class(): typeof any
        get commandResult(): number
    }
    type GameRules$IntegerValue_ = GameRules$IntegerValue;
    class SlidingDoorBlockEntity extends Internal.SmartBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        getBehaviour<T extends Internal.BlockEntityBehaviour>(arg0: Internal.BehaviourType_<T>): T;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        requestModelDataUpdate(): void;
        destroy(): void;
        setLevel(arg0: Internal.Level_): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        notify(): void;
        readClient(arg0: Internal.CompoundTag_): void;
        addBehavioursDeferred(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        isVirtual(): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        getBlockPos(): BlockPos;
        remove(): void;
        isRemoved(): boolean;
        load(arg0: Internal.CompoundTag_): void;
        award(arg0: Internal.CreateAdvancement_): void;
        setChanged(): void;
        onLoad(): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        initialize(): void;
        "getUpdatePacket()"(): Internal.Packet<any>;
        packetTarget(): Internal.PacketDistributor$PacketTarget;
        invalidateCaps(): void;
        getBlockState(): Internal.BlockState;
        setRemoved(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        writeSafe(arg0: Internal.CompoundTag_): void;
        tick(): void;
        canPlayerUse(arg0: Internal.Player_): boolean;
        getType(): Internal.BlockEntityType<any>;
        lazyTick(): void;
        writeClient(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        m_183515_(arg0: Internal.CompoundTag_): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        static isOpen(arg0: Internal.BlockState_): boolean;
        refreshBlockState(): void;
        getRenderBoundingBox(): Internal.AABB;
        getClass(): typeof any;
        sendToMenu(arg0: Internal.FriendlyByteBuf_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        addBehaviours(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        notifyUpdate(): void;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        attachBehaviourLate(arg0: Internal.BlockEntityBehaviour_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        wait(arg0: number, arg1: number): void;
        isChunkUnloaded(): boolean;
        getLevel(): Internal.Level;
        getRequiredItems(arg0: Internal.BlockState_): Internal.ItemRequirement;
        clearRemoved(): void;
        onlyOpCanSetNbt(): boolean;
        removeBehaviour(arg0: Internal.BehaviourType_<any>): void;
        getUpdatePacket(): Internal.Packet<any>;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        setLazyTickRate(arg0: number): void;
        awardIfNear(arg0: Internal.CreateAdvancement_, arg1: number): void;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        containedChunk(): Internal.LevelChunk;
        getPersistentData(): Internal.CompoundTag;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        toString(): string;
        markVirtual(): void;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        forEachBehaviour(arg0: Internal.Consumer_<Internal.BlockEntityBehaviour>): void;
        blockHolderGetter(): Internal.HolderGetter<Internal.Block>;
        getAllBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>;
        invalidate(): void;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        serializeNBT(): Internal.CompoundTag;
        registerAwardables(arg0: Internal.List_<Internal.BlockEntityBehaviour>, ...arg1: Internal.CreateAdvancement_[]): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getModelData(): Internal.ModelData;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        reviveCaps(): void;
        sendData(): void;
        get updateTag(): Internal.CompoundTag
        set level(arg0: Internal.Level_)
        get virtual(): boolean
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get blockPos(): BlockPos
        get removed(): boolean
        get "updatePacket()"(): Internal.Packet<any>
        get blockState(): Internal.BlockState
        get type(): Internal.BlockEntityType<any>
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        get chunkUnloaded(): boolean
        get level(): Internal.Level
        get updatePacket(): Internal.Packet<any>
        set lazyTickRate(arg0: number)
        get persistentData(): Internal.CompoundTag
        get allBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get modelData(): Internal.ModelData
    }
    type SlidingDoorBlockEntity_ = SlidingDoorBlockEntity;
    class TrackerBarBlock extends Internal.HorizontalKineticBlock implements Internal.IBE<Internal.TrackerBarBlockEntity> {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getRotationAxis(arg0: Internal.BlockState_): Internal.Direction$Axis;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        static playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getParticleInitialRadius(): number;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        wait(): void;
        static playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        hideStressImpact(): boolean;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        getBlockEntityClass(): typeof Internal.TrackerBarBlockEntity;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.TrackerBarBlockEntity;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        getParticleTargetRadius(): number;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        getPreferredHorizontalFacing(arg0: Internal.BlockPlaceContext_): Internal.Direction;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.TrackerBarBlockEntity>;
        notifyAll(): void;
        getBlockEntityType(): Internal.BlockEntityType<Internal.TrackerBarBlockEntity>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getFriction(): number;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        getMinimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.TrackerBarBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        showCapacityWithAnnotation(): boolean;
        static stateById(arg0: number): Internal.BlockState;
        hasShaftTowards(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_): boolean;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.TrackerBarBlockEntity>): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get particleInitialRadius(): number
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        get blockEntityClass(): typeof Internal.TrackerBarBlockEntity
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        get particleTargetRadius(): number
        set explosionResistance(arg0: number)
        get blockEntityType(): Internal.BlockEntityType<Internal.TrackerBarBlockEntity>
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get minimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly TRANSMITTING: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly POWERED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type TrackerBarBlock_ = TrackerBarBlock;
    class CardboardBlockItem extends Internal.BlockItem {
        constructor(arg0: Internal.Block_, arg1: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): Internal.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        removeFromBlockToItemMap(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        place(arg0: Internal.BlockPlaceContext_): Internal.InteractionResult;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        getBlock(): Internal.Block;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        registerBlocks(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get block(): Internal.Block
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type CardboardBlockItem_ = CardboardBlockItem;
    class RoundingMode extends Internal.Enum<Internal.RoundingMode> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.RoundingMode>>;
        static "valueOf(java.lang.String)"(arg0: string): Internal.RoundingMode;
        static valueOf(arg0: string): Internal.RoundingMode;
        toString(): string;
        notifyAll(): void;
        getDeclaringClass(): typeof Internal.RoundingMode;
        notify(): void;
        static "valueOf(int)"(arg0: number): Internal.RoundingMode;
        wait(arg0: number, arg1: number): void;
        static values(): Internal.RoundingMode[];
        compareTo(arg0: any): number;
        compareTo(arg0: Internal.RoundingMode_): number;
        "compareTo(java.math.RoundingMode)"(arg0: Internal.RoundingMode_): number;
        name(): string;
        static valueOf(arg0: number): Internal.RoundingMode;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.RoundingMode
        static readonly FLOOR: (Internal.RoundingMode) & (Internal.RoundingMode);
        static readonly HALF_DOWN: (Internal.RoundingMode) & (Internal.RoundingMode);
        static readonly UNNECESSARY: (Internal.RoundingMode) & (Internal.RoundingMode);
        static readonly HALF_UP: (Internal.RoundingMode) & (Internal.RoundingMode);
        static readonly UP: (Internal.RoundingMode) & (Internal.RoundingMode);
        static readonly CEILING: (Internal.RoundingMode) & (Internal.RoundingMode);
        static readonly DOWN: (Internal.RoundingMode) & (Internal.RoundingMode);
        static readonly HALF_EVEN: (Internal.RoundingMode) & (Internal.RoundingMode);
    }
    type RoundingMode_ = "floor" | "up" | "down" | RoundingMode | "half_down" | "ceiling" | "unnecessary" | "half_up" | "half_even";
    class ItemListDisplaySource extends Internal.ValueListDisplaySource {
        constructor()
        getClass(): typeof any;
        getName(): Internal.Component;
        loadFlapDisplayLayout(arg0: Internal.DisplayLinkContext_, arg1: Internal.FlapDisplayBlockEntity_, arg2: Internal.FlapDisplayLayout_): void;
        initConfigurationWidgets(arg0: Internal.DisplayLinkContext_, arg1: Internal.ModularGuiLineBuilder_, arg2: boolean): void;
        toString(): string;
        loadFlapDisplayLayout(arg0: Internal.DisplayLinkContext_, arg1: Internal.FlapDisplayBlockEntity_, arg2: Internal.FlapDisplayLayout_, arg3: number): void;
        shouldPassiveReset(): boolean;
        notifyAll(): void;
        transferData(arg0: Internal.DisplayLinkContext_, arg1: Internal.DisplayTarget_, arg2: number): void;
        provideFlapDisplayText(arg0: Internal.DisplayLinkContext_, arg1: Internal.DisplayTargetStats_): Internal.List<Internal.List<Internal.MutableComponent>>;
        static getAll(arg0: Internal.LevelAccessor_, arg1: BlockPos_): Internal.List<Internal.DisplaySource>;
        populateData(arg0: Internal.DisplayLinkContext_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        onSignalReset(arg0: Internal.DisplayLinkContext_): void;
        static displaySource<B extends Internal.Block, P>(arg0: Internal.RegistryEntry_<Internal.DisplaySource>): Internal.NonNullUnaryOperator<com.tterrag.registrate.builders.BlockBuilder<B, P>>;
        hashCode(): number;
        wait(): void;
        static get(arg0: ResourceLocation_): Internal.DisplaySource;
        provideText(arg0: Internal.DisplayLinkContext_, arg1: Internal.DisplayTargetStats_): Internal.List<Internal.MutableComponent>;
        wait(arg0: number): void;
        getPassiveRefreshTicks(): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get name(): Internal.Component
        get passiveRefreshTicks(): number
    }
    type ItemListDisplaySource_ = ItemListDisplaySource;
    class GantryShaftBlock$Part extends Internal.Enum<Internal.GantryShaftBlock$Part> implements Internal.StringRepresentable {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        toString(): string;
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.GantryShaftBlock$Part;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.GantryShaftBlock$Part>>;
        "compareTo(com.simibubi.create.content.kinetics.gantry.GantryShaftBlock$Part)"(arg0: Internal.GantryShaftBlock$Part_): number;
        getDeclaringClass(): typeof Internal.GantryShaftBlock$Part;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        compareTo(arg0: Internal.GantryShaftBlock$Part_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static values(): Internal.GantryShaftBlock$Part[];
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.GantryShaftBlock$Part
        static readonly END: (Internal.GantryShaftBlock$Part) & (Internal.GantryShaftBlock$Part);
        static readonly MIDDLE: (Internal.GantryShaftBlock$Part) & (Internal.GantryShaftBlock$Part);
        static readonly SINGLE: (Internal.GantryShaftBlock$Part) & (Internal.GantryShaftBlock$Part);
        static readonly START: (Internal.GantryShaftBlock$Part) & (Internal.GantryShaftBlock$Part);
    }
    type GantryShaftBlock$Part_ = "start" | "single" | "middle" | "end" | GantryShaftBlock$Part;
    class ModelBuilder$FaceRotation extends Internal.Enum<Internal.ModelBuilder$FaceRotation> {
        compareTo(arg0: Internal.ModelBuilder$FaceRotation_): number;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ModelBuilder$FaceRotation>>;
        toString(): string;
        notifyAll(): void;
        getDeclaringClass(): typeof Internal.ModelBuilder$FaceRotation;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static valueOf(arg0: string): Internal.ModelBuilder$FaceRotation;
        name(): string;
        hashCode(): number;
        static values(): Internal.ModelBuilder$FaceRotation[];
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(net.minecraftforge.client.model.generators.ModelBuilder$FaceRotation)"(arg0: Internal.ModelBuilder$FaceRotation_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.ModelBuilder$FaceRotation
        static readonly COUNTERCLOCKWISE_90: (Internal.ModelBuilder$FaceRotation) & (Internal.ModelBuilder$FaceRotation);
        static readonly ZERO: (Internal.ModelBuilder$FaceRotation) & (Internal.ModelBuilder$FaceRotation);
        static readonly CLOCKWISE_90: (Internal.ModelBuilder$FaceRotation) & (Internal.ModelBuilder$FaceRotation);
        static readonly UPSIDE_DOWN: (Internal.ModelBuilder$FaceRotation) & (Internal.ModelBuilder$FaceRotation);
    }
    type ModelBuilder$FaceRotation_ = "zero" | "clockwise_90" | "upside_down" | ModelBuilder$FaceRotation | "counterclockwise_90";
    interface IEPlayerPositionLookS2CPacket {
        abstract setPlayerDimension(arg0: Internal.ResourceKey_<Internal.Level>): void;
        abstract getPlayerDimension(): Internal.ResourceKey<Internal.Level>;
        set playerDimension(arg0: Internal.ResourceKey_<Internal.Level>)
        get playerDimension(): Internal.ResourceKey<Internal.Level>
    }
    type IEPlayerPositionLookS2CPacket_ = IEPlayerPositionLookS2CPacket;
    class DarkOakTrunkPlacer extends Internal.TrunkPlacer {
        constructor(arg0: number, arg1: number, arg2: number)
        placeTrunk(arg0: Internal.LevelSimulatedReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: number, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): Internal.List<Internal.FoliagePlacer$FoliageAttachment>;
        getClass(): typeof any;
        hashCode(): number;
        isFree(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        toString(): string;
        getTreeHeight(arg0: Internal.RandomSource_): number;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.DarkOakTrunkPlacer>;
    }
    type DarkOakTrunkPlacer_ = DarkOakTrunkPlacer;
    class RecipeKey <T> {
        constructor(component: Internal.RecipeComponent_<T>, name: string)
        getClass(): typeof any;
        exclude(): this;
        "optional(java.lang.Object)"(value: T): this;
        alwaysWrite(): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        preferred(name: string): this;
        optional(value: Internal.RecipeOptional_<T>): this;
        "alt(java.lang.String[])"(...names: string[]): this;
        defaultOptional(): this;
        toString(): string;
        optional(): boolean;
        alt(...names: string[]): this;
        includeInAutoConstructors(): boolean;
        alt(name: string): this;
        notifyAll(): void;
        "optional(dev.latvian.mods.kubejs.recipe.schema.RecipeOptional)"(value: Internal.RecipeOptional_<T>): this;
        allowEmpty(): this;
        noBuilders(): this;
        optional(value: T): this;
        hashCode(): number;
        "alt(java.lang.String)"(name: string): this;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        readonly name: string;
        excluded: boolean;
        preferred: string;
        alwaysWrite: boolean;
        optional: Internal.RecipeOptional<T>;
        readonly names: Internal.Set<string>;
        allowEmpty: boolean;
        readonly component: Internal.RecipeComponent<T>;
        noBuilders: boolean;
    }
    type RecipeKey_<T> = RecipeKey<T>;
    interface RandomSource {
        create(arg0: number): this;
        create(): this;
        abstract fork(): this;
        abstract nextBoolean(): boolean;
        abstract nextLong(): number;
        abstract setSeed(arg0: number): void;
        abstract nextDouble(): number;
        nextInt(arg0: number, arg1: number): number;
        abstract nextGaussian(): number;
        createNewThreadLocalInstance(): this;
        consumeCount(arg0: number): void;
        abstract forkPositional(): Internal.PositionalRandomFactory;
        triangle(arg0: number, arg1: number): number;
        abstract nextInt(arg0: number): number;
        abstract nextFloat(): number;
        /**
         * @deprecated
        */
        createThreadSafe(): this;
        abstract nextInt(): number;
        nextIntBetweenInclusive(arg0: number, arg1: number): number;
        set seed(arg0: number)
        /**
         * @deprecated
        */
        readonly GAUSSIAN_SPREAD_FACTOR: (2.297) & (number);
    }
    type RandomSource_ = RandomSource;
    abstract class CopycatBlock extends Internal.Block implements Internal.IWrenchable, Internal.IBE<Internal.CopycatBlockEntity> {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.CopycatBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        static playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.CopycatBlockEntity>): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getAcceptedBlockState(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.Direction_): Internal.BlockState;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        shouldFaceAlwaysRender(arg0: Internal.BlockState_, arg1: Internal.Direction_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        wait(): void;
        static playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        getMaxHorizontalOffset(): number;
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        prepareMaterial(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_, arg6: Internal.BlockState_): Internal.BlockState;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        abstract canConnectTexturesToward(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        static getMaterial(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getJumpFactor(): number;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getBlockEntityType(): Internal.BlockEntityType<Internal.CopycatBlockEntity>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isIgnoredConnectivitySide(arg0: Internal.BlockAndTintGetter_, arg1: Internal.BlockState_, arg2: Internal.Direction_, arg3: BlockPos_, arg4: BlockPos_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        isAcceptedRegardless(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        getBlockEntityClass(): typeof Internal.CopycatBlockEntity;
        setSpeedFactor(arg0: number): void;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.CopycatBlockEntity;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.CopycatBlockEntity>;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        canFaceBeOccluded(arg0: Internal.BlockState_, arg1: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static wrappedColor(): Internal.BlockColor;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        get blockEntityType(): Internal.BlockEntityType<Internal.CopycatBlockEntity>
        get blockEntityClass(): typeof Internal.CopycatBlockEntity
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type CopycatBlock_ = CopycatBlock;
    class MonsterRoomFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
        getClass(): typeof any;
        toString(): string;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        place(arg0: Internal.NoneFeatureConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.FeaturePlaceContext_<Internal.NoneFeatureConfiguration>): boolean;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.NoneFeatureConfiguration, Internal.Feature<Internal.NoneFeatureConfiguration>>>;
        get class(): typeof any
    }
    type MonsterRoomFeature_ = MonsterRoomFeature;
    class AndRecipeComponent <A, B> extends Internal.Record implements Internal.RecipeComponent<Internal.Pair<A, B>> {
        constructor(a: Internal.RecipeComponent_<A>, b: Internal.RecipeComponent_<B>)
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, Internal.Pair<A, B>>>;
        getClass(): typeof any;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<Internal.Pair<A, B>>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<Internal.Pair<A, B>>;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        replaceInput(recipe: Internal.RecipeJS_, original: Internal.Pair_<A, B>, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): Internal.Pair<A, B>;
        checkEmpty(key: Internal.RecipeKey_<Internal.Pair<A, B>>, value: Internal.Pair_<A, B>): string;
        b(): Internal.RecipeComponent<B>;
        role(): Internal.ComponentRole;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<Internal.Pair<A, B>>;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.Pair<A, B>>, json: Internal.JsonObject_): void;
        notify(): void;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,org.apache.commons.lang3.tuple.Pair)"(recipe: Internal.RecipeJS_, value: Internal.Pair_<A, B>): Internal.JsonArray;
        componentClass(): typeof any;
        wait(arg0: number, arg1: number): void;
        write(recipe: Internal.RecipeJS_, value: Internal.Pair_<A, B>): Internal.JsonArray;
        key(name: string): Internal.RecipeKey<Internal.Pair<A, B>>;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<Internal.Pair<A, B>>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<Internal.Pair<A, B>>;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, Internal.Pair<A, B>>>;
        orSelf(): Internal.RecipeComponent<Internal.Pair<A, B>>;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        static builder(): Internal.RecipeComponentBuilder;
        toString(): string;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.Pair<A, B>>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.Pair<A, B>>, map: Internal.Map_<any, any>): void;
        notifyAll(): void;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<Internal.Pair<A, B>, O>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        a(): Internal.RecipeComponent<A>;
        asArray(): Internal.ArrayRecipeComponent<Internal.Pair<A, B>>;
        read(recipe: Internal.RecipeJS_, from: any): Internal.Pair<A, B>;
        replaceOutput(recipe: Internal.RecipeJS_, original: Internal.Pair_<A, B>, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): Internal.Pair<A, B>;
        hashCode(): number;
        isInput(recipe: Internal.RecipeJS_, value: Internal.Pair_<A, B>, match: Internal.ReplacementMatch_): boolean;
        checkValueHasChanged(oldValue: Internal.Pair_<A, B>, newValue: Internal.Pair_<A, B>): boolean;
        wait(): void;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<Internal.Pair<A, B>, O>;
        wait(arg0: number): void;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object)"(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        equals(o: any): boolean;
        isOutput(recipe: Internal.RecipeJS_, value: Internal.Pair_<A, B>, match: Internal.ReplacementMatch_): boolean;
        get class(): typeof any
    }
    type AndRecipeComponent_<A, B> = AndRecipeComponent<A, B>;
    abstract class DisplaySource {
        constructor()
        getClass(): typeof any;
        getName(): Internal.Component;
        loadFlapDisplayLayout(arg0: Internal.DisplayLinkContext_, arg1: Internal.FlapDisplayBlockEntity_, arg2: Internal.FlapDisplayLayout_): void;
        initConfigurationWidgets(arg0: Internal.DisplayLinkContext_, arg1: Internal.ModularGuiLineBuilder_, arg2: boolean): void;
        toString(): string;
        loadFlapDisplayLayout(arg0: Internal.DisplayLinkContext_, arg1: Internal.FlapDisplayBlockEntity_, arg2: Internal.FlapDisplayLayout_, arg3: number): void;
        shouldPassiveReset(): boolean;
        notifyAll(): void;
        transferData(arg0: Internal.DisplayLinkContext_, arg1: Internal.DisplayTarget_, arg2: number): void;
        static getAll(arg0: Internal.LevelAccessor_, arg1: BlockPos_): Internal.List<Internal.DisplaySource>;
        provideFlapDisplayText(arg0: Internal.DisplayLinkContext_, arg1: Internal.DisplayTargetStats_): Internal.List<Internal.List<Internal.MutableComponent>>;
        populateData(arg0: Internal.DisplayLinkContext_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        onSignalReset(arg0: Internal.DisplayLinkContext_): void;
        static displaySource<B extends Internal.Block, P>(arg0: Internal.RegistryEntry_<Internal.DisplaySource>): Internal.NonNullUnaryOperator<com.tterrag.registrate.builders.BlockBuilder<B, P>>;
        hashCode(): number;
        wait(): void;
        static get(arg0: ResourceLocation_): Internal.DisplaySource;
        abstract provideText(arg0: Internal.DisplayLinkContext_, arg1: Internal.DisplayTargetStats_): Internal.List<Internal.MutableComponent>;
        wait(arg0: number): void;
        getPassiveRefreshTicks(): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get name(): Internal.Component
        get passiveRefreshTicks(): number
        static readonly EMPTY: ([Internal.MutableComponent]) & (Internal.List<Internal.MutableComponent>);
        static readonly BY_BLOCK_ENTITY: Internal.SimpleRegistry$Multi<Internal.BlockEntityType<any>, Internal.DisplaySource>;
        static readonly EMPTY_LINE: (Internal.MutableComponent) & (Internal.MutableComponent);
        static readonly WHITESPACE: (Internal.MutableComponent) & (Internal.MutableComponent);
        static readonly BY_BLOCK: Internal.SimpleRegistry$Multi<Internal.Block, Internal.DisplaySource>;
    }
    type DisplaySource_ = DisplaySource | Special.DisplaySource;
    class PeculiarBellBlockEntity extends Internal.AbstractBellBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        getBehaviour<T extends Internal.BlockEntityBehaviour>(arg0: Internal.BehaviourType_<T>): T;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        requestModelDataUpdate(): void;
        destroy(): void;
        setLevel(arg0: Internal.Level_): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        notify(): void;
        readClient(arg0: Internal.CompoundTag_): void;
        addBehavioursDeferred(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        ring(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        isVirtual(): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        getBlockPos(): BlockPos;
        remove(): void;
        isRemoved(): boolean;
        load(arg0: Internal.CompoundTag_): void;
        award(arg0: Internal.CreateAdvancement_): void;
        setChanged(): void;
        onLoad(): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        initialize(): void;
        "getUpdatePacket()"(): Internal.Packet<any>;
        packetTarget(): Internal.PacketDistributor$PacketTarget;
        invalidateCaps(): void;
        getBlockState(): Internal.BlockState;
        setRemoved(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        writeSafe(arg0: Internal.CompoundTag_): void;
        tick(): void;
        canPlayerUse(arg0: Internal.Player_): boolean;
        getType(): Internal.BlockEntityType<any>;
        lazyTick(): void;
        getBellModel(): Internal.PartialModel;
        writeClient(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        m_183515_(arg0: Internal.CompoundTag_): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        refreshBlockState(): void;
        getRenderBoundingBox(): Internal.AABB;
        getClass(): typeof any;
        sendToMenu(arg0: Internal.FriendlyByteBuf_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        addBehaviours(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        notifyUpdate(): void;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        attachBehaviourLate(arg0: Internal.BlockEntityBehaviour_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        wait(arg0: number, arg1: number): void;
        isChunkUnloaded(): boolean;
        getLevel(): Internal.Level;
        getRequiredItems(arg0: Internal.BlockState_): Internal.ItemRequirement;
        clearRemoved(): void;
        onlyOpCanSetNbt(): boolean;
        removeBehaviour(arg0: Internal.BehaviourType_<any>): void;
        getUpdatePacket(): Internal.Packet<any>;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        setLazyTickRate(arg0: number): void;
        awardIfNear(arg0: Internal.CreateAdvancement_, arg1: number): void;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        containedChunk(): Internal.LevelChunk;
        getPersistentData(): Internal.CompoundTag;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        toString(): string;
        markVirtual(): void;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        forEachBehaviour(arg0: Internal.Consumer_<Internal.BlockEntityBehaviour>): void;
        blockHolderGetter(): Internal.HolderGetter<Internal.Block>;
        getAllBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>;
        invalidate(): void;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        serializeNBT(): Internal.CompoundTag;
        registerAwardables(arg0: Internal.List_<Internal.BlockEntityBehaviour>, ...arg1: Internal.CreateAdvancement_[]): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getModelData(): Internal.ModelData;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        reviveCaps(): void;
        sendData(): void;
        get updateTag(): Internal.CompoundTag
        set level(arg0: Internal.Level_)
        get virtual(): boolean
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get blockPos(): BlockPos
        get removed(): boolean
        get "updatePacket()"(): Internal.Packet<any>
        get blockState(): Internal.BlockState
        get type(): Internal.BlockEntityType<any>
        get bellModel(): Internal.PartialModel
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        get chunkUnloaded(): boolean
        get level(): Internal.Level
        get updatePacket(): Internal.Packet<any>
        set lazyTickRate(arg0: number)
        get persistentData(): Internal.CompoundTag
        get allBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get modelData(): Internal.ModelData
    }
    type PeculiarBellBlockEntity_ = PeculiarBellBlockEntity;
    interface Effect extends Internal.Shader {
        abstract getFragmentProgram(): Internal.Program;
        abstract markDirty(): void;
        abstract attachToProgram(): void;
        abstract getVertexProgram(): Internal.Program;
        abstract getId(): number;
        get fragmentProgram(): Internal.Program
        get vertexProgram(): Internal.Program
        get id(): number
    }
    type Effect_ = Effect;
    class BiomeSpecialEffects$Builder {
        constructor()
        getClass(): typeof any;
        ambientAdditionsSound(arg0: Internal.AmbientAdditionsSettings_): this;
        grassColorOverride(arg0: number): this;
        toString(): string;
        fogColor(arg0: number): this;
        ambientLoopSound(arg0: Internal.Holder_<Internal.SoundEvent>): this;
        backgroundMusic(arg0: Internal.Music_): this;
        notifyAll(): void;
        waterColor(arg0: number): this;
        ambientMoodSound(arg0: Internal.AmbientMoodSettings_): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        ambientParticle(arg0: Internal.AmbientParticleSettings_): this;
        build(): Internal.BiomeSpecialEffects;
        waterFogColor(arg0: number): this;
        hashCode(): number;
        foliageColorOverride(arg0: number): this;
        wait(): void;
        wait(arg0: number): void;
        skyColor(arg0: number): this;
        equals(arg0: any): boolean;
        grassColorModifier(arg0: Internal.BiomeSpecialEffects$GrassColorModifier_): this;
        get class(): typeof any
        grassColorOverride: Internal.Optional<number>;
        ambientParticle: Internal.Optional<Internal.AmbientParticleSettings>;
        ambientMoodSettings: Internal.Optional<Internal.AmbientMoodSettings>;
        fogColor: Internal.OptionalInt;
        ambientLoopSoundEvent: Internal.Optional<Internal.Holder<Internal.SoundEvent>>;
        grassColorModifier: Internal.BiomeSpecialEffects$GrassColorModifier;
        ambientAdditionsSettings: Internal.Optional<Internal.AmbientAdditionsSettings>;
        waterColor: Internal.OptionalInt;
        skyColor: Internal.OptionalInt;
        foliageColorOverride: Internal.Optional<number>;
        waterFogColor: Internal.OptionalInt;
        backgroundMusic: Internal.Optional<Internal.Music>;
    }
    type BiomeSpecialEffects$Builder_ = BiomeSpecialEffects$Builder;
    abstract class CustomBuffer <SELF extends Internal.CustomBuffer<SELF>> extends Internal.Pointer$Default {
        getClass(): typeof any;
        capacity(): number;
        mark(): SELF;
        limit(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        clear(): SELF;
        position(arg0: number): SELF;
        flip(): SELF;
        slice(arg0: number, arg1: number): SELF;
        duplicate(): SELF;
        address(): number;
        compact(): SELF;
        toString(): string;
        remaining(): number;
        free(): void;
        position(): number;
        address(arg0: number): number;
        notifyAll(): void;
        put(arg0: SELF): SELF;
        rewind(): SELF;
        abstract sizeof(): number;
        limit(arg0: number): SELF;
        slice(): SELF;
        hashCode(): number;
        reset(): SELF;
        address0(): number;
        hasRemaining(): boolean;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type CustomBuffer_<SELF extends Internal.CustomBuffer<SELF>> = CustomBuffer<SELF>;
    interface CraftingContainer extends Internal.Container, Internal.StackedContentsCompatible, Internal.CraftingContainerKJS {
        stopOpen(arg0: Internal.Player_): void;
        tryClear(arg0: any): void;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        clear(ingredient: Internal.Ingredient_): void;
        abstract getItems(): Internal.List<Internal.ItemStack>;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        abstract removeItem(arg0: number, arg1: number): Internal.ItemStack;
        getSlots(): number;
        setChanged(): void;
        "getWidth()"(): number;
        abstract getContainerSize(): number;
        abstract setItem(arg0: number, arg1: Internal.ItemStack_): void;
        "setChanged()"(): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        kjs$self(): Internal.Container;
        abstract getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        abstract "isEmpty()"(): boolean;
        abstract removeItemNoUpdate(arg0: number): Internal.ItemStack;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        abstract getItem(arg0: number): Internal.ItemStack;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        countItem(arg0: Internal.Item_): number;
        abstract isEmpty(): boolean;
        startOpen(arg0: Internal.Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        abstract getHeight(): number;
        countNonEmpty(): number;
        asContainer(): Internal.Container;
        getMenu(): Internal.AbstractContainerMenu;
        getAllItems(): Internal.List<Internal.ItemStack>;
        abstract fillStackedContents(arg0: Internal.StackedContents_): void;
        "getHeight()"(): number;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        abstract stillValid(arg0: Internal.Player_): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        clear(): void;
        isMutable(): boolean;
        find(ingredient: Internal.Ingredient_): number;
        abstract clearContent(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        get items(): Internal.List<Internal.ItemStack>
        get slots(): number
        get "width()"(): number
        get containerSize(): number
        get width(): number
        get maxStackSize(): number
        get "empty()"(): boolean
        get empty(): boolean
        get height(): number
        get menu(): Internal.AbstractContainerMenu
        get allItems(): Internal.List<Internal.ItemStack>
        get "height()"(): number
        get mutable(): boolean
    }
    type CraftingContainer_ = CraftingContainer;
    class ConfiguredModel {
        constructor(arg0: Internal.ModelFile_)
        constructor(arg0: Internal.ModelFile_, arg1: number, arg2: number, arg3: boolean)
        constructor(arg0: Internal.ModelFile_, arg1: number, arg2: number, arg3: boolean, arg4: number)
        static allYRotations(arg0: Internal.ModelFile_, arg1: number, arg2: boolean): Internal.ConfiguredModel[];
        getClass(): typeof any;
        static builder(): Internal.ConfiguredModel$Builder<any>;
        static allYRotations(arg0: Internal.ModelFile_, arg1: number, arg2: boolean, arg3: number): Internal.ConfiguredModel[];
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static allRotations(arg0: Internal.ModelFile_, arg1: boolean, arg2: number): Internal.ConfiguredModel[];
        hashCode(): number;
        wait(): void;
        static allRotations(arg0: Internal.ModelFile_, arg1: boolean): Internal.ConfiguredModel[];
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        readonly rotationY: number;
        readonly rotationX: number;
        readonly model: Internal.ModelFile;
        static readonly DEFAULT_WEIGHT: (1) & (number);
        readonly uvLock: boolean;
        readonly weight: number;
    }
    type ConfiguredModel_ = ConfiguredModel;
    class ServerStatusPing$ChannelData extends Internal.Record {
        constructor(res: ResourceLocation_, version: string, required: boolean)
        getClass(): typeof any;
        hashCode(): number;
        required(): boolean;
        toString(): string;
        version(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        res(): ResourceLocation;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.ServerStatusPing$ChannelData>;
    }
    type ServerStatusPing$ChannelData_ = ServerStatusPing$ChannelData;
    interface AbuseReportSender {
        abstract send(arg0: Internal.UUID_, arg1: Internal.AbuseReport_): Internal.CompletableFuture<com.mojang.datafixers.util.Unit>;
        create(arg0: Internal.ReportEnvironment_, arg1: Internal.UserApiService_): this;
        reportLimits(): Internal.AbuseReportLimits;
        abstract isEnabled(): boolean;
        get enabled(): boolean
    }
    type AbuseReportSender_ = AbuseReportSender;
    class BlockEntityBuilder <T extends Internal.BlockEntity, P> extends Internal.AbstractBuilder<Internal.BlockEntityType<any>, Internal.BlockEntityType<T>, P, Internal.BlockEntityBuilder<T, P>> {
        lang(arg0: Internal.NonNullFunction_<Internal.BlockEntityType<T>, string>, arg1: string): this;
        getClass(): typeof any;
        setData<D extends Internal.RegistrateProvider>(arg0: Internal.ProviderType_<D>, arg1: Internal.NonNullBiConsumer_<Internal.DataGenContext<Internal.BlockEntityType<any>, Internal.BlockEntityType<T>>, D>): this;
        get(): any;
        getRegistryKey(): Internal.ResourceKey<Internal.Registry<Internal.BlockEntityType<any>>>;
        addMiscData<D extends Internal.RegistrateProvider>(arg0: Internal.ProviderType_<D>, arg1: com.tterrag.registrate.util.nullness.NonNullConsumer_<D>): this;
        static of<T>(arg0: Internal.Supplier_<T>, arg1: com.tterrag.registrate.util.nullness.NonNullSupplier_<string>): com.tterrag.registrate.util.nullness.NonNullSupplier<T>;
        getOwner(): Internal.AbstractRegistrate<any>;
        transform<R2, T2 extends R2, P2, S2 extends Internal.Builder<R2, T2, P2, S2>>(arg0: com.tterrag.registrate.util.nullness.NonNullFunction_<Internal.BlockEntityBuilder<T, P>, S2>): S2;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        renderer(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<com.tterrag.registrate.util.nullness.NonNullFunction<Internal.BlockEntityRendererProvider$Context, Internal.BlockEntityRenderer<T>>>): this;
        validBlock(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.Block>): this;
        getName(): string;
        tag<TP extends Internal.TagsProvider<R> & Internal.RegistrateTagsProvider<R>>(arg0: Internal.ProviderType_<TP>, ...arg1: Internal.TagKey_<Internal.BlockEntityType<any>>[]): this;
        validBlocks(...arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.Block>[]): this;
        asSupplier(): com.tterrag.registrate.util.nullness.NonNullSupplier<Internal.BlockEntityType<T>>;
        register(): Internal.RegistryEntry<any>;
        build(): P;
        onRegisterAfter<OR>(arg0: Internal.ResourceKey_<Internal.Registry<OR>>, arg1: com.tterrag.registrate.util.nullness.NonNullConsumer_<Internal.BlockEntityType<T>>): this;
        toString(): string;
        notifyAll(): void;
        static of<T>(arg0: Internal.Supplier_<T>): com.tterrag.registrate.util.nullness.NonNullSupplier<T>;
        static create<T extends Internal.BlockEntity, P>(arg0: Internal.AbstractRegistrate_<any>, arg1: P, arg2: string, arg3: Internal.BuilderCallback_, arg4: Internal.BlockEntityBuilder$BlockEntityFactory_<T>): Internal.BlockEntityBuilder<T, P>;
        getParent(): P;
        static lazy<T>(arg0: Internal.Supplier_<T>): com.tterrag.registrate.util.nullness.NonNullSupplier<T>;
        lazy(): com.tterrag.registrate.util.nullness.NonNullSupplier<Internal.RegistryEntry<T>>;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        removeTag<TP extends Internal.TagsProvider<R> & Internal.RegistrateTagsProvider<R>>(arg0: Internal.ProviderType_<TP>, ...arg1: Internal.TagKey_<Internal.BlockEntityType<any>>[]): this;
        onRegister(arg0: com.tterrag.registrate.util.nullness.NonNullConsumer_<Internal.BlockEntityType<T>>): this;
        equals(arg0: any): boolean;
        getEntry(): Internal.BlockEntityType<T>;
        lang(arg0: Internal.NonNullFunction_<Internal.BlockEntityType<T>, string>): this;
        get class(): typeof any
        get registryKey(): Internal.ResourceKey<Internal.Registry<Internal.BlockEntityType<any>>>
        get owner(): Internal.AbstractRegistrate<any>
        get name(): string
        get parent(): P
        get entry(): Internal.BlockEntityType<T>
    }
    type BlockEntityBuilder_<T extends Internal.BlockEntity, P> = BlockEntityBuilder<T, P>;
    interface UserAuthentication {
        abstract getSelectedProfile(): Internal.GameProfile;
        abstract loadFromStorage(arg0: Internal.Map_<string, any>): void;
        abstract logOut(): void;
        abstract setPassword(arg0: string): void;
        abstract logIn(): void;
        abstract getAuthenticatedToken(): string;
        abstract getUserProperties(): Internal.PropertyMap;
        abstract getUserID(): string;
        abstract isLoggedIn(): boolean;
        abstract canPlayOnline(): boolean;
        abstract getAvailableProfiles(): Internal.GameProfile[];
        abstract getUserType(): Internal.UserType;
        abstract setUsername(arg0: string): void;
        abstract saveForStorage(): Internal.Map<string, any>;
        abstract selectGameProfile(arg0: Internal.GameProfile_): void;
        abstract canLogIn(): boolean;
        get selectedProfile(): Internal.GameProfile
        set password(arg0: string)
        get authenticatedToken(): string
        get userProperties(): Internal.PropertyMap
        get userID(): string
        get loggedIn(): boolean
        get availableProfiles(): Internal.GameProfile[]
        get userType(): Internal.UserType
        set username(arg0: string)
    }
    type UserAuthentication_ = UserAuthentication;
    class TrackTargetingBlockItem extends Internal.BlockItem {
        constructor(arg0: Internal.Block_, arg1: Internal.Item$Properties_, arg2: Internal.EdgePointType_<any>)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        static withGraphLocation(arg0: Internal.Level_, arg1: BlockPos_, arg2: boolean, arg3: Internal.BezierTrackPointLocation_, arg4: Internal.EdgePointType_<any>, arg5: Internal.BiConsumer_<Internal.TrackTargetingBlockItem$OverlapResult, Internal.TrackGraphLocation>): void;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): Internal.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        removeFromBlockToItemMap(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        place(arg0: Internal.BlockPlaceContext_): Internal.InteractionResult;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        useOnCurve(arg0: Internal.TrackBlockOutline$BezierPointSelection_, arg1: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        getBlock(): Internal.Block;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        registerBlocks(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        static ofType<T extends Internal.Block>(arg0: Internal.EdgePointType_<any>): Internal.NonNullBiFunction<T, Internal.Item$Properties, Internal.TrackTargetingBlockItem>;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        getType(arg0: Internal.ItemStack_): Internal.EdgePointType<any>;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get block(): Internal.Block
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type TrackTargetingBlockItem_ = TrackTargetingBlockItem;
    class ForgeMod$3 extends Internal.FluidType {
        canSwim(arg0: Internal.Entity_): boolean;
        getDescriptionId(arg0: Internal.FluidStack_): string;
        isVaporizedOnPlacement(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        canBePlacedInLevel(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): boolean;
        "canBePlacedInLevel(net.minecraft.world.level.BlockAndTintGetter,net.minecraft.core.BlockPos,net.minecraft.world.level.material.FluidState)"(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): boolean;
        getLightLevel(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        notify(): void;
        getDensity(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        getSound(arg0: Internal.Entity_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        canExtinguish(arg0: Internal.Entity_): boolean;
        canConvertToSource(arg0: Internal.FluidStack_): boolean;
        getDensity(): number;
        "canBePlacedInLevel(net.minecraft.world.level.BlockAndTintGetter,net.minecraft.core.BlockPos,net.minecraftforge.fluids.FluidStack)"(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        getTemperature(arg0: Internal.FluidStack_): number;
        getDescriptionId(): string;
        getRarity(): Internal.Rarity;
        getFallDistanceModifier(arg0: Internal.Entity_): number;
        getBlockForFluidState(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): Internal.BlockState;
        getBucket(arg0: Internal.FluidStack_): Internal.ItemStack;
        "getSound(net.minecraftforge.fluids.FluidStack,net.minecraftforge.common.SoundAction)"(arg0: Internal.FluidStack_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getRarity(arg0: Internal.FluidStack_): Internal.Rarity;
        "canHydrate(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        canBePlacedInLevel(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        "getSound(net.minecraft.world.entity.Entity,net.minecraftforge.common.SoundAction)"(arg0: Internal.Entity_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        onVaporize(arg0: Internal.Player_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.FluidStack_): void;
        "canHydrate(net.minecraftforge.fluids.FluidStack)"(arg0: Internal.FluidStack_): boolean;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        wait(): void;
        getTemperature(): number;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        getViscosity(): number;
        getSound(arg0: Internal.FluidStack_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getDescription(): Internal.Component;
        getClass(): typeof any;
        motionScale(arg0: Internal.Entity_): number;
        isVanilla(): boolean;
        getRenderPropertiesInternal(): any;
        getLightLevel(arg0: Internal.FluidStack_): number;
        isAir(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientFluidTypeExtensions>): void;
        canDrownIn(arg0: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        getDensity(arg0: Internal.FluidStack_): number;
        getSound(arg0: Internal.SoundAction_): Internal.SoundEvent;
        canPushEntity(arg0: Internal.Entity_): boolean;
        isLighterThanAir(): boolean;
        canRideVehicleUnder(arg0: Internal.Entity_, arg1: Internal.Entity_): boolean;
        canHydrate(arg0: Internal.Entity_): boolean;
        toString(): string;
        supportsBoating(arg0: Internal.Boat_): boolean;
        getLightLevel(): number;
        notifyAll(): void;
        getViscosity(arg0: Internal.FluidStack_): number;
        getDescription(arg0: Internal.FluidStack_): Internal.Component;
        getStateForPlacement(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): Internal.FluidState;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        setItemMovement(arg0: Internal.ItemEntity_): void;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        getSound(arg0: Internal.Player_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SoundAction_): Internal.SoundEvent;
        shouldUpdateWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_, arg2: Internal.Entity_): boolean;
        canConvertToSource(arg0: Internal.FluidState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        canHydrate(arg0: Internal.FluidStack_): boolean;
        hashCode(): number;
        wait(arg0: number): void;
        getViscosity(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        getTemperature(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        equals(arg0: any): boolean;
        get density(): number
        get descriptionId(): string
        get rarity(): Internal.Rarity
        get temperature(): number
        get viscosity(): number
        get description(): Internal.Component
        get class(): typeof any
        get vanilla(): boolean
        get renderPropertiesInternal(): any
        get air(): boolean
        get lighterThanAir(): boolean
        get lightLevel(): number
        set itemMovement(arg0: Internal.ItemEntity_)
    }
    type ForgeMod$3_ = ForgeMod$3;
    class PackageItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_, arg1: Internal.PackageStyles$PackageStyle_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static "matchAddress(net.minecraft.world.item.ItemStack,java.lang.String)"(arg0: Internal.ItemStack_, arg1: string): boolean;
        static matchAddress(arg0: string, arg1: string): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        static getLinkIndex(arg0: Internal.ItemStack_): number;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        static isFinalLink(arg0: Internal.ItemStack_): boolean;
        static getAddress(arg0: Internal.ItemStack_): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        static getHookDistance(arg0: Internal.ItemStack_): number;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        static "containing(java.util.List)"(arg0: Internal.List_<Internal.ItemStack>): Internal.ItemStack;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): Internal.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        static containing(arg0: Internal.ItemStackHandler_): Internal.ItemStack;
        static clearAddress(arg0: Internal.ItemStack_): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        static hasFragmentData(arg0: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        static getWidth(arg0: Internal.ItemStack_): number;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static addAddress(arg0: Internal.ItemStack_, arg1: string): void;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        static isFinal(arg0: Internal.ItemStack_): boolean;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        open(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        static matchAddress(arg0: Internal.ItemStack_, arg1: string): boolean;
        static addOrderContext(arg0: Internal.ItemStack_, arg1: Internal.PackageOrderWithCrafts_): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        static "matchAddress(java.lang.String,java.lang.String)"(arg0: string, arg1: string): boolean;
        static getOrderId(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        static getHeight(arg0: Internal.ItemStack_): number;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        static "containing(net.minecraftforge.items.ItemStackHandler)"(arg0: Internal.ItemStackHandler_): Internal.ItemStack;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        static getContents(arg0: Internal.ItemStack_): Internal.ItemStackHandler;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        static isPackage(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        static getPackageVelocity(arg0: number): number;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        static setOrder(arg0: Internal.ItemStack_, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: boolean, arg6: Internal.PackageOrderWithCrafts_): void;
        static getOrderContext(arg0: Internal.ItemStack_): Internal.PackageOrderWithCrafts;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        static getIndex(arg0: Internal.ItemStack_): number;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        static containing(arg0: Internal.List_<Internal.ItemStack>): Internal.ItemStack;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        style: Internal.PackageStyles$PackageStyle;
        static readonly SLOTS: (9) & (number);
    }
    type PackageItem_ = PackageItem;
}
declare namespace net.createmod.catnip.data {
    class Pair <F, S> {
        getClass(): typeof any;
        toString(): string;
        setFirst(arg0: F): void;
        notifyAll(): void;
        getSecond(): S;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getFirst(): F;
        swap(): net.createmod.catnip.data.Pair<S, F>;
        hashCode(): number;
        copy(): this;
        static of<F, S>(arg0: F, arg1: S): net.createmod.catnip.data.Pair<F, S>;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        setSecond(arg0: S): void;
        get class(): typeof any
        set first(arg0: F)
        get second(): S
        get first(): F
        set second(arg0: S)
    }
    type Pair_<F, S> = Pair<F, S>;
}
