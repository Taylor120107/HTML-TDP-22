require ("chromedriver");
const {Builder,By,Key,until} = require("selenium-webdriver");
//builder-what builds thr browser
//by how we select element to clivk or input values in to
//key keyboard functionality
const {expect} = require("chai");

describe("selenium tests",function () {
    this.timeout(30_000); //changes how long the mocha rest runs for before failing automatically

    // let driver; declares driver variable

    //getting up brownser to be ready for testing-before each test
    //beforeEach(async () =>{
    //})

    it("should find something", async () => {
        const driver = await new Builder().forBrowser("chrome").build()
        try{
            await driver.get("website");
            const search = await driver.findElement(By.id("search-input"));
            await search.sendKeys("something");
            //await search.sendKeys(Key.ENTER);
            await driver.findElement(By.css("#main-content > form > div > div > div > button")).click();
            const result
            expect(await result.getText()).to.equal("Something");
        } finally {
            await driver.quit();
        }
    })

    it.skip("should find a surprise",async () => {
        const driver = await new Builder().forBrowser("chrome").build();
        try {
            driver.get("Somethign");
            const surprise = await driver.wait(until.elementLocated(By.css("#quote > h1")));
            expect (await surprise.getText()).to.equal("surprise")
        }finally {
            driver.quit();
        }
        return;
    });
    //terminating the browser after each test
    //afterEach(async () => {
        await.driverquit();
    //});
});


