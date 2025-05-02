var leonardo = window.document.getElementById("leonardo");
var samanta = window.document.getElementById("samanta");
var bruna = window.document.getElementById("bruna");
var setadireita = window.document.getElementById("setadireita");
var setaesquerda = window.document.getElementById("setaesquerda");
 
function RolarParaDireita() {
    leonardo.style = "display: none;"
    bruna.style = "display: flex; margin-left: -200px;"
    samanta.style = "margin-left: 40px;"
    setadireita.style = "display: none;"
    setaesquerda.style = "display: flex; margin-right:-100px"
}

function RolarParaEsquerda() {
    leonardo.style = "dispplay:flex;"
    bruna.style = "display: none;"
    samanta.style = "display: flex; margin-left: 250px;" 
    setadireita.style = "display: flex;"
    setaesquerda.style = "display: none;"
}

