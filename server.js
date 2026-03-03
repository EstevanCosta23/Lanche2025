require('dotenv').config();
const express = require("express");
const app = express();
const { sequelize } = require("./database/models");
const ProductController = require("./controllers/productController");
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger');
const routes = require('./routes');

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use(routes);



sequelize.sync().then(() => {
  console.log("Database connected and synchronized.");
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}).catch(err => {
  console.error("Error connecting to database:", err);
});
