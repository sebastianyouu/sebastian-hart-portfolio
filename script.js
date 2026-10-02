document.querySelectorAll(".slideshow").forEach((slideshow) => {

    const slides = slideshow.querySelector(".slides");
    const images = slideshow.querySelectorAll("img");
    const counter = slideshow.querySelector(".slide-counter");

    let currentSlide = 0;

    let startX = 0;
    let currentX = 0;


    function updateSlide() {

        slides.style.transform =
            `translateX(-${currentSlide * 100}%)`;

        counter.textContent =
            `${String(currentSlide + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;

    }


    /* TOUCH / MOBILE SWIPE */

    slideshow.addEventListener("touchstart", (event) => {

        startX = event.touches[0].clientX;

    }, { passive: true });


    slideshow.addEventListener("touchend", (event) => {

        currentX = event.changedTouches[0].clientX;

        const difference = startX - currentX;


        if (Math.abs(difference) > 50) {

            if (difference > 0) {

                // Swipe left
                if (currentSlide < images.length - 1) {
                    currentSlide++;
                }

            } else {

                // Swipe right
                if (currentSlide > 0) {
                    currentSlide--;
                }

            }

            updateSlide();

        }

    });


    /* MOUSE DRAG / DESKTOP */

    slideshow.addEventListener("mousedown", (event) => {

        startX = event.clientX;

    });


    slideshow.addEventListener("mouseup", (event) => {

        currentX = event.clientX;

        const difference = startX - currentX;


        if (Math.abs(difference) > 50) {

            if (difference > 0) {

                if (currentSlide < images.length - 1) {
                    currentSlide++;
                }

            } else {

                if (currentSlide > 0) {
                    currentSlide--;
                }

            }

            updateSlide();

        }

    });


    updateSlide();

});