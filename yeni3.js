document.addEventListener("DOMContentLoaded", function() {
  // Daha önce hoş geldin mesajı gösterilmiş mi kontrol et
  if (!sessionStorage.getItem("welcomed")) {
    alert("Web siteme hoş geldin");
    // Gösterildikten sonra sessionStorage'a kaydet
    sessionStorage.setItem("welcomed", "true");
  }
});
