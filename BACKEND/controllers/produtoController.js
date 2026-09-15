const db = require("../config/database");

// ===============================
// LISTAR PRODUTOS
// ===============================

async function listarProdutos(req, res) {
    try {
        const [produtos] = await db.query(
            "SELECT * FROM produtos WHERE ativo = TRUE ORDER BY id DESC"
        );

        res.json({
            sucesso: true,
            produtos: produtos
        });

    } catch (error) {
        console.error("Erro ao buscar produtos:", error);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao buscar produtos."
        });
    }
}

// ===============================
// BUSCAR PRODUTO POR ID
// ===============================

async function buscarProduto(req, res) {
    try {
        const { id } = req.params;

        const [produtos] = await db.query(
            "SELECT * FROM produtos WHERE id = ? AND ativo = TRUE",
            [id]
        );

        if (produtos.length === 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: "Produto não encontrado."
            });
        }

        res.json({
            sucesso: true,
            produto: produtos[0]
        });

    } catch (error) {
        console.error("Erro ao buscar produto:", error);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao buscar produto."
        });
    }
}

// ===============================
// CADASTRAR PRODUTO
// ===============================

async function cadastrarProduto(req, res) {
    try {
        const {
            nome,
            descricao,
            preco,
            categoria,
            imagem
        } = req.body;

        if (!nome || preco === undefined) {
            return res.status(400).json({
                sucesso: false,
                mensagem: "Nome e preço são obrigatórios."
            });
        }

        const [resultado] = await db.query(
            `INSERT INTO produtos
            (nome, descricao, preco, categoria, imagem)
            VALUES (?, ?, ?, ?, ?)`,
            [
                nome,
                descricao || null,
                preco,
                categoria || null,
                imagem || null
            ]
        );

        res.status(201).json({
            sucesso: true,
            mensagem: "Produto cadastrado com sucesso!",
            produto_id: resultado.insertId
        });

    } catch (error) {
        console.error("Erro ao cadastrar produto:", error);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao cadastrar produto."
        });
    }
}

// ===============================
// EXPORTAR
// ===============================

module.exports = {
    listarProdutos,
    buscarProduto,
    cadastrarProduto
};