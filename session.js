var webdriver = require('selenium-webdriver');
async function example() {
    let driver = await new webdriver.Builder().forBrowser('chrome').build();
    await driver.get('http://www.google.com');
    await driver.findElement(webdriver.By.name('q')).sendKeys('hello world');
    await driver.findElement({ name: 'q' }).sendKeys(webdriver.Key.ENTER);
    await driver.findElement({ xpath: '//*[@id="rso"]/div[1]/div[1]/div[1]/div[1]/div/div[1]/div[2]/div/div/div/div[2]/h3/a' }).click();
    await driver.getTitle().then(function(title){console.log(title);});
}
example();

