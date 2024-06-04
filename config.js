const { signInWithEmailAndPassword } = require("firebase/auth");
const { default: firebase } = require("firebase/compat/app");

const firebaseConfig = {
    apiKey: "AIzaSyCkRs-4YJk27U8ugfIw99k3_dv0OIWvQ-4",
    authDomain: "synctex-53952.firebaseapp.com",
    databaseURL: "https://synctex-53952-default-rtdb.firebaseio.com",
    projectId: "synctex-53952",
    storageBucket: "synctex-53952.appspot.com",
    messagingSenderId: "282257968594",
    appId: "1:282257968594:web:de32fc03faabb353cb0c0b"
  };

  //initialize firebase 
  firebase.initializeApp(firebaseConfig);


// Reference for sign-up form
var authFormRef = firebase.database().ref('auth-form');

document.getElementById('auth-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var firstName = getElementVal("first-name");
    var lastName = getElementVal("last-name");
    var registerEmail = getElementVal("register-email");
    var registerPassword = getElementVal("register-password");

    var errorMessage = validateForm(firstName, lastName, registerEmail, registerPassword);
    if (errorMessage) {
        displayError(errorMessage);
    } else {
        checkEmailAndRegister(firstName, lastName, registerEmail, registerPassword);
    }
}

const saveData = (firstName, lastName, registerEmail, registerPassword) => {
    var newAuthForm = authFormRef.push();

    newAuthForm.set({
        firstName: firstName,
        lastName: lastName,
        registerEmail: registerEmail,
        registerPassword: registerPassword,
    }, (error) => {
        if (error) {
            console.error("Data could not be saved." + error);
            displayError("Data could not be saved.");
        } else {
            console.log("Data saved successfully.");
        }
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

const validateForm = (firstName, lastName, registerEmail, registerPassword) => {
    if (!firstName || !lastName || !registerEmail || !registerPassword) {
        return "All fields are required.";
    }

    if (!validateEmail(registerEmail)) {
        return "Invalid email format.";
    }

    if (!validatePassword(registerPassword)) {
        return "Password must be at least 8 characters long and include a mix of upper and lower case letters, numbers, and special characters.";
    }

    return null;
};

const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
};

const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
};

const displayError = (message) => {
    const errorMessageElement = document.querySelector('.error-message');
    errorMessageElement.innerText = message;
    errorMessageElement.style.display = 'block';

    setTimeout(() => {
        errorMessageElement.style.display = 'none';
    }, 5000);
};

const checkEmailAndRegister = (firstName, lastName, registerEmail, registerPassword) => {
    firebase.auth().createUserWithEmailAndPassword(registerEmail, registerPassword)
        .then((userCredential) => {
            // User registered successfully
            saveData(firstName, lastName, registerEmail, registerPassword);

            // Enable alert
            document.querySelector('.register-message').style.display = "block";

            // Remove alert message after 3 seconds
            setTimeout(() => {
                document.querySelector('.register-message').style.display = "none";
            }, 3000);

            // Reset the form
            document.getElementById("auth-form").reset();
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode === 'auth/email-already-in-use') {
                displayError('The email address is already in use by another account.');
            } else if (errorCode === 'auth/invalid-email') {
                displayError('The email address is not valid.');
            } else if (errorCode === 'auth/operation-not-allowed') {
                displayError('Email/password accounts are not enabled. Please enable them in the Firebase Console.');
            } else if (errorCode === 'auth/weak-password') {
                displayError('The password is too weak.');
            } else {
                displayError(errorMessage);
            }
        });
};

// Reference to the sign-in form
var signInForm = document.getElementById('login');

// Adding event listener for the form submission
signInForm.addEventListener('submit', submitSignIN);

function submitSignIN(e) {
    e.preventDefault();

    var signInEmail = getElementVal("login-email");
    var signInPassword = getElementVal("login-password");

    var errorMessageLogin = validateSignInForm(signInEmail, signInPassword);
    if (errorMessageLogin) {
        displayErrorLogin(errorMessageLogin);
    } else {
        signInWithEmailAndPassword(signInEmail, signInPassword);
    }
}

// Function to sign in the user with email and password using Firebase Authentication
function signInWithEmailAndPassword(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Sign-in successful
            var user = userCredential.user;
            console.log("User signed in:", user.uid);
            // Update the last sign-in time in Firebase database
            updateSignInData(user.uid);
            // Display success message
            displaySuccessMessage("You have been logged in.");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessageLogin;
            if (errorCode === 'auth/user-not-found') {
                errorMessageLogin = "Account doesn't exist.";
            } else if (errorCode === 'auth/wrong-password') {
                errorMessageLogin = "Incorrect email or password.";
            } else if (errorCode === 'auth/invalid-email') {
                errorMessageLogin = "Invalid email format.";
            } else {
                errorMessageLogin = error.message;
            }
            // Display error message
            displayErrorLogin(errorMessageLogin);
        });
}

// Function to validate the sign-in form inputs
function validateSignInForm(email, password) {
    if (!email || !password) {
        return "Both email and password are required.";
    }
    if (!validateEmail(email)) {
        return "Invalid email format.";
    }
    return null;
}

// Function to display sign-in error messages
function displayErrorLogin(messageLogin) {
    const errorMessageLoginElement = document.querySelector('.error-message-login');
    errorMessageLoginElement.innerText = messageLogin;
    errorMessageLoginElement.style.display = 'block';

    // Remove error message after 3 seconds
    setTimeout(() => {
        errorMessageLoginElement.style.display = 'none';
    }, 3000);
}

// Function to display success message
function displaySuccessMessage(message) {
    const successMessageElement = document.querySelector('.success-message');
    successMessageElement.innerText = message;
    successMessageElement.style.display = 'block';

    // Remove success message after 3 seconds
    setTimeout(() => {
        successMessageElement.style.display = 'none';
    }, 3000);
}

// Function to update the last sign-in data in Firebase database
function updateSignInData(uid) {
    var userRef = firebase.database().ref('users/' + uid);
    userRef.update({
        lastSignInTime: firebase.database.ServerValue.TIMESTAMP
    });
}

// Continue with Google
document.getElementById('google-signin').addEventListener('click', googleSignIn);

function googleSignIn(e) {
    e.preventDefault();

    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            // The signed-in user info.
            var user = result.user;
            console.log("User signed in: ", user);

            // Show registration success message
            document.querySelector('.register-message').innerText = "Google sign-in successful!";
            document.querySelector('.register-message').style.display = "block";

            // Remove alert message after 3 seconds
            setTimeout(() => {
                document.querySelector('.register-message').style.display = "none";
            }, 3000);
        })
        .catch((error) => {
            console.error("Error during Google sign-in: ", error);
            displayError("Error during Google sign-in: " + error.message);
        });
}




