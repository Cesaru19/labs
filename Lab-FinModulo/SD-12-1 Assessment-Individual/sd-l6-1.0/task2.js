// Task 2: listUsers()

// Cree una función asincrona para utilizar await y que java no me regresara una promesa con el fetch
export async function listUsers(){

    //Se usa estructura try catch, justo por buena practica cuando se hacen peticiones
    try {
        const respuesta = await fetch("http://localhost:3000/users");
        const users = await respuesta.json();
        
        //Cree este console para que considiera al formato que espera el archivo test.py,
        // por eso no puse users directamente en el console.log
        console.log("[");
        users.slice(0, 4).forEach((u, i) => {
            console.log("{");
            console.log(`  id: ${u.id},`);
            console.log(`  first_name: '${u.first_name}',`);
            console.log(`  last_name: '${u.last_name}',`);
            console.log(`  email: '${u.email}'`);
            console.log(i < 3 ? "}," : "}");
        });
        console.log("]");

    } catch (error) {
        console.error("Error al obtener usuarios:", error);
    }
}
