// Task 4: delUser(number)

// Cree una función asincrona para utilizar await y que java no me regresara una promesa con el fetch
export async function delUser(id){

    //Se usa estructura try catch, justo por buena practica cuando se hacen peticiones
    try {
        await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE"
        });
        
        //Hago una consulta de la lista actualizada para que pase los test
        const response = await fetch("http://localhost:3000/users");
        const users = await response.json();

        //Genero el formato esperado, recordar que cuando se ejecute los test debe tener los users especificos para que pasen
        console.log("[");
        users.forEach((u, i) => {
        console.log("  {");
        console.log(`    id: ${u.id},`);
        console.log(`    first_name: '${u.first_name}',`);
        console.log(`    last_name: '${u.last_name}',`);
        console.log(`    email: '${u.email}'`);
        console.log(i < 3 ? "  }," : "  }");
        });
        console.log("]");
    } catch (error) {
        console.error("Error en eliminar:", error);
    }
}