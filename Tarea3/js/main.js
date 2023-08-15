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

for (var i = 0; i < meses.length; i++) {
  console.log(meses[i]);
}

// Ejercicio 2
// Punto 1
var valores = [true, 5, false, "hola", "adios", 2];

var elementosDeTexto = valores.filter(function (item) {
  return typeof item === "string";
});

if (elementosDeTexto.length >= 2) {
  var primerElemento = elementosDeTexto[0];
  var segundoElemento = elementosDeTexto[1];

  if (primerElemento.length > segundoElemento.length) {
    console.log(
      `${primerElemento} es mayor en longitud que ${segundoElemento}`
    );
  } else if (segundoElemento.length > primerElemento.length) {
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

// Operador AND para obtener true
var resultadoTrue = valor1 && valor2;
console.log(`Resultado true: ${resultadoTrue}`);

// Operador OR para obtener false
var resultadoFalse = valor1 || valor2;
console.log(`Resultado false: ${resultadoFalse}`);

// Punto 3
// Suma
var suma = valores[1] + valores[5];
console.log(`El resultado de la suma es: ${suma}`);

// Resta
var resta = valores[1] - valores[5];
console.log(`El resultado de la resta es: ${resta}`);

// Multiplicacion
var multiplicacion = valores[1] * valores[5];
console.log(`El resultado de la multiplicacion es: ${multiplicacion}`);

// Division
var division = valores[1] / valores[5];
console.log(`El resultado de la division es: ${division}`);

// Residuo
var residuo = valores[1] % valores[5];
console.log(`El residuo de la division es: ${residuo}`);

// Ejercicio 3
var numero1 = 5;
var numero2 = 8;

if (numero1 <= numero2) {
  console.log(`El ${numero1} no es mayor que ${numero2}`);
}

if (numero2 > 0) {
  console.log(`El ${numero2} es positivo`);
}

if (numero1 < 0 || numero1 !== 0) {
  console.log(`El ${numero1} es negativo o distinto de cero`);
}

if (numero1 + 1 <= numero2) {
  console.log(
    `Incrementar en 1 unidad el valor de ${numero1} no lo hace mayor o igual que ${numero2}`
  );
}

// Ejercicio 4
function calcularFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calcularFactorial(n - 1);
  }
}

var numero = 5; // Cambiando este numero se puede calcular el factorial de cualquier numero
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
    return "La cadena está formada solo por mayúsculas.";
  } else if (cadena === cadena.toLowerCase()) {
    return "La cadena está formada solo por minúsculas.";
  } else {
    return "La cadena está formada por una mezcla de mayúsculas y minúsculas.";
  }
}

var texto = "HolaMundo"; // Cambiando este String podemos probar varias palabras
var resultado = analizarCadena(texto);
console.log(resultado);
