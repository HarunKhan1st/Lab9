function show_password(input_id)
{
    if (document.getElementById(input_id).type === "password")
    {
        document.getElementById(input_id).type = "text";
        document.getElementById(input_id).type = "text";
    }
    else
    {
        document.getElementById(input_id).type = "password";
        document.getElementById(input_id).type = "password";
    }
}

function check_passwords() {
    let pass1 = document.getElementById("password1").value;
    let pass2 = document.getElementById("password2").value;

    if (pass1 === pass2 && pass1.length >= 8)
    {
        document.getElementById("Changed").innerHTML = "Password testing has suceeded!";
    }
    else if (pass1 != pass2)
    {
        alert("Passwords do not match, re-enter please")
    }
    else 
    {
        alert("Passwords match but are not at least 8 characters long");
    }
}