
function overflowButton() {
    ofbT = 0;
    ofb = document.getElementById('overflowB');
    ofh = document.getElementById('overflowHolder');
    ofm = document.getElementById('overflowM');
    ofx = document.getElementById('overflowX');
    pop = document.getElementById('popup');
    ofb.onclick = function() {
        if (ofbT == 1) {
            ofh.style.pointerEvents = 'none';
            ofh.style.visibility = 'hidden';
            ofm.style.opacity = 0;
            ofm.style.filter = "alpha(opacity=0)";
            ofm.style.visibility = 'hidden';
            // ofm.style.WebkitTransform = 'scale(0.9)';
            ofbT = 0;
        }
        else {
            ofm.style.opacity = 1;
            ofm.style.filter = "alpha(opacity=100)";
            ofm.style.visibility = 'visible';
            ofh.style.pointerEvents = 'auto';
            ofh.style.visibility = 'visible';
            
            // ofm.style.WebkitTransform = 'scale(1)';
            ofbT = 1;
        }
    }
    ofx.onclick = function() {
        ofm.style.opacity = 0;
        ofm.style.filters = "alpha(opacity=0)";
        ofm.style.visibility = 'hidden';
        ofh.style.pointerEvents = 'none';
        ofh.style.visibility = 'hidden';
        ofbT = 0;
    }
    pop.onclick = function() {
        ofm.style.opacity = 0;
        ofm.style.filters = "alpha(opacity=0)";
        ofm.style.visibility = 'hidden';
        ofh.style.pointerEvents = 'none';
        ofh.style.visibility = 'hidden';
        ofbT = 0;
    }
}

function dialogAlert() {
    ofba = 0;
    ofab = document.getElementById('overflowAbout');
    ofd = document.getElementById('dialog');
    ofdX = document.getElementById('overflowPopX');
    ofdGo = document.getElementById('overflowPopGo');
    ofab.onclick = function() {
        if (ofba == 1) {
            ofd.style.opacity = 0;
            ofm.style.filter = "alpha(opacity=0)";
            ofm.style.visibility = 'hidden';
            ofd.style.pointerEvents = 'none';
            ofd.style.visibility = 'hidden';
            // ofm.style.WebkitTransform = 'scale(0.9)';
            ofba = 0;
        }
        else {
            ofd.style.opacity = 1;
            ofm.style.filter = "alpha(opacity=0)";
            ofm.style.visibility = 'hidden';
            ofd.style.pointerEvents = 'auto';
            ofd.style.visibility = 'visible';
            // ofm.style.WebkitTransform = 'scale(1)';
            ofba = 1;
        }
    }
    ofdX.onclick = function() {
        ofd.style.opacity = 0;
        ofm.style.filter = "alpha(opacity=0)";
        ofm.style.visibility = 'hidden';
        ofd.style.pointerEvents = 'none';
        ofd.style.visibility = 'hidden';
        ofba = 0;
    }
    ofdGo.onclick = function() {
        ofd.style.opacity = 0;
        ofm.style.filter = "alpha(opacity=0)";
        ofm.style.visibility = 'hidden';
        ofd.style.pointerEvents = 'none';
        ofd.style.visibility = 'hidden';
        ofba = 0;
        window.open('http://berlinmediagroup.com/')
    }
    ofd.onclick = function() {
        ofd.style.opacity = 0;
        ofm.style.filter = "alpha(opacity=0)";
        ofm.style.visibility = 'hidden';
        ofd.style.pointerEvents = 'none';
        ofd.style.visibility = 'hidden';
        ofba = 0;
    }
}