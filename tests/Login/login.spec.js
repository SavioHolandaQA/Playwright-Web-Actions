const { test } = require('@playwright/test');
const { 
    abrirSite, LoginComSucesso,  UsuarioBloqueado,SenhaInvalida, MensagemDeErro, EmailInvalido,LoginDelay 
} = require('./loginPage');

test('Login com sucesso', async ({ page }) => {
    await abrirSite(page);
    await LoginComSucesso(page);
    
});

test('Login com email inválido', async ({ page }) => {
    await abrirSite(page);
    await EmailInvalido(page);
    await MensagemDeErro(page);
});

test('Login com senha inválida', async ({ page }) => {
    await abrirSite(page);
    await SenhaInvalida(page);
    await MensagemDeErro(page);
});

test('Login com delay', async ({ page }) => {
    await abrirSite(page);
    await LoginDelay(page);
});

test('Usuário bloqueado', async ({ page }) => {
    await abrirSite(page);
    await UsuarioBloqueado(page);
    await MensagemDeErro(page);
});
