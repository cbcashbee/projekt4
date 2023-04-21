/* ANNA JAVASCRIPT ANNA JAVASCRIPT 

const slider = document.querySelector(".slider");
const firstImg = slider.querySelectorAll("img")[0];
const arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // viser existerende og gemte icons
    let scrollWidth = slider.scrollWidth - slider.clientWidth; // få maximale scollable brede
    
    // Left arrow
    if (slider.scrollLeft == 0) {
        arrowIcons[0].style.display = "none";
    } else {
        arrowIcons[0].style.display = "block";
    }

    // Right arrow
    if (slider.scrollLeft == scrollWidth) {
        arrowIcons[1].style.display = "none";
    } else {
        arrowIcons[1].style.display = "block";
    }
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;

        if (icon.id == "left") {
            slider.scrollLeft += -firstImgWidth;
        } else {
            slider.scrollLeft += firstImgWidth;
        }
        
        setTimeout(() => showHideIcons(), 60); // kalder gemte icons efter 60ms
    });
});

const autoSlide = () => {
    // hvis der ikke er et billede 
    if(
        slider.scrollLeft - (slider.scrollWidth - slider.clientWidth) > -1 
        || slider.scrollLeft <= 0
    ) return;

    positionDiff = Math.abs(positionDiff); // laver positionDiff value positivt
    let firstImgWidth = firstImg.clientWidth + 14;
    // man får forskellige value som skal minske eller forstørre fra slideren venstre for at tage det middlerste billede i center.
    let valDifference = firstImgWidth - positionDiff;

    // når brugeren scroller til højre 
    if (slider.scrollLeft > prevScrollLeft) {
        if (positionDiff > firstImgWidth / 3) {
            return slider.scrollLeft += valDifference;
        } else {
            return slider.scrollLeft += -positionDiff
        }
    } else { // hvis brugeren scoller til venstre
        if (positionDiff > firstImgWidth / 3) {
            slider.scrollLeft -= valDifference;
        } else {
            slider.scrollLeft -= -positionDiff;
        }
    }
}

const dragStart = (e) => {
    // opdaterer den globale variable value når mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slider.scrollLeft;
}

const dragging = (e) => {
    // scroller billeder/slider til venstre  "according to mouse pointer"
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    slider.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    slider.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    slider.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

slider.addEventListener("mousedown", dragStart);
slider.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
slider.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
slider.addEventListener("touchend", dragStop);


