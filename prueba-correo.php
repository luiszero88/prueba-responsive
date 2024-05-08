<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST['nombre'];
  $correo = $_POST['correo'];
  $mensaje = $_POST['mensaje'];

  // Aquí deberías configurar el envío del correo
  mail('luiszero88@hotmail.com', 'Nuevo mensaje de ' . $nombre, $mensaje, 'From: ' . $correo);
}
?>