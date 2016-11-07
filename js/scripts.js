$(document).ready(function() {
	
 	$('.gallery').each(function() {
	    $(this).magnificPopup({
	        delegate: 'a',
	        type: 'image',
	        gallery: {
	          enabled:true
	        },
	        mainClass: 'mfp-with-zoom',
	        zoom: {
			    enabled: true,
			    duration: 300,
			    easing: 'ease-in-out',
			    opener: function(openerElement) {
			      return openerElement.is('img') ? openerElement : openerElement.find('img');
			    }
			}
	    });
	});


 	function barras(thisObj){
		var $this = thisObj,
			$value = $this.attr('data-value'),
			$span = $this.find('span.valor'),
			$bar = $this.find('.bar');

		var settings = {
			duration: 2000
		}


	    $this.prop('Counter',0).animate({
	        Counter: $value
	    }, {
	        duration: settings.duration,
	        easing: 'swing',
	        step: function (now) {
	            $span.text(Math.ceil(now)+'%');
	        }
	    });

		$bar.animate({width: $value}, settings.duration);
	}



	$('[data-animate]').css('opacity', 0).addClass('animated').waypoint(function(direction) {
		var $this = $(this.element),
			$animacao = $this.attr('data-animate');
		
		$this.addClass($animacao).removeClass('hidden');

		if ($this.is('[data-value]')) {
			barras($this);
		}

	}, {
		offset: '95%'
	});
	
});