
// thêm xổ ra danh sách fashion trong menu mobile
var add_menu_fashion_mobile_add = document.getElementById("add_element_fashion_mobile");
let count_add_element_menu = 1;
add_menu_fashion_mobile_add.onclick = function () {
    count_add_element_menu++;
    let fashion_element_mobile = document.querySelector(".fashion_element_mobile");
    fashion_element_mobile.style.display = "block";
    add_menu_fashion_mobile_add.classList.add("fa-minus");
    add_menu_fashion_mobile_add.classList.remove("fa-plus");
    if (count_add_element_menu == 3) {
        fashion_element_mobile.style.display = "none";
        add_menu_fashion_mobile_add.classList.add("fa-plus");
        add_menu_fashion_mobile_add.classList.remove("fa-minus");
        count_add_element_menu = 1;
    }
}
// hover icon user hidden menu user
function callHoverEvent() {
    document.getElementById('user_selector_profile').style.visibility = "visible";
}
function close_menu_user() {
    document.getElementById('user_selector_profile').style.visibility = "hidden";
}

