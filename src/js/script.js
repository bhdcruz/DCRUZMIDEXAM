function validate()
    {
    alert(form.user.value)
    alert(document.getelementbyId(user).value);
    alert(form.password.value)
        if(form.user.value == "DelaCruz" && form.password.value =="DcruzPW")
            {
                alert("User Validated ");
                return true;
            }
        else
            {
                alert("Incorrect Username or Password" );
                return false;
            }

    }