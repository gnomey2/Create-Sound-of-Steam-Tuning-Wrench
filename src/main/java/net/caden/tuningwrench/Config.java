package net.caden.tuningwrench;

import java.util.List;

import net.neoforged.neoforge.common.ModConfigSpec;
import org.apache.commons.lang3.tuple.Pair;

public class Config {
    //Define a field to keep the config and spec for later
    public static final Config CONFIG;
    public static final ModConfigSpec CONFIG_SPEC;
    public final ModConfigSpec.ConfigValue<List<? extends String>> names;
    public final ModConfigSpec.ConfigValue<List<? extends List<? extends Integer>>> offset;
    public final ModConfigSpec.ConfigValue<List<? extends String>> facing;

    private Config(ModConfigSpec.Builder builder) {
        builder.comment("Please see Documentation! (WIP)");
        builder.comment("General Syntax: [Syntax of Value for mode 7, Syntax of Value for mode 8], etc.");
        names = builder
                .comment("Names of added modes (Syntax: \"modename\")")
                .translation("")
                .defineListAllowEmpty("names", () -> List.of(""), () -> "", Config::yes);

        offset = builder
                .comment("Offset from the Pipe (Syntax: [offsetX, offsetY, offsetZ])")
                .translation("")
                .defineListAllowEmpty("offset", () -> List.of(List.of(0, 0, 0)), () -> List.of(0, 0, 0), Config::yes);

        facing = builder
                .comment("The facing of the link (Syntax: \"away\", \"towards\", \"right\", \"left\", \"up\", \"down\")")
                .translation("")
                .defineListAllowEmpty("facing", () -> List.of(""), () -> "", Config::yes);
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