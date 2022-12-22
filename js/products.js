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



