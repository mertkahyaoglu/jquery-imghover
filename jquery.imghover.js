/*!
 * jQuery Image Hover Effect Plugin 
 * https://github.com/mertkahyaoglu/jquery-imghover
 *
 * Copyright 2014, Mert Kahyaoğlu
 * version 0.1
 * MIT license
 */

(function($, window, undefined) {
	"use strict";

	$.fn.imghover = function(options) {

		var options = $.extend({}, $.fn.imghover.defaults, options);

		return this.each(function() {

			var $this = $(this);
			var data = $this.data('imghover').split('|');
			for (var i = 0; i < data.length; i++) 
				data[i] = data[i].replace(/\s/g, '');

			var container = $('<div/>', {
			    style: "position:relative;height:"+options.height+"px;width:"+options.width+"px;"
			});
			var initial = $('<img/>', {
				id: 'imghoverInitial',
			    src: data[0],
			    style: "position:absolute;height:"+options.height+"px;width:"+options.width+"px;"
			});
			var hover = $('<img/>', {
				id: 'imghoverHover',
			    src: data[1],
			    width: options.width,
			    height: options.height,
			    style: "display:none;position:absolute;height:"+options.height+"px;width:"+options.width+"px;"
			});

			container.append(initial);
			container.append(hover);
			$this.append(container);

	        $this.hover(
	        	function() {
	        		$this.find('#imghoverHover').fadeIn(options.delay);
	        		$this.find('#imghoverInitial').fadeOut(options.delay);
	        	},
	        	function() {
	        		$this.find('#imghoverHover').stop(true, true).fadeOut(options.delay);
	        		$this.find('#imghoverInitial').stop(true, true).fadeIn(options.delay);
	        	}
	        );

		});

		return $this;
	};

	$.fn.imghover.defaults = {
		width: 64,
		height: 64,
		delay: 500
	};

})(jQuery);