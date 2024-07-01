function startCountdown(duration, display) {
    var timer = duration, days, hours, minutes, seconds;
    setInterval(function () {
        days = parseInt(timer / (60 * 60 * 24), 10);
        hours = parseInt((timer % (60 * 60 * 24)) / (60 * 60), 10);
        minutes = parseInt((timer % (60 * 60)) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var countdownDuration = 60 * 60 * 24 * 10; // Durasi countdown dalam detik (misalnya 10 hari)
    var display = document.getElementById('countdown');
    startCountdown(countdownDuration, display);
};