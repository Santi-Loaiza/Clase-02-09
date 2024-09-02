let i = 1;
let resultado = 0;

while(resultado < 1024){
    resultado = 2**i;
    document.write("El resultado de la potencia de 2 a la "+i+" es: "+resultado+"<br>")
    i++;
}