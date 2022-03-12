import { Sequelize } from 'sequelize-typescript'
import { Customer } from './api/customer/customer-model'

const sequelize = new Sequelize({
  database: 'minioms',
  dialect: 'mysql',
  username: 'root',
  password: ''
});

sequelize.addModels([
    Customer
]);

export {
    sequelize
}