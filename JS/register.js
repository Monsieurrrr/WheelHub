document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const date = document.getElementById("date");
    const password = document.getElementById("password");
    const confirm = document.getElementById("confirmpass");
    const checkbox = document.getElementById("checkbox");
    const labelu = document.getElementById("labelu");
    const labele = document.getElementById("labele");
    const labeld = document.getElementById("labeld");
    const labelp = document.getElementById("labelp");
    const labelc = document.getElementById("labelc");
    const erroruser = document.getElementById("erroruser");
    const erroremail = document.getElementById("erroremail");
    const errordate = document.getElementById("errordate");
    const errorpass = document.getElementById("errorpass");
    const errorcon = document.getElementById("errorcon");
    const errorbox = document.getElementById("errorbox");

    function userValid(){
        //username validation
        if (username.value.length < 5) {
            valid = false;
            erroruser.innerHTML = "   (Username must be more than or equals to 5 characters.)";
            labelu.style.color = "red";
            labelu.style.fontWeight = "500";
            labelu.style.top = "-5px";
        } else {
            erroruser.innerHTML = "";
            labelu.style.color = "green";
            labelu.style.fontWeight = "500";
            labelu.style.top = "-5px";
        }

        if (username.value == "" || username.value == null){
            erroruser.innerHTML = "   (Username field is empty!)"
            labelu.style.top = "20px"
        }
    }
    function emailValid(){
        //email validation
        if (email.value.match("@") && (email.value.endsWith(".com") || email.value.endsWith(".co") ||email.value.endsWith(".co.id") || email.value.endsWith(".edu") ||
        email.value.endsWith(".ac.id"))) {
            erroremail.innerHTML = "";
            labele.style.color = "green";
            labele.style.fontWeight = "500";
            labele.style.top = "-5px";
            email.value = email.value.toLowerCase();
        } else {
            valid = false;
            erroremail.innerHTML = "   (Email is not valid!)";
            labele.style.color = "red";
            labele.style.fontWeight = "500";
            labele.style.top = "-5px";
        }

        if (email.value == "" || email.value == null){
            erroremail.innerHTML = "   (Email field is empty!)";
            labele.style.top = "20px"
        }
    }

    function dateValid(){
        //date validation
        const dateInput = new Date(date.value);
        const dateToday = new Date();
        dateToday.setHours(0, 0, 0, 0);

        if (dateInput < dateToday) {
            errordate.innerHTML = "";
            labeld.style.color = "green";
            labeld.style.fontWeight = "500";
            date.style.color = "green"
            date.style.fontWeight = "500"
            date.style.border = "2px solid green";
        } else {
            valid = false;
            errordate.innerHTML = "   (Date must be older than today!)";
            labeld.style.color = "red";
            labeld.style.fontWeight = "500";
            date.style.color = "red";
            date.style.fontWeight = "500"
            date.style.border = "2px solid red";
        }
    }
    function passValid(){
        //password validation
        if (password.value.length < 8) {
            valid = false;
            errorpass.innerHTML = "   (Password must be more than or equals to 8 characters.)";
            labelp.style.color = "red";
            labelp.style.fontWeight = "500";
            labelp.style.top = "-5px"
        } else if (password.value === 'password') {
            valid = false;
            errorpass.innerHTML = "   (Password cannot be 'password')";
            labelp.style.color = "red";
            labelp.style.fontWeight = "500";
            labelp.style.top = "-5px"
        } else {
            errorpass.innerHTML = "";
            labelp.style.color = "green";
            labelp.style.fontWeight = "500";
            labelp.style.top = "-5px"
        }

        if (password.value == "" || password.value == null){
            labelp.style.top = "20px"
        }
    }
    function confirmValid(){
        //confirm validation
        if (password.value === confirm.value) {
            errorcon.innerHTML = "";
            labelc.style.color = "green";
            labelc.style.fontWeight = "500";
            labelc.style.top = "-5px"
        } else {
            valid = false;
            errorcon.innerHTML = "   (Your password doesn't match.)";
            labelc.style.color = "red";
            labelc.style.fontWeight = "500";
            labelc.style.top = "-5px"
        }

        if (confirm.value == "" || confirm.value == null){
            errorcon.innerHTML = "   (Confirm your password.) "
            labelc.style.color = "red";
            labelc.style.fontWeight = "500";
            labelc.style.top = "20px"
        }
    }
    function checkValid(){
        //checkbox validation
        if (checkbox.checked) {
            errorbox.innerHTML = "";
        } else {
            valid = false;
            errorbox.innerHTML = "(You have to agree with our terms and conditions to proceed.)";
        }
    }

    function submitForm(){
        valid = true;
        userValid();
        emailValid();
        dateValid();
        passValid();
        confirmValid();
        checkValid();
        return valid;
    }

    username.addEventListener("input", userValid); 
    email.addEventListener("input", emailValid);
    date.addEventListener("input",dateValid);
    password.addEventListener("input", passValid);
    confirm.addEventListener("input", confirmValid);
    checkbox.addEventListener("click", checkValid);
    
    form.addEventListener("submit", (e) => {
        if (!submitForm()) {
            e.preventDefault();
            window.alert("Form contains errors.");
        } else {
            e.preventDefault();
            window.alert("Form has been submitted successfully.");
            console.log("Username: ",username.value,"|Email: ",email.value,"|Date: ",date.value,"|Password: ",password.value,"|Confirm Password: ",confirm.value);
            window.location = "../index.html";
        }
    });

    const popup = document.getElementById("pop-up");
    terms.addEventListener("click", function(){
        popup.classList.add("show");
    });

    closeBtn.addEventListener("click", function () {
            popup.classList.remove("show");
        }
    );

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