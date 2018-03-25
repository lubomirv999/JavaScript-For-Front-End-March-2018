function format(input) {
    let formattedInput;

    if (input.length === 1) {
        formattedInput = "0" + input;
    } else if (input.length === 2){
        formattedInput = input;
    }

    return formattedInput;
}

function step() {
    let secondsSelector = $("#seconds");
    let minutesSelector = $("#minutes");
    let hoursSelector = $("#hours");

    let seconds = parseInt(secondsSelector.text());
    let minutes = parseInt(minutesSelector.text());
    let hours = parseInt(hoursSelector.text());

    if (seconds >= 59) {
        seconds = 0;
        minutes++;
    } else {
        seconds++;
    }

    if (minutes > 59) {
        minutes = 0;
        hours++;
    }

    let secondsStr = format(seconds.toString());
    let minutesStr = format(minutes.toString());
    let hoursStr = format(hours.toString());

    secondsSelector.text(secondsStr);
    minutesSelector.text(minutesStr);
    hoursSelector.text(hoursStr);
}

function timer() {
    let timer;

    $("#start-timer").on("click", function () {
        if (typeof timer === 'undefined') {
            timer = setInterval(step, 1000);
        }
    });

    $("#stop-timer").on("click", function () {
        clearInterval(timer);
        timer = undefined;
    });
}

window.onload = function () {
    timer();
};