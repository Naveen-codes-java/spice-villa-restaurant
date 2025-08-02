   function scrollHalfPage() {
    const halfPage = document.body.scrollHeight / 2;
    window.scrollTo({
      top: halfPage,
      behavior: 'smooth'
    });
  }

  // When the button is clicked, trigger the scroll function
  document.getElementById('menu-btn-1').addEventListener('click', function () {
    scrollHalfPage();  // Call the scroll function
  });
         
const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};