$('.nav-item').click(function() {
	$('.nav-item').removeClass('active');
	$(this).addClass('active');

	var button_name = $(this).data('button');
	
	$('.content').attr('class', 'column content');
	$('.content').addClass(button_name);

	if (button_name == 'beyonce') {
		$('slay').removeClass('hide');
	}
});

$('.close').click(function() {
  $('.slay').addClass('hide');
  $('.nav-item').removeClass('active');
});


