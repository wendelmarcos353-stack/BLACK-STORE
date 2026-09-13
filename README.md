BLACK-STORE/
│
├── README.md
├── package.json
├── .env
├── .gitignore
│
├── FRONTEND/                         # Site que o cliente acessa
│   │
│   ├── index.html                    # Página inicial
│   ├── produtos.html                 # Catálogo
│   ├── produto.html                  # Página individual
│   ├── carrinho.html                 # Carrinho
│   ├── checkout.html                 # Finalização da compra
│   ├── login.html                    # Login cliente/admin
│   ├── cadastro.html                 # Cadastro cliente
│   │
│   ├── css/
│   │   ├── style.css                 # Estilo principal
│   │   ├── responsivo.css            # Celular/tablet
│   │   └── animacoes.css             # Efeitos visuais
│   │
│   ├── js/
│   │   ├── app.js                    # Sistema principal
│   │   ├── produtos.js               # Produtos
│   │   ├── carrinho.js               # Carrinho
│   │   ├── checkout.js               # Compra
│   │   ├── login.js                  # Autenticação
│   │   └── admin.js                  # Painel
│   │
│   ├── imagens/
│   │   ├── logo.png
│   │   ├── banners/
│   │   └── produtos/
│   │
│   └── icones/
│
│
├── ADMIN/                            # Painel do dono da loja
│   │
│   ├── index.html
│   ├── dashboard.html
│   ├── produtos.html
│   ├── pedidos.html
│   ├── clientes.html
│   ├── configuracoes.html
│   │
│   ├── css/
│   │   └── admin.css
│   │
│   └── js/
│       ├── dashboard.js
│       ├── produtos-admin.js
│       └── pedidos-admin.js
│
│
├── BACKEND/                          # Servidor
│   │
│   ├── server.js
│   │
│   ├── config/
│   │   ├── database.js
│   │   └── pagamento.js
│   │
│   ├── controllers/
│   │   ├── produtoController.js
│   │   ├── usuarioController.js
│   │   └── pedidoController.js
│   │
│   ├── models/
│   │   ├── Produto.js
│   │   ├── Usuario.js
│   │   └── Pedido.js
│   │
│   ├── routes/
│   │   ├── produtos.js
│   │   ├── usuarios.js
│   │   └── pedidos.js
│   │
│   └── middleware/
│       └── autenticacao.js
│
│
├── DATABASE/
│   │
│   ├── produtos.sql
│   ├── usuarios.sql
│   ├── pedidos.sql
│   └── estoque.sql
│
│
├── PAGAMENTOS/
│   │
│   ├── pix.js
│   ├── mercadoPago.js
│   └── pagseguro.js
│
│
└── UPLOADS/
    └── produtos/

    # BLACK STORE

Loja virtual completa.

## Recursos

- Catálogo de produtos
- Carrinho
- Checkout
- Área administrativa
- Controle de estoque
- Sistema de pedidos
- Pagamentos online

## Tecnologias

Frontend:
- HTML
- CSS
- JavaScript

Backend:
- Node.js
- Express

Banco:
- MySQL

Pagamento:
- Pix
- Mercado Pago
- PagSeguro