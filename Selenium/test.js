require("chromedriver");

const {Builder,By,Key} = require ("selenium-webdriver");

async function example () {
    
    
    //launch the browser

    let driver = await new Builder().forBrowser("chrome").build();


    //navigate to app location

    await driver.get("https://lambdatest.github.io/sample-todo-app/")

    //add a to do

    await driver.findElement(By.id("sampletodotext")).sendKeys("learn Selenium", Key.RETURN);

    //close the browser

    await driver.quit();
}

example()

