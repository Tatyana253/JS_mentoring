const DashboardPage = require('./../po/pages/dashboard.page');
const DoctorsPage = require('./../po/pages/doctors.page');

const dashboardPage = new DashboardPage();
const doctorsPage = new DoctorsPage();

describe("Doctors page", () => {
  beforeEach(async () => {
    await dashboardPage.open();
  });
  it("Check page title", async () => {
    await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App'); 
  });
  it('Open modal window for adding a new doctor', async () => {
      await dashboardPage.sideMenu.item('doctors').click();
      await doctorsPage.doctorListHeader.addNewDoctorBtn.click();
      await expect (doctorsPage.addDoctorModal.rootEl).toBeDisplayed();
  })
  it("Add a new doctor", async () => {

    await dashboardPage.sideMenu.item('doctors').click();
    await doctorsPage.doctorListHeader.addNewDoctorBtn.click();
    await (doctorsPage.addDoctorModal.rootEl).waitForDisplayed();
    await $("//input[@name='Name']").setValue("Ann Smith");
    await $("#DoctorMobile").setValue("(879) 8798697");
    await $("//input[@name='Email']").setValue("one@gmail.com");
    await $("//input[@name='Education']").setValue("Cambridge");
    await $("//button[text()='Save']").click();
    await expect (doctorsPage.addDoctorModal.rootEl).not.toBeDisplayed();
    
    await expect ($('#Specialist_8').$('.name')).toHaveText('Dr. Ann Smith');
    await expect ($('#Specialist_8').$('.education')).toHaveText('Cambridge', {ignoreCase: true});
  });
  it('Close modal window for adding a new doctor', async () => {
    await dashboardPage.sideMenu.item('doctors').click();
    await doctorsPage.doctorListHeader.addNewDoctorBtn.click();
    await (doctorsPage.addDoctorModal.rootEl).waitForDisplayed();
    await $('.new-doctor-dialog .e-dlg-closeicon-btn').click();
    await expect ($('div>.new-doctor-dialog')).not.toBeDisplayed();

  })
});
