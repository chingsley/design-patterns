const iPhoneXR = require("./iPhoneXR");
const iPhoneXS = require("./iPhoneXS");
const iPhoneXSMax = require("./iPhoneXSMax");

// const iPhoneXR = new Phone(
//   "IPXR-0001",
//   "iPhone Xr",
//   "A12 Bionic",
//   "3 Gb",
//   75.7,
//   150.9,
//   8.3,
//   "828 * 1792"
// );

const myNewiPhoneXR = new iPhoneXR("IPXR-0001");
const myNewiPhoneXS = new iPhoneXS("IPXS-0001");
const myNewiPhoneXSMax = new iPhoneXSMax("IPXSMX-0001");

myNewiPhoneXR.displayConfig();
myNewiPhoneXS.displayConfig();
myNewiPhoneXSMax.displayConfig();
