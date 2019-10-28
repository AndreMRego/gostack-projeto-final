# Projeto Final

**Instalação**

Para rodar os projeto é necessário:

Fazer download das dependências:

```
yarn install
```
Para o backend funcionar é necessário criar o banco meetapp no postgres e executar:

```
yarn sequelize db:migrate
```

Após rodar as migrations, é só rodar o projeto do backend com:

```
yarn dev
```

Para executar o frontend é só executar:

```
yarn start
```

E para a versão mobile, além de instalar as dependências é necessário executar:

```
adb reverse tcp:3333 tcp:3333
```

Após realizar o adb reverse para carregar as imagens, é só executar:

```
yarn android
```
ou 

```
react-native run-android
```

Obs: Versão Mobile realizada apenas no android
