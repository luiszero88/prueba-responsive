
var botoncolor = document.getElementById("body")

function changeColor(newColor) {
    var botoncolor = document.getElementById("body");
    botoncolor.style.color = newColor;
  }
  onclick="changeColor('lightblue');"

  document.getElementById('miFormulario').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var datos = {
      nombre: document.getElementById('nombre').value,
      correo: document.getElementById('correo').value,
      mensaje: document.getElementById('mensaje').value
    };
  
    // Aquí deberías enviar 'datos' a tu servidor
    enviarDatos(datos);
  });