
const inputDestino = document.getElementById("destino");
const inputOrigem = document.getElementById("origem");
const inputMensagem = document.getElementById("txt-msg");

var obj = {
  origem: inputOrigem.value,
  destino: inputDestino.value,
  mensagem: inputMensagem.value,
};
// var $ = undefined;
// var ajax;

function receber() {
  var url = "https://barth.com.br/ApiChatCliqx/chat/verificarMensagem.php?origem=joao&lt;nome_origem&gt;&amp;destino=leo&lt;nome_destino&gt"
  fetch(url)
  .then((response) => {
      return response.json();
  })
  .then((data) => {
      console.log(data);
  }).catch((err) => {
      console.log(err);
      Swal.fire({
          title: 'Oops',
          text: 'An error has ocorred trying to fetch data.',
          icon: 'question'
      });
  })
}

var receberAjax = () => {
    var xhr = new XMLHttpRequest();
    var url = "https://barth.com.br/ApiChatCliqx/chat/verificarMensagem.php?origem=joao&lt;nome_origem&gt;&amp;destino=leo&lt;nome_destino&gt";
    console.log(xhr.status);
    xhr.open(
      "GET", url);
    xhr.send(JSON.stringify(obj));
  
    xhr.onreadystatechange = function () {
      console.log(xhr.readyState);
      if (xhr.readyState === 4) {
        console.log(xhr.status);
        if (xhr.status == 200) {
            Swal.fire({
                title: 'Success',
                text: 'The data has been recieved',
                icon: 'success'
            });
        } else if(xhr.status === 400 || xhr.status === 404){
            Swal.fire({
                title: 'Unknown Error',
                text: 'Something wrong has ocorred',
                icon: 'error'
            });
        }
      }
      console.log(obj);
    };
}

var enviar = () => {
  var configuracao = {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(
    "https://barth.com.br/ApiChatCliqx/chat/inserirMensagem.php",
    configuracao
  )
    .then((configuracao) => {
      return configuracao.json();
    })
    .then(() => {
      console.log(obj);
    })
    .then(() => {
      console.log(configuracao);
    })
    .then(() => {
      Swal.fire({
        title: "Tudo certo",
        text: "Os dados foram criados com sucesso.",
        icon: "success",
        confirmButtonText: "Fechar",
      });
    })
    .catch((err) => {
      console.log(err);
      Swal.fire({
        title: "Error",
        text: "Os dados não foram enviados.",
        icon: "error",
        button: "ok",
      });
    });
}

var enviarAjax = () => {
  var xhr = new XMLHttpRequest();
  console.log(inputDestino.value, inputOrigem.value);
  xhr.open(
    "POST",
    "https://barth.com.br/ApiChatCliqx/chat/inserirMensagem.php"
  );
  xhr.send(JSON.stringify(obj));

  xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
      console.log(xhr.status);
      if (xhr.status == 200) {
      }
    }
    console.log(obj);
  };
}
// fim pesquisa

// var send = () => {
//     const obj = {
//         origem:  document.getElementById('origem').value,
//         destino: document.getElementById('destino').value,
//         mensagem: document.getElementById('txt-msg').value
//     };
//         console.log(obj);

//           var ajax = ({
//             url: "https://barth.com.br/ApiChatCliqx/chat/inserirMensagem.php",
//             method : "POST",
//             contentType : 'application/json',
//             dataType : 'json',
//             data : JSON.stringify(obj),
//             async: false
//         });done((res) => {
//             console.log(res)
//         });
//     };
