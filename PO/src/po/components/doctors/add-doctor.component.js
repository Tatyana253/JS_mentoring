const BaseComponent = require("../common/base.component");

class AddDoctorComponent extends BaseComponent {
  constructor() {
    super(".new-doctor-dialog");
  }

  get saveBtn() {
    return this.rootEl.$("//button[text()='Save']");
  }
  get closeBtn() {
    return this.rootEl.$('.new-doctor-dialog .e-dlg-closeicon-btn');
  }

  
/**
 * 
 *
 * @param {*} name {'name' | 'phone' | "email" | "education"}
 * @return {*} 
 * @memberof AddDoctorComponent
 */
input (name) {
    const selectors = {
        name: "//input[@name='Name']",
        phone: "#DoctorMobile",
        email: "//input[@name='Email']",
        education: "//input[@name='Education']",
    }
    return this.rootEl.$(selectors[name.toLowerCase()]);
}

} 




module.exports = AddDoctorComponent;
