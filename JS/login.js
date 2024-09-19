document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("form");
    const email = document.getElementById("email");
    const pass = document.getElementById("password");
    const labele = document.getElementById("labele");
    const labelp = document.getElementById("labelp");
    
    function emailValid() {
        if (email.value == "" || email.value == null) {
            labele.innerHTML = "Email field is empty.";
            labele.style.color = "red";
            labele.style.fontWeight = "500";
            labele.style.top = "-5px";
        } else if (!email.value.match("@") || !(email.value.endsWith(".com") || email.value.endsWith(".co") || email.value.endsWith(".co.id") || 
        email.value.endsWith(".edu") || email.value.endsWith(".ac.id"))) {
            labele.innerHTML = "Email is not valid!";
            labele.style.color = "red";
            labele.style.fontWeight = "500";
            labele.style.top = "-5px";
            return false;
        } else {
            labele.innerHTML = "Email"
            labele.style.color = "green";
            labele.style.fontWeight = "500";
            labele.style.top = "-5px";
            return true;
        }
    };

    function passValid() {
        if (pass.value == "" || pass.value == null) {
            labelp.innerHTML = "Password must be filled!";
            labelp.style.color = "red";
            labelp.style.fontWeight = "500";
            labelp.style.top = "-5px";
            return false;
        } else if (pass.value.length < 8) {
            labelp.innerHTML = "Password min 8 characters!";
            labelp.style.color = "red";
            labelp.style.fontWeight = "500";
            labelp.style.top = "-5px";
            return false;
        } else {
            labelp.innerHTML = "Password";
            labelp.style.color = "green";
            labelp.style.fontWeight = "500";
            labelp.style.top = "-5px";
            return true;
        }
    }

    function submitForm(){
        let submit = true;

        if(emailValid() == false){
            submit = false;
        }else if(passValid() == false){
            submit = false;
        }else{
            return submit;
        }
    }

    email.addEventListener("input", emailValid);
    pass.addEventListener("input", passValid);

    form.addEventListener("submit", (e)=> {
        if (!submitForm()) {
            e.preventDefault();
            window.alert("Form contains errors.");
        } else {
            e.preventDefault();
            window.alert("Account successfully created!");
            window.location = '../index.html';
        }
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
