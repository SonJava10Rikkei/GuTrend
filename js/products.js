// click ẩn hiện danh mục //
var add_collection_catalog = document.getElementById("add_collection_catalog");
var add_element__collection_catalog = document.getElementById("add_element__collection_catalog");
let count__colection_catalog1 = 1;

add_collection_catalog.onclick = function () {
    count__colection_catalog1++;

    let add_element_product_panel = document.querySelector(".t-productFilter_category_panel");
    add_element_product_panel.style.display = "block";
    add_element__collection_catalog.classList.add("fa-minus");
    add_element__collection_catalog.classList.remove("fa-plus");

    if (count__colection_catalog1 == 3) {
        add_element_product_panel.style.display = "none";
        add_element__collection_catalog.classList.add("fa-plus");
        add_element__collection_catalog.classList.remove("fa-minus");
        count__colection_catalog1 = 1;
    }
}

// click ẩn hiện danh mục //
var add_collection_catalog2 = document.getElementById("add_collection_catalog2");
var add_element__collection_catalog2 = document.getElementById("add_element__collection_catalog2");
let count__colection_catalog2 = 1;

add_collection_catalog2.onclick = function () {
    count__colection_catalog2++;

    let add_element_product_panel = document.querySelector(".t-productFilter_category_panel2");
    add_element_product_panel.style.display = "none";
    add_element__collection_catalog2.classList.add("fa-plus");
    add_element__collection_catalog2.classList.remove("fa-minus");

    if (count__colection_catalog2 == 3) {
        add_element_product_panel.style.display = "block";
        add_element__collection_catalog2.classList.add("fa-minus");
        add_element__collection_catalog2.classList.remove("fa-plus");
        count__colection_catalog2 = 1;
    }
}
/* 
 <div class="product_GT">
                                    <div class="m-productCard">
                                        <div class="m-productCard_thumbnail">
                                            <div class="m-productCard_tag">
                                                <div class="m-productCard_tag_item"
                                                    style="background-color: rgb(242, 38, 38);">
                                                    <p> Hàng mới</p>
                                                </div>
                                            </div>
                                            <a aria-label="label" class="" href="/image/0-TRANG-QC12048.png">
                                                <div class="m-productCard_thumbnail-item">
                                                    <div class="a-image">
                                                        <img alt="Quần ống đứng lai xéo" loading="lazy"
                                                            src="/image/0-TRANG-QC12048.png">
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="m-productCard_iconFavorite">
                                                <div class="a-icon_GT">
                                                    <img src="/image/icon-heart-while.png" alt="heart_white"
                                                        loading="lazy">
                                                </div>
                                            </div>
                                            <div class="m-productCard_addCart">
                                                <div class="a-icon_GT">
                                                    <img src="/image/add-to-cart-green.png" alt="add_cart"
                                                        loading="lazy">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="m-productCard_content">
                                            <div class="m-productCard_listColor">
                                                <div class="">
                                                    <div class="a-colorpicker a-colorpicker-md">
                                                        <label class="a-colorpicker_label">
                                                            <input class="a-colorpicker_input" type="radio" hidden=""
                                                                checked="">
                                                            <div class="a-colorpicker_body">
                                                                <img src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/QC12048/MAU-TRANG-QC12048.png"
                                                                    alt="..." loading="lazy">
                                                            </div>

                                                        </label>
                                                        <label class="a-colorpicker_label">
                                                            <input class="a-colorpicker_input" type="radio" hidden=""
                                                                checked="">
                                                            <div class="a-colorpicker_body">
                                                                <img src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/QC12048/MAU-TRANG-QC12048.png"
                                                                    alt="..." loading="lazy">
                                                            </div>

                                                        </label>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="m-productCard_name">
                                                <a aria-label="label" class="" href="/image/0-TRANG-QC12048.png">
                                                    <p id="product_name">
                                                        Quần ống đứng lai xéo</p>
                                                </a>
                                            </div>
                                            <div class="m-product_code">
                                                <p id="product_code" style="color: rgba(155, 155, 155, 0.897);">
                                                    QC12048</p>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-end">
                                                <p class="product_price" style="font-size: 21px; color: red;">480.000 đ
                                                </p>
                                                <p
                                                    style="color: rgba(155, 155, 155, 0.849); text-decoration: line-through;">
                                                    590.000 đ</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
*/




let letDataRender = [

    {
        image: "../image/products/0-BE-AC12022.png",
        name: "Áo trắng họa tiết",
        price: 350000,
        quanlity: 1,
        id: 1
    },
    {
        image: "../image/products/0-DEN-DC12077.png",
        name: "Đầm phối ren bản eo",
        price: 450000,
        quanlity: 1,
        id: 2
    },
    {
        image: "../image/products/0-DEN-DC12085.png",
        name: "Đầm đen body",
        price: 500000,
        quanlity: 1,
        id: 3
    },
    {
        image: "../image/products/0-DO-QC12080.png",
        name: "Đầm xuông",
        price: 550000,
        quanlity: 1,
        id: 4
    },
    {
        image: "../image/products/0-HONG-AC12025.png",
        name: "Áo sơ mi hồng",
        price: 250000,
        quanlity: 1,
        id: 5
    },
    {
        image: "../image/products/0-HONG-LV1209.png",
        name: "Chân váy nắp túi kiểu",
        price: 250000,
        quanlity: 1,
        id: 6
    },
    {
        image: "../image/products/0-DO-LD1208.png",
        name: "Đầm xòe phối cổ",
        price: 300000,
        quanlity: 1,
        id: 7
    },
    {
        image: "../image/products/0-TRANG-LA1204.png",
        name: "Áo cổ V bâu nhọn",
        price: 230000,
        quanlity: 1,
        id: 8
    },

]


