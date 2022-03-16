import { Customer } from "./customer-model";
import { CustomerCreationRequestHandler, CustomerFindOneRequestHandler } from "./customer-type";

const persistCustomer: CustomerCreationRequestHandler = async (req, res, next) => {
    try {
        const { customerToCreate } = res.locals;
        res.locals.customerCreated = await Customer.create(customerToCreate);
        next();
    } catch(error) {
        next(error);
    }
}

const getCustomerById: CustomerFindOneRequestHandler = async (req, res ,next) => {
    try {
        const uuid = req.params.id;
        res.locals.customerFind = await Customer.findByPk(uuid);
        next();
    } catch(error){
        next(error);
    }
}

export {
    persistCustomer,
    getCustomerById
}