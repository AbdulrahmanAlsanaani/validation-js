



function reg() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var re_password = document.getElementById("re_password").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var url = document.getElementById("url").value;
    var massage = document.getElementById("massage").value;

    a = "ajsdknksd";

    if (name.value == "") {
        document.getElementById("name_masseg").innerHTML = "you cant make name empety";
        return false;
    } else if (name.length < 3 || name.length > 10) {
        document.getElementById("name_masseg").innerHTML = "the name can not lsee than 3 or mor than 10 character";
        return false;
    } else {
        document.getElementById("name_masseg").innerHTML = "";
        
    }
    /* && /[A-Z]+/.test(password) && /[1-9]+/.test(password) && /\W+/.test(password) */
    /* ^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$ 
    [a-z]+[A-Z]+[1-9]+\W+*/
    
    if (!(/\S+@\S+\.\S+$/.test(email))) {
        document.getElementById("name_masseg").innerHTML = "email sentacs is nout true";
        return false;
    }else
    document.getElementById("name_masseg").innerHTML = "";

    
    
    if (!(/[a-z]+/.test(password) && /[A-Z]+/.test(password) && /[1-9]+/.test(password) && /\W+/.test(password))) {
        document.getElementById("name_masseg").innerHTML = "The password most contain capital and smale liters, number, and character";
        return false;
    }else
    document.getElementById("name_masseg").innerHTML = "";

    if (!(password==re_password)) {
        document.getElementById("name_masseg").innerHTML = "re-pasword is not similer password";
        return false;
    }else
    document.getElementById("name_masseg").innerHTML = "";

    if (!(age > 18)) {
        document.getElementById("name_masseg").innerHTML = "The age most be grater than 18 years old";
        return false;
    }else
    document.getElementById("name_masseg").innerHTML = "";

    if (!(/^777\d{6}$/.test(phone))) {
        document.getElementById("name_masseg").innerHTML = "The number most beging by 777 and most mor than 9 numbers";
        return false;
    }else
    document.getElementById("name_masseg").innerHTML = "";


}
