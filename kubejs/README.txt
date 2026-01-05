Auto-Tuning Wrench (KubeJS)

A KubeJS addon that automatically places and configures Create: Redstone Links for Pipe Organs / Sound of Steam pipes based on their pitch, size, and stop type.

Right-click a pipe with the wrench, and the correct redstone link frequency block is placed underneath—no manual tuning.

Requirements

Minecraft Forge 1.20.1

KubeJS

Create

Sound of Steam / Pipe Organs (or compatible pipe blocks)

Installation

Make sure KubeJS is installed and working.

Download this package.

Copy the included kubejs/ folder into your instance or server root.

Launch the game (or restart the server).

Do not put this in the mods/ folder.


Usage

Give yourself the wrench:

/give @p kubejs:tuning_wrench


Place a pipe organ block.

Right-click the pipe with the wrench.

A create:redstone_link is placed two blocks below the pipe, pre-configured to the correct frequency.

What It Does

Reads the pipe’s:

Stop type (block ID)

Size (blockstate)

Pitch (block entity NBT)

Calculates the musical note and octave

Chooses a color + block palette based on pitch range

Places and configures a Create redstone link automatically

Notes

Runs server-side only

Uses commands internally for reliability

Designed for modpacks and servers

Easy to modify: all logic is plain JavaScript