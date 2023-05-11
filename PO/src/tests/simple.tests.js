describe("Doctors page", () => {
  beforeEach(async () => {
    await browser.url(
      "https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard"
    );
  });
  it("Check page title", async () => {
    await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App'); 
  });
  it('Open modal window for adding a new doctor', async () => {
      await $("div[routerlink='/doctors']").click();
      await $(".specialization-types button.e-control").click();
      await expect ($('div>.new-doctor-dialog')).toBeDisplayed();
  })
  it("Add a new doctor", async () => {

    await $("div[routerlink='/doctors']").click();
    await $(".specialization-types button.e-control").click();
    await $('div>.new-doctor-dialog').waitForDisplayed();
    await $("//input[@name='Name']").setValue("Ann Smith");
    await $("#DoctorMobile").setValue("(879) 8798697");
    await $("//input[@name='Email']").setValue("one@gmail.com");
    await $("//input[@name='Education']").setValue("Cambridge");
    await $("//button[text()='Save']").click();
    await expect ($('div>.new-doctor-dialog')).not.toBeDisplayed();
    
    await expect ($('#Specialist_8').$('.name')).toHaveText('Dr. Ann Smith');
    await expect ($('#Specialist_8').$('.education')).toHaveText('Cambridge', {ignoreCase: true});
  });
  it('Close modal window for adding a new doctor', async () => {
    await $("div[routerlink='/doctors']").click();
    await $(".specialization-types button.e-control").click();
    await $('div>.new-doctor-dialog').waitForDisplayed();
    await $('.new-doctor-dialog .e-dlg-closeicon-btn').click();
    await expect ($('div>.new-doctor-dialog')).not.toBeDisplayed();

  })
});
