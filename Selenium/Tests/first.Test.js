require("chromedriver");
const should = require("chai").should();
const { Builder, By, Key } = require("selenium-webdriver");

//describe block
describe("add todo tests", function () {


    //it block

    it("successfully adds a todo to application", async function () {

        //launch broswer
        let driver = await new Builder().forBrowser("chrome").build();

        //location
        await driver.get("https://lambdatest.github.io/sample-todo-app/")

        //todo
        await driver.findElement(By.id("sampletodotext"))
            .sendKeys("learn Selenium", Key.RETURN);

        //assertion
        let todoText = await driver.findElement(By.xpath("//li[last()]"))
            .getText()
            .then(function (value) {
                return value
            });

        //assert using chai check
        todoText.should.equal("learn Selenium");

        //quit browser
        await driver.quit();

    });
});







    // //launch the browser

    // let driver = await new Builder().forBrowser("chrome").build();


    // //navigate to app location

    // await driver.get("https://lambdatest.github.io/sample-todo-app/")

    // //add a to do

    // await driver.findElement(By.id("sampletodotext")).sendKeys("learn Selenium", Key.RETURN);

    // //assert using node- This is used to check the correct value has arrived
    // //we create the assertion to check if the value from the above todo is stored below 
    // //then the assert.strictEqual will check the values match now that it has been stored in todoText

    // let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
    //     return value
    // });

    // //assert.strictEqual(todoText,"learn Selenium");


    // //assert using chai
    // todoText.should.equal("learn Selenium");


    // //close the browser

    // await driver.quit();




