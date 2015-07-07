/**
* Control change: [176, control, value]
* Note on: [144, midi_note_number, velocity]
* Note off: [128, midi_note_number, velocity]
*/

var MIDI = require('midi');
var output = new MIDI.output();
var midiPort = 0; // This can be IAC or Network Session or any other MIDI port

// define API points
module.exports = [
	{
		method: 'GET',//['GET', 'POST', 'PUT'],
		path: '/',
		config: {
			handler: nothingToSee
		}
	},
	{
		method: 'POST',
		path: '/note',
		config: {
			handler: playNote
		}
	},
	{
		method: 'POST',
		path: '/control',
		config: {
			handler: sendControl
		}
	}
];

/**
* Play the MIDI note at velocity = 100
*/
function playNote(request)
{
	var note = request.payload.midi_note;
	sendMessage(144, note, 100);
    request.reply('Note sent. MIDI note = ' + note);
}

/**
* Send the Control Change message to the final destination
*/
function sendControl(request)
{
	var cc = request.payload.cc_number;
	var value = request.payload.value;
	sendMessage(176, cc, value);
    request.reply('Control message sent. CC = ' + cc + ', value = ' + value);
}

/**
* Just a default route handler
*/
function nothingToSee(request)
{
	request.reply('These are not the nodes you are looking for...');
}

/**
* Send the MIDI message to the selected port
*/
function sendMessage($type, $number, $value)
{
	output.openPort(midiPort);
	output.sendMessage([$type, $number, $value]);
	output.closePort();
}
