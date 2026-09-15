let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];


// ========================================
// ADICIONAR PRODUTO AO CARRINHO
// ========================================

async function adicionarAoCarrinho(id) {

    try {
        const resposta = await fetch(
            `http://localhost:3000/api/produtos/${id}`
        );

        if (!resposta.ok) {
            throw new Error("Produto não encontrado.");
        }

        const dados = await resposta.json();

        if (!dados.sucesso || !dados.produto) {
            throw new Error("Produto não encontrado.");
        }

        const produto = dados.produto;

        const campoQuantidade =
            document.getElementById("quantidade");

        const quantidade =
            campoQuantidade
                ? Number(campoQuantidade.value)
                : 1;

        for (let i = 0; i < quantidade; i++) {
            carrinho.push(produto);
        }

        localStorage.setItem(
            "carrinho",
            JSON.stringify(carrinho)
        );

        alert("Produto adicionado ao carrinho!");

    } catch (erro) {

        console.error("Erro:", erro);

        alert(
            "Erro ao adicionar produto: " +
            erro.message
        );
    }
}