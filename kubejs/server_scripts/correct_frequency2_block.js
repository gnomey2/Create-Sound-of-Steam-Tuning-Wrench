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
    subbass: 4,
    posaune: 2,
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



ItemEvents.rightClicked('kubejs:tuning_wrench', event => {
    if (event.level.isClientSide()) return
    if (!event.target?.block) return
    const pos = event.target.block.getPos();
    const pipePitch = event.target.block.entityData['Pitch'];
    const player = event.player;
    if (!player.isCreative) {   //survival
        if (player.inventory.contains("create:redstone_link")) { //only works if they have redstone link in inventory
            player.inventory.removeItem("create:redstone_link")
            placeRedstoneLink(event, player, pos, pipePitch);  
            player.swing(event.hand, true)
        }
    }
    else {
        placeRedstoneLink(event, player, pos, pipePitch);  
        player.swing(event.hand, true)
    }
    
    
})
