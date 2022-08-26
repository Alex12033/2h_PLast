var i = 0;
var images = [];
var slideTime = 3000; // 3 seconds

let headerImageBlock = document.querySelector(".header-body");
console.log(headerImageBlock);

images[0] = '../../src/assets/header-slide/1.jpg';
images[1] = '../../src/assets/header-slide/2.jpg';

function changePicture() {
    headerImageBlock.style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;