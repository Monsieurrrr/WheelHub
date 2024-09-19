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