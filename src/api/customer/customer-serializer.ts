import { CustomerCreationRequestHandler, CustomerFindOneRequestHandler } from "./customer-type";

const createCustomerSerializer: CustomerCreationRequestHandler = (req, res, next) => {
    const { customerCreated } = res.locals;
    res.locals.customerToRespond = {
        uuid: customerCreated.uuid,
        name: customerCreated.name,
        contact: {
            email: customerCreated.email,
            phone: customerCreated.phone
        },
        document: {
            cpf: customerCreated.cpf,
            cnpj: customerCreated.cnpj
        },
        createdAt: customerCreated.createdAt.toISOString(),
        updatedAt: customerCreated.updatedAt.toISOString()
    }
    next();
}

const findCustomerSerializer: CustomerFindOneRequestHandler = (req, res, next) => {
    const { customerFind } = res.locals;
    if(customerFind !== null){
        res.locals.customerToRespond = {
            uuid: customerFind.uuid,
            name: customerFind.name,
            contact: {
                email: customerFind.email,
                phone: customerFind.phone
            },
            document: {
                cpf: customerFind.cpf,
                cnpj: customerFind.cnpj
            },
            createdAt: customerFind.createdAt.toISOString(),
            updatedAt: customerFind.updatedAt.toISOString()
        }
    }
    next();
}

export {
    createCustomerSerializer,
    findCustomerSerializer
}