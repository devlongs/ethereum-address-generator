function ethereumKeyGeneration() {
  // the ethers.js library
  var ethers = require("ethers");

  // the native crypto module in nodejs
  var crypto = require("crypto");
  for (i = 0; i < 10; i++) {
    var id = crypto.randomBytes(32).toString("hex");
    var privateKey = "0x" + id;
    console.log("This is the private key:", privateKey);
    var wallet = new ethers.Wallet(privateKey);
    console.log("This is the address: " + wallet.address);
  }
}
ethereumKeyGeneration();
