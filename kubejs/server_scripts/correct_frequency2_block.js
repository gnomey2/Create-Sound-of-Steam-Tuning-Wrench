const PALETTES = {
    concrete: [
        "red",
        "orange",
        "yellow",
        "lime",
        "green",
        "cyan",
        "light_blue",
        "blue",
        "purple",
        "magenta",
        "pink",
        "brown",
    ],
    concrete_powder: [
        "red",
        "orange",
        "yellow",
        "lime",
        "green",
        "cyan",
        "light_blue",
        "blue",
        "purple",
        "magenta",
        "pink",
        "brown",
    ],
    wool: [
        "red",
        "orange",
        "yellow",
        "lime",
        "green",
        "cyan",
        "light_blue",
        "blue",
        "purple",
        "magenta",
        "pink",
        "brown",
    ],
    stained_glass: [
        "red",
        "orange",
        "yellow",
        "lime",
        "green",
        "cyan",
        "light_blue",
        "blue",
        "purple",
        "magenta",
        "pink",
        "brown",
    ],
    terracotta: [
        "red",
        "orange",
        "yellow",
        "lime",
        "green",
        "cyan",
        "light_blue",
        "blue",
        "purple",
        "magenta",
        "pink",
        "brown",
    ],
    glazed_terracotta: [
        "red",
        "orange",
        "yellow",
        "lime",
        "green",
        "cyan",
        "light_blue",
        "blue",
        "purple",
        "magenta",
        "pink",
        "brown",
    ],
    carpet: [
        "red",
        "orange",
        "yellow",
        "lime",
        "green",
        "cyan",
        "light_blue",
        "blue",
        "purple",
        "magenta",
        "pink",
        "brown",
    ],
    bed: [
        "red",
        "orange",
        "yellow",
        "lime",
        "green",
        "cyan",
        "light_blue",
        "blue",
        "purple",
        "magenta",
        "pink",
        "brown",
    ],
    banner: [
        "red",
        "orange",
        "yellow",
        "lime",
        "green",
        "cyan",
        "light_blue",
        "blue",
        "purple",
        "magenta",
        "pink",
        "brown",
    ],
    black_banner: Array(12).fill("black"),
};

// Base octave for tiny size (F#n to F#(n-1))
const PIPE_OCTAVES = {
    piccolo: 8,
    prestant: 7,
    hohlflote: 7,
    gamba: 7,
    diapason: 6,
    "english horn": 6,
    gedeckt: 6,
    trompette: 6,
    rohrflote: 6,
    viola: 6,
    "vox celeste": 6,
    "vox humana": 6,
    "haunted whistle": 6,
    nasard: 6,  
    subbass: 5,
    posaune: 4,
};

const SIZE_OFFSET = { tiny: 0, small: -1, medium: -2, large: -3, huge: -4 };
const NOTES = ["F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F"];
const PALETTES_BY_RANGE = [
    "concrete",
    "concrete_powder",
    "wool",
    "stained_glass",
    "terracotta",
    "glazed_terracotta",
    "carpet",
    "bed",
    "banner",
    "black_banner",
];


function getReqLinkBlock(pipe, size, pitch) {
    let fullLengthOffset = 0

    if (pitch === 12) {
        fullLengthOffset = -1
        pitch = 0;
    }

    const octave = PIPE_OCTAVES[pipe] + SIZE_OFFSET[size] + fullLengthOffset;
    const noteIndex = (12 - pitch) % 12;
    const noteOctave = pitch > 6 ? octave - 1 : octave; //octave changes at c
    const note = NOTES[noteIndex];

    // C,C#,D,D#,E,F:  range F#(n-1) to Fn; F#,G,G#,A,A#,B: range F#(n) to F(n+1)
    const rangeLow = ["C", "C#", "D", "D#", "E", "F"].includes(note) //|| (pitch == 12)
        ? noteOctave - 1
        : noteOctave;
    const paletteIndex = rangeLow + 1; // F#-1→0, F#0→1, etc.

    const paletteName = PALETTES_BY_RANGE[paletteIndex];
    const color = PALETTES[paletteName][noteIndex];

    return `minecraft:${color}_${paletteName}`;
}


function placeRedstoneLink(event, player, coords, pipePitch) {
    const pipeBlockState = player.level.getBlockState(coords);
    let pipeName = pipeBlockState.block.id
        .slice(11, undefined) // pipeorgans:vox_humana -> vox_humana
        .toLowerCase() // Lowercase everything to be sure
        .replace("_", " "); // pipeorgans:vox_humana -> vox humana
    let sizeProperty =
        pipeBlockState.block.stateDefinition.getProperty("size");
    let pipeSize = pipeBlockState
        .getValue(sizeProperty)
        .toString() // For some reason this is a custom KubeJS or Java or whatever object that only holds that one value for as far as I know. Thus, .toString()
        .toLowerCase();

    let required_block_id = getReqLinkBlock(
    pipeName,
    pipeSize,
    pipePitch
    );
    //player.tell("Required Block: " +required_block_id);
    let setBlockY = coords.y - 2;
    let pipeId = pipeBlockState.block.id;   //different from pipe name. need full id here
    //player.tell(pipeId)
    let command_string = `setblock ${coords.x} ${setBlockY} ${coords.z} create:redstone_link[facing=down,receiver=true]{FrequencyFirst:{Count:1b,id:"${pipeId.trim()}"},FrequencyLast:{Count:1b,id:"${required_block_id.trim()}"}}`; //Count 1b for some reason. also .trim() to remove white space
    
    event.server.runCommandSilent(command_string);
        

    return required_block_id; // just in case
    }
