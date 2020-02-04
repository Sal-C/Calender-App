var timeDisplay = $("#currentDay");
var fetchTime = moment().format('dddd, MMMM Do');
var currentHour = parseInt(moment().format('HH'))
var savedText = sessionStorage.getItem("textKey");

$( document ).ready(function() {
    $(timeDisplay).text(fetchTime);

    $("textarea").text(savedText);

    $(".textarea").each(function(index, value) {
        var parsedValue = parseInt(index)+9;

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

$(".saveBtn").click(function() {
    sessionStorage.setItem("textKey", $('.textarea').val());
})

console.log(sessionStorage.getItem("textKey"))