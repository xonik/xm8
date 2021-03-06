#ifndef _CONFIG_H
#define _CONFIG_H

#define INPUTS 64 // number of inputs to matrix
// there are two DACs in use, each one has 16 SH circuits connected to it by
// means of a 1-to-16 mux
#define SR_OUTPUTS 16 // shift register outputs
#define DCO_OUTPUTS 3
#define DAC_OUTPUTS 32 // SR_OUTPUTS * 2
#define OUTPUTS 35 // SR_OUTPUTS * 2 + DCO_OUTPUTS

#define MAX_NODES 20
#define MAX_CONSTANTS MAX_NODES * 3

// Semitones covered by the synth
#define CONF_SEMITONE_COUNT 108
#define CONF_SEMITONE_LOWEST 9
#define CONF_SEMITONE_HIGHEST 117

#define CONNECTED_DCOS 3

// maps midi controllers to input positions in the matrix
extern char MIDI_controllerToInputMap[127];

// configures controller resolution, if set to 1 CC will only be written when
// fine-res arrives.
extern char MIDI_controllerHiRes[32];

// selects what outputs should be converted from linear to exponential
// before being sent to the DAC
extern char MX_outputAsExp[32];

#endif