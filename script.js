$(function () {
	var includes = $('[data-include]')
	$.each(includes, function () {
	  var file = $(this).data('include')
	  var obj = $(this);
	  $.get(file, function(data) {
			obj.after(data);
	 	}, 'text');
	})
	var urlParams = new URLSearchParams(window.location.search);
	if (urlParams.has("redirect")) {
		window.location.replace(urlParams.get("redirect"));
	}
	var markdown = $("[data-markdown]")
	$.each(markdown, function () {
		var md = $(this)
		$.ajax({
			url: $(this).data("markdown"),
			success: function (response) {
				md.html(marked(response))
			}
		})
	})
})