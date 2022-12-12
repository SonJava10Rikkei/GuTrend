let arrayImages = ['/image/tb-pc.jpg', '/image/tp-pc-2.jpg', ]
let count = 0;
let showBanner = function() {
    let image = document.getElementById('banner-img');
    image.src = arrayImages[`${count}`];
    count++;
    if (count == 2) {
        count = 0;
    }
}
setInterval(showBanner, 3000);