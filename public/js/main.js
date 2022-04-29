const inputDestino = document.getElementById('destino');
const inputOrigem = document.getElementById('origem');

function catchPerson () {
    var xhr = new XMLHttpRequest();
    console.log(inputDestino.value , inputOrigem.value)
}


function chat () {
    var xhr = new XMLHttpRequest();
    console.log(inputDestino.value , inputOrigem.value)
    // https://barth.com.br/ApiChatCliqx/chat/verificarMensagem.php?origem=${imputOrigem.value}&destino=${imputDestino.value};
    xhr.open("POST", "https://barth.com.br/ApiChatCliqx/chat/inserirMensagem.php");
    xhr.send(JSON.stringify(obj));

    xhr.onreadystatechange = function () {

        console.log(xhr.readyState)
        if (xhr.readyState === 4) {
            
            console.log(xhr.status)
            if (xhr.status == 200) {
          
            }
        }
    };  
}// fim pesquisa