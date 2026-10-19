# Laboratorio de almacenamiento web

## Abrir la actividad

Abre `index.html` en Chrome u otro navegador moderno. No se requieren instalaciones ni conexión a internet.

## Funciones completadas

- `fetchColorsList()`: carga los seis colores y guarda el arreglo como JSON en `localStorage`, usando la clave `ad18-lista-colores`.
- `loadColorsFromStorage()`: recupera y valida los colores guardados y vuelve a crear las tarjetas.
- `addItem()`: muestra cada nombre en español, su muestra de color, código hexadecimal, año y referencia Pantone.

Primero se intenta recuperar la copia guardada. Si no existe o no es válida, se carga la lista original. No se duplican tarjetas al recargar ni al actualizar.

## Cómo comprobarlo

1. Abre `index.html`: aparecen seis colores y un mensaje de guardado.
2. Recarga la página: el mensaje indica que se recuperaron del almacenamiento del navegador.
3. Pulsa «Actualizar colores»: se vuelve a cargar la lista original y se guarda de nuevo.
4. Pulsa «Borrar lista guardada»: se elimina únicamente la clave de esta actividad y se vacía la lista de la pantalla. Los datos de otras aplicaciones no se borran.
5. Pulsa «Actualizar colores» para recuperarla. Si recargas después del borrado, también se vuelve a cargar la lista original.

Puedes inspeccionar la clave desde las herramientas de desarrollo del navegador, en Aplicación → Almacenamiento local. El almacenamiento depende del navegador, su configuración y la ubicación desde la que abres la página.

## Archivos de datos

Cuando se sirve por HTTP, se usa `fetch('js/data.json')`. Al abrir directamente un archivo, muchos navegadores bloquean la lectura de JSON mediante fetch. Para ese caso se incluye `js/data.js`, una copia de los mismos datos que se carga como un script local. Si cambias los colores originales, actualiza ambos archivos.

No se usan bibliotecas ni servicios externos. Los errores de carga, los datos guardados corruptos y los fallos de acceso al almacenamiento se manejan con mensajes en español.

## Verificación

Se probó en Chrome abriendo el archivo directamente y mediante HTTP: carga de seis colores, guardado y recuperación, ausencia de solicitudes JSON al recuperar la copia guardada, actualizaciones sin duplicados y borrado sin afectar otras claves. También se probaron datos corruptos, fallos de red y almacenamiento bloqueado. No se detectaron errores JavaScript no controlados ni desbordamiento horizontal a 390 píxeles de ancho.
