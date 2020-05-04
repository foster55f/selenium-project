var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('http://www.google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('hello world');
driver.findElement({ name: 'q' }).sendKeys(webdriver.Key.ENTER);
driver.wait(webdriver.until.elementLocated({ xpath: '//*[@id="rso"]/div[1]/div[1]/div[1]/div[1]/div/div[1]/div[2]/div/div/div/div[2]/h3/a' }), 500000)
driver.findElement({xpath: '//*[@id="rso"]/div[1]/div[1]/div[1]/div[1]/div/div[1]/div[2]/div/div/div/div[2]/h3/a'}).click();
driver.getTitle().then(function(title){console.log(title);});
driver.quit()
