import { Seeder } from "../umzug";

const seedCustomers = [
];

export const up: Seeder = async ({ context: sequelize }) => {
	await sequelize.getQueryInterface().bulkInsert('customer', seedCustomers);
};

export const down: Seeder = async ({ context: sequelize }) => {
	await sequelize.getQueryInterface().bulkDelete('customer', { uuid: seedCustomers.map(({ uuid }) => uuid) });
};