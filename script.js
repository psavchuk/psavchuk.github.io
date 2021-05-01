var body = document.body;
var duration = 1250;

function pagenext(pagename)
{
    console.log("Page Next");
    fadeOut(body, duration);
    window.location =  pagename;

    setTimeout(function(){
        window.location =  pagename;
    }, duration);
}

//https://stackoverflow.com/questions/23244338/pure-javascript-fade-in-function
function fadeIn(el, time) {
    el.style.opacity = 0;
  
    var last = +new Date();
    var tick = function() {
      el.style.opacity = +el.style.opacity + (new Date() - last) / time;
      last = +new Date();
  
      if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
      console.log("Page In");
    };
  
    tick();
}

function fadeOut(el, time) {
    el.style.opacity = 1;

    var last = +new Date();
    var tick = function() {
        el.style.opacity = +el.style.opacity - (new Date() - last) / time;
        last = +new Date();

        if (+el.style.opacity > 0) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
        console.log("Page Out");
    };

    tick();
}

window.onload = fadeIn(body, duration);