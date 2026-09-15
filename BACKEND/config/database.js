const mysql = require("mysql2/promise");

require("dotenv").config();

const pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function testarConexao() {
    try {
        const connection = await pool.getConnection();

        console.log("=================================");
        console.log("       BANCO DE DADOS");
        console.log("=================================");
        console.log("MySQL conectado com sucesso!");
        console.log(`Banco: ${process.env.DATABASE_NAME}`);
        console.log("=================================");

        connection.release();

    } catch (error) {
        console.error("❌ Erro ao conectar ao MySQL:");
        console.error(error);
    }
}

testarConexao();

module.exports = pool;