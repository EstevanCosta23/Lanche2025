const express = require("express");
const app = express();

// Usar let em vez de const para deixar claro que o array será modificado.
let menu = require("./data/menu");

// Middleware para o Express entender JSON no corpo das requisições
app.use(express.json());

// [GET] /menu - Retorna todo o cardápio
app.get("/menu", (req, res) => {
  res.json(menu);
});

// [GET] /menu/:id - Retorna um item específico pelo ID
app.get("/menu/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = menu.find(m => m.id === id);

  if (!item) {
    return res.status(404).json({ mensagem: "Item não encontrado" });
  }

  res.json(item);
});


// [POST] /menu - Cria um novo item no cardápio
app.post("/menu", (req, res) => {
  // Lógica de ID mais segura: Pega o maior ID existente e soma 1.
  const maxId = menu.length > 0 ? Math.max(...menu.map(m => m.id)) : 0;
  
  const novoItem = {
    id: maxId + 1,
    ...req.body
  };

  menu.push(novoItem);
  res.status(201).json(novoItem); // Status 201: Created
});

// [PUT] /menu/:id - Atualiza um item existente
app.put("/menu/:id", (req, res) => {
  const id = Number(req.params.id);
  const itemIndex = menu.findIndex(m => m.id === id);

  if (itemIndex === -1) {
    return res.status(404).json({ mensagem: "Item não encontrado" });
  }
  
  // Cria o item atualizado
  const itemAtualizado = {
    ...menu[itemIndex],
    ...req.body,
    id: id // Garante que o ID não seja alterado
  };

  // Substitui o item antigo pelo novo
  menu[itemIndex] = itemAtualizado;

  res.json(itemAtualizado);
});

// [DELETE] /menu/:id - Deleta um item
app.delete("/menu/:id", (req, res) => {
  const id = Number(req.params.id);
  const menuInicialLength = menu.length;
  
  // Recria o array sem o item com o ID correspondente
  menu = menu.filter(m => m.id !== id);

  if (menu.length === menuInicialLength) {
    return res.status(404).json({ mensagem: "Item não encontrado" });
  }
  
  // Retorna status 204: No Content, como é comum em APIs REST para DELETE
  res.status(204).send(); 
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
