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
        name: "Quần ống đứng lai xéo1",
        price: "350.000 đ",
        quanlity: 1,
        id: 1

    },
    {
        image: "../image/products/0-DEN-DC12077.png",
        name: "Quần ống đứng lai xéo2",
        price: "350.000 đ",
        quanlity: 1,
        id: 2



    },
    {
        image: "../image/products/0-DEN-DC12085.png",
        name: "Quần ống đứng lai xéo3",
        price: "350.000 đ",
        quanlity: 1,
        id: 3



    },
    {
        image: "../image/products/0-DO-QC12080.png",
        name: "Quần ống đứng lai xéo4",
        price: "350.000 đ",
        quanlity: 1,
        id: 4



    },
    {
        image: "../image/products/0-HONG-AC12025.png",
        name: "Quần ống đứng lai xéo5",
        price: "350.000 đ",
        quanlity: 1,
        id: 5



    },

]


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
                                                <div class="a-icon_GT">
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
                                                <p class="product_price" style="font-size: 21px; color: red;">${letDataRender[i].price}
                                                </p>
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
            console.log("sản phẩm đã có trong giỏ hàng!");
        } else {
            listCart.push(letDataRender[id]);
            localStorage.setItem("listCart", JSON.stringify(listCart));

        }

    }
}
