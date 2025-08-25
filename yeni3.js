// Sayfa yüklendiğinde konsola mesaj yaz
console.log("selam");

document.addEventListener("DOMContentLoaded", function() {
  if (!localStorage.getItem("welcomed")) {
    alert("web siteme hoş geldin");
    localStorage.setItem("welcomed", "true");
  }
});


