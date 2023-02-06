## 💻 Descrição

Este middleware foi desenvolvido para fornecer uma listagem de usuários e produtos, além de retornar um orçamento baseado na taxa do usuário selecionado e no valor dos produtos escolhidos. Os dados dos usuários e produtos são buscados em um mockend disponível em Usuários e Produtos.

Dados dos usuários e produtos buscados no mockend disponibilizado 

- [Usuários](https://mockend.com/juunegreiros/BE-test-api/users)
- [Produtos](https://mockend.com/juunegreiros/BE-test-api/products) 

## 💡 Desenvolvimento

A metodologia de desenvolvimento utilizada foi TDD (Test Driven Development) e a implementação dos testes automatizados foi realizada com a ferramenta [Vitest](https://vitest.dev/api/). Além disso, o [Typescript](https://www.typescriptlang.org/) foi utilizado para contribuir para uma maior legibilidade e facilidade de manutenção do código. Também foi utilizado o [Node-Cache](https://github.com/node-cache/node-cache) para cachear as requisições feitas à API, atualizando a cada determinado tempo e evitando excesso de chamadas à API em curto espaço de tempo.

## 🎡 Rodando o projeto localmente

Para executar o projeto localmente, basta clonar o repositório na sua máquina e executar os seguintes comandos no terminal na pasta do projeto:

```bash
$ npm install
$ npm run dev
```
O servidor estará disponível em http://localhost:3333.

## 🧪 Testes

Para executar os testes unitários e de integração, basta executar o comando abaixo na pasta do projeto:

```bash
$ npm test
```

## 🛣️ Rotas da aplicação

O middleware disponibiliza as seguintes rotas:

* [GET] /users: retorna a lista de usuários
* [GET] /products: retorna a lista de produtos
* [POST] /budget: retorna o orçamento baseado nas informações enviadas no corpo da requisição. É necessário enviar o ID do usuário e uma lista com os IDs dos produtos. O corpo da requisição deve ser enviado no seguinte formato:

```typescript
{
  ”userId”: Number,
  “productsId”: Number[]
}
```
