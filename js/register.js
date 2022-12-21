let password = document.querySelector("#Ippassword");
let eye = document.querySelector("#eye");

eye.addEventListener("click", function () {
    let typeInput = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", typeInput);
    this.classList.toggle("fa-eye");
})
let password2 = document.querySelector("#Ippassword2");
let eye2 = document.querySelector("#eye2");

eye2.addEventListener("click", function () {
    let typeInput2 = password2.getAttribute("type") === "password" ? "text" : "password";
    password2.setAttribute("type", typeInput2);

    this.classList.toggle("fa-eye");
})

