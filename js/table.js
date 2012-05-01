/* Global Variables */
var tableStart = '<table width="710px" style="border:0px solid transparent;margin:0 auto;text-align:center;">';
var tableEnd = '</table>';
var bodyStart = '<tbody>';
var bodyEnd = '</tbody>';
var row = '<tr class="row" style="">';
var cellStart = '<td style="width:710px;height:181px;font-size:24px;font-weight:bolder;background:url(';
var cellStyle = ');background-size:706px 181px;" id="cell';
var cellId = '">';
var cellEnd = '</td>';
var cellDataImg = '<img src=\"';
var cellDataId = '\" style="z-index:90;" id="img';
var cellDataEnd = '">';
var rowEnd = '</tr>';
var ur = 'url(';
var l = ')';
var b = new Array(); // Creates b array
var windowSizeX = window.innerWidth; // SNext assignments set window.innerWidth to variables. Why?... or Why not?
var windowSizeY = window.innerHeight;
var p = 0;
var pgNum = 1;
var maxPic = 6;
var maxPg = maxPic/3;

/* Preload the tables images */
    // Used http://www.w3schools.com/js/js_obj_array.asp for Array information, Le Google & skimmed Chapter 11.
    // Writing image#.src blah blah six times over felt pointless.
if (document.images) {
        backg = new Image(706,181);
        backg.src = '../images/table/bg.png';
        backgh = new Image(706,181);
        backgh.src = '../images/table/bgh.png';
        img = new Array();
            for (i=0; i<maxPic; i++) {
                img[i] = new Image();
                img[i].src = 'sigs/sig'+i+'.png';
    }
} 


/* Table Write function */
function table() {
        // Image counter
    var i = 0;
        // Start Table
    document.write(tableStart);
        // Start Table Body
    document.write(bodyStart);
        // For loop to write table rows
    for (var r = 0; r < 3; r++) {
            // Begin table rows
        document.write(row);
                // For loop to write cells
            for (var cell = 0; cell < 1; cell++) {
                    // Write image - Writing the background image here made it possible for me to not have to write custom CSS for each cell.
                document.write(cellStart+backg.src+cellStyle+i+cellId+cellDataImg+img[i].src+cellDataId+i+cellDataEnd+cellEnd);
                    // +1 to image counter
                i++;
            }
            //End row
        document.write(rowEnd);
    }
        // End Body
    document.write(bodyEnd);
        // End Table
    document.write(tableEnd);
}
   
/* OnCall function, to send background to cell */ 
function OnCall() {
    b[0] = document.getElementById('cell0');
    b[0].onmouseover = function() { b[0].style.backgroundImage = ur+backgh.src+l };
    b[0].onmouseout = function() { b[0].style.backgroundImage = ur+backg.src+l };

        // Rinse Repeat.
    b[1] = document.getElementById('cell1');
    b[1].onmouseover = function() { b[1].style.backgroundImage = ur+backgh.src+l };
    b[1].onmouseout = function() { b[1].style.backgroundImage = ur+backg.src+l };
    
    b[2] = document.getElementById('cell2');
    b[2].onmouseover = function() { b[2].style.backgroundImage = ur+backgh.src+l };
    b[2].onmouseout = function() { b[2].style.backgroundImage = ur+backg.src+l };
}

function pgNumber() {
        document.write('<h1 style="color:black;text-align:center;text-shadow: 0px -1px #e9e9e9;" id="pgNum">Page #'+pgNum+' of '+maxPg+'</h1>')
}

function imgCyclerR() {
        pg = document.getElementById('pgNum');
        pgN = document.getElementById('pgNotify');
        mRight = document.getElementById('moveRight');
        mRight.onclick = function() {
                mRight.disabled = true;
                mLeft.disabled = true;
                if (p<=(maxPic-5)) {
                        i0 = document.getElementById('img0');
                        i1 = document.getElementById('img1');
                        i2 = document.getElementById('img2');
                        pgN.innerHTML = '';
                        fader = 9;
                        function CycleOr() {
                                i0.style.opacity = '0.'+fader;
                                i1.style.opacity = '0.'+fader;
                                i2.style.opacity = '0.'+fader;
                                fader = fader-1;
                                if (fader==0) {
                                        i0.src = img[p+3].src;
                                        i1.src = img[p+4].src;
                                        i2.src = img[p+5].src;
                                        f = 1;
                                        function CycleIr() {
                                                i0.style.opacity = '0.'+f;
                                                i1.style.opacity = '0.'+f;
                                                i2.style.opacity = '0.'+f;
                                                f = f+1;
                                                        if (f==9) {
                                                                i0.style.opacity = 1;
                                                                i1.style.opacity = 1;
                                                                i2.style.opacity = 1;
                                                                p = (p+3);
                                                                pgNum = pgNum+1;
                                                                pg.style.color = '#000000';
                                                                pg.style.textShadow = '0px -1px #e9e9e9';
                                                                pg.innerHTML = 'Page #'+pgNum+' of '+maxPg;
                                                                mRight.disabled = false;
                                                                mLeft.disabled = false;
                                                        }
                                                        else {
                                                                setTimeout(CycleIr,20);
                                                        }
                                        }
                                        setTimeout(CycleIr,180);
                                }
                                else {
                                        setTimeout(CycleOr,20);
                                }
                        };
                        setTimeout(CycleOr,200);
                }
                else {
                        setTimeout(imgCyclerL,1);
                        pgN.innerHTML = 'Last Page';
                        mRight.disabled = false;
                        mLeft.disabled = false;
                }
        };
}

function imgCyclerL() {
        pg = document.getElementById('pgNum');
        pgN = document.getElementById('pgNotify');
        mLeft = document.getElementById('moveLeft');
        mLeft.onclick = function() {
                mRight.disabled = true;
                mLeft.disabled = true;
                if (p>=2) {
                        i0 = document.getElementById('img0');
                        i1 = document.getElementById('img1');
                        i2 = document.getElementById('img2');
                        pgN.innerHTML = '';
                        fader = 9;
                        function CycleOl() {
                                i0.style.opacity = '0.'+fader;
                                i1.style.opacity = '0.'+fader;
                                i2.style.opacity = '0.'+fader;
                                fader = fader-1;
                                if (fader==0) {
                                        i0.src = img[p-3].src;
                                        i1.src = img[p-2].src;
                                        i2.src = img[p-1].src;
                                        f = 1;
                                        function CycleIl() {
                                                i0.style.opacity = '0.'+f;
                                                i1.style.opacity = '0.'+f;
                                                i2.style.opacity = '0.'+f;
                                                f = f+1;
                                                        if (f==9) {
                                                                i0.style.opacity = 1;
                                                                i1.style.opacity = 1;
                                                                i2.style.opacity = 1;
                                                                p = (p-3);
                                                                pgNum = pgNum-1;
                                                                pg.style.color = '#000000';
                                                                pg.style.textShadow = '0px -1px #e9e9e9';
                                                                pg.innerHTML = 'Page #'+pgNum+' of '+maxPg;
                                                                mRight.disabled = false;
                                                                mLeft.disabled = false;
                                                        }
                                                        else {
                                                                setTimeout(CycleIl,20);
                                                        }
                                        }
                                setTimeout(CycleIl,180);
                                }
                                else {
                                        setTimeout(CycleOl,20);
                                }
                        };
                                setTimeout(CycleOl,200);
                }
                else {
                        pgN.innerHTML = 'First Page';
                        mRight.disabled = false;
                        mLeft.disabled = false;
                }
        };
}