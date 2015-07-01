var MIDI = require('midi');
var output = new MIDI.output();

module.exports = [
	{
		method: 'GET',
		path: '/test',
		config: {
			handler: midiTest
		}
	}
];

function midiTest(request)
{
	output.openPort(0);
	var msg = output.sendMessage([176, 9, 5]);
	output.closePort();
    request.reply(msg);
}
