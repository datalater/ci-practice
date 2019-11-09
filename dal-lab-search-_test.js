Feature("dal-lab-search");

Scenario("test something", I => {
  I.amOnPage("https://www.google.com/ncr");
  I.fillField("q", "달랩");
  I.click("Google Search");
  // I.pressKey("Enter");
  I.waitForNavigation();
  I.see("프로자백러");
});
