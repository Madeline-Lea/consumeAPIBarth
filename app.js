// Configuração da Aplicação Express

const express = require("express"); // importando o módulo

const app = express(); // criando a estância da aplicação

const port = 3001; // a porta que a aplicação estará rodando

app.use(express.static("./public")); // pasta de conteúdo estáticos (css, js e afins de mídia)

app.set("view engine", "ejs"); // adicionando um motor de visualização.

// página home da aplicação
app.get("/home", (req, res) => {
  res.render("index.ejs");
});

// página para redirecionar ao repositório da api
app.get("/gitApi", (req, res) => {
  res.send(
    '<a target="blank" href="https://github.com/wagnerbarth/ApiChatCliqx">Clique aqui</a>'
  );
});

// a porta que o servidor está escutando.
app.listen(port, () => {
  console.log("server running into 3001");
});

module.exports = express;
