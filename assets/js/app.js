//Animation Script

function scrollAppearTwo(){
  var mainLogoTxt = document.querySelector('.main-logo-txt');
  var mainLogoPosition = mainLogoTxt.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;

  if(mainLogoPosition < screenPosition) {
    mainLogoTxt.classList.add('main-logo-txt-fadein');
  }
}
scrollAppearTwo();
// Scrolling Script
function smoothScroll(target, duration){
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var targetPositionMobile = target.getBoundingClientRect().top - 75;
  var startPosition = window.pageYOffset;
  var startTime = null;

  function animation(currentTime){
    if(startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, targetPosition, duration);
    var run2 = ease(timeElapsed, startPosition, targetPositionMobile, duration);
    function init(){
      let query = window.matchMedia('(max-width: 500px)')
      if(query.matches) {
        window.scrollTo(0, run2)
      }else {
        window.scrollTo(0, run);
      }
    }
    init();
    if(timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d){
    t /= d / 2;
    if(t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animation);
}

var scrollToHome = document.querySelector('.home-btn');
var scrollToApp = document.querySelector('.our-product');
var scrollToTeam = document.querySelector('.the-team-btn');
var scrollToContact = document.querySelector('.contact-btn');

scrollToHome.addEventListener('click', function(){
  smoothScroll('#main-intro', 1000);
})

scrollToApp.addEventListener('click', function(){
  smoothScroll('#the-app', 1000);
})

scrollToTeam.addEventListener('click', function(){
  smoothScroll('#the-team', 1000);
})

scrollToContact.addEventListener('click', function(){
  smoothScroll('#contact', 1000);
})
