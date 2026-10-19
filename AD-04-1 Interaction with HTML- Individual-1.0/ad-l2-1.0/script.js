function mostrarAlerta() {
  alert('¡ES HORA DE LAS HAMBURGUESAS!');
}

function registrarVisita() {
  console.log('¡Alguien hizo clic en CIUDAD HAMBURGUESA!');
}

function cambiarTituloARojo() {
  document.getElementById('titulo-imagen').style.color = 'red';
}

document.querySelectorAll('.ciudad-hamburguesa').forEach((boton) => {
  boton.addEventListener('click', registrarVisita);
});

document.querySelectorAll('.boton-arroz').forEach((boton) => {
  boton.addEventListener('click', cambiarTituloARojo);
});
