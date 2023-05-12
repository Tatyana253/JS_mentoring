describe("test suite for ej2.syncfusion.com with basic commands", () => {
  it("shoud verify that day events counter element is displayed", async () => {
    await browser.url(
      "https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard"
    );
    const eventCounter = await $("div>.day-event-count");
    await eventCounter.isDisplayed();
    expect(eventCounter).toBeDisplayed();
  });

  it("shoud verify that week events counter element is exist", async () => {
    await browser.url(
      "https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard"
    );
    const eventCounter = await $("div>.week-event-count");
    await eventCounter.isExisting();
    expect(eventCounter).toBeExisting();
  });

  it("shoud search patient", async () => {
    await browser.url(
      "https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard"
    );
    await $("//span[@title='patients']").waitForDisplayed();
    await $("//span[@title='patients']").click();
    await $("#schedule_searchbar").isDisplayed();
    await $("#schedule_searchbar").setValue("Janet");
    const nameOfPatient = await $("span.patient-name");
    expect(nameOfPatient).toHaveTextContaining("Janet");
  });

  it("shoud verify that button 'Add new doctor' have attribute cssclass  ", async () => {
    await browser.url(
      "https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard"
    );
    await $("div[routerlink='/doctors']").waitForDisplayed();
    await $("div[routerlink='/doctors']").click();
    await $(
      "div>button.e-control.e-btn.e-lib.e-normal.e-primary"
    ).waitForDisplayed();
    expect(
      await $("div>button.e-control.e-btn.e-lib.e-normal.e-primary")
    ).toHaveAttribute("cssclass");
  });

  it("shoud verify that doctor specialization dropdown is present", async () => {
    await browser.url(
      "https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard"
    );
    await $("div[routerlink='/doctors']").waitForDisplayed();
    await $("div[routerlink='/doctors']").click();
    await $(
      "span.e-input-group.e-control-wrapper.e-ddl.e-lib.e-keyboard"
    ).waitForDisplayed();
    expect(
      await $("span.e-input-group.e-control-wrapper.e-ddl.e-lib.e-keyboard")
    ).toBePresent();
  });
});
