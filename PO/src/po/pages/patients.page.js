const BasePage = require("./base.page");
const {
  AddPatientModal,
  PatientsListHeader,
} = require("./../components");

class PatientsPage extends BasePage {
  constructor() {
    super("/showcase/angular/appointmentplanner/#/patients");
    this.patientsListHeader = new PatientsListHeader();
    this.addPatientModal = new AddPatientModal();
  }

}

module.exports = PatientsPage;