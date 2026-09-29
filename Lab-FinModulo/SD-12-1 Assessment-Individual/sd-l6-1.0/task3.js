// Task 3: addUser(first_name, last_name, email)

// Cree una función asincrona para utilizar await y que java no me regresara una promesa con el fetch
export async function addUser(first_name, last_name, email){

    //Se usa estructura try catch, justo por buena practica cuando se hacen peticiones
    try {
        const response = await fetch("http://localhost:3000/users");
        const users = await response.json();

        //Esto se podria simplificar con el metodo reduce y math.max pero lo hice asi para desarrollar yo mismo la logica
        let lastId = 0;
        for (let i = 0; i < users.length; i++) {
            if (users[i].id > lastId) {
                lastId = users[i].id;
            }
        }

        const nextId = lastId + 1;

        const newUser = {
            id: nextId,
            first_name: first_name,
            last_name: last_name,
            email: email
        }

        await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
        });

        //IMPORTANTE SE USA ESTOS CONSOLE PARA QUE COINCIDA CON LO QUE ESPERA EL TEST, DE IGUAL FORMA EL TEST DEBE TENER SOLO 5 USUARIOS
        //PARA QUE PUEDA PASAR EL TEST SEGÚN COMO ESTA
        console.log("{");
        console.log(`  id: ${newUser.id},`);
        console.log(`  first_name: '${newUser.first_name}',`);
        console.log(`  last_name: '${newUser.last_name}',`);
        console.log(`  email: '${newUser.email}'`);
        console.log("}");

    } catch (error) {
        console.error("Error al agregar usuario:", error);
    }   
}