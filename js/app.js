



function reg() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var re_password = document.getElementById("re_password").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var url = document.getElementById("url").value;
    var massage = document.getElementById("massage").value;


    if (name.value == "") {
        document.getElementById("name_masseg").innerHTML = "you cant make name empety";
        return false;
    } else if (name.length < 3 || name.length > 10) {
        document.getElementById("name_masseg").innerHTML = "the name can not lsee than 3 or mor than 10 character";
        return false;
    } else {
        document.getElementById("name_masseg").innerHTML = "";

    }

    if (!(/\S+@\S+\.\S+$/.test(email))) {
        document.getElementById("email_masseg").innerHTML = "email sentacs is nout true";
        return false;
    } else
        document.getElementById("email_masseg").innerHTML = "";



    if (!(/[a-z]+/.test(password) && /[A-Z]+/.test(password) && /[1-9]+/.test(password) && /\W+/.test(password))) {
        document.getElementById("password_masseg").innerHTML = "The password most contain capital and smale liters, number, and character";
        return false;
    } else
        document.getElementById("password_masseg").innerHTML = "";

    if (!(password == re_password)) {
        document.getElementById("re_password_masseg").innerHTML = "re-pasword is not similer password";
        return false;
    } else
        document.getElementById("re_password_masseg").innerHTML = "";

    if (!(age > 18)) {
        document.getElementById("age_masseg").innerHTML = "The age most be grater than 18 years old";
        return false;
    } else
        document.getElementById("age_masseg").innerHTML = "";

    if (!(/^777\d{6}$/.test(phone))) {
        document.getElementById("phone_masseg").innerHTML = "The number most beging by 777 and most mor than 9 numbers";
        return false;
    } else
        document.getElementById("phone_masseg").innerHTML = "";

    if (!(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(url))) {
        document.getElementById("url_masseg").innerHTML = "The url is not corect";
        return false;
    } else
        document.getElementById("url_masseg").innerHTML = "";

    if (massage.length < 20) {
        document.getElementById("massage_masseg").innerHTML = "the massege mst have more than 20charecters";
        return false;
    } else
        document.getElementById("massage_masseg").innerHTML = "";

    

}

/* /* && /[A-Z]+/.test(password) && /[1-9]+/.test(password) && /\W+/.test(password) */
    /* ^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$ 
    [a-z]+[A-Z]+[1-9]+\W+ */

