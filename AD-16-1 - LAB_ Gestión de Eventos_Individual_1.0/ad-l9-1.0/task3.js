function mostrarInformacionEnlaces() {
  const enlaces = document.querySelectorAll('a[href]');
  if (enlaces.length === 0) {
    alert('Esta página no contiene enlaces.');
    return;
  }

  const primero = enlaces[0];
  const ultimo = enlaces[enlaces.length - 1];
  const obtenerNombre = (enlace) => enlace.textContent.trim() || enlace.getAttribute('aria-label') || 'Enlace con imagen';

  alert(
    `Número de enlaces: ${enlaces.length}\n` +
    `Primer enlace: ${obtenerNombre(primero)} (${primero.getAttribute('href')})\n` +
    `Último enlace: ${obtenerNombre(ultimo)} (${ultimo.getAttribute('href')})`
  );
}

document.getElementById('mostrarEnlaces').addEventListener('click', mostrarInformacionEnlaces);
