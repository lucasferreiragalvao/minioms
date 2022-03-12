import { Model } from "sequelize-typescript"

type CustomerCreationAttributes = {
    name: string;
    cpf?: string;
    cnpj?: string;
    email: string;
    phone?: string;
}

type CustomerAttributes = CustomerCreationAttributes & {
    uuid: string;
    createdAt: string;
    updatedAt: string;
}

type CustomerCreationRequest = {
    name: string;
    document: {
        cpf?: string;
        cnpj?: string;
    },
    contact: {
        email: string;
        phone?: string;
    }
}

export abstract class CustomerModel extends 
Model<CustomerAttributes, CustomerCreationAttributes>{};