//alert()

alert("Bienvenido")

function calcularMontoTotal() {
    const montoPrestamo = parseFloat(prompt("Ingrese el monto del préstamo:"));
    const cuotas = parseInt(prompt("Ingrese el número de cuotas:"));

    if (montoPrestamo && cuotas) {
        let montoTotalPagar = 0;

        for (let i = 0; i < cuotas; i=i+1) {
            montoTotalPagar += montoPrestamo / cuotas;
        }


        console.log("El monto total a pagar para " + cuotas + " cuotas es: $" + montoTotalPagar);

        if (cuotas < 12) {
            console.log("Cuota mensual alta");
        }
    } else {
        console.log("Error");
    }
}

calcularMontoTotal();
