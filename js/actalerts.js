(function ( $ ) {
 
    $.fn.actalert = function( options ) {
 		
 		var defaults = {
 			type: 'fixed', //fixed , static
 			placement: 'center bottom'
 		}

        // This is the easiest way to have default options.
        var settings = $.extend( {}, defaults, options );
 
        // Greenify the collection based on the settings variable.
        return this.each(function() {
	        if (settings.type === 'fixed') {
	        	$(this).addClass('act-fixed')
	        }
	    });


 
    };
 
}( jQuery ));