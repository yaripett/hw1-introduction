function validateForm() {

    let isValid = true;
    let msg = "";

    var usernameRegex = /^[a-z0-9]{4,12}$/;

    var emailRegex =
        /^[^\s@]+@[^\s@]+\.(net|com|org|edu)$/;

    var phoneRegex =
        /^\(\d{3}\)-\d{3}-\d{4}$/;

    var passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_!@#$%^&*])[A-Za-z\d_!@#$%^&*]{9,}$/;
    clearErrors();


    var username =
        document.getElementById("username").value;

    if (username.trim() === "") {

    

        msg += "<p>Please Enter <b style='color:red'>Username</b></p>";

        isValid = false;
    }
    else if (!usernameRegex.test(username)) {


        msg += "<p>Please Enter a <b style='color:orange'>valid username</b></p>";

        isValid = false;
    }


    var email =
        document.getElementById("email").value;

    if (email.trim() === "") {


        msg += "<p>Please Enter <b style='color:red'>Email</b></p>";

        isValid = false;
    }
    else if (!emailRegex.test(email)) {


        msg += "<p>Please Enter a <b style='color:orange'>valid email</b></p>";

        isValid = false;
    }


    var phone =
        document.getElementById("phone").value;

    if (phone.trim() === "") {

        msg += "<p>Please Enter <b style='color:red'>Phone Number</b></p>";

        isValid = false;
    }
    else if (!phoneRegex.test(phone)) {

        msg += "<p>Please Enter a <b style='color:orange'>valid phone number</b></p>";

        isValid = false;
    }


    var password =
        document.getElementById("password").value;

    if (password.trim() === "") {

        msg += "<p>Please Enter <b style='color:red'>Password</b></p>";

        isValid = false;
    }
    else if (!passwordRegex.test(password)) {

        msg += "<p>Please Enter a <b style='color:orange'>valid password</b></p>";

        isValid = false;
    }


    var confirmPassword =
        document.getElementById("confirm_password").value;

    if (confirmPassword.trim() === "") {

        msg += "<p>Please Enter <b style='color:red'>Confirm Password</b></p>";

        isValid = false;
    }
    else if (confirmPassword !== password) {

        msg += "<p><b style='color:orange'>Passwords do not match</b></p>";

        alert("passwords do not match");

        isValid = false;
    }


    var gender =
        document.querySelector('input[name="gender"]:checked');

    if (!gender) {

        msg += "<p>Please Select <b style='color:red'>Gender</b></p>";

        isValid = false;
    }


    var age =
        document.getElementById("age").value;

    if (age === "") {

        msg += "<p>Please Select <b style='color:red'>Age Group</b></p>";

        isValid = false;
    }

    document.getElementById("messages").innerHTML = msg;


    if (isValid) {

        alert("Form submitted successfully!");
    }

    return isValid;
}



function clearErrors() {

    document.getElementById("usernameLabel").style.color = "";
    document.getElementById("emailLabel").style.color = "";
    document.getElementById("phoneLabel").style.color = "";
    document.getElementById("passwordLabel").style.color = "";
    document.getElementById("confirmPasswordLabel").style.color = "";
    document.getElementById("genderLabel").style.color = "";
    document.getElementById("ageLabel").style.color = "";

    document.getElementById("messages").innerHTML = "";

    document.getElementById("submitBtn").addEventListener("click", validateForm);
}