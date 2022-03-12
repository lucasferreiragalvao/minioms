import { Sequelize } from 'sequelize-typescript'
import { Customer } from './api/customer/customer-model'
import config from './config';

const sequelize = new Sequelize({
  database: config.mysql.database,
  host: config.mysql.host,
  port: config.mysql.port,
  dialect: 'mysql',
  username: config.mysql.username,
  password: config.mysql.password
});

sequelize.addModels([
    Customer
]);

export {
    sequelize
}