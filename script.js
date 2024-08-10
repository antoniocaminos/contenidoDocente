function loguin() {
     /* event.preventDefault(); */
        let user = document.getElementById("username").value;
        let pass = document.getElementById("password").value;
    
        if (user === "gloria" && pass === "cerdat") {
            window.location.href = "bienvenido.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
        return false;
    }