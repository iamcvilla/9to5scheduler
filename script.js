// displays today's date
$(document).ready(function() {

    $("#currentDay").text(moment().format('ddd MMM Do, YYYY') );

});