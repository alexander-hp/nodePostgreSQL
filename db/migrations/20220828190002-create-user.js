'use strict';

const { UserSchema, USER_TABLE } = require('./../models/user.model');

module.exports = {
  // *Creacion de historial de tabla
  async up(queryInterface, sequelize) {
    // ? queryInterface nos trae las API que necesitamos
    await queryInterface.createTable(USER_TABLE, UserSchema);
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  // * Reversion de los cambios, como en git
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE);
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
