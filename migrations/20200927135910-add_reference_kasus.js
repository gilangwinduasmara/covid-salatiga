'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'kasus',
      'id_wilayah',{
        type: Sequelize.INTEGER,
        references: {
          model: 'wilayahs',
          key: 'id'
        }
      }
    );

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
