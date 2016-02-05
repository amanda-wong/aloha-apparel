$(function() {
	var count = 0;
	var countText = $('#cart-count');

	$('.category button').on('click', updateCartCount);

	function updateCartCount() {
		count++;
		countText.html(count).show();
	}
})

