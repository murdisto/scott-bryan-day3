/*eslint-env jquery*/
'use strict';
// In terms of user experience, your shopping list app must allow users to:

// enter itng the "Add item" button
// check and uncheck items on the list by clicking the "Check" buttonems they need to purchase by entering text and hitting "Return" or clicki
// permanently remove items from the list
// Additionally:

// You must use a CDN-hosted version of jQuery
// Put your application code in a file called index.js and link to it in index.html
// Be sure to put both script elements at the bottom of the <body> element.
// Do not alter index.html or main.css other than adding the links to the external JavaScript inside index.html. Write JavaScript code that works with the existing HTML and CSS to
// implement the required features.
// Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().

$(function() {

  $('#js-shopping-list-form').submit(function(event) {

    event.preventDefault();

    $('.js-shopping-list-entry').val();

    $('.shopping-list').append(
      `<li>
    <span class="shopping-item">${$('.js-shopping-list-entry').val()}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
    </li>`
    );
  });
  /////
  $('.shopping-list').on('click', '.shopping-item-toggle', function() {

    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
  /////
  $('.shopping-list').on('click', '.shopping-item-delete', function() {
    
    $(this).closest('li').remove();
  });

});






// Hello are we synched?
