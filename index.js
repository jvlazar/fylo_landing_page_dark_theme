function validateEmail(){
    let email = document.getElementById(`email_input`).value;
    let message = `Please enter a valid email addresss`;
    if (email.includes("@")){
        let emailArray = email.split("@");
        if (emailArray[1].includes(".")){
            document.getElementById("error_message").style.visibility = "hidden";
        } else {
           
            document.getElementById("error_message").style.visibility = "visible";
        }
    }
        
    
    
}