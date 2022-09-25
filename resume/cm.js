let a = document.getElementById("fn");
let d = document.getElementById('age');
let e = document.getElementById('email');
let f = document.getElementById('pn');
let g = document.getElementById('10r');
let h = document.getElementById('12r');
// let but = document.getElementById('submit').addEventListener('click',validate)

function validate() 
{
    let check = false;

    //Validation for the first name
    if (a.value == "" || a.value == null) {
        document.getElementById('text').innerHTML = "Please fill this field";
        document.getElementById('fn').style.border = "2px solid red";
        check = false;
    }
    else if ((a.value>=65 && a.value<=90) || (a.value>=97 && a.value<=122)) {
        document.getElementById("text").innerHTML = "";
        document.getElementById('fn').style.border = "2px solid green";
        check = true;
    }
    else {
        document.getElementById("text").innerHTML = "Invaliad Name";
        document.getElementById('fn').style.border = "2px solid red";
        check = false;
    }

    //validation for the age
    if (d.value >= 150 || isNAN(d.value)) {
        document.getElementById("text3").innerHTML = "Invlid Age";
        document.getElementById('age').style.border = "2px solid red";
        check = false;
    }
    else {
        document.getElementById("text3").innerHTML = "";
        check = true;
    }

    //validation of email
    if (e.value == "" || e.value == null) {
        document.getElementById('text4').innerHTML = "Please fill this field";
        document.getElementById('email').style.border = "2px solid red";
        check =false;
    }
    else if (e.value.length >= 25) {
        document.getElementById("text4").innerHTML = "Email Id long";
        document.getElementById('email').style.border = "2px solid red";
        check = false;
    }
    else {
        document.getElementById("text4").innerHTML = "";
        document.getElementById('email').style.border = "2px solid green";
        check = true;
    }

    //validation of phone number
    if (f.value == "" || f.value == null) {
        document.getElementById('text5').innerHTML = "Please fill this field";
        document.getElementById('pn').style.border = "2px solid red";
        check = false;
    }
    else if (isNaN(f.value) && f.value < 0 && f.value > 9) {
        document.getElementById('text5').innerHTML = "Enter a valid phone number";
        document.getElementById('pn').style.border = "2px solid red";
        check = true;
    }
    else if (f.value.length != 10) {
        document.getElementById("text5").innerHTML = "Invalid phone number";
        document.getElementById('pn').style.border = "2px solid red";
        check = false;
    }
    else {
        document.getElementById("text5").innerHTML = "";
        document.getElementById('pn').style.border = "2px solid green";
        check = true;
    }

    //validate 10th std result
    if (g.value == "" || g.value == null) {
        document.getElementById('text7').innerHTML = "Please fill this field";
        document.getElementById('10r').style.border = "2px solid red";
        check = false;
    }
    else if (g.value >= 100) {
        document.getElementById("text7").innerHTML = "Invalid percentage";
        document.getElementById('10r').style.border = "2px solid red";
        check = false;
    }
    else {
        document.getElementById("text7").innerHTML = "";
        document.getElementById('10r').style.border = "2px solid green";
        check = true;
    }

    //validation of 12th std result
    if (h.value == "" || h.value == null) {
        document.getElementById('text8').innerHTML = "Please fill this field";
        document.getElementById('12r').style.border = "2px solid red";
        check = false;
    }
    else if (h.value >= 100) {
        document.getElementById("text8").innerHTML = "Invalid percentage";
        document.getElementById('12r').style.border = "2px solid red";
        check = false;
    }
    else {
        document.getElementById("text8").innerHTML = "";
        document.getElementById('12r').style.border = "2px solid green";
        check = true;
    }

    return check
    // if (check == 6 || check==5) {
    //     return true;
    //     // document.alert("Are you sure?");
    // }
    // else {
    //     return false;
    // }
}
