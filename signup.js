function checkMe() {
    let val = document.getElementById("check").checked;
    
    if(val) {
        document.getElementById("submit").removeAttribute("disabled");
    } else {
        document.getElementById("submit").setAttribute("disabled", "");
    }
}

function validate() {
    let value = document.getElementById("age").value;
    let date = new Date(value);
    let diff = new Date(Date.now() - date.getTime());
    let age = diff.getFullYear() - 1970;
    if(age >= 16) {
        return true;
    } else {
        alert("You must be 16 years or older to access the website");
        return false;
    }
}

function validatePass() {
    let password = document.getElementById("pass1").value;
    let passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    let result = passregex.test(password);
    if(!result) {
        console.log("fail");
    } else {
        console.log("success");
    }
}

function matchPass() {
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;
    if(pass1 != pass2) {
        console.log("Match");
    } else {
        console.log("No match");
    }
}