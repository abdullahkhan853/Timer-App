var millisec = 0
var sec = 0
var min = 0
var hour = 0
var displaySetTimer = document.getElementById('setTimer')
var displaysec = document.getElementById('displaySec')
var displaymin = document.getElementById('displayMin')
var displayhour = document.getElementById('displayHour')
function timer() {
    millisec++
    if (millisec == 100 && sec != 0) {
        sec--
        millisec = 0
        if (sec < 10) {
            displaysec.innerHTML = '0' + sec
        }
        else {
            displaysec.innerHTML = sec
        }
        if (sec == 0 && min != 0) {
            min--
            sec = 60
            if (min < 10) {
                displaymin.innerHTML = '0' + min
            }
            else {
                displaymin.innerHTML = min
            }
            if (min == 00 && hour != 0) {
                hour--
                min = 60
                if (hour < 10) {
                    displayhour.innerHTML = hour
                }
                else {
                    displayhour.innerHTML = hour
                }
            }

        }
    }
}
var flag = 0
var count = 0
var interval
function start() {
    count++
    flag++
    if (displaySetTimer.value == '') {
        alert('Please! insert accurate time')
        flag = 0
        count = 0
    }
    else if(flag == 1) {
        flag++
        var x = displaySetTimer.value
        displayhour.innerHTML = x.slice(0, 2) 
        displaymin.innerHTML = x.slice(3, 5) 
        displaysec.innerHTML = x.slice(6) 
        hour = displayhour.innerHTML
        min = displaymin.innerHTML
        sec = displaysec.innerHTML
    }
    if (sec > 60 || sec < 0 || min > 60 || min < 0 || hour < 0) {
        alert('Please! insert accurate time');
        displayhour.innerHTML = '00'
        displaymin.innerHTML = '00'
        displaysec.innerHTML = '00'
        flag = 0
        count = 0
    } 
    else if(count == 1) {
        interval = setInterval(timer, 10)
    }
}
function stop() {
    count = 0
    clearInterval(interval)
}
function reset() {
    stop()
    sec = 0
    min = 0
    hour = 0
    millisec = 0
    displaysec.innerHTML = '00'
    displaymin.innerHTML = '00'
    displayhour.innerHTML = '00'
    displaySetTimer.value = ''
    flag = 0
}