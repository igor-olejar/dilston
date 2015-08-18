// jQuery
$(function() {
    $(".ui-slider").on("slidestop", function(ui) {
        var target = ui.target;
        var cc_number = $(target).data('ccnumber');

        // send cc number and value to API
        $.ajax({
            type: 'POST',
            data: 'cc_number=' + cc_number + "&value=" + target.value,
            url: 'messenger.php',
            success: function(msg) {
                showMessage(msg);
            }
        });
    });

    $("button").on("click", function(e) {
        e.preventDefault();

        var midi_note = $(this).data('midinote');

        // send the midi note to API
        $.ajax({
            type: 'POST',
            data: 'midi_note=' + midi_note,
            url: 'messenger.php',
            success: function(msg) {
                showMessage(msg);
            }
        });
    });

    function showMessage(msg)
    {
        if (msg == "") msg = "There was an error connecting to the server.";
        $("#server-response-inner").hide(40, function() {
            $(this).html(msg);
        });
        $("#server-response-inner").show('slow');
    }
});
