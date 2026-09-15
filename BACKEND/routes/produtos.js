const express = require("express");

const router = express.Router();

const produtoController = require("../controllers/produtoController");

// Listar produtos
router.get("/", produtoController.listarProdutos);

// Buscar produto
router.get("/:id", produtoController.buscarProduto);

// Cadastrar produto
router.post("/", produtoController.cadastrarProduto);

module.exports = router;