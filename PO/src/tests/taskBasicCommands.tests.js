const {pages} = require('./../po');
describe("test suite for ej2.syncfusion.com with basic commands", () => {
    beforeEach(async () => {
        await pages('dashboard').open();
      });
    it("shoud verify that day events counter element is displayed", async () => {
      expect(await pages('dashboard').eventCounter).toBeDisplayed();
    });
  
    it("shoud verify that week events counter element is exist", async () => {
      expect(await pages('dashboard').eventCounterTotalThisWeek).toBeExisting();
    });
  
    it("shoud search patient", async () => {
        await pages('dashboard').sideMenu.item('patients').click();
        await pages('patients').patientsListHeader.searchPatientField.isDisplayed();
        await pages('patients').patientsListHeader.searchPatientField.setValue("Janet");
        expect(await pages('patients').patientsListHeader.nameOfPatient).toHaveTextContaining("Janet");
    });
  
    it("shoud verify that button 'Add new doctor' have attribute cssclass  ", async () => {
        await pages('dashboard').sideMenu.item('doctors').click();
        await pages('doctors').doctorListHeader.addNewDoctorBtn.waitForDisplayed();
      expect(
        await pages('doctors').doctorListHeader.addNewDoctorBtn
      ).toHaveAttribute("cssclass");
    });
  
    it("shoud verify that doctor specialization dropdown is present", async () => {
        await pages('dashboard').sideMenu.item('doctors').click();
        await pages('doctors').doctorListHeader.selectSpecialization.waitForDisplayed();
      expect(
        await pages('doctors').doctorListHeader.selectSpecialization
      ).toBePresent();
    });
  });
