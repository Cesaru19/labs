const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!

// 1. Agregar un número a una fila existente
arr[0].push(99);
console.log(arr[0]);

// 2. Agregar una fila completa nueva
arr.push([30,31,32,33,34,35,36,37,38,39]);
console.log(arr);

// 3. Eliminar un número de una fila
arr[1].splice(2, 1);
console.log(arr[1]);

// 4. Invertir una fila sin afectar las demás
arr[2].reverse();
console.log(arr[2]);

// Type your code above this line!