//  P1()
document.getElementById("calcular").addEventListener("click", function() {
    var provision = parseFloat(document.getElementById("provision").value);
    var porcentaje = parseFloat(document.getElementById("porcentaje").value);
    var saldos = parseFloat(document.getElementById("saldos").value);
    var provisionRequerida = (porcentaje / 100) * saldos;
    document.getElementById("resultado").value = provisionRequerida.toFixed(2);


// P2()
document.getElementById("calcular").addEventListener("click", function() {
    var totalProvision = parseFloat(document.getElementById("totalProvision").value);
    var provisionMorosidad12 = parseFloat(document.getElementById("provisionMorosidad12").value);
    var porcentajeMorosidad1_12 = parseFloat(document.getElementById("porcentajeMorosidad1_12").value);
    var saldoMorosidad1_12 = parseFloat(document.getElementById("saldoMorosidad1_12").value);
    var porcentajeNoMorosos = parseFloat(document.getElementById("porcentajeNoMorosos").value);
    var saldoNoMorosos = parseFloat(document.getElementById("saldoNoMorosos").value);
    var provisionNeta = ((porcentajeMorosidad1_12 / 100) * saldoMorosidad1_12 + (porcentajeNoMorosos / 100) * saldoNoMorosos) - provisionMorosidad12 - totalProvision;
    document.getElementById("resultado").value = provisionNeta.toFixed(2);
});

// P3
document.getElementById("calcular").addEventListener("click", function() {
    var totalPrestamosMorosos12 = parseInt(document.getElementById("totalPrestamosMorosos12").value);
    var resultado = (totalPrestamosMorosos12 === 0) ? "Sí" : "No";
    document.getElementById("resultado").value = resultado;
});


// P4
document.getElementById("calcular").addEventListener("click", function() {
    var castigosEjercicioActual = parseFloat(document.getElementById("castigosEjercicioActual").value);
    var castigosEjercicioAnterior = parseFloat(document.getElementById("castigosEjercicioAnterior").value);
    var carteraBrutaEjercicioActual = parseFloat(document.getElementById("carteraBrutaEjercicioActual").value);
    var carteraBrutaEjercicioAnterior = parseFloat(document.getElementById("carteraBrutaEjercicioAnterior").value);
    var resultado = ((castigosEjercicioActual + castigosEjercicioAnterior) / ((carteraBrutaEjercicioActual + carteraBrutaEjercicioAnterior) / 2)).toFixed(2);    
    document.getElementById("resultado").value = resultado;
});

// P5

// P6

// P7

});