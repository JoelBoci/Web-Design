// User Must Enter Data In The Fields To Continue - Contact Page 
function contactValidation() {
    var x = document.forms["contactForm"]["fname"].value;
    if (x == "") {
        alert("Please Enter Your Full Name");
        return false;
    }
    var y = document.forms["contactForm"]["email"].value; 
    if (y == "") {
        alert("Please Enter Your E-mail Address");
        return false; 
    }
    var y = document.forms["contactForm"]["message"].value; 
    if (y == "") {
        alert("Please Enter Your Message");
        return false; 
    }
}
// End Of Contact Form Validation
// Cookie When User Creates An Account 



