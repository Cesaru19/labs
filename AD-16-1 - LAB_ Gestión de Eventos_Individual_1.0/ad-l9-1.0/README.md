# Laboratorio de gestión de eventos

## Instrucciones

1. Modificar el estilo del párrafo mediante JavaScript. Al pulsar el botón deben cambiar su fuente, tamaño de letra y color.
2. Obtener los nombres y apellidos del formulario mediante una función JavaScript. Al pulsar el botón deben mostrarse en la consola.
3. Crear una función que muestre una alerta con el número de enlaces de la página, el primer enlace y el último.

## Ejercicio extra

4. Realizar las siguientes operaciones con el DOM:
   - Seleccionar la sección con id `container`.
   - Seleccionar todos los elementos de lista con clase `second`.
   - Seleccionar el elemento con clase `third` que pertenece a la lista ordenada `ol`.
   - Añadir el saludo «¡Hola!» a la sección.
   - Añadir la clase `main` al div con clase `footer` y después quitarla.
   - Crear un elemento `li`, asignarle el texto «cuatro» y añadirlo a la lista `ul`.

El instructor evalúa las tareas de programación al terminar la sesión.

## Cómo probar la solución

Abre `index.html` y elige uno de los cuatro ejercicios. El proyecto funciona sin conexión a internet y sin instalar dependencias.

- Ejercicio 1: pulsa «Cambiar estilo». El párrafo cambia a fuente monoespaciada, tamaño de 24 píxeles y color azul.
- Ejercicio 2: edita los nombres y apellidos y pulsa «Mostrar en consola». Abre F12 → Consola para ver los valores. También aparece una confirmación en la página y se evita que el formulario la recargue. Los valores iniciales son Cesar Joseph y Luna Chiu.
- Ejercicio 3: pulsa «Mostrar información de los enlaces». La alerta muestra los 10 enlaces, el primero (https://example.com) y el último (#img). El botón de regreso no es un enlace y no modifica ese recuento.
- Ejercicio extra: los cambios se ejecutan al cargar. Se conserva el contenido de las listas, se añade «¡Hola!» al principio de la sección y «cuatro» al final del ul. El ol conserva tres elementos. Las selecciones y las operaciones sobre classList se encuentran en `task4.js`.

Todos los textos de la solución están en español. Se añadió `style.css`, que faltaba en la carpeta inicial, y se enlazó desde las cinco páginas.

## Verificación

Se probaron los cuatro ejercicios en Chrome: cambios de estilo, valores reales del formulario en consola, rechazo de nombres formados solo por espacios, alerta con recuento de enlaces y operaciones del DOM. Se comprobó que la imagen carga, que no hay errores JavaScript y que las cinco páginas no presentan desbordamiento horizontal a 390 píxeles de ancho.
