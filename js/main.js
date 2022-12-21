
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

// banner//
// let arrayImages = [

//     '/image/banner-tp-pc-2.jpg',
//     '/image/banner-tet.jpg',
//     '/image/banner-best-sell-50.jpg',
//     '/image/banner-offtion-buy-4.jpg',
// ]
// let count = 0;
// let showBanner = function () {
//     let image = document.getElementById('banner-img');
//     image.src = arrayImages[`${count}`];
//     count++;
//     if (count == 2) {
//         count = 0;
//     }
// }
// setInterval(showBanner, 3500);
//  Banner//


//footer//

