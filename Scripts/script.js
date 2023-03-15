//BURGER
// Fundet på W3Schools: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar
function burgerMenu() {
    var x = document.getElementById("navLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }