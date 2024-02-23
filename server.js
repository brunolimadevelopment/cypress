const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Configurando o middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Rota para a página inicial
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "nome-do-seu-arquivo.html"));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
