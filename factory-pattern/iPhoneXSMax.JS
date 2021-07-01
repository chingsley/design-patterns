const Phone = require("./Phone");

class iPhoneXSMax {
  constructor(serialNum) {
    return new Phone(
      serialNum,
      "iPhone XSMax",
      "A12 Bionic",
      "4 Gb",
      77.4,
      157.5,
      7.9,
      "1242 * 2688"
    );
  }
}

module.exports = iPhoneXSMax;
