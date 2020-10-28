"use strict";

// Part 1

$('#get-fortune-button').on('click', () => {
  $.get('/fortune', (response) => {
    $('#fortune-text').text(response)
  });
});


// Part 2

$('#weather-form').on('submit', (evt) => {
  evt.preventDefault();

  const formData = {
    // TODO: select the zipcode input
    zipcode: $('#zipcode-field').val()
  };

  $.get('/weather', formData, (response) => {
    $('#weather-info').text(response.forecast); //only getting forecase info from json string
  
  }); //closing ajax call
}); 


// Part 3

$("#order-form").on('submit', (evt) => {
  evt.preventDefault();

  const formData = {
    melon_type: $('#melon-type-field').val(),
    qty: $('#qty-field').val()
  };

  $.post('/order-melons', formData, (response) => {
    const orderStatus = $('#order-status');

    if (response.code === 'ERROR') {
      orderStatus.addClass('order-error');
    } else {
      orderStatus.removeClass('order-error');  // Reset to original color
    }

    orderStatus.html(`<p>${response.msg}</p>`);
  });
});

