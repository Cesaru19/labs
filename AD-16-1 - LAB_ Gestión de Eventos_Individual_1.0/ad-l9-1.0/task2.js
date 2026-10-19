function getFormvalue(evento) {
  evento.preventDefault();
  const formulario = document.getElementById('form1');
  const nombre = formulario.elements.namedItem('fname').value.trim();
  const apellidos = formulario.elements.namedItem('lname').value.trim();

  if (!nombre || !apellidos) {
    document.getElementById('estado').textContent = 'Escribe tus nombres y apellidos; los campos no pueden contener solo espacios.';
    return false;
  }

  console.log('Nombres:', nombre);
  console.log('Apellidos:', apellidos);
  document.getElementById('estado').textContent = 'Los nombres y apellidos se mostraron en la consola del navegador (F12 → Consola).';
  return false;
}
