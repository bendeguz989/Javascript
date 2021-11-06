aru =[
    ["Alma", 100]
    ["fa", 50]
    ["vaj",30]
]
kiir()

function hozzair() {
    var nev = document.getElementById("nev");
    var ar = document.getElementById("ar").value;
    var egyeb = document.getElementById("egyeb");
    var uj = [nev, ar];

    if (egyeb.checked)
    {
        aru.push(uj);
    }
    else{

        aru.push(uj);
    }
    kiir();
}
function kiir(){
    var tabla = document.createElement("table");
    for (var i = 0; i <tomb.length; i++){
        sor = document.createElement("tr");
        cella = document.createElement("td");
        cella.innerHTML = aru[i];


        cella.onclick=function(i){
            aru.splice(i,1);
            kiir();
        };
        sor.appendChild(cella);
        tabla.appendChild(sor);
    }
    ki.innerHTML= "Áru: ";
    ki.appendChild(tabla);
}
