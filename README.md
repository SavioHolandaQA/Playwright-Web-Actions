# 🧪 Testes Automatizados da Aplicação Web com Playwright, PageObject e GitHub Actions

Este projeto implementa testes automatizados para a aplicação web [**SauceDemo**](https://www.saucedemo.com/) utilizando **Node.js**, **Playwright** e o padrão de projeto **PageObject**.
Os testes simulam cenários reais de login e são executados automaticamente via **GitHub Actions** para garantir a qualidade contínua.

---

## 🚀 Funcionalidades Testadas

Cenários testados:

- ✅ **Login com sucesso**: Usuário padrão com credenciais válidas.
- ❌ **Login com e-mail inválido**: Preenchimento incorreto no campo de usuário.
- ❌ **Login com senha inválida**: Preenchimento incorreto no campo de senha.
- ⏱️ **Login com delay**: Validação de performance para o usuário com comportamento lento.
- 🔒 **Login com usuário bloqueado**: Verifica tratamento de usuários desativados.
- ⚠️ **Mensagem de erro**: Validação da exibição de mensagens de erro quando o login falha.

---

## 🧪 Tecnologias Utilizadas

- **Node.js** – Ambiente JavaScript para execução dos testes.
- **Playwright** – Framework moderno de automação de testes de interface web.
- **PageObject Pattern** – Padrão de design que organiza interações de página em funções reutilizáveis.
- **GitHub Actions** – Integração contínua para execução automática dos testes a cada mudança no repositório.

---

 Execute os testes

   npm test

---

📊 Relatórios

  Você pode baixar o relatório HTML com os resultados dos testes:

  Acesse a aba Actions no GitHub.

  Clique em uma execução do workflow.

  Vá em Artifacts e baixe o relatório (ex: playwright-report.zip).

  Extraia e abra o arquivo index.html em seu navegador.


👤 Autor
    Sávio Holanda do Nascimento
    Desenvolvedor de automação de teste

