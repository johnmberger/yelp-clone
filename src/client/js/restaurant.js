$.fn.stars = function() {
  return $(this).each(function() {
    var val = parseFloat($(this).html());
    val = Math.round(val * 4) / 4;
    var size = Math.max(0, (Math.min(5, val))) * 16;
    var $span = $('<span />').width(size);
    $(this).html($span);
  });
};

(function() {
  $('span.stars').stars();
})();

$(document).on('click', '#delete-restaurant', function() {

  const answer = confirm('Are you sure? This can\'t be undone');

  if (answer) {
    const restaurantID = $(this).attr('data-id');
    // delete restaurant
    $.ajax({
      type: 'DELETE',
      url: `/restaurant/${restaurantID}/delete`
    })
    .done((data) => {
      window.location.href = '/restaurants';
    })
    .fail((err) => {
      console.log(err);
    });
  }
});