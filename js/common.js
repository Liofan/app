$(function() {

	// Custom JS

	$('.countdown').downCount({
		date: deadline,
	},
	function(){
		 /* действие после завершения таймера */
		 alert("Время истекло!");
	});

});
