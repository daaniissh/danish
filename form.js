const button = document.getElementById("send");
const alert = document.querySelector(".alert");
const alertNo = document.querySelector(".alert h2");
function sendEmail(e) {
  e.preventDefault();
  let tempParams = {
    from_name: document.getElementById("from_name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_lnwletd", "template_596hfsm", tempParams)
    .then((res) => {
      const alert = document.querySelector(".alert");
      const alertNo = document.querySelector(".alert h2");

      alert.classList.remove("alert-hide");

      setTimeout(() => {
        alert.classList.add("alert-hide");
      }, 3000);

      setTimeout(() => {
        window.location.reload();
      }, 3300);

      const email = document.querySelector(".email");
      if (email.value === "") {
        alertNo.innerHTML = "Pls fill form";
        setTimeout(() => {
          alertNo.innerHTML = "";
        }, 3000);
      }
    });
}
button.addEventListener("click", sendEmail);
