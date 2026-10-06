const lightboxImg = document.createElement("img");
lightbox.appendChild(lightboxImg);

// Show lightbox when an image is clicked
galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightboxImg.src = image.src;
    });
});

// Close lightbox when clicked outside the image
lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.remove("active");
    }
});
