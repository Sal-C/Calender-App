var timeDisplay = $("#currentDay");
var fetchTime = moment().format('dddd, MMMM Do');
//var parsedValue= parseInt($(".textarea").attr("data-time"));
var currentHour = parseInt(moment().format('HH'))
console.log(currentHour)

//console.log(parsedValue)
//console.log(currentHour)
//console.log($(this).attr("data-time"))

$( document ).ready(function() {
    $(timeDisplay).text(fetchTime);

    $(".textarea").each(function(index, value) {
        // var parsedValue = (parseInt($(this).attr("data-time")));
        // console.log(parsedValue)
        var parsedValue = parseInt(index)+9;
        console.log(parsedValue)
        if (parsedValue === currentHour){
            $(this).addClass("present")
        }
        if (parsedValue < currentHour){
            $(this).addClass("past")
        }
        if (parsedValue > currentHour){
            $(this).addClass("future")
        }
        
        
      });
   
});