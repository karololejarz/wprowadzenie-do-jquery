$(function(){

  var carouselList = $('#carousel ul');
  var currentSlide = 1;
  var slideSize = 400;
  
  setInterval(slideForward, 3000);
  setInterval(moveRadioForward, 3000);

  function moveSlideForward() {
    var firstItem = carouselList.find('li:first');
    var lastItem = carouselList.find('li:last');
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});     
  };

  function moveSlideBackward() {
    var firstItem = carouselList.find('li:first');
    var lastItem = carouselList.find('li:last');
    firstItem.before(lastItem);
    carouselList.css({marginLeft:-slideSize});    
  };

  function slideForward() {
    carouselList.animate({'marginLeft':-slideSize}, 500, moveSlideForward);
  };

  function slideBackward() {
    moveSlideBackward();
    carouselList.animate({'marginLeft':0}, 500);
  };

  function moveRadioBackward() {
    currentSlide--;
    if (currentSlide != 0) {
      $("input[name=radio]:checked").prevAll(':radio:first').prop('checked', true);
    } else {
      $("input[name=radio]:last").prop('checked', true);
      currentSlide = 5;
    }
  }

  function moveRadioForward() {
    currentSlide++;
    if(currentSlide != 6) {
      $("input[name=radio]:checked").nextAll(':radio:first').prop('checked', true);
    } else {      
      $("input[name=radio]:first").prop('checked', true);
      currentSlide = 1;
    }    
  }

  $('#left-scroll').click(function() {
    slideBackward();
    moveRadioBackward();
  });

  $('#right-scroll').click(function() {
    slideForward();
    moveRadioForward();
  });

  $('#radio1').click(function() {
    if(currentSlide == 2) {slideBackward();}
    if(currentSlide == 3) {
      slideBackward();
      slideBackward();
    }
    if(currentSlide == 4) {
      slideForward();
      slideForward();
    }
    if(currentSlide == 5) {slideForward();}

    currentSlide = 1
  });

  $('#radio2').click(function() {
    if(currentSlide == 1) {slideForward();}
    if(currentSlide == 3) {slideBackward();}
    if(currentSlide == 4) {
      slideBackward();
      slideBackward();
    }
    if(currentSlide == 5) {
      slideForward()
      slideForward()
    ;}

    currentSlide = 2
  });

  $('#radio3').click(function() {
    if(currentSlide == 1) {
      slideForward();
      slideForward();
    }
    if(currentSlide == 2) {slideForward();}
    if(currentSlide == 4) {
      slideBackward();
    }
    if(currentSlide == 5) {
      slideForward()
      slideForward()
    ;}

    currentSlide = 3
  });

  $('#radio4').click(function() {
    if(currentSlide == 1) {
      slideBackward();
      slideBackward();
    }
    if(currentSlide == 2) {
      slideForward();
      slideForward();
    }
    if(currentSlide == 3) {slideForward();}
    if(currentSlide == 5) {slideBackward();}

    currentSlide = 4
  });

  $('#radio5').click(function() {
    if(currentSlide == 1) {slideBackward();}
    if(currentSlide == 2) {
      slideBackward();
      slideBackward();
    }
    if(currentSlide == 3) {
      slideForward();
      slideForward();
    }
    if(currentSlide == 4) {slideForward();}

    currentSlide = 5
  });

});