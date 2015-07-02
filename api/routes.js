/**
* Control change: [176, control, value]
* Note on: [144, midi_note_number, velocity]
* Note off: [128, midi_note_number, velocity]
*/

var MIDI = require('midi');
var output = new MIDI.output();

module.exports = [
	{
		method: 'GET',
		path: '/test/{}',
		config: {
			handler: midiTest
		}
	}
];

function midiTest(request)
{
	output.openPort(0);
	var msg = output.sendMessage([144, 65, 100]);
	output.closePort();
    request.reply(msg);
}
