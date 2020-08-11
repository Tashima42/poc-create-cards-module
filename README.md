# Módulo de criação de cards

Issue: https://github.com/GuenkaTreinamentos/treinamentos/issues/20

## Instruções
1. Clone o repo: `git@github.com:Tashima42/poc-modulo-criacao-cards.git`
1. Entre na pasta do repo: `cd poc-modulo-criacao-cards`
1. Crie uma pasta para o mongo: `mkdir docker-mongo` e `mkdir docker-mongo/mongodata`
1. Inicie o container:`sudo docker-compose up -d`
1. Instale as dependências: `yarn install`
1. Inicie o módulo enviando a URI de conexão do MongoDB: `CONNECTION='http://localhost/27017/cards' node ./src/server.js`
1. Faça um post para https://localhost:3000/card com o o body seguindo a estrutura: 
    ```json
    {
        "name": "Postman card",
        "front": "Postman",
        "back": "App para testar APIs em desenvolvimento"
    }
    ```
    - Você pode fazer isso usando um app como o [Postman](https://www.postman.com/) 
1. Verifique se tudo deu certo usando um terminal ou use um app como o [compass](https://www.mongodb.com/products/compass)
    ```bash
    $ mongo 27017
    > use cards
    > db.mycards.find().pretty()
   ``` 

## Versões
Node: v14.7.0    
Yarn: v1.22.4    
Docker: v19.03.12    
docker-compose: v1.25.0
