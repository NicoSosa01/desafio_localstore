document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("inputText");
    const button = document.getElementById("buttonText");
  
    button.addEventListener("click", function () {
      const data = input.value;
      localStorage.setItem("sesionData", data);
      input.value = "";
    });
  });