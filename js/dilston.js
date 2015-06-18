/**
* Dilston: a JavaScript class to send MIDI notes and CC messages to any other software within the same machine
* @author: Igor Olejar <igor@autorotation.org>
**/

// class
var Dilston = Dilston || function() {
    var midiAccess = {};
    var outputName;
    var outputPort;

    this.setup();
};

Dilston.prototype.setup = function() {
    navigator.requestMIDIAccess().then(this.onMIDISuccess, this.onMIDIFailure);
};

Dilston.prototype.onMIDISuccess = function(midiAccess) {
    this.midiAccess = midiAccess;
    this.findPortNumber();
};

Dilston.prototype.onMIDIFailure = function (msg) {
    console.log('Failed to access MIDI  - ' + msg);
};

Dilston.prototype.findPortNumber = function () {
    for (var entry of this.midiAccess.outputs) {
        var output = entry[1];

        if (output.name == this.outputName) {
            this.outputPort = output.id;
            break;
        }
    }

    // set the output
    this.output = this.midiAccess.outputs.get(this.outputPort);
};

Dilston.prototype.playNote = function (midiNote, duration = 50.0) {
    var noteOnMessage = [0x90, midiNote, 0x7f];    // note on, full velocity

    this.output.send(noteOnMessage);

    // kill the note
    this.output.send( [0x80, midiNote, 0x40], window.performance.now() + duration );
};
