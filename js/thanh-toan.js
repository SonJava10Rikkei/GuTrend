let dataCart_InPayment = JSON.parse(localStorage.getItem('listCart'));
function renderCart_InPayment() {
    console.log("1111", dataCart_InPayment);
    let data = '';
    for (let i = 0; i < dataCart_InPayment.length; i++) {
        data += `

                <div class="u-mt-16">
                                                        <div class="o-productEntry">
                                                            <div class="o-productEntry_image">
                                                                <div class="a-image a-image-2x3 a-image-cover"><img
                                                                        src="${dataCart_InPayment[i].image}"
                                                                        alt="no alt" loading="lazy"></div>
                                                            </div>
                                                            <div class="o-productEntry_content">
                                                                <div class="o-productEntry_info">
                                                                    <div class="o-productEntry_name">
                                                                        <p class="a-paragraph-text">${dataCart_InPayment[i].name}
                                                                        </p>
                                                                        <span>x ${dataCart_InPayment[i].quanlity}</span>
                                                                    </div>

                                                                </div>
                                                                <div class="o-productEntry_priceZone">
                                                                    <p class="a-paragraph-text">${dataCart_InPayment[i].price} đ</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> 
                                              `

    }
    document.getElementById("renderDataCart_InPayment").innerHTML = data;
}

renderCart_InPayment();   
