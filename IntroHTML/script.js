alert("Hola equipo 1001 Labs");

const equipo = {
    Isaac: "Scrum Master del equipo, estoy aqui para volverme desarrolldor Java",
    Joce: "Estoy explorando un nuevo camino profesional y quiero especializarme en front end.",
    Dani: "Soy parte del Scrum Team, y quiero desarrollar en la parte del Front",
    Cesar:  "Soy desarrollador de software y estoy aquí para generar un buen networking",
    Sergio: "Formo parte del equipo de desarrollo, Busco ser el comodín y ayudar a todos en el proyecto :D",
    LuisAngel: "Estoy aquí para convertirme en experto en desarrollo de software",
    Israel: "Programador, estoy aquí para volverme desarrollador Java Backend",
    Victor: "Backend Developer, estoy aquí para dominar el stack de Java",
    Anita: "está en el bootcamb de generation ya que le gustaría adquirir conocimientos nuevos para desarrollarlos en el mundo laboral",
};

const pregunta = prompt ("Quien eres?");
const respuesta = equipo [pregunta];
if (respuesta) {
    alert (respuesta);
} else {
    alert ("No te reconozco, escribe tu nombre tal como esta en el equipo.");
}