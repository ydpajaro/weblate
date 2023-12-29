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

    const tabla = document.createElement("table");
    const thead = document.createElement("thead");
    const encabezadoRow = document.createElement("tr");
    const encabezadoKey = document.createElement("th");
    encabezadoKey.textContent = "KEY";
    encabezadoRow.appendChild(encabezadoKey);
    thead.appendChild(encabezadoRow);
    tabla.appendChild(thead);

    const tbody = document.createElement("tbody");

    palabras.forEach(palabra => {
        const fila = document.createElement("tr");
        const celda = document.createElement("td");
        celda.textContent = `$lang["${palabra}"]`;
        celda.classList.add("tabla-celda");
        fila.appendChild(celda);
        tbody.appendChild(fila);
    });

    tabla.appendChild(tbody);

    resultadosDiv.appendChild(tabla);
}
