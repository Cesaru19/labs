// Seleccionar la sección por su id.
const contenedor = document.querySelector('#container');

// Seleccionar todos los elementos de lista con la clase second.
const segundos = document.querySelectorAll('li.second');

// Seleccionar únicamente el elemento third dentro de la lista ordenada.
const terceroOrdenado = document.querySelector('ol li.third');

// Añadir el saludo en español sin borrar las listas que se necesitan después.
const saludo = document.createElement('p');
saludo.textContent = '¡Hola!';
contenedor.prepend(saludo);

// Añadir y después quitar la clase main del div con la clase footer.
const pie = document.querySelector('div.footer');
pie.classList.add('main');
pie.classList.remove('main');

// Crear un nuevo li, asignarle su texto en español y añadirlo al ul.
const nuevoElemento = document.createElement('li');
nuevoElemento.textContent = 'cuatro';
contenedor.querySelector('ul').appendChild(nuevoElemento);
