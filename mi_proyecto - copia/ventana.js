// Funcion del boton de crear cuenta
function bntcrear(){
// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el botón que abre el modal (ajusta el ID según tu botón)
var btn = document.getElementById("openModalBtn");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón, abre el modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, cierra el modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}
bntcrear()

//Funcio del boton iniciar sesion
function bntini(){

// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el botón que abre el modal (ajusta el ID según tu botón)
var btn = document.getElementById("openModalBtn_cuenta");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón, abre el modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, cierra el modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}



// Opcional: manejar el envío del formulario
document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    alert("Nombre: " + name + "\nCorreo Electrónico: " + email);

    // Cerrar el modal después del envío (opcional)
    modal.style.display = "none";
});
