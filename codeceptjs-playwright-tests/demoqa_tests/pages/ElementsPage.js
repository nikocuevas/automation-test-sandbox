const { I } = inject();

module.exports = {
  fields: {
    //textBox
    tbFullName: {id: 'userName'}, //using id
    tbEmail: 'name@example.com', //using placeholder or text inside
    tbCurrentAddress: {xpath: '//textarea[@id="currentAddress"]'}, //using xpath
    tbPermanentAddress: {xpath: '//label[contains(text(),"Permanent Address")]/following::div//textarea'}, //xpath using label and index
  
    //webTables
    wtFName: 'First Name', //using text inside
    wtLName: 'Last Name',
    wtEmail: 'name@example.com',
    wtAge: 'Age',
    wtSalary: 'Salary',
    wtDepartment: 'Department',
    wtSearchBox: {id: 'searchBox'},

  },
  //menu list
  textBox: {xpath: '//span[contains(text(),"Text Box")]'},
  submitBtn: {id: 'submit'},
  outputDiv: {id: 'output'},

  checkBox: {xpath: '//span[contains(text(),"Check Box")]'},
  expandAll: {xpath: '//button[@title="Expand all"]'},
  resultsDiv: {id: 'result'},
  collapseAll: {xpath: '//button[@title="Collapse all"]'},
    homeCBox: {xpath: '//span[contains(text(),"Home")]/preceding::input[@id="tree-node-home"]'},
      desktopCBox: {id: 'tree-node-desktop'},
        notesCBox: {id: 'tree-node-notes'},
        commandsCBox: {id: 'tree-node-commands'},
      documentsCBox: {id: 'tree-node-documents'},
        workspaceCBox: {id: 'tree-node-workspace'},
          reactCBox: {id: 'tree-node-react'},
          angularCBox: {id: 'tree-node-angular'},
          veuCBox: {id: 'tree-node-veu'},
        officeCBox: {id: 'tree-node-office'},
          publicCBox: {id: 'tree-node-public'},
          privateCBox: {id: 'tree-node-private'},
          classifiedCBox: {id: 'tree-node-classfied'},
          generalCBox: {id: 'tree-node-general'},
      downloadsCBox: {id: 'tree-node-downloads'},
        wordCBox: {id: 'tree-node-wordFile'},
        excelCBox: {id: 'tree-node-excelFile'},

  radioButton: {xpath: '//span[contains(text(),"Radio Button")]'},
    yesRdbtn: {id: 'yesRadio'},
    impressiveRdbtn: {id: 'impressiveRadio'},
    disabledRdbtn: {id: 'noRadio'},
  rdbtnOutput: {xpath: '//span[@class="text-success"]'},

  webTables: {xpath: '//span[contains(text(),"Web Tables")]'},
    wtAddButon: {id: 'addNewRecordButton'},
    wtSubmitBtn: {id: 'submit'},
    wtDelete: {xpath: '//span[@title="Delete"]'},
  
    buttons: {xpath: '//span[contains(text(),"Buttons")]'},
  links: {xpath: '(//span[contains(text(),"Links")])[1]'},
  brokenLinksImages: {xpath: '//span[contains(text(),"Broken Links - Images")]'},
  uploadDownload: {xpath: '//span[contains(text(),"Upload and Download")]'},
  dynamicProperties: {xpath: '//span[contains(text(),"Dynamic Properties")]'},

  pageHeader: {xpath: '//div[@class="main-header"]'},


  async doTextBoxes(fullName, email, currentAddress, permanentAddress) {
    await I.say('Starting activity for Text Boxes', 'cyan');
    await I.click(this.textBox);
    await I.waitForText('Text Box', 60, this.pageHeader);
    await I.waitForElement(this.submitBtn, 60);
    await I.fillField(this.fields.tbFullName, fullName);
    await I.fillField(this.fields.tbEmail, email);
    await I.fillField(this.fields.tbCurrentAddress, currentAddress);
    await I.fillField(this.fields.tbPermanentAddress, permanentAddress);
    await I.click(this.submitBtn);
    await I.see(fullName, this.outputDiv), I.see(email, this.outputDiv), I.see(currentAddress, this.outputDiv), I.see(permanentAddress, this.outputDiv);
    await I.say('TextBox fillout success', 'green');
  },

  async doCheckboxes() {
    await I.say('Starting activity for Check Boxes', 'cyan');
    await I.click(this.checkBox);
    await I.waitForText('Check Box', 60, this.pageHeader);
    await I.forceClick(this.expandAll);
    await I.forceClick(this.desktopCBox);
    await I.forceClick(this.reactCBox);
    await I.forceClick(this.angularCBox);
    await I.forceClick(this.privateCBox);
    await I.forceClick(this.excelCBox);
    await I.see('desktop',this.resultsDiv), I.see('react',this.resultsDiv), I.see('angular',this.resultsDiv), I.see('private',this.resultsDiv), I.see('excelFile',this.resultsDiv);
    await I.say('Correct checkboxes are selected', 'green');
  },

  async doRadioButtons() {
    await I.say('Starting activity for Radio Buttons', 'cyan');
    await I.click(this.radioButton);
    await I.waitForText('Radio Button', 60, this.pageHeader);
    await I.checkOption(this.yesRdbtn);
    const result1 = await I.grabTextFrom(this.rdbtnOutput);
    await I.say('You have selected ' + result1, 'green');
    await I.checkOption(this.impressiveRdbtn);
    const result2 = await I.grabTextFrom(this.rdbtnOutput);
    await I.say('You have selected ' + result2, 'green');
    await I.say('Successfully interacted with radio buttons', 'green');
  },

  async doWebTables(wtFName, wtLName, wtEmail, wtAge, wtSalary, wtDepartment) {
    await I.say('Starting activity for Web Tables', 'cyan');
    await I.click(this.webTables);
    await I.waitForText('Web Tables', 60, this.pageHeader);
    await I.click(this.wtAddButon);
    await I.fillField(this.fields.wtFName, wtFName);
    await I.fillField(this.fields.wtLName, wtLName);
    await I.fillField(this.fields.wtEmail, wtEmail);
    await I.fillField(this.fields.wtAge, wtAge);
    await I.fillField(this.fields.wtSalary, wtSalary);
    await I.fillField(this.fields.wtDepartment, wtDepartment);
    await I.click(this.wtSubmitBtn);
    await I.click(this.fields.wtSearchBox), I.type(wtFName, 100);
    await I.click(this.wtDelete);
    await I.say('Activity completed for Web Tables', 'green');
  },
}
