// setup
//var dilston = new Dilston();
//dilston.findPortNumber();

// jQuery
$(function() {
    $(".cc-slider").slider({
        min: 0,
        max: 127,
        value: 0,
        change: function(event, ui) {
            var cc_number = $(this).data('ccnumber');
            console.log(ui.value);
        }
        /*slide: function(event, ui) {
            var cc_number = $(this).data('ccnumber');
            console.log(ui.value);
        }*/
    });


});
