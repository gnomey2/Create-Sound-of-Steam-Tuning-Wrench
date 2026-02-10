package net.caden.tuningwrench;

import java.util.ArrayList;
import java.util.List;

import net.neoforged.neoforge.common.ModConfigSpec;
import org.apache.commons.lang3.tuple.Pair;

public class Config {
    //Define a field to keep the config and spec for later
    public static final Config CONFIG;
    public static final ModConfigSpec CONFIG_SPEC;
    public final ModConfigSpec.ConfigValue<List<? extends String>> names;
    public final ModConfigSpec.ConfigValue<List<? extends List<? extends Integer>>> offset;

    private Config(ModConfigSpec.Builder builder) {
        names = builder
                .comment("Names of added modes")
                .translation("")
                .defineListAllowEmpty("names", () -> List.of(""), () -> "", Config::yes);

        offset = builder
                .comment("Please see documentation!")
                .translation("")
                .defineListAllowEmpty("offset", () -> List.of(List.of(0, 0, 0)), () -> List.of(0, 0, 0), Config::yes);
    }

    //CONFIG and CONFIG_SPEC are both built from the same builder, so we use a static block to separate the properties
    static {
        Pair<Config, ModConfigSpec> pair =
                new ModConfigSpec.Builder().configure(Config::new);

        //Store the resulting values
        CONFIG = pair.getLeft();
        CONFIG_SPEC = pair.getRight();
    }

    private static boolean yes(final Object obj) { //Thing doesn't accept plain boolean, needs Predicate
        return true;
    }
}