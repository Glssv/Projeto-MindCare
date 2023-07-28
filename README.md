# <b> Projeto Final | MindCare - {Reprograma} </b> 

O projeto MindCare é o projeto de conclusão do bootcamp de back-end da Turma On22 da {Reprograma}.

Este projeto é uma API com CRUD completo.

## O que é o projeto MindCare?

É um projeto que foi pensado na invalidação que pessoas com condições neurodivergentes específicas como TDAH (Transtorno do Déficit de Atenção e Hiperatividade) e TEA (Transtorno do Espectro Autista) enfrentam com profissionais. Apesar de serem condições neurodivergentes amplamente reconhecidas e estudadas, indivíduos que vivenciam essas condições frequentemente enfrentam desafios significativos na sociedade, especialmente no que diz respeito à invalidação de suas experiências e necessidades. 

Com o intuito de criar uma solução acolhedora, desenvolvi uma API que permite localizar consultórios em Pernambuco com especialistas em psiquiatria e psicologia, cujas áreas de especialização abranjam as condições neurodivergentes específicas mencionadas.

Aplicação disponível em [Projeto MindCare](https://projeto-mindcare.onrender.com), para acessar a documentação do projeto [acesse aqui](https://projeto-mindcare.onrender.com/minha-rota-de-documentacao/)

Visualize a apresentação do [Projeto MindCare](https://www.canva.com/design/DAFoiqOfdlE/ZTNPchv95uUTIBVq4Kzgzw/view?utm_content=DAFoiqOfdlE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink) 

## Arquitetura MVC
```
  📁 Projeto-MindCare
  |       
  |-  📁 assets
  |-  📁 node_modules
  |-  📁 src  
  |    |- 📁 controller
  |         |- 📄 consultorioController.js  
  |    |- 📁 database 
  |         |- 📄 dbconnect.js    
  |    |- 📁 models  
  |         |- 📄 consultoriosModel.js  
  |    |- 📁 routes  
  |         |- 📄 consultoriosRoute.js    
  |    |- 📄 app.js   
  |- 📁 Swagger    
  |         |- 📄 swagger_output.json           
  |-  📄 .env
  |-  📄 .env.example 
  |-  📄 .gitignore 
  |-  📄 package-lock.json   
  |-  📄 pakage.json 
  |-  📄 README.md 
  |-  📄 server.js
  |-  📄 Swagger.js

  ```

## **Rotas - EndPoint**

### Todas as rotas existentes neste projeto:

| Verbo  |   EndPoint           |        Descrição da Rota                   | Status | 
| ------ | -------------------- | -------------------------------------------| ------ |
| GET    | /consultorios/cidade | Mostrar os consultorios por cidade         |   200  | 
| POST   | /consultorios        | Adicionar um novo consultorio              |   201  | 
| GET    | /consultorios        | Listar todas os consultorios               |   200  | 
| GET    | /consultorios/:id    | Mostrar os consultorios por ID             |   200  | 
| PATCH  | /consultorios/:id    | Altera informações do consultorio          |   200  | 
| DELETE | /consultorios/:id    | Remove um consultorio                      |   200  | 


## **Base do projeto**

```
Controle de versões: 
Git/GitHub

Editor de código - IDE:
VSCode

Desenvolver o back-end em Javascript:
Nodejs
```
 
## **Dependencias**

- [nodemon](https://www.npmjs.com/package/nodemon)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [swagger-autogen](https://www.npmjs.com/package/swagger-autogen)
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)

