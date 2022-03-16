import { Router } from 'express';
import { createCustomer, findOneCustomer } from './customer-controller';

const route = Router();

route.get('/v1/customers/:id', ...findOneCustomer())
route.post('/v1/customers', ...createCustomer());

export default route;