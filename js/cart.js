
function renderCart() {
    let data = "";
    let dataCart = JSON.parse(localStorage.getItem('listCart'));
    let totalListPayments = 0;
    for (let i = 0; i < dataCart.length; i++) {
        let payments = `${dataCart[i].quanlity} ` * `${dataCart[i].price}`;
        totalListPayments += `${dataCart[i].quanlity} ` * `${dataCart[i].price}`;
        data += `
                 <hr class="my-4">
                                                <div class="row mb-4 d-flex justify-content-between align-items-center">
                                                    <div class="col-md-2 col-lg-2 col-xl-2">
                                                        <img src="${dataCart[i].image}" class="img-fluid rounded-3"
                                                            alt="Cotton T-shirt">
                                                    </div>
                                                    <div class="col-md-3 col-lg-3 col-xl-3">
                                                    <h6 class="text-black mb-0">${dataCart[i].name}</h6>
                                                    <h6 class="text-muted">Váy cam công sở</h6>
                                                    </div>
                                                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                        <button class="btn btn-link px-2"
                                                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                            
                                                            <i onclick="discount(${i})" class="fas fa-minus"></i>
                                                            
                                                    
                                                        </button>
                                                        <input id="form1" min="1" name="quantity" value="${dataCart[i].quanlity}"
                                                            type="number" class="form-control form-control-sm" />
                                                        
                                                        <button class="btn btn-link px-2"
                                                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                          
                                                            <i onclick="increase(${i})" class="fas fa-plus"></i>
                                                            
                                                        </button>
                                                        
                                                    </div>
                                                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                        <h6 class="mb-0"><span>${dataCart[i].price.toLocaleString('vi-VN')}</span> đ</h6>
                                                        <h6 style="margin-top:20px">Đơn giá: <span> ${payments.toLocaleString("vi-VN")}</span> đ</h6>
                                                    </div>
                                                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                                        <a href="#!" class="text-muted"><i onclick="deleteProduct_user(${i})" class="fas fa-times"></i></a>
                                                    </div>
                                                </div>
        `
    }
    document.getElementById("renderDataCart").innerHTML = `
        <div class="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 class="fw-bold mb-0 text-black">Giỏ Hàng</h1>
                                                    <h6 class="mb-0 text-muted">${dataCart.length}  MẶT HÀNG!</h6>
                                                </div> 
                                                ${data}
                                                <div class="pt-5">
                                                    <h6 class="mb-0"><a href="../page/product.html" class="text-body"><i
                                                                class="fas fa-long-arrow-alt-left me-2"></i>Quay lại
                                                            shop</a></h6>
                                                </div>  
    `
    if (dataCart == null) {
        document.getElementById("totalListCarts").innerHTML = 0;
        document.getElementById("totalPayments").innerHTML = 0;
        document.getElementById("firsttotalPayments").innerHTML = 0;


    } else {
        document.getElementById("totalListCarts").innerHTML = `${dataCart.length} Mặt hàng!`;
        document.getElementById("totalPayments").innerHTML = `${totalListPayments.toLocaleString()} VNĐ`;
        document.getElementById("firsttotalPayments").innerHTML = `${totalListPayments.toLocaleString()} Đ`;




    }
}
renderCart();

function deleteProduct_user(id) {
    console.log("ID", id);
    let listCart = JSON.parse(localStorage.getItem("listCart"));
    listCart.splice(id, 1);
    localStorage.setItem("listCart", JSON.stringify(listCart));
    renderCart();
}
// function tăng quantity product
function increase(id) {
    let listCart = JSON.parse(localStorage.getItem("listCart"));
    listCart[id].quanlity = ++listCart[id].quanlity;
    localStorage.setItem("listCart", JSON.stringify(listCart));
    renderCart();
    console.log("id", id);
}
function discount(id) {
    let listCart = JSON.parse(localStorage.getItem("listCart"));
    if (listCart[id].quanlity == 1) {
        return;
    }
    listCart[id].quanlity = --listCart[id].quanlity;

    localStorage.setItem("listCart", JSON.stringify(listCart));
    renderCart();
    console.log("id", id);
}
