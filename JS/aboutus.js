const carousel = document.querySelector(".carousel");

firstImg = carousel.querySelectorAll("img")[0];
arrow = document.querySelectorAll(".wrap i");

let isDragStart = false, prevPageX, prefScrollLeft;
let firstImgWidth = firstImg.clientWidth + 10;

// const showHideArrow = () =>{
//     arrow[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
// }

arrow.forEach(icon => {
    icon.addEventListener("click", ()=>{
        // carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;


       if(icon.id == "left"){
        carousel.scrollLeft -= firstImgWidth;
       } else {
        carousel.scrollLeft += firstImgWidth;
       }
    //    showHideArrow();
    });
});

const dragStart = (e)=>{
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prefScrollLeft = carousel.scrollLeft;
}

const dragging = (e)=>{
    if(isDragStart) return;
    e.preventDefault();
    let positionDiff = [e.pageX || e.touches[0].pageX] - prevPageX;
    carousel.scrollLeft = prefScrollLeft - positionDiff;

    carousel.classList.add("dragging");
}

const dragStop = ()=>{
    isDragStart = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);

function mobileNav() {
    const navbar = document.getElementById("navbar");
    const logo = document.getElementById("h2wheel");

    if (navbar.className === "navbar") {
        navbar.className += " active";
        logo.className += " active";
    } else {
        navbar.className = "navbar";
        logo.className = "h2wheel";
    }
}
