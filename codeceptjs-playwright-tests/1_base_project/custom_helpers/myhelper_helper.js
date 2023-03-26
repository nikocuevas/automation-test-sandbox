const Helper = require('@codeceptjs/helper');

class MyHelper extends Helper {

  async doAwesomeThings() {
    console.log('Hello from MyHelper');
  }

}

module.exports = MyHelper;