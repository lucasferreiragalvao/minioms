import { CREATED, NOT_FOUND, OK } from "http-status";
import { getCustomerById, persistCustomer } from "./customer-business";
import { createCustomerDeserializer } from "./customer-deserializer";
import { createCustomerSerializer, findCustomerSerializer } from "./customer-serializer";
import { CustomerCreationRequestHandler, CustomerFindOneRequestHandler } from "./customer-type";
import { createCustomerValidator, getCustomerValidator } from "./customer-validator";

const createCustomer = (): CustomerCreationRequestHandler[] => {
    return [
        createCustomerValidator(),
        createCustomerDeserializer,
        persistCustomer,
        createCustomerSerializer,
        (req, res) => { res.status(CREATED).json(res.locals.customerToRespond) }
    ]
}

const findOneCustomer = (): CustomerFindOneRequestHandler[] => {
    return [
        getCustomerValidator(),
        getCustomerById,
        findCustomerSerializer,
        (req, res) => {
            if(res.locals.customerToRespond !== undefined){
                res.status(OK).json(res.locals.customerToRespond);
            }else {
                res.status(NOT_FOUND).json();
            }
        }
    ]
}

export {
    createCustomer,
    findOneCustomer
};
