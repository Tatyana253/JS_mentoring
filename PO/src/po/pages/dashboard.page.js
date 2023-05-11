const SideMenuComponent = require("../components/common/sidemenu.component");
const BasePage = require("../components/doctors/basePage");

class DashboardPage extends BasePage {

    constructor() {
        super("/showcase/angular/appointmentplanner/#/dashboard")
        this.sideMenu = new SideMenuComponent();
    }
}

module.exports = DashboardPage;