'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkDelete('Tags', null, {}),
      queryInterface.bulkInsert("Tags", [
        { name: "yogapractice", createdAt: new Date(), updatedAt: new Date() },
        { name: "yogainspiration", createdAt: new Date(), updatedAt: new Date() },
        { name: "wellness", createdAt: new Date(), updatedAt: new Date() },
        { name: "nature", createdAt: new Date(), updatedAt: new Date() },
        { name: "spiritual", createdAt: new Date(), updatedAt: new Date() },
        { name: "sport", createdAt: new Date(), updatedAt: new Date() },
        { name: "yogateacher", createdAt: new Date(), updatedAt: new Date() },
      ])
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tags')
  }
};
