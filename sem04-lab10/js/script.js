$(document).ready(() => {
  $('#search_wrapper').hide();
  $('#search_button').click(() => $('#search_wrapper').show());

  $.getJSON('./data/manufacturers.json', function(manufacturers) {
    manufacturers.forEach(function(manufacturer) {
      return $('#manufacturers').append(
        '<option>' + manufacturer + '</option>'
      );
    });
  });

  $.getJSON('./data/cars.json', cars => {
    $('#manufacturers').change(() => {
      $('#models').empty();
      cars.forEach(car => {
        if (car.manufacturer === $('#manufacturers').val()) {
          $('#models').append(`<option>${car.model}</option>`);
        }
      });
      updateCarPic();
    });

    $('#models').change(updateCarPic);
  });
});

function updateCarPic() {
  var model = $('#models').val() || 'none';
  $('#car-view').attr('src', `img/${model}.jpg`);
}
