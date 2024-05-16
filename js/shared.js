const mobileMenuToggle = () => {
  const isNavMenuOpen = document.getElementById("nav_mobile").style.display === 'flex';
  document.getElementById("nav_mobile").style.display = isNavMenuOpen ? 'none' : 'flex';
}

document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("back-to-top");
 
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 600) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });
 
  backToTop.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

const callBackFormToggle = () => {
  const isNavMenuOpen = document.getElementById("call_back_container").style.display === 'flex';
  document.getElementById("call_back_container").style.display = isNavMenuOpen ? 'none' : 'flex';
}

const callBackFormSendContacts = () => {
  document.getElementById("call_back_form").style.display = 'none';
  document.getElementById("call_back_form_success").style.display = 'flex';

  return false;
}
