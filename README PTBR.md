# Cypress RealWorld App

![Cover](assets/cypress-realworld-app.png)

_Este repositório (https://github.com/cypress-io/cypress-realworld-app) contém meus testes individuais de Cypress end-to-end para o aplicativo RealWorld, com foco nas funcionalidades de login (Sign In), registro (Sign Up), transações e histórico de transferências._

**Esta automação do Cypress cobre:**

- **signup.spec.js**: Testa o registro de usuários e validações.
- **signin.spec.js**: Verifica a funcionalidade de login.
- **sendMoney.spec.js**: Usuário envia dinheiro e verifica a confirmação da transação.
- **history.spec.js**: Usuário verifica o histórico de transações.
- **Bug Report** sobre o problema de saldo na pasta de relatórios: `reports => bug_001.md`.

---

### **Pré-requisitos**

Este projeto requer [Node.js](https://nodejs.org/en/) instalado na sua máquina. Consulte o arquivo [.node-version](./.node-version) para verificar a versão exata.

[Yarn Classic](https://classic.yarnpkg.com/) também é necessário. Após instalar o [Node.js](https://nodejs.org/en/), execute o comando abaixo para instalar o módulo npm [yarn](https://www.npmjs.com/package/yarn) (Classic - versão 1) globalmente:

```bash
npm install yarn@latest -g
```

Se você tiver o recurso experimental [Corepack](https://nodejs.org/dist/latest/docs/api/corepack.html) do Node.js habilitado, pode pular o passo `npm install yarn@latest -g`. O projeto RWA está configurado localmente para o `Corepack` usar Yarn Classic (versão 1).

#### Yarn Modern

**TEste projeto não é compatível com [Yarn Modern](https://yarnpkg.com/) (versão 2 ou posterior).**

### Instalação

Para clonar o repositório no seu sistema local e instalar as dependências, execute os seguintes comandos:

```
git clone https://github.com/philfujisawa/cypress-realworld-app.git
cd cypress-realworld-app
yarn
npm install chance
```
### Executar o aplicativo

```
yarn dev
```

### Iniciar o Cypress

```
yarn cypress:open
```

MUITO OBRIGADO!