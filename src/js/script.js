var vetor = [];
function adicionar(){
    var numero = Number(document.getElementById('num').value);
    if(numero > 100 || numero <= 0){
        alert("ERRO - Por favor, insira somente números de 1 a 100.");
    }else{
        let item = document.getElementById('lista');
        vetor.push(numero);
        item.innerHTML += `<li>Adicionado o valor ${numero}</li>`;
        return vetor;
    }
}
function finalizar(adicionar){
    if(vetor.length == 0){
        alert("ERRO - Por favor, insira números e aperte 'Adicionar'.")
    } else{
        let maior = Math.max(...vetor)
        let menor = Math.min(...vetor)
        let soma = 0;
        for(let i in vetor){
            soma += vetor[i];
        }
        let media = soma / vetor.length
        let analisando = document.getElementById('analise')
        analisando.innerHTML += `<li>Ao todo, temos ${vetor.length} cadastrados.</li>`
        analisando.innerHTML += `<li>O maior deles é o ${maior}.</li>`
        analisando.innerHTML += `<li>O menor deles é o ${menor}.</li>`
        analisando.innerHTML += `<li>A soma deles é igual a ${soma}.</li>`
        analisando.innerHTML += `<li>A média entre eles é igual a ${media}.</li>`
    }
}