const { expect } = require('@playwright/test');

const abrirSite = async (page) => {
    await page.goto('https://www.saucedemo.com/');
}

const LoginComSucesso = async (page) => {
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.getByText('Swag Labs').click();
    await expect(page.getByText('Swag Labs')).toBeVisible();
}

const EmailInvalido = async (page) => {
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('email_incorreto');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
}

const MensagemDeErro = async (page) => {
    await expect(page.locator('[data-test="error"]')).toBeVisible();
}

const SenhaInvalida = async (page) => {
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('senha_incorreta');
    await page.locator('[data-test="login-button"]').click();
}

const UsuarioBloqueado = async (page) => {
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
}

const LoginDelay = async (page) => {
    const startTime = Date.now();
    
    await page.locator('[data-test="username"]').fill('performance_glitch_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.getByText('Swag Labs').click();
    await expect(page.getByText('Swag Labs')).toBeVisible();

    const loginDuration = Date.now() - startTime;
    console.log(`Tempo de login do performance_glitch_user: ${loginDuration}ms`);
    expect(loginDuration).toBeGreaterThan(4000);
}

module.exports = {
    abrirSite,
    LoginComSucesso,
    EmailInvalido,
    MensagemDeErro,
    LoginDelay,
    SenhaInvalida,
    UsuarioBloqueado
};
