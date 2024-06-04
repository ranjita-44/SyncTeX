<<<<<<< HEAD
//JS sectionn

//Toggle password visibility 

function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
=======
// Toggle navigation menu for mobile view
function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if (i.className === "nav-menu") {
>>>>>>> 931c7e18271d18d3d933acf21f0521323c4e3061
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
<<<<<<< HEAD
   }
   window.onload = function () {
=======
}

// Typing animation for welcome text
window.onload = function () {
>>>>>>> 931c7e18271d18d3d933acf21f0521323c4e3061
    var text = document.querySelector('.typing-text');
    var str = text.textContent.trim();
    var strArr = str.split('');
    text.textContent = '';
    strArr.forEach(function (char) {
        var charSpan = document.createElement('span');
        charSpan.textContent = char;
        text.appendChild(charSpan);
    });
};

<<<<<<< HEAD

//To navigate between sign up and sign in button 

    var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");

    function login() {
        x.style.left = "4px";
        y.style.right = "-520px";
        a.className += " white-btn";
        b.className = "btn";
        x.style.opacity = 1;
        y.style.opacity = 0;
    }

    function register() {
        x.style.left = "-510px";
        y.style.right = "5px";
        a.className = "btn";
        b.className += " white-btn";
        x.style.opacity = 0;
        y.style.opacity = 1;
    }





    
// JavaScript for scrolling to sections

document.addEventListener('DOMContentLoaded', function () {
        const featuresButton = document.querySelector('.features-button');

        featuresButton.addEventListener('click', function () {
            scrollToSection('features');
        });

        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({behavior: 'smooth'});
=======
// Toggle between login and register forms
var loginBtn = document.getElementById("loginBtn");
var registerBtn = document.getElementById("registerBtn");
var loginForm = document.getElementById("login");
var registerForm = document.getElementById("register");

function login() {
    loginForm.style.left = "4px";
    registerForm.style.right = "-520px";
    loginBtn.classList.add("white-btn");
    registerBtn.classList.remove("white-btn");
    loginForm.style.opacity = 1;
    registerForm.style.opacity = 0;
}

function register() {
    loginForm.style.left = "-510px";
    registerForm.style.right = "5px";
    loginBtn.classList.remove("white-btn");
    registerBtn.classList.add("white-btn");
    loginForm.style.opacity = 0;
    registerForm.style.opacity = 1;
}

// Smooth scroll to sections
document.addEventListener('DOMContentLoaded', function () {
    const featuresButton = document.querySelector('.features-button');

    featuresButton.addEventListener('click', function () {
        scrollToSection('features');
    });

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
>>>>>>> 931c7e18271d18d3d933acf21f0521323c4e3061
        }
    }
});

<<<<<<< HEAD


    function togglePasswordVisibility(inputId) {
        var passwordInput = document.getElementById(inputId);
        var icon = passwordInput.nextElementSibling.querySelector('i');
        
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            icon.classList.remove('bx-hide');
            icon.classList.add('bx-show');
        } else {
            passwordInput.type = "password";
            icon.classList.remove('bx-show');
            icon.classList.add('bx-hide');
        }
    }

 




 












    
=======
// Toggle password visibility
function togglePasswordVisibility(inputId) {
    var passwordInput = document.getElementById(inputId);
    var icon = passwordInput.nextElementSibling.querySelector('i');

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove('bx-hide');
        icon.classList.add('bx-show');
    } else {
        passwordInput.type = "password";
        icon.classList.remove('bx-show');
        icon.classList.add('bx-hide');
    }
}
>>>>>>> 931c7e18271d18d3d933acf21f0521323c4e3061
