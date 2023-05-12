describe("test suite for ej2.syncfusion.com with advance commands", () => {
    it("shoud verify that day events counter element is displayed and change style", async () => {
      await browser.url(
        "https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard"
      );

      await browser.execute(function() {
        const eventCounterElement = document.querySelector("div>.day-event-count");
        eventCounterElement.style.border = 'red solid 2px';
      });
      const eventCounter = await $("div>.day-event-count");
      expect(eventCounter).toBeDisplayed();
    });

    it("shoud waid until main title will be displayed and verify main title", async () => {
        await browser.url(
          "https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard"
        );
        await browser.waitUntil(async () =>
        await $("//h1").isDisplayed(),
        {timeout: 1000, interval: 600, timeoutMsg: 'not loaded'}
        );
        const pageTitle = await $("//h1");
        expect(await pageTitle.getText()).toEqual("APPOINTMENT PLANNER");
      });

      it("shoud move mouse to appointment row and highlight it ", async () => {
        await browser.url(
          "https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard"
        );
        const row = await $('tr>td.e-rowcell');
        await row.moveTo();
      });


      it('should scroll using wheel action command', async () => {
        await browser.url(
            "https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard"
          );
        await browser.action('wheel').scroll({
            deltaX: 0,
            deltaY: 500,
            duration: 200
        }).perform()
    })
      });