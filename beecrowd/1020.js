function data(totalDias) {
    let ano = Math.floor(totalDias / 360);
    let mes = Math.floor(totalDias / 30);
    let dias = Math.floor(totalDias / 12);

    return {
        ano: ano,
        mes: mes,
        dias: dias
    }
}

let teste = data(400);
console.log(`${teste.ano} anos`);
console.log(`${teste.mes} meses`);  
console.log(`${teste.dias} dias`);