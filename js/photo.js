document.addEventListener("DOMContentLoaded", function () {
    const mainPhotoContainer = document.querySelector(".photo.full-width");
    const mainPhoto = mainPhotoContainer.querySelector("img");
    const photoElements = document.querySelectorAll(".photo:not(.full-width)");
    
    photoElements.forEach(photo => {
        photo.addEventListener("click", function () {
            let clickedImg = this.querySelector("img");
            
            // Agregar animación de opacidad y hacer el fondo transparente
            mainPhotoContainer.style.transition = "opacity 0.5s ease, background-color 0.5s ease";
            this.style.transition = "opacity 0.5s ease, background-color 0.5s ease";
            mainPhoto.style.transition = "opacity 0.5s ease";
            clickedImg.style.transition = "opacity 0.5s ease";
            
            mainPhotoContainer.style.opacity = "0";
            this.style.opacity = "0";
            mainPhotoContainer.style.backgroundColor = "transparent";
            this.style.backgroundColor = "transparent";
            
            setTimeout(() => {
                // Intercambiar imágenes
                let tempSrc = mainPhoto.src;
                mainPhoto.src = clickedImg.src;
                clickedImg.src = tempSrc;
                
                mainPhotoContainer.style.opacity = "1";
                this.style.opacity = "1";
                mainPhotoContainer.style.backgroundColor = "transparent";
                this.style.backgroundColor = "transparent";
            }, 500);
        });
    });
});