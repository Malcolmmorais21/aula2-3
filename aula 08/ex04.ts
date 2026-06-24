function calcularAreas(base: number, altura: number): number { 
    return base * altura 
}

console.log(calcularAreas(4,5));

function conventerTemperatura(temp: number): number { 
    return (temp * 9/5) + 32;
}
console.log(`Converter temperatura para Cº ${conventerTemperatura(25)}`);