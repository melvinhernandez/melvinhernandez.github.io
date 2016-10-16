$(function() {

  var $mobileToggle = $('.mob-nav-btn'),
      $navWrap = $('.nav-links');
  $mobileToggle.on('click', function() {
      $navWrap.slideToggle(1000);
  });

});
