const BaseComponent = require("../common/base.component");

class AddPatientComponent extends BaseComponent {
  constructor() {
    super(".new-patient-dialog");
  }

  get saveBtn() {
    return this.rootEl.$("//button[text()='Save']");
  }
  get closeBtn() {
    return this.rootEl.$('.new-patient-dialog .e-dlg-closeicon-btn');
  }

  
/**
 * 
 *
 * @param {*} name {'name' | 'phone' | "email" | "symptoms"}
 * @return {*} 
 * @memberof AddPatientComponent
 */
input (name) {
    const selectors = {
        name: "//input[@name='Name']",
        phone: "#PatientMobile",
        email: "//input[@name='Email']",
        symptoms: "//input[@name='Symptoms']",
    }
    return this.rootEl.$(selectors[name.toLowerCase()]);
}

} 




module.exports = AddPatientComponent;
