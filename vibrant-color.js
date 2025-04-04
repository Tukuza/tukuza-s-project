// vibrant-color.js
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.vibrant-image');

    images.forEach(image => {
        const vibrant = new Vibrant(image);
        const swatches = vibrant.swatches();
        const color = swatches.Vibrant.getHex();

        image.nextElementSibling.style.backgroundColor = color;
    });
});