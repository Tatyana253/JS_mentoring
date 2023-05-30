const BasePage = require("./base.page");
const SideMenuComponent = require("./../components/common/sidemenu.component");

class DashboardPage extends BasePage {

    constructor() {
        super("/showcase/angular/appointmentplanner/#/dashboard")
        this.sideMenu = new SideMenuComponent();
    }
    get eventCounter() {
        return $("div>.day-event-count");
    }
    get eventCounterTotalThisWeek() {
        return $('.card-text.label-text');
    }
    get appointmentRow() {
    return $('tr>td.e-rowcell');
    }
}

module.exports = DashboardPage;