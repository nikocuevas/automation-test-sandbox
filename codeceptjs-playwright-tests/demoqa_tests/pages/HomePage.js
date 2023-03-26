const { I } = inject();

module.exports = {
  fields: {

  },
  elementsCard: {xpath: '//h5[contains(text(),"Elements")]'},
  formsCard: {xpath: '//h5[contains(text(),"Forms")]'},
  alertsCard: {xpath: '//h5[contains(text(),"Alerts, Frame & Windows")]'},
  widgetsCard: {xpath: '//h5[contains(text(),"Widgets")]'},
  interactionsCard: {xpath: '//h5[contains(text(),"Interactions")]'},

  pageHeader: {xpath: '//div[@class="main-header"]'},

  async selectElements() {
    I.waitForElement(this.elementsCard, 60);
    I.click(this.elementsCard);
    I.waitForText('Elements', 60, this.pageHeader);
    I.say('I am now on Elements Page', 'cyan');
  },

  async selectForms() {
    I.waitForElement(this.formsCard, 60);
    I.click(this.formsCard);
    I.waitForText('Forms', 60, this.pageHeader);
    I.say('I am now on Forms Page', 'cyan');
  },

  async selectAlerts() {
    I.waitForElement(this.alertsCard, 60);
    I.click(this.alertsCard);
    I.waitForText('Alerts, Frame & Windows', 60, this.pageHeader);
    I.say('I am now on Alerts, Frame & Windows Page', 'cyan');
  },

  async selectWidgets() {
    I.waitForElement(this.widgetsCard, 60);
    I.click(this.widgetsCard);
    I.waitForText('Widgets', 60, this.pageHeader);
    I.say('Widgets', 'cyan');
  },

  async selectInteractions() {
    I.waitForElement(this.interactionsCard, 60);
    I.click(this.interactionsCard);
    I.waitForText('Interactions', 60, this.pageHeader);
    I.say('I am now on Interactions Page', 'cyan');
  },
}
