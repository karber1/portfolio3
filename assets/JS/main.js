$(".hamburger").click(function () {

    $(".hamburger").toggleClass("open");
    $(".nav-container").toggleClass("open");
    $(".hamburger-splash").toggleClass("hamburgerSplash-BG");

});


function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
  }
  
  if (window.addEventListener) {
    addEventListener('load', checkForVisibility, false);
    addEventListener('scroll', checkForVisibility, false );
  }


  $(document).ready(function(){

    let textWrapper = document.querySelector('.presentation-text .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    let textWrapper2 = document.querySelector('.presentation-text2 .letters');
    textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


    checkForVisibility();
    
  });

  let counter = [0,0,0,0,0,0];

function checkForVisibility(){


    let presentHead = document.querySelector('.presentation-text');
    if (isElementInViewport(presentHead) && counter[0] == 0) {

        anime.timeline({loop: false})
        .add({
          targets: '.presentation-text .letter',
          opacity: [0, 1],
          translateY: ["1.1em", 0],
          translateZ: 0,
          duration: 750,
          delay: (el, i) => 50 * i
        });
      counter[0]++;

    } 
    if (isElementInViewport(presentHead) == false) {
        if(counter[0] == 1){
          $('.presentation-text .letter').css('opacity', '0');
          counter[0]--;
        }
      } 

    let presentHead2 = document.querySelector('.presentation-text2');
    if (isElementInViewport(presentHead2) && counter[1] == 0) {

      anime.timeline({loop: false})
        .add({
          targets: '.presentation-text2 .letter',
          translateY: ["1.1em", 0],
          opacity: [0, 1],
          translateZ: 0,
          duration: 750,
          delay: (el, i) => 50 * i
        });

        counter[1]++;
    }
    if (isElementInViewport(presentHead2) == false) {
      if(counter[1] == 1){
        $('.presentation-text2 .letter').css('opacity', '0');
        counter[1]--;
      }
    } 

    let character = document.querySelector('.character');
    if (isElementInViewport(character) && counter[2] == 0) {
      anime({
        targets: '.character',
        duration: 5000,
        easing: 'easeInOutSine',
        keyframes:[
          {rotate: 1800, scale: 2.5, duration: 700 },
          {scale: 2, duration: 150}
        ],
      });
      counter[2]++;
    }

    let contactBtn = document.querySelector('.contactBtn');
    if (isElementInViewport(contactBtn) && counter[3] == 0) {
      anime({
        targets: '.contactBtn',
        keyframes: [
          {rotate: 30},
          {rotate: -30},
          {rotate: 10},
          {rotate: -10},
          {rotate: 0}
        ],
        duration: 700,
        easing: 'easeInOutQuad'
        
      });


      counter[3]++;
    }
    if (isElementInViewport(contactBtn) == false) {
      if(counter[3] == 1){
        counter[3]--;
      }
    }


    let list = document.querySelector('li');
    if (isElementInViewport(list) && counter[4] == 0) {

      anime.timeline({loop: false})
      .add({
        targets: 'li',
        opacity: [0, 1],
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 100 * i
      });
      counter[4]++;
    }
    if (isElementInViewport(list) == false) {
      if(counter[4] == 1){
        counter[4]--;
      }
    }
}


   anime({
    targets: '.brows',
    easing: 'linear',
    keyframes:[
      {translateY: -25, duration: 70},
      {translateY: 0},
      {translateY: -25, duration: 70},
      {translateY: 0},
      {delay: 500}
    ],
    loop: true,


});