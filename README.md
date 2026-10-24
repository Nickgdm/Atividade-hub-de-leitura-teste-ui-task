# Hub de Leitura — Tarefa de Automação de UI com Cypress

Projeto de atividade prática para desenvolver testes end-to-end da interface do Hub de Leitura usando Cypress.

## Objetivos
- Automatizar fluxos da interface web.
- Verificar comportamentos esperados por meio de asserts.
- Praticar organização e execução de testes de UI.

## Tecnologias
- JavaScript
- Node.js e npm
- Cypress

## Pré-requisitos
- Node.js e npm instalados.
- Google Chrome instalado, pois o script de teste seleciona esse navegador.
- Aplicação Hub de Leitura executando na URL esperada pela configuração dos testes.

## Instalação e execução

Instale as dependências:

```bash
npm install
```

Execute os testes em modo headless no Chrome:

```bash
npm test
```

Para abrir a interface do Cypress:

```bash
npx cypress open
```

Para gravar uma execução no Cypress Cloud, configure a variável de ambiente `CYPRESS_RECORD_KEY` antes de executar `npm run cy:report`. Não coloque a chave diretamente no código, no `package.json` ou no repositório.

No PowerShell:

```powershell
$env:CYPRESS_RECORD_KEY="sua-chave"
npm run cy:report
```

No macOS/Linux:

```bash
export CYPRESS_RECORD_KEY="sua-chave"
npm run cy:report
```

## Estrutura do projeto

```text
Atividade-hub-de-leitura-teste-ui-task/
├── cypress/
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Desafios práticos
Entender o fluxo funcional, identificar elementos de forma estável, executar ações de usuário e validar os resultados apresentados pela interface.

## Boas práticas adotadas
- Organização dos testes dentro da estrutura do Cypress.
- Configuração centralizada no arquivo `cypress.config.js`.
- Execução repetível por comandos de terminal.
- Uso de variável de ambiente para proteger a chave do Cypress Cloud.

## 📚 Aprendizados
A atividade permite praticar automação de UI com Cypress, incluindo seleção de elementos, interação com a interface e validação de resultados. Também reforça a importância de manter os testes alinhados ao comportamento esperado da aplicação e de não versionar credenciais.

## Considerações finais
Confirme que a aplicação alvo está disponível antes de iniciar a suíte. Consulte os arquivos de teste para identificar os cenários efetivamente cobertos e os ajustes necessários ao ambiente local.

---

## 🎓 Formação
Atividade desenvolvida durante a formação profissionalizante em **Quality Assurance (QA) pela EBAC — Escola Britânica de Artes Criativas e Tecnologia**.
