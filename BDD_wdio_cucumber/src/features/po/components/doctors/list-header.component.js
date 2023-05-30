const BaseComponent = require("../common/base.component");

class ListHeaderComponent extends BaseComponent {
constructor() {
    super('.specialization-types');
}

  get addNewDoctorBtn() {
    return this.rootEl.$("button.e-control");
  }
  get selectSpecialization() {
    return $('#Specialization .e-input-group.e-control-wrapper');
  }

}

module.exports = ListHeaderComponent;