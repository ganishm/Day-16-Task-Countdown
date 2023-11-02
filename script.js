const countdownElement = document.getElementById('countdown');

function displayMessage() {
    countdownElement.innerText = 'Happy Independence Day';
}

function countdown(count, callback) {
    if (count >= 1) {
        setTimeout(function () {
            countdownElement.innerText = count;
            countdown(count - 1, callback);
        }, 1000);
    } else {
        callback();
    }
}
countdown(10, displayMessage);