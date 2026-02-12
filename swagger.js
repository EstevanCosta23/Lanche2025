const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Lanche2025 API',
      version: '1.0.0',
      description: 'API para gerenciamento de pedidos e cardápio do Lanche2025',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor Local',
      },
    ],
    components: {
      schemas: {
        Product: {
          type: 'object',
          required: ['category_id', 'name', 'price'],
          properties: {
            id: {
              type: 'integer',
              description: 'ID auto-gerado do produto',
            },
            category_id: {
              type: 'integer',
              description: 'ID da categoria do produto',
            },
            name: {
              type: 'string',
              description: 'Nome do produto',
            },
            description: {
              type: 'string',
              description: 'Descrição detalhada do produto',
            },
            price: {
              type: 'number',
              format: 'float',
              description: 'Preço do produto',
            },
            is_available: {
              type: 'boolean',
              description: 'Disponibilidade do produto',
              default: true,
            },
            created_at: {
              type: 'string',
              format: 'date-time',
            },
            updated_at: {
              type: 'string',
              format: 'date-time',
            }
          },
        },
      },
    },
  },
  apis: ['./server.js'],
};

const specs = swaggerJsdoc(options);
module.exports = specs;