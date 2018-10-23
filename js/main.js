const $body = $('.js-scroll');
const $root = $('body,html');

  $body.on('click', 'a', scrollToBlock);

  function scrollToBlock(e) {

    e.preventDefault();
    const id = $(this).attr('href');
    const top = $(id).offset().top;
    $root.animate({scrollTop: top}, 800);
  }



  $(document).on('scroll', function () {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 400) {
          console.log(scrollTop);
          $('.scroll-top').fadeIn(250)
      }

      else {
          console.log(scrollTop);
          $('.scroll-top').fadeOut(250)
      }
  });