# Módulo de criação de cards

Issue: https://github.com/GuenkaTreinamentos/treinamentos/issues/20

## Instruções
1. Clone o repo: `git@github.com:Tashima42/poc-modulo-criacao-cards.git`
1. Entre na pasta do repo: `cd modulo-criacao-cards`
1. Crie uma pasta para o mongo: `mkdir docker-mongo` e `mkdir docker-mongo/mongodata`
1. Inicie o container: `sudo docker-compose up -d`
1. Instale as dependências: `yarn install`
1. Inicie o módulo: `node ./src/db.js` ou `nodemon ./src/db.js`
1. Faça um post para https://localhost:3000/card com o o body seguindo a estrutura: 
    ```json
    {
        "front": "front-test-1",
        "back": "back-test-1"
    }
    ```
    - Você pode fazer isso usando um app como o [Postman](https://www.postman.com/) 
1. Verifique se tudo deu certo usando um terminal
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