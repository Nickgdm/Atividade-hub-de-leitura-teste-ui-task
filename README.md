╔══════════════════════════════════════════════════════╗
║       HUB DE LEITURA — ATIVIDADE DE AUTOMAÇÃO DE UI   ║
╚══════════════════════════════════════════════════════╝

Projeto de estudo para praticar testes end-to-end da interface do Hub de Leitura utilizando Cypress.

════════════════════════════════════════════════════════
SOBRE O PROJETO
════════════════════════════════════════════════════════

A atividade reúne cenários automatizados para exercitar a interação com a interface e a validação de comportamentos esperados da aplicação.

════════════════════════════════════════════════════════
OBJETIVOS
════════════════════════════════════════════════════════

- Automatizar fluxos da interface web.
- Verificar comportamentos esperados por meio de asserções.
- Praticar a organização e a execução de testes de UI.
- Aprender a proteger chaves utilizadas em serviços externos por meio de variáveis de ambiente.

════════════════════════════════════════════════════════
TECNOLOGIAS E FERRAMENTAS
════════════════════════════════════════════════════════

- JavaScript
- Node.js e npm
- Cypress

════════════════════════════════════════════════════════
PRÉ-REQUISITOS
════════════════════════════════════════════════════════

- Node.js e npm instalados.
- Google Chrome instalado, pois o script de teste seleciona esse navegador.
- Aplicação Hub de Leitura em execução e acessível pela URL esperada na configuração dos testes.

════════════════════════════════════════════════════════
INSTALAÇÃO E EXECUÇÃO
════════════════════════════════════════════════════════

Instale as dependências:

```bash
npm install
```

Execute os testes em modo headless no Chrome:

```bash
npm test
```

Abra a interface do Cypress:

```bash
npx cypress open
```

Para registrar uma execução no Cypress Cloud, configure a variável de ambiente `CYPRESS_RECORD_KEY` antes de executar `npm run cy:report`. Não coloque a chave diretamente no código, no `package.json` ou no repositório.

PowerShell:

```powershell
$env:CYPRESS_RECORD_KEY="sua-chave"
npm run cy:report
```

macOS/Linux:

```bash
export CYPRESS_RECORD_KEY="sua-chave"
npm run cy:report
```

════════════════════════════════════════════════════════
ESTRUTURA DO PROJETO
════════════════════════════════════════════════════════

```text
Atividade-hub-de-leitura-teste-ui-task/
├── cypress/
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

════════════════════════════════════════════════════════
DESAFIOS PRÁTICOS
════════════════════════════════════════════════════════

- Compreender o fluxo funcional da aplicação.
- Identificar elementos da interface de forma estável.
- Executar ações de usuário.
- Validar os resultados apresentados pela interface.

════════════════════════════════════════════════════════
BOAS PRÁTICAS
════════════════════════════════════════════════════════

- Manter os testes organizados na estrutura do Cypress.
- Centralizar a configuração em `cypress.config.js`.
- Utilizar comandos de terminal para permitir uma execução repetível.
- Proteger a chave do Cypress Cloud com variável de ambiente.
- Conferir os cenários e os resultados no ambiente de execução.

════════════════════════════════════════════════════════
APRENDIZADOS
════════════════════════════════════════════════════════

A atividade permite praticar automação de UI com Cypress, incluindo seleção de elementos, interação com a interface e validação de resultados. Também reforça a importância de manter os testes alinhados ao comportamento esperado da aplicação e de não versionar credenciais.

════════════════════════════════════════════════════════
CONSIDERAÇÕES FINAIS
════════════════════════════════════════════════════════

Confirme que a aplicação-alvo está disponível antes de iniciar a suíte. Consulte os arquivos de teste para identificar os cenários efetivamente cobertos e os ajustes necessários ao ambiente local.

Este projeto tem finalidade educacional e não representa, por si só, experiência profissional.

════════════════════════════════════════════════════════
FORMAÇÃO E NATUREZA DA ATIVIDADE
════════════════════════════════════════════════════════

Este projeto foi desenvolvido como uma **atividade facultativa** no contexto dos estudos de Quality Assurance (QA), durante a formação da EBAC — Escola Britânica de Artes Criativas e Tecnologia. Seu objetivo é praticar e consolidar conhecimentos de automação de testes de interface.

════════════════════════════════════════════════════════