document.addEventListener("DOMContentLoaded", function() {
  const welcomed = sessionStorage.getItem("welcomed");
  if (!welcomed) {
    alert("web siteme hoş geldin");
    sessionStorage.setItem("welcomed", "true");
  }
});
