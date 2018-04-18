## Banco de dados
O arquivo ddl.sql possui a estrutura do BD, para teste está sendo utilizado usuário e senha root.


## Webservice
Para subir o webservice (Java + Spring + Maven) é necessário acessar o diretório "webservice" via terminal, instalar as dependências do [maven](https://maven.apache.org) e subir o servidor [Jetty](https://www.eclipse.org/jetty/):
```
mvn spring-boot:run
```

## Aplicação
Para subir a aplicação (Angular) via terminal é necessário acessar o diretório "aplicacao", instalar as dependências do [node](https://nodejs.org/en/) e subir o servidor (Por padrão, será utilizada a porta 4200).
Mais detalhes da aplicação via linha de comando [aqui](https://github.com/deniscpaula/super-pet/blob/master/Aplicacao/README.md).
```
npm install
ng server
```