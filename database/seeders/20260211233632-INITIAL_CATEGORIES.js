'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        name: 'Lanches',
        description: 'Hambúrgueres, sanduíches e wraps'
      },
      {
        name: 'Bebidas',
        description: 'Refrigerantes, sucos e águas'
      },
      {
        name: 'Sobremesas',
        description: 'Doces, pudins e sorvetes'
      },
      {
        name: 'Combos',
        description: 'Combinações promocionais'
      },
      {
        name: 'Acompanhamentos',
        description: 'Batatas, nuggets e porções'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', {
      name: ['Lanches', 'Bebidas', 'Sobremesas', 'Combos', 'Acompanhamentos']
    }, {});
  }
};