function getNBTInt(level, x, y, z, nbtPath, playerUsername, callback) {
    try {
        let server = level.server;
        let objectiveName = `tempNBT_${playerUsername}`;

        // Create scoreboard objective and store NBT value silently
        server.runCommandSilent(
            `scoreboard objectives add ${objectiveName} dummy`
        );
        server.runCommandSilent(
            `execute store result score ${playerUsername} ${objectiveName} run data get block ${x} ${y} ${z} ${nbtPath}`
        );

        // Wait a tick for the command to execute, then read the value
        server.scheduleInTicks(1, () => {
            let scoreboard = server.scoreboard;
            let objective = scoreboard.getObjective(objectiveName);

            if (objective) {
                let allScores = scoreboard.listPlayerScores(objective);

                if (allScores.size() > 0) {
                    let value = allScores.get(0).value();
                    server.runCommandSilent(
                        `scoreboard objectives remove ${objectiveName}`
                    );
                    callback(value);
                } else {
                    server.runCommandSilent(
                        `scoreboard objectives remove ${objectiveName}`
                    );
                    callback(null);
                }
            } else {
                callback(null);
            }
        });
    } catch (e) {
        callback(null);
    }
}

function get_frequency2_block(player, coords) {
    const pipeBlockState = player.level.getBlockState(coords);
    let pipeName = pipeBlockState.block.id
        .slice(11, undefined) // pipeorgans:vox_humana -> vox_humana
        .toLowerCase() // Lowercase everything to be sure
        .replace("_", " "); // pipeorgans:vox_humana -> vox humana
    let sizeProperty =
        pipeBlockState.block.stateDefinition.getProperty("size");
    let pipeSize = pipeBlockState
        .getValue(sizeProperty)
        .toString() // For some reason this is a custom KubeJS or Java or whatever object that only holds that one value for as far as I know. Thus, .toString()
        .toLowerCase();

    // Get the pitch value
    getNBTInt(
        player.level,
        coords.x,
        coords.y,
        coords.z,
        "Pitch",
        player.username,
        (pipePitch) => {
            /*
            This is done via callback because Minecraft is coded poorly.
            This happens right after the 'inbetween tick'(not an actual tick) ends.
            Nothing here is accessible outside of the braces. */
            if (pipePitch !== null) {
                //     Capitalizes the first character.
                player.tell(
                    "Pipe Block: " + // Tells ya what it is
                        //pipeName.charAt(0).toUpperCase() + // Capitalizes first character
                        pipeName.slice(0) // Then adds everything except the first character from the string to the capitalized first character.
                );
                player.tell(
                    "Pipe Size: " +
                        //pipeSize.charAt(0).toUpperCase() +
                        pipeSize.slice(0)
                );
                player.tell("Pipe Pitch: " + pipePitch);
                player.tell(
                    "Required Block: " +
                        getReqLinkBlock(pipeName, pipeSize, pipePitch)
                );
                return pipePitch
            } else {
                player.tell("Failed to get pitch value");
            }
        }
    );

    return 1; // Success
};


ItemEvents.rightClicked('kubejs:tuning_wrench', event => {
    if (event.level.isClientSide()) return
    if (!event.target?.block) return
    const pos = event.target.block.getPos();
    const player = event.player;
    const coords = pos
    const pipeBlockState = player.level.getBlockState(coords);
    let pipeName = pipeBlockState.block.id
        .slice(11, undefined) // pipeorgans:vox_humana -> vox_humana
        .toLowerCase() // Lowercase everything to be sure
        .replace("_", " "); // pipeorgans:vox_humana -> vox humana
    let sizeProperty =
        pipeBlockState.block.stateDefinition.getProperty("size");
    let pipeSize = pipeBlockState
        .getValue(sizeProperty)
        .toString() // For some reason this is a custom KubeJS or Java or whatever object that only holds that one value for as far as I know. Thus, .toString()
        .toLowerCase();

    // Get the pitch value
    getNBTInt(
        player.level,
        coords.x,
        coords.y,
        coords.z,
        "Pitch",
        player.username,
        (pipePitch) => {
            /*
            This is done via callback because Minecraft is coded poorly.
            This happens right after the 'inbetween tick'(not an actual tick) ends.
            Nothing here is accessible outside of the braces. */
            if (pipePitch !== null) {
                //     Capitalizes the first character.
                const pipePitchh = pipePitch
                if (!player.isCreative()) {   //survival
                    if (player.inventory.contains("create:redstone_link")) { //only works if they have redstone link in inventory
                        player.inventory.removeItem(player.inventory.findSlotMatchingItem("create:redstone_link"),1);
                        placeRedstoneLink(event, player, pos, pipePitchh);  
                        player.swing(event.hand, true);
                    }
                }
                else {
                    placeRedstoneLink(event, player, pos, pipePitchh);  
                    player.swing(event.hand, true)
    }
            } else {
                player.tell("Failed to get pitch value");
            }
        }
    );

    
    
    
})
