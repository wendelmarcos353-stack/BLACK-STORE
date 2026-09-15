document.addEventListener("DOMContentLoaded", () => {
    carregarProdutos();
});

async function carregarProdutos() {
    const container = document.getElementById("catalogo-produtos");

    if (!container) {
        console.error("Elemento #catalogo-produtos não encontrado.");
        return;
    }

    try {
        const resposta = await fetch("http://localhost:3000/api/produtos");

        if (!resposta.ok) {
            throw new Error("Erro na API: " + resposta.status);
        }

        const dados = await resposta.json();

        if (!dados.sucesso) {
            throw new Error("Não foi possível carregar os produtos.");
        }

        if (dados.produtos.length === 0) {
            container.innerHTML = `
                <p>Nenhum produto disponível no momento.</p>
            `;
            return;
        }

        container.innerHTML = dados.produtos.map(produto => `
            <article class="produto-card">

                <div class="produto-imagem">
                    ${
                        produto.imagem
                            ? `<img src="${produto.imagem}" alt="${produto.nome}">`
                            : `<div>Sem imagem</div>`
                    }
                </div>

                <div class="produto-info">

                    <span>
                        ${produto.categoria || "Sem categoria"}
                    </span>

                    <h2>${produto.nome}</h2>

                    <p>
                        ${produto.descricao || "Sem descrição."}
                    </p>

                    <strong>
                        R$ ${Number(produto.preco)
                            .toFixed(2)
                            .replace(".", ",")}
                    </strong>

                    <button onclick="verProduto(${produto.id})">
                        Ver produto
                    </button>

                </div>

            </article>
        `).join("");

    } catch (error) {
        console.error("Erro ao carregar produtos:", error);

        container.innerHTML = `
            <p>
                Não foi possível carregar os produtos.
            </p>
        `;
    }
}

function verProduto(id) {
    window.location.href = `produto.html?id=${id}`;
}