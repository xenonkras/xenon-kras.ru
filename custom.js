$('#new-order-form button').click(function() {
  var data_html = $('#new-order-form').serialize();
  $('#new-order-form input').attr('disabled', true);
  $('#new-order-form button').attr('disabled', true);
  $('#new-order-form button').text('Отправляем...');
  $.ajax({
    type: 'POST',
    url: 'http://notificator.fenixlz.ru/send',
    data: data_html,
    success: function(msg) {
      $('#new-order-form button').text('Отправлено');
    },
    error: function(argument) {
      alert("Ошибка! Не удалось отправить заказ.\nПопробуйте еще раз, либо позвоните нам 8 923 278 0555")
      $('#new-order-form input').attr('disabled', false);
      $('#new-order-form button').attr('disabled', false);
      $('#new-order-form button').text('Попробовать еще раз');
    }
  })
})