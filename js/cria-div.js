function alertajogo(jogo){
    if(jogo != "rocket league" || jogo != "Rocket League"){
        alert("Jogo bom!!");
    }else{
        alert("Jogo ruim!!")
    }

}

function verificaTamanhoNome(){
    var nome = document.getElementById("nome").value;

    if(nome.length > 20){
        document.getElementById("nome").style.borderColor = "red";
        alert("Digite no maximo 20 Caracteres! Selecione  todo o texto, apague, e digite novamente!");
    }else{
        document.getElementById("nome").style.borderColor = "black";
    }
}

function verificaTamanhoIdade(){
    var idade = document.getElementById("idade").value

    if(idade > 99){
        alert("Eita! Você tem mais de 100 anos! Selecione  todo o texto, apague, e digite novamente!");
    }
}