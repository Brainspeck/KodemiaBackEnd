//ejercicio 1, determinar si un numero dado es primo:

const esPrimo = (numero) => {
    if (numero <= 1){
        return 'No es primo';
    }
    for (let i = 2; i <= numero/2; i++){
        if (numero % i === 0){
            return `${numero} no es primo`;
        }
    }
    return `${numero} es primo`;
}



//ejercicio 2, determinar el área de un triángulo

const areaTriangulo = (base, altura) => {
    if ( base < 0 || altura < 0){
        return 'Usa numeros positivos';
    }
    let area = base * altura;

    return `El area es de ${area} unidades cuadradas`;
}