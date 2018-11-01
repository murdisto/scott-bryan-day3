/*eslint-env jquery*/
'use strict';

function thumbNails() {
  // console.log('Expecting Thumbnails');
  $('.thumbnail').on('click', function() {
    const imgSrc = $(this).find('img').attr('src');
    const altImg = $(this).find('img').attr('alt');
    // console.log('Function executed');
    $('.hero img').attr('src', imgSrc).attr('alt', altImg);
    // console.log($(this).find('img').attr('src').attr('alt'));
  });
}
$(thumbNails);