$(document).ready(function() {
  $('#new-order-form button').click(function() {
    var name = $('#new-order-form input[name="name"]').val(),
        phone = $('#new-order-form input[name="phone"]').val();
    if (name == '' || phone == '') {
      alert("ЗДРАСТВУЙТЕ!\n\nДЛЯ ОТПРАВКИ ЗАКАЗА,\n\nНЕОБХОДИМО ВВЕСТИ ВАШЕ ИМЯ И ТЕЛЕФОН.");
    } else {
      var data_html = $('#new-order-form').serialize();
      $('#new-order-form input').attr('disabled', true);
      $('#new-order-form button').attr('disabled', true);
      $('#new-order-form button').text('Отправляем...');
      $.ajax({
        type: 'POST',
        url: 'http://notificator.fenixlz.ru/send',
        data: data_html,
        success: function() {
          $('#new-order-form button').text('Отправлено');
        },
        error: function(argument) {
          alert("Ошибка! Не удалось отправить заказ.\nПопробуйте еще раз, либо позвоните нам 8 923 278 0555")
          $('#new-order-form input').attr('disabled', false);
          $('#new-order-form button').attr('disabled', false);
          $('#new-order-form button').text('Попробовать еще раз');
        }
      })
    }
  })

  var date = new Date(),
      month = date.getMonth(),
      day = date.getDate(),
      months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
      promo_text = 'Акция с 1 по ' + day + ' ' + months[month] + '!';
  $('#promo-date').text(promo_text);
})