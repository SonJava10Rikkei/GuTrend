let dataCart_InPayment = JSON.parse(localStorage.getItem('listCart'));
function renderCart_InPayment() {

    let data = '';
    let sumListProducts = 0;
    for (let i = 0; i < dataCart_InPayment.length; i++) {
        sumListProducts += `${dataCart_InPayment[i].quanlity} ` * `${dataCart_InPayment[i].price} `;

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
                                                                    <p class="a-paragraph-text">${dataCart_InPayment[i].price.toLocaleString('vi-VN')} đ</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> 
                                              `

    }
    document.getElementById("renderDataCart_InPayment").innerHTML = data;
    document.getElementById("totalPays").innerHTML = `${sumListProducts.toLocaleString()} Đ`;
}
renderCart_InPayment();
function sendInforToEmail(e) {
    e.preventDefault();
    let namePay = document.getElementById("namePay").value;
    let phonePay = document.getElementById("phonePay").phonePay;
    let emailPay = document.getElementById("emailPay").value;
    let streetPay = document.getElementById("streetPay").value;
    let cityPay = document.getElementById("cityPay").value;
    let districtsPay = document.getElementById("districtsPay").value;
    let communePay = document.getElementById("communePay").value;
    let notePay = document.getElementById("notePay").notePay;


}