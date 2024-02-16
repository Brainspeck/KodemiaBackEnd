// ejercicio 1, sumar todos los numero pares previos al numero dado
const evenNumbers = (number) => {
    if (number < 0) {
        return 'Ingresa un número positivo';
    }
    
    let acumulador = 0;

    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            acumulador += i;
        }
    }

    return acumulador;
}

//ejercicio 2, contar cuantas vocales tiene una palabra dada

const vocals = (word) => {
    if(typeof word != 'string'){
        return 'Ingrese cadenas de texto'
    }
    let contador = 0;
    for(let i = 0; i < word.length; i++){
        if(word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u'){
            contador += 1;
        }
    }
    return contador;
}