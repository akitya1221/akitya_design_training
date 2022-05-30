$('.slider').slick({
  autoplay: true,         //自動再生
  autoplaySpeed: 2000, //自動再生のスピード
  speed: 800,     //スライドするスピード
  dots: true,
  arrows: false,
  infinite: true,
  pauseOnHover: false,
});

$(function () {
  $('.popup').magnificPopup({
    type: 'image',
  });
});