import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
const DB_HOST=process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_DIALECT = "mysql";

const connection = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: DB_DIALECT,
        port: DB_PORT,
        define: {
            timestamps: false,
            freezeTableName: true
        }
    }
);

async function testConnection() {
    try {
        await connection.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();

export default connection;