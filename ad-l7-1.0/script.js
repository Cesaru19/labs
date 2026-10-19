const alertButton = document.getElementById('liveAlertBtn');
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

if (alertButton && alertPlaceholder) {
  alertButton.addEventListener('click', () => {
    const alert = document.createElement('div');
    alert.className = 'alert alert-warning alert-dismissible fade show';
    alert.setAttribute('role', 'alert');
    alert.innerHTML = `
      <span>Alerta, alguien presionó el botón</span>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
    `;
    alert.addEventListener('closed.bs.alert', () => alertButton.focus());
    alertPlaceholder.append(alert);
  });
}

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('formStatus').textContent =
      'Formulario enviado correctamente en esta demostración. No se envió ningún mensaje a un servidor.';
    contactForm.reset();
  });
}

