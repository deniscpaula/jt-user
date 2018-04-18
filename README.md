## Banco de dados
O arquivo scrip.sql possui a estrutura do BD

1º - Criar Database "jt_user" no MySQL, conforme a 1ª linha comentada no arquivo script.sql

2º - Criar usuário de acesso (usuário e senha "teste"), conforme a 2ª linha comentada no arquivo script.sql

3º - Dar permissões para o usuário criar, conforme a 3ª linha comentada no arquivo script.sql

4º - Rodar o script.sql para que as tabelas sejam criadas

## Webservice
Para subir a API (Java + Spring + Maven) é necessário acessar o diretório "api" via terminal e executar o comando:
```
mvn spring-boot:run
```

## Aplicação
Para subir a aplicação (Angular) via terminal é necessário:

Instalar o [Angular CLI](https://github.com/angular/angular-cli/blob/master/README.md)
```
npm install -g @angular/cli
```

Acessar o diretório "application"

Instalar as dependências do [node](https://nodejs.org/en/)
```
npm install
```

Subir o servidor (Por padrão, será utilizada a porta 4200).
Mais detalhes da aplicação via linha de comando [aqui](https://github.com/deniscpaula/jt-user/blob/master/application/README.md).
```
ng server
```
