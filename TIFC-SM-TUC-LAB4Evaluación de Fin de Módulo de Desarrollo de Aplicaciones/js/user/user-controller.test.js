const UserController = require("./user-controller");
const User = require("./user");

//se hizo esto ya que es mala practica usar un mismo objeto para todos los test, ya que si uno de los test falla, puede afectar a los demas. 
// Por eso use beforeEach para crear un nuevo objeto antes de cada test. También pude haber instanciado el objeto dentro de cada test, 
// pero eso haría que el código se vea más desordenado y repetitivo.
beforeEach(() => {
    userController = new UserController();
});

test('add user to userController', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");

    userController.add(user);

    expect(userController.getUsers()).toContain(user);
});

test('remove user not in userController', () => {
    let user1 = new User(1234, "Santiago", "santiago@generation.org");
    let user2 = new User(5678, "Juan", "juan@generation.org");

    userController.add(user1);
    userController.remove(user2);

    expect(userController.getUsers()).toContain(user1);
});

test('find user by email', () => {
    let user = new User(1, "Juan", "juan@test.com");

    userController.add(user);

    expect(userController.findByEmail("juan@test.com")).toBe(user);
});

test('return undefined when email does not exist', () => {
    expect(userController.findByEmail("noexiste@test.com")).toBeUndefined();
});

test('find user by id', () => {
    let user = new User(2, "Pedro", "pedro@test.com");

    userController.add(user);

    expect(userController.findById(2)).toBe(user);
});

test('return undefined when id does not exist', () => {
    expect(userController.findById(9999)).toBeUndefined();
});
