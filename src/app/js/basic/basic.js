$(function () {
	"use strict";

	var ractive = new Ractive({
		el: 'main',
		template: '#template',
		data: {
			selected: 'account'
		}
	});
	console.log(Ractive.VERSION);

});


