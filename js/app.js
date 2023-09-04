$('h1').text('Изменененый заголовок');

$('.item:first').text();

$('.item').eq(2).text();

let element = $('.item')[0];
$(element).text();

$('h1').html('Это <span>ыфвфыв</span>');

$('#name').attr('placeholder', 'Имя');
$('#name').removeAttr('placeholder', 'Имя');

$('h1').addClass('active');

$('h1').append('<div>333</div>');