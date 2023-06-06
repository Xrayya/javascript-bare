$(function() {
  $('.btn-post').on('click', () => {
    $('.page-content').append(
      $('<div></div>')
        .addClass('card')
        .addClass('mb-3')
        .append(
          $('<div></div>')
            .addClass('card-body')
            .append(
              $('<div></div>').addClass('card-title').append($('.title').val()),
              $('<div></div>').addClass('card-text').append($('.content').val())
            )
        )
    );
  });
});
