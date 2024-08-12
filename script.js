let elementoNome = document.getElementById("nome").value
let botaosubmeter= document.getElementById("botao-submeter");

botaosubmeter.addEventListener("click",submeter);

console.log(elementoNome);

function submeter() {
    let elementoNome = document.getElementById("nome").value;
    console.log(elementoNome)
}