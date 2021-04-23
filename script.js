$(function () {
	var includes = $('[data-include]')
	$.each(includes, function () {
	  var file = $(this).data('include')
	  var obj = $(this);
	  $.get(file, function(data) {
			obj.after(data);
	 	}, 'text');
	})
})