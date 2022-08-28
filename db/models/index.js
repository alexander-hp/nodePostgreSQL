const { User, UserSchema } = require('./user.model');

function setupModels(sequelize) {
  // ? decimos que modelo User debe seguir UserSchema
  User.init(UserSchema, User.config(sequelize));
}

module.exports = setupModels;
