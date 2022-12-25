// con mắt hiện mật khẩu
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


const ipnElement = document.querySelector("#Ippassword");
const ipnElement1 = document.querySelector("#checkPassword");

//! Hàm kiểm tra ID theo định dạng email //
function checkID() {
    let inputID = document.getElementById("inputID");
    let pattern =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    inputID.addEventListener("keyup", function () {
        let result = pattern.test(inputID.value);
        if (result == true) {
            document.getElementById("valiadteID").innerHTML = "email hợp lệ";
            document.getElementById("valiadteID").style.color = "green";
        } else {
            document.getElementById("valiadteID").innerHTML =
                "ID chưa đúng định dạng Email.";
            document.getElementById("valiadteID").style.color = "red";

        }
    });
}

//! Hàm kiểm tra mật khẩu //
let keyPass = false;
let keyPassConfirm = false;
function checkPassword() {
    let passwordInput = document.getElementById("Ippassword");
    passwordInput.addEventListener("keyup", function () {
        let array = [];
        let text;
        array.push(passwordInput.value);
        let check = array.toString().split("");
        if (check.length < 8) {
            text = "Vui lòng nhập tối thiểu 8 ký tự";
            document.getElementById("validateIppassword").innerHTML = text;
            document.getElementById("validateIppassword").style.color = "red";

            keyPass = false;
        } else {
            text = "";
            document.getElementById("validateIppassword").innerHTML = "pass đủ yêu cầu";
            document.getElementById("validateIppassword").style.color = "green";
            keyPass = true;
        }
        return keyPass;
    });
}

function confirmedPassword() {
    let passwordInput = document.getElementById("Ippassword");
    let confirmedPassword = document.getElementById("Ippassword2");
    confirmedPassword.addEventListener("keyup", function () {
        let text;
        if (
            passwordInput.value == confirmedPassword.value &&
            passwordInput.value != "" &&
            confirmedPassword.value != ""
        ) {
            text = "Mật khẩu đã trùng khớp";
            keyPassConfirm = true;

            document.getElementById("validateIppassword2").style.color = "green";
        } else if (passwordInput.value == "" || confirmedPassword.value == "") {
            text = "Mật khẩu đang bỏ trống";
            keyPassConfirm = false;
            document.getElementById("validateIppassword2").style.color = "red";
        } else {
            text = "Mật khẩu chưa trùng khớp";
            keyPassConfirm = false;
            document.getElementById("validateIppassword2").style.color = "red";

        }
        document.getElementById("validateIppassword2").innerHTML = text;
        return keyPassConfirm;
    });
}

// Kiểm tra có đăng ký được hay không //
function registerConfirm() {
    if ((keyPass = false || keyPassConfirm == false)) {
        document.getElementById("signUpform").onsubmit = function (e) {
            e.preventDefault();
        };
    }
}

// Hàm thêm thành viên//
let getMember = localStorage.getItem("Member");
class Member {
    constructor(username, password, status, permissions, avatar, id) {
        this.username = username;
        this.password = password;
        this.status = status;
        this.permissions = permissions;
        this.avatar = avatar;
        this.id = id;
    }
}
function newMember() {
    let inputID = document.getElementById("inputID");
    let Ippassword = document.getElementById("Ippassword");
    if (
        inputID.value != "" &&
        Ippassword.value != "" &&
        keyPassConfirm == true
    ) {
        if (getMember == null) {
            let MemberList = [];
            let newMem = new Member(
                inputID.value,
                Ippassword.value,
                false,
                "actived",
                "/image/user.png",
                MemberList.length + 1
            );
            MemberList.push(newMem);
            localStorage.setItem("Member", JSON.stringify(MemberList));
            alert("Đăng ký thành công.");
            window.location = "./login.html";
        } else {
            MemberList = JSON.parse(getMember);
            let keyAcc = true;
            for (i = 0; i < MemberList.length; i++) {
                if (MemberList[i].username == inputID.value) {
                    keyAcc = false;
                    break;
                }
            }
            if (keyAcc) {
                a = new Member(
                    inputID.value,
                    Ippassword.value,
                    false,
                    "actived",
                    "/image/user.png",
                    MemberList.length + 1
                );
                MemberList.push(a);
                console.log(MemberList);
                localStorage.setItem("Member", JSON.stringify(MemberList));
                alert("Đăng ký thành công.");
                window.location = "./login.html";
            } else {
                alert("Tài khoản đã tồn tại !!!");
            }
        }
    }
    return;
}
checkID();
checkPassword();
confirmedPassword();
registerConfirm();
