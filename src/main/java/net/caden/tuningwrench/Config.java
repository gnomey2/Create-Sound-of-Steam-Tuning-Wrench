package net.caden.tuningwrench;

import java.util.List;

import net.neoforged.neoforge.common.ModConfigSpec;

public class Config {
    private static final ModConfigSpec.Builder BUILDER = new ModConfigSpec.Builder();

    public static final ModConfigSpec.ConfigValue<Integer> MAX_MODES = BUILDER //TODO: make config working
            .comment("How many modes there are")
            .define("max_modes", 7);


    // a list of strings that are treated as resource locations for items
    public static final ModConfigSpec.ConfigValue<List<? extends String>> MODES = BUILDER //TODO: make config working
            .comment("Names of the Modes")
            .defineListAllowEmpty("modes", List.of("Traditional Bottom", "Traditional Face Away", "Traditional Face Towards", "Pitch Match Bottom", "Pitch Match Face Away", "Pitch Match Face Towards", "Pitch Match Behind (§4Can place Link in air!§r)"), () -> "", Config::validateItemName);

    static final ModConfigSpec SPEC = BUILDER.build();

    private static boolean validateItemName(final Object obj) {
        return obj instanceof String;
    }
}