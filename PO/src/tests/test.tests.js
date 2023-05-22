const {pages} = require('./../po');

describe("test suite for ej2.syncfusion.com", () => {
    beforeEach(async () => {
        await pages('dashboard').open();
      });
    it("shoud verify page title", async () => {
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App'); 
  });
  
    it("shoud add a new doctor", async () => {
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
  
    it("shoud verify that button 'Add new patient' is displayed", async () => {
        await pages('dashboard').sideMenu.item('patients').click();
      const addNewPatientButton = await pages('patients').patientsListHeader.addNewPatientBtn;
      expect(await addNewPatientButton).toBeDisplayed();
    });
  
    it("shoud verify email error message while adding a new doctor without email", async () => {
      await pages('dashboard').sideMenu.item('doctors').click();
      await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
      await (pages('doctors').addDoctorModal.rootEl).waitForDisplayed();
      await pages('doctors').addDoctorModal.input('name').setValue("Ann Smith two");
      await pages('doctors').addDoctorModal.saveBtn.click();
      const errorEmail = await pages('doctors').doctorListHeader.errorEmail;
      expect(await errorEmail).toHaveTextContaining("Enter valid email");
    });
    it("Failed test to verify screenshot", async () => {
      await expect(browser).toHaveTitle("APPOINTMENT PLANNER  ");
    });
  });