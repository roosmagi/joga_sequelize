'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('Authors', 'id', {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }),
      queryInterface.changeColumn('Authors', 'name', {
        allowNull: false,
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn('Authors', 'createdAt', {
        allowNull: false,
        type: Sequelize.DATE
      }),
      queryInterface.changeColumn('Authors', 'updatedAt', {
        allowNull: false,
        type: Sequelize.DATE
      })
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Authors');
  }
};
