var scrollBtn = document.querySelector(".scroll-btn");
var rootElement = document.documentElement;

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.8) {
    // Show button
    scrollBtn.classList.add("show");
  } else {
    // Hide button
    scrollBtn.classList.remove("show");
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);