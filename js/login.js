let password = document.querySelector("#Ippassword");
let eye = document.querySelector("#eye");

eye.addEventListener("click", function () {
    let typeInput = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", typeInput);

    this.classList.toggle("fa-eye");
})


