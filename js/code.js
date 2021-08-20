let ingreso = prompt("Ingresar sueldo mensual");
let renta = prompt("Ingresar tipo de renta: 4ta o 5ta");

let rentaCal;
let essalud = 0.09;
let pensiones = 0.13;

switch (renta) {
  case "4ta":
    rentaCal = 0.1;
    break;
  case "5ta":
    rentaCal = 0.18;
    break;
}

let utilidad = ingreso * (1 - rentaCal - essalud - pensiones);
alert("Tu utilidad despues de impuestos y obligaciones es: " + utilidad);
