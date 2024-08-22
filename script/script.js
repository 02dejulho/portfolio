// SLIDES - CARROSSEL

var slideIndex = 1;
var slideIndex2 = 0;

showSlidesAutomatic();

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showSlidesAutomatic() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex2++;

  if (slideIndex2 > slides.length) {
    slideIndex2 = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " active";

  setTimeout(showSlidesAutomatic, 5000);
}

// VALIDAR EMAIL NEWSLETTER
function validaEmail() {
  var emailUsuario = document.getElementById("Email");

  if (emailUsuario.value.indexOf("@") == -1) {
    alert("Digite um e-mail válido.");
    document.getElementById("Email");
    return false;
  }

  if (emailUsuario.value.indexOf(".com") == -1) {
    alert("Digite um e-mail válido.");
    document.getElementById("Email");
    // document.getElementById("Email").style.color = "red";
    return false;
  } else {
    document.getElementById("Email");
    // document.getElementById("Email").style.color = "#74c0fa;";
    return false;
  }
}

//VER MAIS PRODUTOS

let mensagem = document.querySelector(".msg-mais-produtos");

// MOSTRAR MENSAGEM
function showMessage() {
  mensagem.style.display = "block";
}
//ESCONDER MENSAGEM
function hideMessage() {
  mensagem.style.display = "none";
}
