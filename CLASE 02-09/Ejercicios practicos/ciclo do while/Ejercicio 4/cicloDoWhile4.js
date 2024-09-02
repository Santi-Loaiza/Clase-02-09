let n = 987654;
let contador = 0;

do {
    n = Math.floor(n / 10);
    contador++;
} while (n > 0);

document.write(contador)