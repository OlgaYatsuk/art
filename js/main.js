const $menu = $('.js-nav');
const $root = $('body,html');

  $menu.on('click', 'a', scrollToBlock);

  function scrollToBlock(e) {

    e.preventDefault();
    const id = $(this).attr('href');
    const top = $(id).offset().top;
    $root.animate({scrollTop: top}, 800);
  }

