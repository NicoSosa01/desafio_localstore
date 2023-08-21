const span = document.getElementById("data");
const contenidoLocalStorage = localStorage.getItem('texto');

span.innerHTML += contenidoLocalStorage;
