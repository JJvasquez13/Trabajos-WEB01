var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  },
};
var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  },
};
var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  },
};

// EL arreglo penguins contiene los tres objetos gunter, ramon y fred
var penguins = [gunter, ramon, fred];

/* Este ciclo recorrerá cada elemento en el arreglo penguins, accederá a
la propiedad name de cada pingüino y la imprimirá en la consola. 
*/
for (var i = 0; i < penguins.length; i++) {
  console.log(penguins[i].name);
}

// Esto imprimirá la longitud del arreglo penguins en la consola
console.log(penguins.length);

/* 
Math.random() se usa para generar un número decimal aleatorio entre 0 y 1, y luego 
multiplicándolo por 5 para obtener un número en el rango de 0 a 4.99, y 
finalmente sumando 1 para obtener un valor en el rango de 1 a 5.
La función Math.floor() se utiliza para redondear el número resultante hacia
abajo y obtener un valor entero.
*/
penguins.map(function (penguin) {
  penguin.numberOfFeet = Math.floor(Math.random() * 5) + 1;
  return penguin;
});

/*
Este código recorre el arreglo de pingüinos, verifica la propiedad canFly de 
cada pingüino y si es true, imprime un mensaje en la consola indicando que el 
pingüino puede volar.
*/
penguins.map(function (penguin) {
  if (penguin.canFly) {
    console.log(penguin.name + " puede volar!");
  }
  return penguin;
});

/*
contiene solo los pingüinos cuya propiedad numberOfFeet es mayor que 2.
La función de filtrado se asegura de que solo los pingüinos que cumplan
con esta condición se incluyan en el nuevo arreglo.
*/
var penguinTwoFeet = penguins.filter(function (penguin) {
  return penguin.numberOfFeet > 2;
});

var possibleFoods = [
  "Fish",
  "Squid",
  "Krill",
  "Shrimp",
  "Herring",
  "Clam",
  "Octopus",
];

/*
Este código agrega la propiedad favoriteFoods a cada pingüino 
y le asigna una matriz de tres cadenas que representan sus comidas favoritas.

la línea penguins[i].favoriteFoods[2] = "piñas";
cambia el valor del último elemento de la matriz a "piñas"
*/
for (var i = 0; i < penguins.length; i++) {
  var selectedFoods = [];
  var availableFoods = possibleFoods.slice();

  for (var j = 0; j < 3; j++) {
    var randomIndex = Math.floor(Math.random() * availableFoods.length);
    selectedFoods.push(availableFoods.splice(randomIndex, 1)[0]);
  }

  selectedFoods[selectedFoods.length - 1] = "piñas";
  penguins[i].favoriteFoods = selectedFoods;
}

/*
accede a la segunda comida favorita de cada pingüino usando [i] y luego
imprime un mensaje que muestra el nombre del pingüino y su segunda comida favorita.
*/
for (var i = 0; i < penguins.length; i++) {
  var secondFavoriteFood = penguins[i].favoriteFoods[1];
  console.log(
    "La segunda comida favorita de " +
      penguins[i].name +
      " es: " +
      secondFavoriteFood
  );
}

penguins.map(function (penguin) {
  penguin.favoriteFoods.map(function (food) {
    console.log(food);
  });
});
