'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const categories = await queryInterface.sequelize.query(
      'SELECT id, name FROM categories',
      { type: Sequelize.QueryTypes.SELECT }
    );

    const categoriesMap = {};
    categories.forEach(cat => {
      categoriesMap[cat.name] = cat.id;
    });

    await queryInterface.bulkInsert('products', [
      {
        category_id: categoriesMap['Lanches'],
        name: 'X-Burger',
        description: 'Hambúrguer, queijo, alface e tomate',
        price: 15.90,
        is_available: true
      },
      {
        category_id: categoriesMap['Lanches'],
        name: 'X-Bacon',
        description: 'Hambúrguer, bacon, queijo e molho especial',
        price: 18.50,
        is_available: true
      },
      {
        category_id: categoriesMap['Lanches'],
        name: 'X-Salada',
        description: 'Hambúrguer, queijo, salada completa',
        price: 16.90,
        is_available: true
      },
      {
        category_id: categoriesMap['Lanches'],
        name: 'X-Tudo',
        description: 'Hambúrguer, bacon, ovo, queijo e salada',
        price: 22.90,
        is_available: true
      },
      {
        category_id: categoriesMap['Lanches'],
        name: 'Wrap de Frango',
        description: 'Frango grelhado, alface e molho',
        price: 17.50,
        is_available: true
      },

      {
        category_id: categoriesMap['Bebidas'],
        name: 'Coca-Cola Lata',
        description: 'Refrigerante 350ml',
        price: 5.00,
        is_available: true
      },
      {
        category_id: categoriesMap['Bebidas'],
        name: 'Guaraná Lata',
        description: 'Refrigerante 350ml',
        price: 5.00,
        is_available: true
      },
      {
        category_id: categoriesMap['Bebidas'],
        name: 'Suco Natural Laranja',
        description: 'Suco natural 500ml',
        price: 7.50,
        is_available: true
      },
      {
        category_id: categoriesMap['Bebidas'],
        name: 'Água Mineral',
        description: 'Sem gás 500ml',
        price: 3.00,
        is_available: true
      },
      {
        category_id: categoriesMap['Bebidas'],
        name: 'Milkshake Chocolate',
        description: '400ml',
        price: 9.90,
        is_available: true
      },

      {
        category_id: categoriesMap['Sobremesas'],
        name: 'Pudim',
        description: 'Pudim caseiro de leite condensado',
        price: 6.00,
        is_available: true
      },
      {
        category_id: categoriesMap['Sobremesas'],
        name: 'Mousse de Maracujá',
        description: 'Mousse artesanal',
        price: 6.50,
        is_available: true
      },
      {
        category_id: categoriesMap['Sobremesas'],
        name: 'Sorvete 2 Bolas',
        description: 'Chocolate e creme',
        price: 7.00,
        is_available: true
      },
      {
        category_id: categoriesMap['Sobremesas'],
        name: 'Brownie',
        description: 'Brownie com calda',
        price: 8.50,
        is_available: true
      },

      {
        category_id: categoriesMap['Combos'],
        name: 'Combo X-Burger',
        description: 'X-Burger + Batata + Refrigerante',
        price: 24.90,
        is_available: true
      },
      {
        category_id: categoriesMap['Combos'],
        name: 'Combo X-Bacon',
        description: 'X-Bacon + Batata + Refrigerante',
        price: 27.90,
        is_available: true
      },
      {
        category_id: categoriesMap['Combos'],
        name: 'Combo Wrap',
        description: 'Wrap + Suco + Batata',
        price: 25.50,
        is_available: true
      },

      {
        category_id: categoriesMap['Acompanhamentos'],
        name: 'Batata Frita Pequena',
        description: 'Porção individual',
        price: 6.00,
        is_available: true
      },
      {
        category_id: categoriesMap['Acompanhamentos'],
        name: 'Batata Frita Média',
        description: 'Porção média',
        price: 9.00,
        is_available: true
      },
      {
        category_id: categoriesMap['Acompanhamentos'],
        name: 'Batata Frita Grande',
        description: 'Porção grande',
        price: 12.00,
        is_available: true
      },
      {
        category_id: categoriesMap['Acompanhamentos'],
        name: 'Nuggets (6 unid)',
        description: 'Nuggets de frango',
        price: 8.50,
        is_available: true
      },
      {
        category_id: categoriesMap['Acompanhamentos'],
        name: 'Onion Rings',
        description: 'Anéis de cebola empanados',
        price: 7.90,
        is_available: true
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', {
      name: [
        'X-Burger', 'X-Bacon', 'X-Salada', 'X-Tudo', 'Wrap de Frango',
        'Coca-Cola Lata', 'Guaraná Lata', 'Suco Natural Laranja', 'Água Mineral', 'Milkshake Chocolate',
        'Pudim', 'Mousse de Maracujá', 'Sorvete 2 Bolas', 'Brownie',
        'Combo X-Burger', 'Combo X-Bacon', 'Combo Wrap',
        'Batata Frita Pequena', 'Batata Frita Média', 'Batata Frita Grande', 'Nuggets (6 unid)', 'Onion Rings'
      ]
    }, {});
  }
};
