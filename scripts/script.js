var body = document.body;
var duration = 700;

function pagenext(pagename)
{
    if(window.location != pagename)
    {
        console.log("Page Next");
        fadeOut(body, duration-500);
        
        

        setTimeout(function(){
            window.location =  pagename;
        }, duration-500);
        
        body.style.opacity = 1;

        clearTimeout()
    }
}

function showModal(elname)
{
    let el = document.getElementById(elname);

    el.style.display = "block";

    fadeIn(el, 500);
    
}

function closeModal(elname)
{
    let el = document.getElementById(elname);

    fadeOut(el, 200);

    setTimeout(function(){
        el.style.display = "none";
    }, 250);

}

function scrollWindow(distance)
{
    var scrollOptions = {
        left: 0,
        top: distance,
        behavior: 'smooth'
      }

    window.scroll(scrollOptions);
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
    };

    tick();
}

window.onpageshow = function(){fadeIn(document.body, duration);
    console.log("load");};

//window.addEventListener('pageshow', fadeIn(document.body, duration));

window.onload = fadeIn(body, duration);
