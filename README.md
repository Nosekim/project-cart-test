# Teste Carrinho

Meu nome é Roger Felipe, sou desenvolvedor Fullstack Javascript e já trabalho com desenvolvimeto em tempo integral a pouco mais de 3 anos, eu criei esse projeto para atender um teste conforme especificações abaixo.
Eu usei um modelo pronto com algumas configurações do typescript, mas o projeto foi totalmente desenvolvido manualmente.
Eu utilizei as seguintes tecnologias:
- Typescript
- React JS
- Mongodb Realm

O projeto é simples mas através do exemplo eu adicionei os dados no mongodb para poder utilizar diretamente da api online e carregar os dados no react para renderizar em tela. Utilizei ContextAPI do próprio react para criar o estado do carrinho para utilizá-lo de forma global.

O projeto está hospedado e pode ser testado online em https://test-cart-ibawy.mongodbstitch.com

## TODO:

- [ ] Adicionar o loader enquanto carrega os dados dos produtos
- [ ] Enviar um pedido para o backend ao apertar on botão finalizar e salvar os dados do pedido no mongodb
- [ ] Salvar carrinho no localStorage para que a pessoa possa recuperar os itens adicionados anteriormente
- [ ] Criar o aplicativo em React Native

## Objetivos:

- Desenvolver um “Carrinho de compras” usando uma API.
- Listar os produtos, exibir o total da compra e exibir uma mensagem informando se o pedido possui frete grátis.

## Prazo:
- 3 dias corridos.

## Requisitos mínimos:
- Listar os produtos provenientes da API.
- Os produtos devem ter imagem, nome e preço.
- Exibir ao fim da lista o valor total de todos os produtos.
- Exibir o texto de frete grátis dependendo do valor do carrinho.
- O texto de frete grátis deverá aparecer apenas se o valor for acima de **R$ 10,00.**
- Seguir o layout.
- Usar Flex-Box CSS.
- Você poderá usar Vanilla JS, React, Vue ou outro framework. Sinta-se a vontade para usar a ferramenta que preferir.
- Enviar o link do teste no github.