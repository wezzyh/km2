// Mostra o print se a imagem existir; senão mostra o espaço reservado
document.querySelectorAll(".print").forEach(function (print) {
  var img = print.querySelector(".print-img");
  var vazio = print.querySelector(".print-vazio");

  function semImagem() {
    img.style.display = "none";
    vazio.style.display = "block";
  }

  if (!img.getAttribute("src")) {
    semImagem();
  } else {
    vazio.style.display = "none";
    img.addEventListener("error", semImagem);
  }
});

// Anima os blocos quando aparecem na tela
var observador = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (entrada) {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visivel");
      observador.unobserve(entrada.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(function (el) {
  observador.observe(el);
});
