var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
      response => response.json()
  ).then((html) => {
    // you can put any JS code here
    // window.location.reload();
  
const alert = document.querySelector(".alert")
const alertNo = document.querySelector(".alert h2")

alert.classList.remove("alert-hide")

setTimeout(() => {
  alert.classList.add("alert-hide")
}, 3000);



setTimeout(() => {
   window.location.reload();
}, 3300);
  
     
      


const email = document.querySelector(".email")
if(email.value === ""){

  alertNo.innerHTML = "Pls fill form"
  setTimeout(() => {
    alertNo.innerHTML = ""
    
  }, 3000);
}




 





  });
});
