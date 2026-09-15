document.addEventListener("DOMContentLoaded", () => {
    carregarProduto();
});

async function carregarProduto() {
    const container = document.getElementById("detalhe-produto");

    if (!container) {
        console.error("Elemento #detalhe-produto não encontrado.");
        return;
    }

    // Pega o ID da URL
    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get("id");

    if (!id) {
        container.innerHTML = `
            <p>Produto não encontrado.</p>
            <a href="produtos.html">Voltar para produtos</a>
        `;
        return;
    }

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

        container.innerHTML = `
            <div class="produto-detalhe">

                <div class="produto-detalhe-imagem">
                    ${
                        produto.imagem
                            ? `<img 
                                src="http://localhost:3000/uploads/produtos/${produto.imagem}"
                                alt="${produto.nome}"
                              >`
                            : `<div class="sem-imagem">
                                Sem imagem
                              </div>`
                    }
                </div>

                <div class="produto-detalhe-info">

                    <span class="produto-categoria">
                        ${produto.categoria || "Sem categoria"}
                    </span>

                    <h1>${produto.nome}</h1>

                    <p>
                        ${produto.descricao || "Sem descrição."}
                    </p>

                    <h2>
                        R$ ${Number(produto.preco)
                            .toFixed(2)
                            .replace(".", ",")}
                    </h2>

                    <label for="quantidade">
                        Quantidade:
                    </label>

                    <input
                        type="number"
                        id="quantidade"
                        min="1"
                        value="1"
                    >

                    <button
                        onclick="adicionarAoCarrinho(${produto.id})"
                    >
                        Adicionar ao carrinho
                    </button>

                    <br><br>

                    <a href="produtos.html">
                        ← Voltar para produtos
                    </a>

                </div>

            </div>
        `;

    } catch (error) {
        console.error("Erro:", error);

        container.innerHTML = `
            <p>Não foi possível carregar o produto.</p>
            <a href="produtos.html">
                Voltar para produtos
            </a>
        `;
    }
}