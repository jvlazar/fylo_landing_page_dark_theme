function validateEmail(){
    let email = document.getElementById(`email_input`).value;
    let message = `Please enter a valid email addresss`;
    if (email.includes("@")){
        let emailArray = email.split("@");
        if (emailArray[1].includes(".")){
            message = "";
        } else {
            message = `Please enter a valid email addresss`;
        }
    }
        document.getElementById("error_message").innerHTML = message;
    
    
}