let password = document.querySelector("#Ippassword");
let eye = document.querySelector("#eye");

eye.addEventListener("click", function () {
    let typeInput = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", typeInput);

    this.classList.toggle("fa-eye");
})

const ipnElement = document.querySelector("#Ippassword");
var flag = false;

////////////////// Kiểm tra tài khoản đăng nhập /////////////////////
let getMember = JSON.parse(localStorage.getItem("Member"));
function checkAccount() {
    let inputID = document.getElementById("inputID");
    let Ippassword = document.getElementById("Ippassword");
    if (inputID.value != "" && Ippassword.value != "") {
        for (let i = 0; i < getMember.length; i++) {
            if (
                getMember[i].username == inputID.value &&
                getMember[i].password == Ippassword.value && getMember[i].permissions === "actived"
            ) {
                getMember[i].status = true;
                flag = true;
                localStorage.setItem("Flag", JSON.stringify(flag));
                localStorage.setItem("Member", JSON.stringify(getMember));
                window.location = "/index.html";
                document.getElementById("signInform").onsubmit = function (e) {
                    e.preventDefault();
                };
                break;
            } else {
                localStorage.setItem("Flag", JSON.stringify(flag));
                document.getElementById("checkAcc_1").innerHTML =
                    "Sai mật khẩu hoặc tài khoản.";
                document.getElementById("checkAcc_1").style.color = "red";
                document.getElementById("losePassword").style.display = "block";
                document.getElementById("signInform").onsubmit = function (e) {
                    e.preventDefault();
                };
            }
        }
    } else {
        document.getElementById("checkAcc_2").innerHTML =
            "Xin mời điền đầy đủ email và mật khẩu.";
        document.getElementById("checkAcc_2").style.color = "red";

        document.getElementById("signInform").onsubmit = function (e) {
            e.preventDefault();
        };
    }
}
