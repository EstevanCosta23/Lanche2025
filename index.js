const express = require("express");
const app = express();

let menu = require("./data/menu");


app.use(express.json());


app.get("/menu", (req, res) => {
  const { categoria } = req.query;


  if (categoria) {
    const itensFiltrados = menu.filter(item => item.categoria.toLowerCase() === categoria.toLowerCase());
    return res.json(itensFiltrados);
  }


  res.json(menu);
});


app.get("/menu/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = menu.find(m => m.id === id);

  if (!item) {
    return res.status(404).json({ mensagem: "Item não encontrado" });
  }

  res.json(item);
});



app.post("/menu", (req, res) => {
 
  const maxId = menu.length > 0 ? Math.max(...menu.map(m => m.id)) : 0;
  
  const novoItem = {
    id: maxId + 1,
    ...req.body
  };

  menu.push(novoItem);
  res.status(201).json(novoItem); // Status 201: Created
});


app.put("/menu/:id", (req, res) => {
  const id = Number(req.params.id);
  const itemIndex = menu.findIndex(m => m.id === id);

  if (itemIndex === -1) {
    return res.status(404).json({ mensagem: "Item não encontrado" });
  }
  

  const itemAtualizado = {
    ...menu[itemIndex],
    ...req.body,
    id: id 
  };

  
  menu[itemIndex] = itemAtualizado;

  res.json(itemAtualizado);
});


app.delete("/menu/:id", (req, res) => {
  const id = Number(req.params.id);
  const menuInicialLength = menu.length;
  
  
  menu = menu.filter(m => m.id !== id);

  if (menu.length === menuInicialLength) {
    return res.status(404).json({ mensagem: "Item não encontrado" });
  }
  
  
  res.status(204).send(); 
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
