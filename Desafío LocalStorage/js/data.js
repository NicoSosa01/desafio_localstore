document.addEventListener("DOMContentLoaded", function () {
    const dataElem = document.getElementById("data");
  
    const storedData = localStorage.getItem("savedData");
  
    if (storedData) {
      dataElem.textContent = `Stored Data: ${storedData}`;
    } else {
      dataElem.textContent = "No data stored.";
    }
  });