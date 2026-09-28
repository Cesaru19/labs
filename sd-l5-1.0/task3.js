export function ageCalculator(year, month, day) {
    const hoy = new Date();
    const cumpleaños = new Date(year, month-1, day);// se resta uno a mes porque se maneja por indice
    let edad = hoy.getFullYear() - cumpleaños.getFullYear();
    
    //Se valida si ya cumplio años en el año en curso, se hace la validación teniendo en cuenta como regresa los datos los objetos Date
    const yaCumplioAños = hoy.getMonth() > cumpleaños.getMonth() ||
    (hoy.getMonth() === cumpleaños.getMonth() && hoy.getDate() >= cumpleaños.getDate());

    //si aún no pasa si cumpleaños se resta un año
    if (!yaCumplioAños) {
        edad--;
    }

    //Se agrega este console porque lo pide el test para que pase
    console.log("Successful");

    return edad;
}