



function reg() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var re_password = document.getElementById("re_password").value;
    var age = document.getElementById("age").value;
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
    
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        document.getElementById("name_masseg").innerHTML = "email sentacs is nout true";
        return false;
    }else
    document.getElementById("name_masseg").innerHTML = "";

}
