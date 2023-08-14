document.addEventListener("DOMContentLoaded", function () {
    var generarBtn = document.getElementById("generarBtn");
    generarBtn.addEventListener("click", generar_tabla);
});

function generar_tabla() {
    var tabla = document.createElement("table");


    for (var i = 0; i <= 2; i++) {
        var fila = document.createElement("tr");

        for (var j = 0; j <= 2; j++) {
            var celda = document.createElement("td");
            celda.innerHTML = "Celda de la fila " + i + ", columna " + j;
            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }

    document.body.appendChild(tabla);
}
