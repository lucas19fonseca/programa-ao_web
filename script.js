let elementoNome = document.getElementById("nome").value
let botaosubmeter= document.getElementById("botao-submeter");

botaosubmeter.addEventListener("click",submeter);


function submeter() {
    let elementoNome = document.getElementById("nome").value;
    let elementoIdade = document.getElementById("idade").value;
    let elementoEmail = document.getElementById("email").value;

    console.log(elementoNome);
    console.log(elementoIdade);
    console.log(elementoEmail);

}