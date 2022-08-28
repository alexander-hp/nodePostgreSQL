const { Model, DataTypes, Sequelize } = require('sequelize');

// ? nombre de la tabla de BD
const USER_TABLE = 'users';
// ? Schema, define la estructura de BD
const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    file: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class User extends Model {
  // ? son static porque no necesito declaracion para estos metodos
  static associate() {
    // * Models, associate
  }

  static config(sequelize) {
    return {
      // ? ponemos la config que tendra
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      // ? timestamps: crear campos por defecto
      timestamps: false,
    };
  }
}

module.exports = {
  UserSchema,
  User,
  USER_TABLE,
};
