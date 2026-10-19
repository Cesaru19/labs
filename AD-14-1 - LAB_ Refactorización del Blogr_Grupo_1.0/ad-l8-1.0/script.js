const formulario = document.getElementById('formularioContacto');
const contenedorAlertas = document.getElementById('alertasContacto');

if (formulario && contenedorAlertas) {
  const campoMensaje = document.getElementById('mensaje');
  campoMensaje.addEventListener('input', () => campoMensaje.setCustomValidity(''));

  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    if (campoMensaje.value.trim().length < 5) {
      campoMensaje.setCustomValidity('Escribe un mensaje de al menos cinco caracteres, sin contar los espacios al inicio y al final.');
    } else {
      campoMensaje.setCustomValidity('');
    }
    if (!formulario.reportValidity()) return;

    const alerta = document.createElement('div');
    alerta.className = 'alert alert-confirmacion alert-dismissible fade show mb-0';
    alerta.setAttribute('role', 'alert');
    alerta.innerHTML = `
      <strong>¡Mensaje enviado!</strong>
      <p class="small mb-0 mt-1">Confirmación de demostración. No se ha enviado ningún correo real.</p>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar confirmación"></button>
    `;
    alerta.addEventListener('closed.bs.alert', () => {
      formulario.querySelector('button[type="submit"]').focus();
    });
    contenedorAlertas.replaceChildren(alerta);
    formulario.reset();
  });
}
