const itemsContainer = document.querySelector('#list-items');
const estado = document.getElementById('estado');
const actualizar = document.getElementById('actualizar');
const borrar = document.getElementById('borrar');
const STORAGE_KEY = 'ad18-lista-colores';

function validarColores(colores) {
  return Array.isArray(colores) && colores.length > 0 && colores.every((item) =>
    item && typeof item.name === 'string' && item.name.trim() &&
    typeof item.color === 'string' && /^#[0-9a-f]{6}$/i.test(item.color) &&
    typeof item.pantone_value === 'string' && Number.isInteger(item.year)
  );
}

function addItem(item) {
  const tarjeta = document.createElement('section');
  tarjeta.className = 'card';

  const muestra = document.createElement('figure');
  muestra.className = 'muestra';
  muestra.style.backgroundColor = item.color;
  muestra.setAttribute('role', 'img');
  muestra.setAttribute('aria-label', `${item.name}: ${item.color}`);

  const cuerpo = document.createElement('article');
  cuerpo.className = 'card-body';
  const titulo = document.createElement('h2');
  titulo.className = 'card-title';
  titulo.textContent = item.name;
  const referencia = document.createElement('p');
  referencia.className = 'card-text';
  referencia.textContent = `Pantone: ${item.pantone_value}`;
  const anio = document.createElement('p');
  anio.className = 'card-text';
  anio.textContent = `Año: ${item.year}`;
  const codigo = document.createElement('code');
  codigo.className = 'codigo';
  codigo.textContent = item.color;
  cuerpo.append(titulo, referencia, anio, codigo);
  tarjeta.append(muestra, cuerpo);
  itemsContainer.append(tarjeta);
}

function mostrarColores(colores) {
  itemsContainer.replaceChildren();
  colores.forEach(addItem);
}

function cambiarCarga(cargando) {
  itemsContainer.setAttribute('aria-busy', String(cargando));
  actualizar.disabled = cargando;
  borrar.disabled = cargando;
}

// Los navegadores suelen bloquear fetch de JSON al abrir directamente un archivo.
// Este recurso local permite abrir index.html sin instalar un servidor.
function cargarDatosComoArchivo() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'js/data.js';
    script.onload = () => {
      resolve(window.datosColoresLocales);
      script.remove();
    };
    script.onerror = () => {
      script.remove();
      reject(new Error('No se pudo cargar el archivo local de colores.'));
    };
    document.head.append(script);
  });
}

async function fetchColorsList() {
  cambiarCarga(true);
  estado.textContent = 'Cargando los colores del archivo de datos…';
  try {
    let contenido;
    if (window.location.protocol === 'file:') {
      contenido = await cargarDatosComoArchivo();
    } else {
      const respuesta = await fetch('js/data.json', { cache: 'no-store' });
      if (!respuesta.ok) throw new Error(`No se pudo cargar la lista (${respuesta.status}).`);
      contenido = await respuesta.json();
    }
    if (!validarColores(contenido.data)) throw new Error('El archivo no contiene una lista de colores válida.');
    mostrarColores(contenido.data);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(contenido.data));
      estado.textContent = `${contenido.data.length} colores cargados y guardados en este navegador.`;
    } catch {
      estado.textContent = 'Los colores se cargaron, pero el navegador no permite guardarlos. Puedes seguir viendo la lista.';
    }
  } catch {
    estado.textContent = 'No se pudieron cargar los colores. Comprueba que la carpeta js esté completa y pulsa Actualizar colores para reintentar.';
    if (!itemsContainer.children.length) mostrarListaVacia('No hay colores disponibles.');
  } finally {
    cambiarCarga(false);
  }
}

function loadColorsFromStorage() {
  try {
    const guardado = localStorage.getItem(STORAGE_KEY);
    if (!guardado) return false;
    const colores = JSON.parse(guardado);
    if (!validarColores(colores)) return false;
    mostrarColores(colores);
    estado.textContent = `${colores.length} colores recuperados del almacenamiento de este navegador.`;
    cambiarCarga(false);
    return true;
  } catch {
    return false;
  }
}

function mostrarListaVacia(mensaje) {
  const texto = document.createElement('p');
  texto.className = 'vacio';
  texto.textContent = mensaje;
  itemsContainer.replaceChildren(texto);
}

actualizar.addEventListener('click', fetchColorsList);
borrar.addEventListener('click', () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    mostrarListaVacia('La lista guardada se borró. Pulsa Actualizar colores para volver a cargarla.');
    estado.textContent = 'Se borró únicamente la lista de colores de esta actividad.';
  } catch {
    estado.textContent = 'El navegador no permitió borrar la lista guardada.';
  }
});

// Recuperar primero la copia guardada evita duplicados y solicitudes innecesarias.
if (!loadColorsFromStorage()) fetchColorsList();
