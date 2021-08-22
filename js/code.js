const sueldoNeto = [];
let sueldoActual = prompt("Ingresa tu sueldo mensual");

class CalcularSueldo {
  constructor(sueldoBase) {
    this.sueldo = sueldoBase;
  }

  fondoPensiones = () => {
    var fondoPensiones = this.sueldo * 0.1;
    return fondoPensiones;
  };

  seguroSocial = () => {
    let seguroSocial = this.sueldo * 0.09;
    return seguroSocial;
  };
  impuestoRenta = () => {
    let impuestoRenta = this.sueldo * 0.14;
    return impuestoRenta;
  };
}

let calculoSueldo = new CalcularSueldo(sueldoActual);

sueldoNeto.push(
  sueldoActual,
  calculoSueldo.fondoPensiones(),
  calculoSueldo.seguroSocial(),
  calculoSueldo.impuestoRenta(),
  sueldoActual -
    calculoSueldo.fondoPensiones() -
    calculoSueldo.seguroSocial() -
    calculoSueldo.impuestoRenta()
);

const conceptos = {
  sueldo: "Sueldo Bruto: ",
  pension: "Aporte al fondo de Pensiones: ",
  segSocial: "Seguro Social: ",
  impRenta: "Impuesto a la Renta: ",
  sueldoNeto: "Sueldo Neto: ",
};

for (let i = 0; i < sueldoNeto.length; i++) {
  console.log(sueldoNeto[i]);
}
alert(
  conceptos.sueldo +
    sueldoNeto[0] +
    "\n" +
    conceptos.pension +
    sueldoNeto[1] +
    "\n" +
    conceptos.segSocial +
    sueldoNeto[2] +
    "\n" +
    conceptos.impRenta +
    sueldoNeto[3] +
    "\n" +
    conceptos.sueldoNeto +
    Math.round(sueldoNeto[4], 0) +
    "\n"
);
