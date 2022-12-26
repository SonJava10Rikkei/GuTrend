let dataCart = JSON.parse(localStorage.getItem('listCart'));
function renderCart() {
    let data = "";
    for (let i = 0; i < dataCart.length; i++) {
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
                                                            <i class="fas fa-minus"></i>
                                                        </button>

                                                        <input id="form1" min="0" name="quantity" value="${dataCart[i].quanlity}"
                                                            type="number" class="form-control form-control-sm" />

                                                        <button class="btn btn-link px-2"
                                                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                            <i class="fas fa-plus"></i>
                                                        </button>
                                                    </div>
                                                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                        <h6 class="mb-0">${dataCart[i].price}</h6>
                                                    </div>
                                                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                                        <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
                                                    </div>
                                                </div>
        `

    }
    document.getElementById("renderDataCart").innerHTML = `
        <div class="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 class="fw-bold mb-0 text-black">Giỏ Hàng</h1>
                                                    <h6 class="mb-0 text-muted">3 sản phẩm</h6>
                                                </div> 
                                                ${data}
                                                <div class="pt-5">
                                                    <h6 class="mb-0"><a href="#!" class="text-body"><i
                                                                class="fas fa-long-arrow-alt-left me-2"></i>Quay lại
                                                            shop</a></h6>
                                                </div>  
    `
}
renderCart();   