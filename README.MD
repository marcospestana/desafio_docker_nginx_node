# Descrição do Projeto

Este projeto é um desafio que coloca em prática o uso do nginx como proxy reverso. A ideia principal é que, quando um usuário acessa o nginx, ele faz uma chamada para nossa aplicação Node.js. Esta aplicação, por sua vez, adiciona um registro em nosso banco de dados MySQL, cadastrando um nome na tabela `pessoas`.

O retorno da aplicação Node.js para o nginx será:

```html
<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Caso não seja passado o parâmetro nome, será gravado "usuario teste"

Ex Requisição:

http://localhost:8080/?nome=Marcos
