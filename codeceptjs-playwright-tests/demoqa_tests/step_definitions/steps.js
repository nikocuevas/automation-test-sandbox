const ElementsPage = require('../pages/ElementsPage');
const HomePage = require('../pages/HomePage');
const { faker } = require('@faker-js/faker');

const { I } = inject();
require('dotenv').config();


Given('I navigate to DEMO QA website', async() => {
  await I.amOnPage('/');
});

When('I click on Elements tab', async() => {
  await HomePage.selectElements()
});

Then('I do activity for textboxes', async() => {
  var fullName = faker.name.fullName();
  var email = faker.internet.email();
  var currentAddress = faker.address.streetAddress(true);
  var permanentAddress = faker.address.streetAddress(true);
  await ElementsPage.doTextBoxes(fullName, email, currentAddress, permanentAddress);
});

Then('I do activity for checkboxes', async() => {
  await ElementsPage.doCheckboxes();
});

Then('I do activity for radiobuttons', async() => {
  await ElementsPage.doRadioButtons();
});

Then('I do activity for web tables', async() => {
  var wtFName = faker.name.firstName();
  var wtLName = faker.name.lastName();
  var wtEmail = faker.internet.email();
  var wtAge = faker.random.numeric(2);
  var wtSalary = faker.random.numeric(6);
  var wtDepartment = faker.name.jobArea();
  await ElementsPage.doWebTables(wtFName, wtLName, wtEmail, wtAge, wtSalary, wtDepartment);
  await I.wait(5);
});