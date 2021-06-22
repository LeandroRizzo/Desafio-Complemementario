const div = (a,b) => a / b;
const multi = (a,b) => a * b;
const suma = (a,b) => a + b;
const intereses =(a,b) => multi(a,b)/100;


let costo = parseInt(prompt("Ingrese el valor de su producto"))
let cantidad = parseInt(prompt("Ingrese la cantidad de productos a comprar"))
let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas en que desea pagar"))
let interesPagoEnCuotas = 10;

let valorCuotas = div(suma(multi(costo,cantidad),multi(intereses(costo,interesPagoEnCuotas),cantidad)),cuotas);

alert(`El costo final es de ${cuotas} cuotas de $${valorCuotas} cada una.`)