/// in sản phẩm
function renderListProducts() {
    let data = "";
    for (let i = 0; i < letDataRender.length; i++) {
        data += `
                <div class="product_GT">
                                    <div class="m-productCard">
                                        <div class="m-productCard_thumbnail">
                                            <div class="m-productCard_tag">
                                                <div class="m-productCard_tag_item"
                                                    style="background-color: rgb(242, 38, 38);">
                                                    <p> Hàng mới</p>
                                                </div>
                                            </div>
                                            <a aria-label="label" class="" href="/image/0-TRANG-QC12048.png">
                                                <div class="m-productCard_thumbnail-item">
                                                    <div class="a-image">
                                                        <img alt="Quần ống đứng lai xéo" loading="lazy"
                                                            src="${letDataRender[i].image}">
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="m-productCard_iconFavorite">
                                                <div id="icon_heart_w" class="a-icon_GT">
                                                    <img src="/image/icon-heart-while.png" alt="heart_white"
                                                        loading="lazy">
                                                </div>
                                            </div>
                                            <div class="m-productCard_addCart">
                                                <div class="a-icon_GT">
                                                    <img src="/image/add-to-cart-green.png" onclick="addToCart(${i})" alt="add_cart"
                                                        loading="lazy">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="m-productCard_content">
                                            <div class="m-productCard_listColor">
                                                <div class="">
                                                    <div class="a-colorpicker a-colorpicker-md">
                                                        <label class="a-colorpicker_label">
                                                            <input class="a-colorpicker_input" type="radio" hidden=""
                                                                checked="">
                                                            <div class="a-colorpicker_body">
                                                                <img src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/QC12048/MAU-TRANG-QC12048.png"
                                                                    alt="..." loading="lazy">
                                                            </div>

                                                        </label>
                                                        <label class="a-colorpicker_label">
                                                            <input class="a-colorpicker_input" type="radio" hidden=""
                                                                checked="">
                                                            <div class="a-colorpicker_body">
                                                                <img src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/QC12048/MAU-TRANG-QC12048.png"
                                                                    alt="..." loading="lazy">
                                                            </div>

                                                        </label>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="m-productCard_name">
                                                <a aria-label="label" class="" href="/image/0-TRANG-QC12048.png">
                                                    <p id="product_name">
                                                      ${letDataRender[i].name}</p>
                                                </a>
                                            </div>
                                            <div class="m-product_code">
                                                <p id="product_code" style="color: rgba(155, 155, 155, 0.897);">
                                                    QC12048</p>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-end">
                                                <p class="product_price" style="font-size: 21px; color: red;">${letDataRender[i].price.toLocaleString('vi-VN')} đ</p>
                                                <p
                                                    style="color: rgba(155, 155, 155, 0.849); text-decoration: line-through;">
                                                    590.000 đ</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

        `
    }
    document.getElementById("listProducts").innerHTML = data;
}
renderListProducts();
// function add to cart
function addToCart(id) {
    console.log("id", id);

    let status = JSON.parse(localStorage.getItem("status"));
    if (status == null) {
        let check = confirm("bạn phải đăng nhập để mua hàng!");
        if (check) {
            window.location.href = "../page/login.html"
        }
    } else {
        let listCart = JSON.parse(localStorage.getItem("listCart"));

        if (listCart == null) {
            listCart = [];
            listCart.push(letDataRender[id]);
            localStorage.setItem("listCart", JSON.stringify(listCart));


        } else {

            let flag = false;
            for (let i = 0; i < listCart.length; i++) {
                if (listCart[i].id == letDataRender[id].id) {

                    flag = true;
                    break;
                } else {
                    flag = false;
                }

            }
            if (flag == true) {


                listCart[id].quanlity = ++listCart[id].quanlity;
                localStorage.setItem("listCart", JSON.stringify(listCart));

                alert("sản phẩm đã có trong giỏ hàng!")
            } else {

                listCart.push(letDataRender[id]);
                localStorage.setItem("listCart", JSON.stringify(listCart));
            }

        }
    }
    renderQuatity();
}
function renderQuatity() {
    let listCart = JSON.parse(localStorage.getItem("listCart"));
    let sum = 0;
    if (listCart == null) {
        document.getElementById("totalQuantity").innerHTML = 0;
        document.getElementById("cartHearder").innerHTML = 0;

        return;
    } else {
        for (let i = 0; i < listCart.length; i++) {

            sum += listCart[i].quanlity;
        }
        document.getElementById("totalQuantity").innerHTML = sum;
        document.getElementById("cartHearder").innerHTML = sum;

    }
}

renderQuatity();    
