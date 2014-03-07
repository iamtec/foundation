$(document).foundation();
$(function(){ 

	console.log($('#fixie').height());
	var height = $('#fixie').height();
	$('#fixie .columns').css({'height':height});
	$('#fixie .red').css({'height':height});

	$(window).resize(function() {

		var height = $('#fixie').height();
		$('#fixie .columns').css({'height':height});
		$('#fixie .red').css({'height':height});
	});
	$('#fixie').toggle();

	$('#grid-button').click(function(e){
		$('#fixie').fadeToggle();
		e.preventDefault();
		});




$('*').removeAttr('style' );
});
