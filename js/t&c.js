function disableSubmit() {
  document.getElementById("submit").disabled = true;
 }

function activateButton(checkbox) {
	// Enable the submit button if the checkbox is checked
	document.getElementById("submit").disabled = !checkbox.checked;
}

function validateForm() {
	// Check if the checkbox is checked
    if (!document.getElementById('terms').checked) {
    // If not checked, show an alert and prevent form submission
        alert("Please agree to the Terms & Conditions.");
        return false;
    }
    return true; // Allow form submission if the checkbox is checked
}

window.addEventListener('scroll', function() {
    const navbar = document.getElementById("myTopnav");
    const distance = navbar.offsetTop;
  
    if (window.pageYOffset > distance) {
      navbar.classList.add("fixed");
      document.body.classList.add("fixed-nav");
    } else {
      navbar.classList.remove("fixed");
      document.body.classList.remove("fixed-nav");
    }
});
