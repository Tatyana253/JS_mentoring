describe("test suite for ej2.syncfusion.com", () => {
  it("shoud verify page title", async () => {
    await browser.url(
      "https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard"
    );
    const pageTitle = await $("//h1");
    expect(await pageTitle.getText()).toEqual("APPOINTMENT PLANNER");
  });

  it("shoud add a new doctor", async () => {
    await browser.url(
      "https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard"
    );
    await $("div[routerlink='/doctors']").click();
    await $("//div/button[text()='Add New Doctor']").click();
    await $("//input[@name='Name']").setValue("Ann Smith");
    await $("#DoctorMobile").setValue("(879) 8798697");
    await $("//input[@name='Email']").setValue("one@gmail.com");
    await $("//input[@name='Education']").setValue("Cambridge");
    await $("//button[text()='Save']").click();
    const addedDoctorName = await $(
      "//div[@class='name'][contains(text(),'Ann')]"
    );
    expect(await addedDoctorName.getText()).toEqual("Dr. Ann Smith");
  });

  it("shoud verify that button 'Add new patient' is displayed", async () => {
    await browser.url(
      "https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard"
    );
    await $("//span[@title='patients']").click();
    const addNewPatientButton = await $('.e-control.e-btn.e-lib.e-normal.add-details.e-primary');
    expect(await addNewPatientButton).toBeDisplayed();
  });

  it("shoud verify email error message while adding a new doctor without email", async () => {
    await browser.url(
      "https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard"
    );
    await $("div[routerlink='/doctors']").click();
    await $("//div/button[text()='Add New Doctor']").click();
    await $("//input[@name='Name']").setValue("Ann Smith two");
    await $("//button[text()='Save']").click();
    const errorEmail = await $(
      "//div/label[@id='Email-info']"
    );
    expect(await errorEmail).toHaveTextContaining("Enter valid email");
  });
});
