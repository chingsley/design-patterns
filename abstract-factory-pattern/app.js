const iPhoneFactory = require("./iPhoneFactory");

const myNewiPhoneXR = iPhoneFactory.create("iPhone Xr", "IPXR-0001");
const myNewiPhoneXS = iPhoneFactory.create("iPhone Xs", "IPXS-0001");
const myNewiPhoneXSMax = iPhoneFactory.create("iPhone Xs Max", "IPXSMX-0001");

myNewiPhoneXR.displayConfig();
myNewiPhoneXS.displayConfig();
myNewiPhoneXSMax.displayConfig();

myNewiPhoneXSMax.dial("8988928100");
