import { NextFunction, Request, Response } from "express"
import { createCustomerValidator } from "./customer-validator"

const createCustomer = () => {
    return [
        createCustomerValidator(),
        (req: Request, res: Response) => {
            res.json({
                "meta": {
                    "version": "0.0.1",
                    "server": "hostname",
                    "recordCount": 1,
                    "limit": 50,
                    "offset": 0,
                },
                "records": [
                    {
                        "uuid": "aa2fab0c-bbf7-4744-bfa3-4c46bf255c73",
                        "name": "users's full name",
                        "document": {
                            "cpf": "99999999999",
                            "cnpj": "11111111111111"
                        },
                        "concact": {
                            "email": "example@mail.com",
                            "phone": "(16) 99393-1234"
                        },
                        "createdAt": "2022-01-30T21:17:39.103Z",
                        "updatedAt": "2022-01-30T21:17:39.103Z"
                    }
                ]
            });
        }
    ]
}

export {
    createCustomer
}