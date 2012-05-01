function loader() {
    classic = document.getElementById('classic');
    sigs = document.getElementById('sigs');
    evo = document.getElementById('evo');
    chat = document.getElementById('chat');
    tester = document.getElementById('tester');
    rframe = document.getElementById('rframe');
    classic.onclick = function() {
        rframe.style.opacity = 0;
        rframe.style.filter = "alpha(opacity=0)";
            function switcher() {
                    rframe.src = 'classic/index.html';
            }
                function opacToggler() {
                    rframe.style.opacity = 1;
                    rframe.style.filter = "alpha(opacity=100)";
                }
        setTimeout(opacToggler, 400);
        setTimeout(switcher, 200);
    }
    sigs.onclick = function() {
        rframe.style.opacity = 0;
        rframe.style.filter = "alpha(opacity=0)";
            function switcher() {
                    rframe.src = 'classic/sigs.html';
            }
                function opacToggler() {
                    rframe.style.opacity = 1;
                    rframe.style.filter = "alpha(opacity=100)";
                }
        setTimeout(opacToggler, 400);
        setTimeout(switcher, 200);
    }
    evo.onclick = function() {
        rframe.style.opacity = 0;
        rframe.style.filter = "alpha(opacity=0)";
            function switcher() {
                    rframe.src = 'http://forum.xda-developers.com/forumdisplay.php?f=653';
            }
                function opacToggler() {
                    rframe.style.opacity = 1;
                    rframe.style.filter = "alpha(opacity=100)";
                }
        setTimeout(opacToggler, 1200);
        setTimeout(switcher, 200);
    }
    chat.onclick = function() {
        rframe.style.opacity = 0;
        rframe.style.filter = "alpha(opacity=0)";
            function switcher() {
                    rframe.src = 'http://webchat.freenode.net/?channels=%23%23classictomatoe&uio=MTE9MA4c';
            }
                function opacToggler() {
                    rframe.style.opacity = 1;
                    rframe.style.filter = "alpha(opacity=100)";
                }
        setTimeout(opacToggler, 400);
        setTimeout(switcher, 200);
    }
    tester.onclick = function() {
        rframe.style.opacity = 0;
        rframe.style.filter = "alpha(opacity=0)";
            function switcher() {
                    rframe.src = 'classic/test.html';
            }
                function opacToggler() {
                    rframe.style.opacity = 1;
                    rframe.style.filter = "alpha(opacity=100)";
                }
        setTimeout(opacToggler, 400);
        setTimeout(switcher, 200);
    }
}