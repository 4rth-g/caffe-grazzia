# Caffè Grazzia

Site institucional de uma cafeteria, desenvolvido com React + Vite. O projeto apresenta páginas de início, cardápio, galeria, reservas, sobre e contato, com design elegante inspirado em ambientes de café.

## Tecnologias utilizadas

- [React 19](https://react.dev/)
- [Vite 7](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [React Router DOM 7](https://reactrouter.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)
- [Styled Components](https://styled-components.com/)

## Pré-requisitos

- [Node.js](https://nodejs.org/) `^20.19.0` ou `>=22.12.0`
- npm v10 ou superior

> Se usar [nvm](https://github.com/nvm-sh/nvm), rode `nvm use` na raiz do projeto para usar a versão correta automaticamente.

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/4rth-g/caffe-grazzia.git
cd caffe-grazzia
nvm use        # opcional, se usar nvm
npm install
```

## Uso

### Modo desenvolvimento

Inicia o servidor local com hot-reload:

```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

### Build para produção

Gera os arquivos otimizados na pasta `dist/`:

```bash
npm run build
```

### Preview da build

Visualiza a build de produção localmente:

```bash
npm run preview
```

### Lint

Verifica o código com ESLint:

```bash
npm run lint
```

## Páginas disponíveis

| Rota | Descrição |
|------|-----------|
| `/` | Página inicial com carrossel |
| `/sobre` | Sobre a cafeteria |
| `/cardapio` | Cardápio de produtos |
| `/galeria` | Galeria de imagens |
| `/reservas` | Formulário de reservas |
| `/contato` | Informações de contato |

---

> **Aviso:** Este é um projeto estritamente acadêmico, desenvolvido para fins de aprendizado. O Caffè Grazzia **não é uma cafeteria real**, não realiza vendas, reservas ou atendimentos. Todos os dados, imagens e informações presentes no site são fictícios.
