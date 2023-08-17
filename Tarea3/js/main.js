// Ejercicio 1
var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

meses.forEach(function (mes) {
  console.log(mes);
});

// Ejercicio 2
var valores = [true, 5, false, "hola", "adios", 2];

var elementosDeTexto = valores.filter(function (item) {
  return typeof item === "string";
});

if (elementosDeTexto.length >= 2) {
  var [primerElemento, segundoElemento] = elementosDeTexto;

  var comparacion = primerElemento.length - segundoElemento.length;
  if (comparacion > 0) {
    console.log(
      `${primerElemento} es mayor en longitud que ${segundoElemento}`
    );
  } else if (comparacion < 0) {
    console.log(
      `${segundoElemento} es mayor en longitud que ${primerElemento}`
    );
  } else {
    console.log("Ambos elementos de texto tienen la misma longitud.");
  }
} else {
  console.log("No hay suficientes elementos de texto en el array.");
}

// Punto 2
var valor1 = valores[0]; // true
var valor2 = valores[2]; // false

// Operador AND y OR
console.log(`Resultado true: ${valor1 && valor2}`);
console.log(`Resultado false: ${valor1 || valor2}`);

// Punto 3 Operaciones matemáticas
var [numero1, numero2] = valores.filter(function (item) {
  return typeof item === "number";
});

var operaciones = [
  { nombre: "Suma", operacion: numero1 + numero2 },
  { nombre: "Resta", operacion: numero1 - numero2 },
  { nombre: "Multiplicación", operacion: numero1 * numero2 },
  { nombre: "División", operacion: numero1 / numero2 },
  { nombre: "Residuo", operacion: numero1 % numero2 },
];

operaciones.forEach(function (op) {
  console.log(`El resultado de la ${op.nombre} es: ${op.operacion}`);
});

// Ejercicio 3
var numero1 = 5;
var numero2 = 8;

function verificarNumero(num) {
  if (num <= 0) {
    if (num < 0) {
      console.log(`El ${num} es negativo`);
    } else {
      console.log(`El ${num} es igual a cero`);
    }
  } else {
    console.log(`El ${num} es positivo`);
  }
}

verificarNumero(numero1);
verificarNumero(numero2);

if (numero1 + 1 <= numero2) {
  console.log(
    `Incrementar en 1 unidad el valor de ${numero1} no lo hace mayor o igual que ${numero2}`
  );
}

// Ejercicio 4
function calcularFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * calcularFactorial(n - 1);
}

var numero = 5;
var factorial = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${factorial}`);

// Ejercicio 5
function paresOImpares(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

function mostrarParOImpar() {
  var inputNumero = document.getElementById("numero");
  var numero = parseInt(inputNumero.value);
  var resultadoTexto = paresOImpares(numero);

  var resultadoElemento = document.getElementById("resultado");
  resultadoElemento.textContent = `El número ${numero} es ${resultadoTexto}.`;
}

// Ejercicio 6
function analizarCadena(cadena) {
  if (cadena === cadena.toUpperCase()) {
    return "mayúsculas";
  } else if (cadena === cadena.toLowerCase()) {
    return "minúsculas";
  } else {
    return "una mezcla de mayúsculas y minúsculas";
  }
}

var texto = "HolaMundo"; //Cambiando este String se puede ver la diferencia
console.log(`La cadena "${texto}" está formada por ${analizarCadena(texto)}.`);
