var togglePassword = document.getElementById("toggle-password");
var togglePasswordConfirmation = document.getElementById("toggle-password-confirmation");
var formContent = document.getElementsByClassName('form-content')[0]; 
var getFormContentHeight = formContent.clientHeight;

var formImage = document.getElementsByClassName('form-image')[0];
if (formImage) {
	var setFormImageHeight = formImage.style.height = getFormContentHeight + 'px';
}
if (togglePassword) {
	togglePassword.addEventListener('click', function() {
	  var x = document.getElementById("password");
	  if (x.type === "password") {
	    x.type = "text";
	  } else {
	    x.type = "password";
	  }
	});
}
if (togglePasswordConfirmation) {
	togglePasswordConfirmation.addEventListener('click', function() {
	  var x = document.getElementById("password_confirmation");
	  if (x.type === "password") {
	    x.type = "text";
	  } else {
	    x.type = "password";
	  }
	});
}
