// Show button after scrolling 20px
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  const topBtn = document.getElementById("topBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// Scroll to top when button is clicked
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
