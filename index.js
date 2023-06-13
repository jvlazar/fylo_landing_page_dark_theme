function validateEmail() {
    let email = document.getElementById(`email_input`).value;
    let message = `Please enter a valid email addresss`;
    if (email == "") {
        document.getElementById("error_message").style.visibility = "visible";
    } else {
        if (email.includes("@")) {
            let emailArray = email.split("@");
            if (emailArray[1].includes(".")) {
                emailArray = emailArray[1].split(".");
                if (emailArray.length == 2 && emailArray[1] != "") {
                    document.getElementById("error_message").style.visibility = "hidden";
                } else {
                    document.getElementById("error_message").style.visibility = "visible";
                }
            } else {

                document.getElementById("error_message").style.visibility = "visible";
            }
        }
    }



}