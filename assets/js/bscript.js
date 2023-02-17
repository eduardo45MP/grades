//Essa função calcula a média das notas do aluno e exibe uma mensagem com o nome do aluno e a media.
function calcular(){
    const nome = document.getElementById("nome").value; //Recebe o nome do aluno
    //Recebem as notas
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    const n3 = parseFloat(document.getElementById("n3").value);
    const n4 = parseFloat(document.getElementById("n4").value);
    let media = (n1 + n2 + n3 + n4)/4 //Calcula a média
    let resultado = document.getElementById("media"); //Conecta com o html
    resultado.innerHTML = "A média de " + nome + " é: " + media; //Exibe a mensagem
}