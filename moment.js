var timeDisplay = $("#currentDay");
var fetchTime = moment().format('dddd, MMMM Do');

$( document ).ready(function() {
    $(timeDisplay).text(fetchTime)
    
});