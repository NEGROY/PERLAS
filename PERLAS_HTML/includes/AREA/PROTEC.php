<?php

function P1(){
    echo '<div class="container mt-5">
    <h2>Formulario de Provisión para Préstamos Incobrables</h2>
    <form>
        <div class="mb-3">
            <label for="provision" class="form-label">Provisión para Préstamos Incobrables (Balance General)</label>
            <input type="number" class="form-control" id="provision" placeholder="Ingrese la provisión">
        </div>
        <div class="mb-3">
            <label for="porcentaje" class="form-label">Porcentaje de Provisiones Requeridas (%)</label>
            <input type="number" class="form-control" id="porcentaje" placeholder="Ingrese el porcentaje">
        </div>
        <div class="mb-3">
            <label for="saldos" class="form-label">Saldos de Préstamo con Morosidad >12 Meses</label>
            <input type="number" class="form-control" id="saldos" placeholder="Ingrese los saldos">
        </div>
        <button type="button" class="btn btn-primary" id="calcular">Calcular</button>
        <div class="mt-3">
            <label for="resultado" class="form-label">Provisión Requerida:</label>
            <input type="text" class="form-control" id="resultado" readonly>
        </div>
    </form>
</div>';
}

function P2(){
    echo '<div class="container mt-5">
    <h2>Formulario de Provisión Neta para Préstamos Incobrables</h2>
    <form>
        <div class="mb-3">
            <label for="totalProvision" class="form-label">Total Provisión para Préstamos Incobrables</label>
            <input type="number" class="form-control" id="totalProvision" placeholder="Ingrese el total de provisión">
        </div>
        <div class="mb-3">
            <label for="provisionMorosidad12" class="form-label">Provisiones usadas para cubrir préstamos con morosidad >12 Meses</label>
            <input type="number" class="form-control" id="provisionMorosidad12" placeholder="Ingrese las provisiones usadas">
        </div>
        <div class="mb-3">
            <label for="porcentajeMorosidad1_12" class="form-label">Porcentaje de Provisiones Requeridas para cubrir préstamos con morosidad de 1-12 Meses (%)</label>
            <input type="number" class="form-control" id="porcentajeMorosidad1_12" placeholder="Ingrese el porcentaje">
        </div>
        <div class="mb-3">
            <label for="saldoMorosidad1_12" class="form-label">Saldo total de todos los préstamos pendientes con morosidad de 1-12 Meses</label>
            <input type="number" class="form-control" id="saldoMorosidad1_12" placeholder="Ingrese el saldo total">
        </div>
        <div class="mb-3">
            <label for="porcentajeNoMorosos" class="form-label">Porcentaje de Provisiones Requeridas para préstamos no morosos (%)</label>
            <input type="number" class="form-control" id="porcentajeNoMorosos" placeholder="Ingrese el porcentaje">
        </div>
        <div class="mb-3">
            <label for="saldoNoMorosos" class="form-label">Saldo total de todos los préstamos no morosos</label>
            <input type="number" class="form-control" id="saldoNoMorosos" placeholder="Ingrese el saldo total">
        </div>
        <button type="button" class="btn btn-primary" id="calcular">Calcular</button>
        <div class="mt-3">
            <label for="resultado" class="form-label">Provisión Neta para Préstamos Incobrables:</label>
            <input type="text" class="form-control" id="resultado" readonly>
        </div>
    </form>
</div>    ';
}

function P3(){
    echo '<div class="container mt-5">
    <h2>Formulario de Total de Castigos de Préstamos Morosos > 12 Meses</h2>
    <form>
        <div class="mb-3">
            <label for="totalPrestamosMorosos12" class="form-label">Total de Préstamos con Morosidad > 12 Meses</label>
            <input type="number" class="form-control" id="totalPrestamosMorosos12" placeholder="Ingrese el total de préstamos morosos">
        </div>
        <button type="button" class="btn btn-primary" id="calcular">Calcular</button>
        <div class="mt-3">
            <label for="resultado" class="form-label">Resultado:</label>
            <input type="text" class="form-control" id="resultado" readonly>
        </div>
    </form>
</div>    ';
}

function P4(){
    echo '<div class="container mt-5">
    <h2>Formulario de Medición de Préstamos Castigados</h2>
    <form>
        <div class="mb-3">
            <label for="castigosEjercicioActual" class="form-label">Castigos acumulados del ejercicio en curso</label>
            <input type="number" class="form-control" id="castigosEjercicioActual" placeholder="Ingrese los castigos del ejercicio en curso">
        </div>
        <div class="mb-3">
            <label for="castigosEjercicioAnterior" class="form-label">Castigos acumulados del ejercicio anterior</label>
            <input type="number" class="form-control" id="castigosEjercicioAnterior" placeholder="Ingrese los castigos del ejercicio anterior">
        </div>
        <div class="mb-3">
            <label for="carteraBrutaEjercicioActual" class="form-label">Cartera de préstamos bruta (menos provisiones) al final del ejercicio en curso</label>
            <input type="number" class="form-control" id="carteraBrutaEjercicioActual" placeholder="Ingrese la cartera bruta del ejercicio en curso">
        </div>
        <div class="mb-3">
            <label for="carteraBrutaEjercicioAnterior" class="form-label">Cartera de préstamos bruta (menos provisiones) al final del ejercicio anterior</label>
            <input type="number" class="form-control" id="carteraBrutaEjercicioAnterior" placeholder="Ingrese la cartera bruta del ejercicio anterior">
        </div>
        <button type="button" class="btn btn-primary" id="calcular">Calcular</button>
        <div class="mt-3">
            <label for="resultado" class="form-label">Resultado:</label>
            <input type="text" class="form-control" id="resultado" readonly>
        </div>
    </form>
</div>
    ';
}

function P5(){
    echo '
    ';
}

function P6(){
    echo '
    ';
}
?>