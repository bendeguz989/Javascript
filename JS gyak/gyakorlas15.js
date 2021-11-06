var ki = document.getElementById("ki");
var tomb = [];
for (var i = 1; i <= 10; i++){
    var szam = Math.floor(Math.random()*100+1);
    tomb.push(szam);
}

var tabla = document.createElement("table");
for (var i = 0; i < tomb.length; i++){
    var sor = document.createElement("tr");
    var cella = document.createElement("td");
    cella.innerHTML = tomb[i];
    cella.className = "paros";
    sor.appendChild(cella);
    tabla.appendChild(sor);
}
ki.appendChild(tabla);