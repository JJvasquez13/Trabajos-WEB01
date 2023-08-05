alert("Cuidado con lo que hace!!!");

// Variables: String, number, boolean, [array], date
// tipo objetos

// Diferencia entre var y let es el scope = ambito
// var nombre = 'Pedro';        var es una variable global
// let apellido = 'Perez';      lo mas recomendable es utilizar let

if (true) {
  var nombre = "Pedro";
  let apellido = "Perez";
}

alert(nombre);
// alert(apellido);

let bandera = true;
let edad = 15;
let precio = 3.35;

let lista = [];

let fecha = new Date().getDate();
alert(fecha);

// un solo igual ( = ) es para decirle a una variable que valor tiene.

/*
doble igual ( == ) significa que valua si los dos digitos sin iguales sin
importar el tipo de dato ya sea int o string.
*/

/*
con un triple igual ( === ) valora primero si tienen el mismo tipo de dato por ejemplo 
si los dos son string o los dos son int, despues si esto es verdadero
valora los dos tienen el mismo valor o el mismo dato.
*/

if (5 === "5") {
  alert("siuuuuuuuu");
} else {
  alert("nooooooooooooo");
}

const PI = 3.14;
// PI = 3222;

const Persona = {
  cedula: "208400271",
  nombre: "Juan José",
  apellido1: "Vásquez",
  apellido2: "Sánchez",
  edad: 20,
};

// String template
alert(
  `El nombre de la persona es ${Persona.nombre} y su edad es ${Persona.edad}.`
);

let tiene = Persona.hasOwnProperty("edad");
console.log(tiene);

let tienePerro = true;
console.log(tienePerro);
// tienePerro = null;

if (tienePerro) {
  console.log("tiene perro");
} else {
  console.log("no tiene perro");
}

let listaColores = ["Rojo", "Verde", "Azul"];
console.log(listaColores[1]);
console.log(listaColores.length);

for (let i = 0; i < listaColores.length; i++) {
  console.log(listaColores[i]);
}

console.log("foreach");
listaColores.forEach((valor, index) => {
  if (index % 2 == 0) {
    console.log(`El valor es: ${valor} y el indice es ${index}`);
  }
});

console.log("map");
listaColores.map((valor, index) => {
  if (index % 2 == 0) {
    console.log(`El valor es: ${valor} y el indice es ${index}`);
  }
});

const listaPersonas = [
  {
    id: "202020",
    nombre: "Juan",
    apellido: "Vasquez",
    edad: 20,
  },
  {
    id: "234234",
    nombre: "leo",
    apellido: "Fores",
    edad: 5,
  },
  {
    id: "5252531",
    nombre: "Marcos",
    apellido: "Ronaldo",
    edad: 25,
  },
];

const listaResults = listaPersonas
  .map((persona, index) => {
    let nombre = `Mi nombre es ${persona.nombre} ${persona.apellido}`;
    return {
      id: index,
      ceudla: persona.id,
      nombre: nombre,
      edad: persona.edad,
    };
  })
  .filter((x) => x.edad > 18);

console.log(...listaResults);

/*
function saludar2() {
  alert(prueba);
}

function saludar() {
  var prueba = 5;
}

saludar2();
saludar();
*/
