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
            //console.log(cc_number, ui.value);

            // send cc number and value to API
            /*$.ajax({
                type: 'GET',
                dataType: 'jsonp',
                data: {cc: cc_number, value: ui.value},
                url: 'http://localhost:8080/test',
                success: function(msg) {
                    console.log(msg);
                }
            });*/
        }
        /*slide: function(event, ui) {
            var cc_number = $(this).data('ccnumber');
            console.log(ui.value);
        }*/
    });


});
