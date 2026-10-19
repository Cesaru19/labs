# Bitácora web · Refactorización con Bootstrap

Autor: Cesar Joseph Luna Chiu.

## Abrir el sitio

Abre `index.html` en un navegador con conexión a internet. Bootstrap 5.3.8 se carga mediante el CDN de jsDelivr; las ilustraciones y los demás archivos están guardados en la carpeta del proyecto.

## Continuación del blog anterior

Se conservan el nombre Bitácora web, el tema de desarrollo web, la autoría y los datos de contacto proporcionados: cesar.chiu17@gmail.com y 5588093200. El blog anterior AD-07 se conserva en su carpeta original.

## Archivos principales

- `index.html`: portada, tarjetas y tres notas de desarrollo.
- `sobre-mi.html`: autor y propósito del proyecto.
- `contacto.html`: datos de contacto y formulario.
- `style.css`: única hoja de estilos propia, compartida por todas las páginas.
- `script.js`: validación del mensaje y alerta de confirmación.
- `img/`: ilustraciones SVG propias.

## Requisitos implementados

- Bootstrap CSS y JavaScript bundle por CDN, con integridad y crossorigin.
- Navbar adaptable y siempre visible, con enlaces entre las tres páginas y sección activa.
- Cuadrícula Bootstrap 2–8–2 en escritorio, conforme a las imágenes de Wireframe-Backup.
- Columnas laterales vacías reservadas para publicidad y noticias en las tres páginas. En pantallas pequeñas se ocultan para priorizar el contenido.
- Paleta base de cinco colores de Bootstrap: azul #0d6efd, oscuro #212529, gris #6c757d, claro #f8f9fa y blanco #ffffff.
- Tipografía, espaciado, tarjetas y controles apoyados en Bootstrap.
- Pie de página idéntico con nombre del proyecto, autor, correo y teléfono.
- Formulario con correo, textarea y botón. Los campos vacíos, el correo inválido y los mensajes formados solo por espacios no generan confirmación.
- Al enviar un formulario válido aparece «¡Mensaje enviado!» con un botón de cierre de Bootstrap.

## Alcance del formulario

El formulario es una demostración local: no dispone de servidor ni envía correo real. La confirmación lo indica expresamente. Los enlaces de correo y teléfono permiten abrir la aplicación correspondiente del dispositivo.

GitHub y Replit se omiten según la indicación del usuario.

## Verificación

Se probaron las tres páginas en Chrome con anchos de 1440 y 390 píxeles. Se verificaron carga de Bootstrap, ausencia de desbordamiento horizontal, menú fijo, menú móvil, columnas laterales vacías, validación del formulario, confirmación y cierre de alerta. No se detectaron errores JavaScript durante esas pruebas. También se revisaron capturas de Inicio y Contacto.
