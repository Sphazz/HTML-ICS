var imgS = '<img src="';
var imgI = '" id="'
var imgC = '" class="';
var imgE = '">';
var h = window.innerHeight;
var w = window.innerWidth;
var s = 0;


if (document.images) {
    nDroid = new Image();
    nDroid.src = '../images/nyandroid.gif';
    nStar = new Image();
    nStar.src = '../images/star.gif';
    nStarOdd = new Image();
    nStarOdd.src = '../images/starOdd.gif';
}

function stars() {
    for (s=0;s<15;s++) {
        if ((s%2) == 0) {
            starB = imgS+nStar.src+imgI+'star'+s+imgC+imgE;
        
        }
        else {
            starB = imgS+nStarOdd.src+imgI+'star'+s+imgC+imgE;
        }
        var x = Math.floor((Math.random()*w-70)+1);
        var y = Math.floor((Math.random()*h-70)+1);
        document.write(starB);
        starLoc = document.getElementById('star'+s);
        starLoc.style.position = 'absolute';
        starLoc.style.left = x+'px';
        starLoc.style.top = y+'px';
        starLoc.style.background = 'transparent';
    }
}


function nyandroid() {
    i = 0;
    z = 0;
    body = document.getElementById('body');
    droids = new Array();
    for (x=0; x<9; x++) {
        droids[x] = 'droid'+x;
    }
    function droidSpawn() {
        function droidMove() {
            droidM = document.getElementById(droids[z]);
            droidM.style.left = (w+340)+'px';
            z = z+1;
            if ( z == 8) {
                droidM = document.getElementById(droids[8]);
                droidM.style.left = (w+340)+'px';
            }
        }
        droidB = imgS+nDroid.src+imgI+'droid'+i+imgC+'droid'+i+imgE;
        y = Math.floor((Math.random()*h-40)+1);
        body.innerHTML += droidB;
        droidLoc = document.getElementById('droid'+i);
        droidLoc.style.position = 'absolute';
        droidLoc.style.left = -340+'px';
        droidLoc.style.top = y+'px';
        droidLoc.style.background = 'transparent';
        i = i+1;
        if (i < 9) {
            setTimeout(droidSpawn, 20);
            setTimeout(droidMove, i*700);

        }
    }
    droidSpawn();
}