$(function() {
  $('.celcius input').on('input', () => {
    $('.reamur input').val(($('.celcius input').val() * 4) / 5);
    $('.fahrenheit input').val(($('.celcius input').val() * 9) / 5 + 32);
  });

  $('.reamur input').on('input', () => {
    $('.celcius input').val(($('.reamur input').val() * 5) / 4);
    $('.fahrenheit input').val(($('.reamur input').val() * 9) / 4 + 32);
  });

  $('.fahrenheit input').on('input', () => {
    $('.celcius input').val((($('.fahrenheit input').val() - 32) * 5) / 9);
    $('.reamur input').val((($('.fahrenheit input').val() - 32) * 4) / 9);
  });
});
