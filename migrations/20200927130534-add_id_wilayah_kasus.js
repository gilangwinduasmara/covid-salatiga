'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'kasus',
      'id_wilayah',
      Sequelize.INTEGER
    );

  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('kasus', 'id_wilayah')
  }
};

