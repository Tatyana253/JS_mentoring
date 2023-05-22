const {pages} = require('./../po');
describe("test suite for ej2.syncfusion.com with advance commands", () => {
    beforeEach(async () => {
        await pages('dashboard').open();
      });
    it("shoud verify that day events counter element is displayed and change style", async () => {
        const eventCount = await pages('dashboard').eventCounter;
        await browser.execute(function() {
        const eventCounterElement = document.querySelector("div>.day-event-count");
        eventCounterElement.style.border = 'red solid 2px';
      });
      expect(eventCount).toBeDisplayed();
    });

    it("shoud waid until main title will be displayed and verify main title", async () => {
        await browser.waitUntil(async () =>
        await $("//h1").isDisplayed(),
        {timeout: 1000, interval: 600, timeoutMsg: 'not loaded'}
        );
        const pageTitle = await $("//h1");
        expect(await pageTitle.getText()).toEqual("APPOINTMENT PLANNER");
      });

      it("shoud move mouse to appointment row and highlight it ", async () => {
        await pages('dashboard').appointmentRow.moveTo();
      });


      it('should scroll using wheel action command', async () => {
        await browser.action('wheel').scroll({
            deltaX: 0,
            deltaY: 500,
            duration: 200
        }).perform()
    })
      });