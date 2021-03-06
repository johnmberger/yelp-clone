'use strict';

$('#rest-update').on('submit', function(e) {
    e.preventDefault();
    const $updatedName = $('#rest-name').val();
    const $updatedCuisine = $('#rest-cuisine').val();
    const $updatedDescription = $('#rest-description').val();
    const $updatedStreet = $('#line_1').val();
    const $updatedCity = $('#city').val();
    const $updatedState = $('#state').val();
    const $updatedZip = $('#zip').val();

    const Restaurant = {
      name: $updatedName,
      rest_cuisine: $updatedCuisine,
      description: $updatedDescription,
      line_1: $updatedStreet,
      city: $updatedCity,
      state: $updatedState,
      zip: $updatedZip
    };

    var id = window.location.pathname.split('/')[2];

    $.ajax({
      type: 'PUT',
      url: `/restaurant/${id}/edit-restaurant`,
      data: Restaurant
    })
    .done((data) => {
      window.location.href = document.referrer;
    })
    .fail((err) => {
      console.log(err);
    });
  });
