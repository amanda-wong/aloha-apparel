$(function() {
	$('form').on('submit', function(event) {
	   event.preventDefault();
	   if ( $('.sign-up-form').val() == '' ) {
	      alert('Don\'t forget to fill in your email!');
	   } else {
	      alert('Thank you for subscribing to our newsletter!');
	   }
	});

})


