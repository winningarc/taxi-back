'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('User', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
      },
      nickname: Sequelize.STRING,
      phone: Sequelize.INTEGER,
      password: Sequelize.STRING,
      salt: Sequelize.STRING,
      isDriver: Sequelize.BOOLEAN,
      arrivesAt: Sequelize.DATE,
      waitingSince: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('User');
  },
};
