$(document).ready(function(){
	$('.menu li:has(ul)').click(function(e){
		e.preventDefault();

		if ($(this).hasClass('activado')) {
			$(this).removeClass('activado');
			//$(this).children('ul').slideUp();
			$('.menu li ul').slideUp();
		} else {
			$('.menu li ul').slideUp();
			$('.menu li').removeClass('activado');
			$(this).addClass('activado');
			$(this).children('ul').slideDown();
		}
	});

	 $(".contenidos").click(function(event) {
	 	 let n = $(this).attr('id') ;
	 	 let href = $(this).attr('href');
	 	 console.log(href)
        $("#contenedorPaginas").load(href);
        event.preventDefault();
    });
});