package net.caden.tuningwrench;

import java.util.*;

public class PipeConstants {

    public static final Map<String, List<String>> PALETTES = new HashMap<>();
    public static final Map<String, Integer> PIPE_OCTAVES = new HashMap<>();
    public static final Map<String, Integer> SIZE_OFFSET = new HashMap<>();
    public static final List<String> NOTES = List.of(
            "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F"
    );
    public static final List<String> PALETTES_BY_RANGE = List.of(
            "concrete",
            "concrete_powder",
            "wool",
            "stained_glass",
            "terracotta",
            "glazed_terracotta",
            "carpet",
            "bed",
            "banner",
            "black_banner"
    );

    static {
        List<String> commonColors = List.of(
                "red", "orange", "yellow", "lime", "green", "cyan",
                "light_blue", "blue", "purple", "magenta", "pink", "brown"
        );

        PALETTES.put("concrete", commonColors);
        PALETTES.put("concrete_powder", commonColors);
        PALETTES.put("wool", commonColors);
        PALETTES.put("stained_glass", commonColors);
        PALETTES.put("terracotta", commonColors);
        PALETTES.put("glazed_terracotta", commonColors);
        PALETTES.put("carpet", commonColors);
        PALETTES.put("bed", commonColors);
        PALETTES.put("banner", commonColors);
        PALETTES.put("black_banner", Collections.nCopies(12,""));

        PIPE_OCTAVES.put("pipeorgans:piccolo", 8);
        PIPE_OCTAVES.put("pipeorgans:prestant", 7);
        PIPE_OCTAVES.put("pipeorgans:hohlflute", 7);
        PIPE_OCTAVES.put("pipeorgans:gamba", 7);
        PIPE_OCTAVES.put("pipeorgans:diapason", 6);
        PIPE_OCTAVES.put("pipeorgans:english_horn", 6);
        PIPE_OCTAVES.put("pipeorgans:gedeckt", 6);
        PIPE_OCTAVES.put("pipeorgans:trompette", 6);
        PIPE_OCTAVES.put("pipeorgans:rohrflote", 6);
        PIPE_OCTAVES.put("pipeorgans:viola", 6);
        PIPE_OCTAVES.put("pipeorgans:vox_celeste", 6);
        PIPE_OCTAVES.put("pipeorgans:vox_humana", 6);
        PIPE_OCTAVES.put("pipeorgans:haunted_whistle", 6);
        PIPE_OCTAVES.put("pipeorgans:nasard", 6);
        PIPE_OCTAVES.put("pipeorgans:subbass", 5);
        PIPE_OCTAVES.put("pipeorgans:posaune", 4);

        SIZE_OFFSET.put("tiny", 0);
        SIZE_OFFSET.put("small", -1);
        SIZE_OFFSET.put("medium", -2);
        SIZE_OFFSET.put("large", -3);
        SIZE_OFFSET.put("huge", -4);
    }
}