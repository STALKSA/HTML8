$(document).ready(function() {
    $('form').submit(function(e) {
      e.preventDefault(); 
  
      // Проверка, все ли поля заполнены
      var filled = true;
      $('input[type="text"]').each(function() {
        if ($(this).val() === '') {
          filled = false;
          return false;
        }
      });
  
      if (filled) {
        $('input[type="text"]').prop('disabled', true);
        alert('Данные успешно отправлены');
      } else {
        alert('Не все поля заполнены');
      }
    });
  });