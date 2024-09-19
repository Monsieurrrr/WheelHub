document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.navcars').classList.add('active');
    document.querySelector('.cars').style.display = 'flex';
    document.querySelector('.suv').style.display = 'none';
    document.querySelector('.ev').style.display = 'none';

    document.querySelectorAll('.img').forEach(function (img) {
        img.addEventListener('click', function () {
            var modal = document.querySelector('.modal');
            var modalImg = document.querySelector('.modal-content');
            var captionText = document.querySelector('.caption');

            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.getAttribute('data-caption');
        });
    });

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }

    document.querySelectorAll('.navbarcar a').forEach(function (navItem) {
        navItem.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelectorAll('.navbarcar a').forEach(function (nav) {
                nav.classList.remove('active');
            });
            this.classList.add('active');

    document.querySelectorAll('.cars, .suv, .ev').forEach(function (section) {
                section.style.display = 'none';
            });

        if (this.classList.contains('navcars')) {
            document.querySelector('.cars').style.display = 'flex';
        } else if (this.classList.contains('navsuv')) {
            document.querySelector('.suv').style.display = 'flex';
        } else if (this.classList.contains('navev')) {
            document.querySelector('.ev').style.display = 'flex';
        }
     });
});
});

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
