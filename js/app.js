$(document).ready(function(){
	$('.ryu').mouseenter(function(){
		$('.ryu').children().hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu').children().hide();
		$('.ryu-still').show();
	})
	.mousedown(function(){
		playHadouken();
		$('.ryu').children().hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate({'left':'1020px'},500,
			function(){
				$('.hadouken').hide();
				$('.hadouken').css('left','520px');
			});

	})
	.mouseup(function(){
		console.log('mouse up');
		$('.ryu').children().hide();
		$('.ryu-ready').show();

	});

	$(document).keydown(function(event) {
        if(event.which==88) {
			$('.ryu').children().hide();
			$('.ryu-cool').show();
        }
    })
    .keyup(function(event) {
        if(event.which==88) {
			$('.ryu').children().hide();
			$('.ryu-ready').show();
        }
    });

});

function playHadouken(){
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

