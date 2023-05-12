const {pages} = require('./../po');

describe("Doctors page", () => {
  beforeEach(async () => {
    await pages('dashboard').open();
  });
  it("Check page title", async () => {
    await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App'); 
  });
  it('Open modal window for adding a new doctor', async () => {
      await pages('dashboard').sideMenu.item('doctors').click();
      await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
      await expect (pages('doctors').addDoctorModal.rootEl).toBeDisplayed();
  })
  it("Add a new doctor", async () => {

    await pages('dashboard').sideMenu.item('doctors').click();
    await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
    await (pages('doctors').addDoctorModal.rootEl).waitForDisplayed();
    await pages('doctors').addDoctorModal.input('name').setValue("Ann Smith");
    await pages('doctors').addDoctorModal.input('phone').setValue("(879) 8798697");
    await pages('doctors').addDoctorModal.input('email').setValue("one@gmail.com");
    await pages('doctors').addDoctorModal.input('education').setValue("Cambridge");
    await pages('doctors').addDoctorModal.saveBtn.click();
    await expect (pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();
    await expect (pages('doctors').specialistCard(8).name).toHaveText('Dr. Ann Smith');
    await expect (pages('doctors').specialistCard(8).education).toHaveText('Cambridge', {ignoreCase: true});
  });
  it('Close modal window for adding a new doctor', async () => {
    await pages('dashboard').sideMenu.item('doctors').click();
    await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
    await (pages('doctors').addDoctorModal.rootEl).waitForDisplayed();
    await pages('doctors').addDoctorModal.closeBtn.click();
    await expect (pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();

  })
});
