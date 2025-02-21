
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

//! Butonlar

function kayitAlindi() {
  var kayitMesaji = document.getElementById('kayit');
  kayitMesaji.classList.remove("hidden");
  var kayitButton = document.getElementById('kayitButton');
  kayitButton.textContent = 'Kaydınız Alınmıştır!'; // Buton içeriğine "Kaydınız Alınmıştır!" yazısını ekle
}