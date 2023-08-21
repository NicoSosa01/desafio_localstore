const boton = document.getElementById("buttonText");
const texto = document.getElementById("inputText");

boton.addEventListener("click", function () {
    localStorage.setItem('texto', texto.value);
  })
