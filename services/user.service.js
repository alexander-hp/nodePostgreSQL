const boom = require('@hapi/boom');

// const getConnection = require('../libs/postgres');
const { models } = require('../libs/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    // ? vamos a crear un user para ello pasamos la data que
    // ? recibimos del front-end y si es valida por el schema
    // ? entonces funcionara
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    // const client = await getConnection();
    // const response = await client.query('Select * from tasks');
    // return response.rows;
    // ? aqui ya lo hacemos con ORM de sequelize
    const rta = await models.User.findAll();
    return rta;
  }

  async findOne(id) {
    // ? primero buscamos el usuario por id con primaryKey
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    // ? primero buscamos el usuario por id con primaryKey
    const user = await this.findOne(id);
    // ? despues lo actualizamos
    const rta = await user.update(changes);
    return rta;
    // return {
    //   id,
    //   changes,
    // };
  }

  async delete(id) {
    // ? primero buscamos el usuario por id con primaryKey
    const user = await this.findOne(id);
    // ? eliminamos el user
    await user.destroy();
    // ? retornamos el id que eliminamos
    return { id };
  }
}

module.exports = UserService;
