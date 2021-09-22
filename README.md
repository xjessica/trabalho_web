# Projeto de acompanhamento de materias

Projeto de acompanhamento da grade de materias dos cursos de Sistemas de Informação e Ciências da Computação

## Frontend

Para iniciar o frontend basta utlizar os seguintes comandos:

`npm install` ou `yarn install`

E depois:

`npm start` ou `yarn start`

## Backend

Para executar:

- Subir o banco de dados através de:  
  ```
  docker-compose up
  ```
- Executar a aplicação através de:
   ```
  mvn spring-boot:run
    ```

Tecnologias utilizadas: 

- Linguagem: Kotlin 1.5.21
- Runtime: Java 11
- Framework: Spring Boot 2.5.4
- Persistência: MongoDB

### Autenticação

Para autenticar as chamadas, é utilizado o padrão JWT. Uma vez criados, usuários podem realizar login e obter um token que
deve ser repassado via Bearer para chamadas subsequentes, até que o token expire e se faça necessário mais um login.
Os parâmetros do JWT (secret e expiração) são especificados diretamente no profile local e externalizados via variável de ambiente 
no profile de produção.

Rotas definidas a partir de: [AuthControler](src/main/kotlin/controller/AuthControler.kt)

Para criar um usuário (campos validados via JSR 303):

 ```
  POST /api/auth/signup
  
  {
    "name":"User Name",
    "email":"valid@email.com",
    "rawPassword": "123password",
    "courseCode": "SIN"
}
  ```

Para realizar login (campos validados via JSR 303):

 ```
  POST /api/auth/signin

  {
    "email":"valid@email.com",
    "rawPassword": "123password",
  }
  ```

### Operações

Rotas definidas a partir de: [UserCourseController](src/main/kotlin/controller/UserCourseController.kt)

Para buscar as disciplinas do usuário:

```
  GET /api/course
  Authorization: Bearer <token>
```
Para marcar uma disciplina como realizada (caso falte pré-requisito, retornará `422 Unprocessable Entity` indicando quais disciplinas faltam): 

```
  PUT /api/course/{courseId}
  Authorization: Bearer <token>
```
Para desmarcar uma disciplina como realizada (caso hajam disciplinas subsquentes concluídas, retornará `422 Unprocessable Entity` indicando quais impedem a ação):

```
  DEL /api/course/{courseId}
  Authorization: Bearer <token>
```

