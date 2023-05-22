const BaseComponent = require("../common/base.component");

class ListPatientsHeaderComponent extends BaseComponent {
  get searchPatientField() {
    return $("#schedule_searchbar");
  }
  get nameOfPatient() {
    return $("span.patient-name");
  }
  get addNewPatientBtn() {
    return $(".e-control.e-btn.e-lib.e-normal.add-details.e-primary");
  }
}

module.exports = ListPatientsHeaderComponent;