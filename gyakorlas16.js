tomb = [ "Andras", "Bea", "Zsolt" ];
kiir();
function hozzair(){
    var nev = document.getElementById("nev").value;
    tomb.push(nev);
    tomb.sort();
    kiir();
}

function kiir(){
    var tabla = document.createElement("table");
    for (var i = 0; i <tomb.length; i++){
        sor = document.createElement("tr");
        cella = document.createElement("td");
        cella.innerHTML = tomb[i];


        cella.onclick=function(i){
            tomb.splice(i,1);
            kiir();
        };
        sor.appendChild(cella);
        tabla.appendChild(sor);
    }
    ki.innerHTML= "";
    ki.appendChild(tabla);
}

