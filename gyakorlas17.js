tombf=[
    ["Feri",15]
    ["Béla", 19]
    ["András", 30]
];
tombl=[
    ["Andi",20]
    ["Anna",60]
    ["Kira",16]
];
kiir()

function hozzair() {
    var nev = document.getElementById("nev").value;
    var kor = document.getElementById("kor").value;
    var lany = document.getElementById("lany");
    var uj = [nev, kor];
    if (lany.checked){
        tomb.push(uj);
    }
    else{
        tombf.push(uj);
    }

    kiir();
}
function kiir(){
    tombf.sort(hasonlit);
    tombl.sort(hasonlit);
    var tabla = document.createElement("table");
    for (let i = 0; i <tomb.length; i++){
        var sor = document.createElement("tr");
        var cella = document.createElement("td");
        cella.innerHTML = tombl[i];

        sor.onclick=function(){
            tombl.splice(i, 1);
            kiir();
        }

        sor.appendChild(cella)
        tabla.appendChild(sor);
    }
    kil.innerHTML="<h1>Lányok</h1>";
    kil.appendChild(tabla);

    var tabla = document.createElement("table");
    for (let i = 0; i <tomb.length; i++){
        var sor = document.createElement("tr");
        var cella = document.createElement("td");
        cella.innerHTML = tombf[i];

        sor.onclick=function(){
            tombf.splice(i, 1);
            kiir();
        }

        sor.appendChild(cella)
        tabla.appendChild(sor);
    }
    kif.innerHTML="<h1>Fiúk</h1>";
    kif.appendChild(tabla);
}
function hasonlit(a,b){
    return b[1]-a[1];
}