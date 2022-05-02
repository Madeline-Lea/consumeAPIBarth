
const inputDestino = document.getElementById("destino");
const inputOrigem = document.getElementById("origem");
const inputMensagem = document.getElementById("txt-msg");
const elemChatArea = document.getElementById('chat');

var clear = null;

var obj = {
  origem: inputOrigem.value,
  destino: inputDestino.value,
  mensagem: inputMensagem.value
};

function receber() {
  var url =
    `https://barth.com.br/ApiChatCliqx/chat/verificarMensagem.php?origem=${inputOrigem.value}&lt;nome_origem&gt;&amp;destino=${inputDestino.value}&lt;nome_destino&gt`;

  var configuracao = {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(
    url, configuracao
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
        text: "Os dados foram recebidos com sucesso.",
        icon: "success",
        confirmButtonText: "Fechar",
      });
    })
    .catch((err) => {
      console.log(err);
      Swal.fire({
        title: "Error",
        text: "Os dados não foram recebidos: " + err,
        icon: "error",
        confirmButtonText: "Fechar",
      });
    });
}
function receberFetch() {
  var url =
    `https://barth.com.br/ApiChatCliqx/chat/verificarMensagem.php?origem=${inputOrigem.value};&amp;destino=${inputDestino.value}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
      Swal.fire({
        title: "Oops",
        text: "An error has ocorred trying to fetch data. \n" + err,
        icon: "question",
      });
    });
}
var receberAjax = () => {
  var xhr = new XMLHttpRequest();
  var url =
    `https://barth.com.br/ApiChatCliqx/chat/verificarMensagem.php?origem=${inputOrigem.value}&destino=${inputDestino.value}`;
  console.log(xhr.status);
  xhr.open("GET", url);
  xhr.send(null);
  var response = xhr.responseText;
  console.log(response);

  xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
      console.log(xhr.status);
      if (xhr.status == 200) {

        elemChatArea.innerHTML = '';

        res = JSON.parse(xhr.responseText);

        for(let i = 0; i < res.length; i++){
          var li = document.createElement('li');
          var dt = document.createElement('dt');
          var dtText = document.createTextNode(res[i].origem)
          dt.appendChild(dtText);
          li.appendChild(dt);

          var dd = document.createElement('dd');
          var ddText = document.createTextNode(res[i].mensagem)
          dd.appendChild(ddText);
          li.appendChild(dd);
          
          elemChatArea.appendChild(li);
    }


        Swal.fire({
          title: "Tudo certo!!!",
          text: "Dados recebidos com êxito.",
          icon: "success"
        });
      } else if (xhr.status === 400 || xhr.status === 404) {
        Swal.fire({
          title: "Erro desconhecido",
          text: "Algo de errado aconteceu ao trazer os dados. \n Os dados não existem ou não foram encontrados",
          icon: "question "
        });
      }
    }
  };
};

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
};

var enviarAjax = () => {
  
  clearInterval(clear);
  
  var xhr = new XMLHttpRequest();
  
  obj = {
    origem: inputOrigem.value,
    destino: inputDestino.value,
    mensagem: inputMensagem.value
  };
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
      if (xhr.status === 201) {
       
        clear = setInterval(function(){
          receberAjax();
      },3000)
  }
       
        Swal.fire({
          title: "Tudo certo",
          text: "Os dados foram criados com sucesso.",
          icon: "success",
          confirmButtonText: "Fechar",
        });
      } else if(xhr.status === 400 || xhr.status === 404){
        Swal.fire({
          title: "Error",
          text: "Os dados não foram enviados. \n Ou não foram encontrados",
          icon: "error",
          button: "ok",
        });
      }
    }
    console.log(obj);
  };
