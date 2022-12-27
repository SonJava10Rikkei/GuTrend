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


function checkAccount() {
    let getMember = JSON.parse(localStorage.getItem("Member"));

    if (getMember == null) {
        alert("tài khoản chưa tồn tại!");
        return;
    } else {
        let flag = false;
        let inputID = document.getElementById("inputID");
        let Ippassword = document.getElementById("Ippassword");
        if (inputID.value != "" && Ippassword.value != "") {
            for (let i = 0; i < getMember.length; i++) {
                if (
                    getMember[i].username == inputID.value &&
                    getMember[i].password == Ippassword.value && getMember[i].permissions === "actived"
                ) {

                    flag = true;
                    break;
                } else {
                    flag = false;
                }
            }
            if (flag == true) {
                window.location.href = "../index.html";
                localStorage.setItem("status", true)
            } else {
                alert("Tai khoản chưa tồn tại !")
            }

        } else {
            document.getElementById("checkAcc_2").innerHTML =
                "Xin mời điền đầy đủ email và mật khẩu.";
            document.getElementById("checkAcc_2").style.color = "red";


        }
    }
    
}

