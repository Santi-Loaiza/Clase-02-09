let contadorPrimos = 0;

for (let i = 2; i <= 50; i++) {
    let esPrimo = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo === true) {
        document.write(i+", ")
        contadorPrimos++;
    }
}

document.write("El número total de primos entre 1 y 50 es: " + contadorPrimos);
