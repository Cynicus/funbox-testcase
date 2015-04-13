var main = function(){
	// Use additional classes instead one with toggle for "delayed" hover effect
	$('.item-border, .buynow').click(function(e){
		var item = $(this).closest('.item');
		if (!item.hasClass('disabled')){
			if(item.hasClass('selected')){
				item.removeClass('selected hover-ready');
			}
			else{
				item.addClass('selected');
			}
		}
		// For bottom link
		e.preventDefault();
	});

	$('.item').mouseleave(function(){
		if($(this).hasClass('selected') & !$(this).hasClass('hover-ready')){
			$(this).addClass('hover-ready');
		}
	});
};

 $(document).ready(main);