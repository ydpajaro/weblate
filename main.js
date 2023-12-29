// main.js

function extraerPalabras() {
    const datosEntradaTextarea = document.getElementById("datosEntrada");
    const resultadosDiv = document.getElementById("resultados");
    
    resultadosDiv.innerHTML = "";

    const datosEntrada = datosEntradaTextarea.value.trim();

    if (!datosEntrada) {
        resultadosDiv.textContent = "Por favor, ingresa datos en el área de entrada.";
        return;
    }

    const palabras = datosEntrada.split(/\s+/);

    const resultados = palabras.map(palabra => `$lang["${palabra}"]`).join('<br>');

    
    resultadosDiv.innerHTML = resultados;
}
