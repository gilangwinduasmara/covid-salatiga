'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'kasus',
      'tanggal',
      Sequelize.DATE
    );

  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('kasus', 'tanggal')
  }
};
