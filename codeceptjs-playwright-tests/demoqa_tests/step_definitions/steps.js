const ElementsPage = require('../pages/ElementsPage');
const HomePage = require('../pages/HomePage');
const { faker } = require('@faker-js/faker');

const { I, homePage } = inject();
require('dotenv').config();


Given('I have a defined step', async() => {
  var fullName = faker.name.fullName();
  var email = faker.internet.email();
  var currentAddress = faker.address.streetAddress(true);
  var permanentAddress = faker.address.streetAddress(true);

  await I.amOnPage('/');
  await HomePage.selectElements();
  await ElementsPage.doTextBoxes(fullName, email, currentAddress, permanentAddress);
  await ElementsPage.doCheckboxes();
  await I.wait(5);
});
