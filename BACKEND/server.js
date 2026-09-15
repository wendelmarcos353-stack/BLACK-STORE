require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const db = require("./config/database");
const produtosRoutes = require("./routes/produtos");

const app = express();

const PORT = process.env.PORT || 3000;

// ===============================
// MIDDLEWARES
// ===============================

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===============================
// ARQUIVOS ENVIADOS
// ===============================

app.use(
    "/uploads",
    express.static(path.join(__dirname, "..", "UPLOADS"))
);

// ===============================
// FRONTEND
// ===============================

app.use(express.static(path.join(__dirname, "..", "FRONTEND")));

// ===============================
// ROTAS DA API
// ===============================

app.use("/api/produtos", produtosRoutes);

// ===============================
// ROTA PRINCIPAL
// ===============================

app.get("/", (req, res) => {
    res.json({
        sucesso: true,
        mensagem: "BLACK STORE API funcionando!",
        versao: "1.0.0"
    });
});

// ===============================
// ROTA DE TESTE
// ===============================

app.get("/api", (req, res) => {
    res.json({
        sucesso: true,
        mensagem: "API da BLACK STORE funcionando!"
    });
});

// ===============================
// TESTE DO BANCO
// ===============================

app.get("/api/teste-banco", async (req, res) => {
    try {
        const [resultado] = await db.query("SELECT 1 AS teste");

        res.json({
            sucesso: true,
            mensagem: "Banco de dados funcionando!",
            resultado
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao acessar o banco de dados.",
            erro: error.message
        });
    }
});

// ===============================
// INICIAR SERVIDOR
// ===============================

app.listen(PORT, () => {
    console.log("=================================");
    console.log("       BLACK STORE API");
    console.log("=================================");
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`http://localhost:${PORT}`);
    console.log("=================================");
});