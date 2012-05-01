function clock() {  
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var suffix = "AM";
        if (hours >= 12) {
            suffix = "PM";
            hours = hours - 12;
        }
            if (hours == 0) {
            hours = 12;
        }
            if (minutes < 10)
            minutes = "0" + minutes
    document.getElementById('time').innerHTML = (hours + ":" + minutes + " " + suffix);
    tic = setTimeout("clock()",60000)
}


if (document.images) {
    wifi = new Array(1);
    cell = new Array(1);
    for (var i = 0; i<2; i++) {
        wifi[i] = new Image();
        wifi[i].src = 'images/wifi'+i+'.png';
        cell[i] = new Image();
        cell[i].src = 'images/cell'+i+'.png';
    }
}

wCount = 0;

function notiWifi() {
    if (wCount == 0) {
        w = document.getElementById('wifi');
        w.src = wifi[wCount].src;
        wCount = 1;
        setTimeout(notiWifi,((Math.random()*100000)+1));
    }
    else  {
        w = document.getElementById('wifi');
        w.src = wifi[wCount].src;
        wCount = 0;
        setTimeout(notiWifi,((Math.random()*100000)+1));
    }
}

cCount = 0;

function notiCell() {
    if (cCount == 0) {
        c = document.getElementById('cell');
        c.src = cell[cCount].src;
        cCount = 1;
        setTimeout(notiCell,((Math.random()*100000)+1));
    }
    else  {
        c = document.getElementById('cell');
        c.src = cell[cCount].src;
        cCount = 0;
        setTimeout(notiCell,((Math.random()*100000)+1));
    }
}