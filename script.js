function ethereumKeyGeneration() {
    var ethers = require("ethers");
    var crypto = require("crypto");
    for (i = 0; i < 5; i++) {
      var id = crypto.randomBytes(32).toString("hex");
      var privateKey = "0x" + id;
      console.log("This is your private key:", privateKey);
      var wallet = new ethers.Wallet(privateKey);
      console.log("Address: " + wallet.address);
    }
  }
  ethereumKeyGeneration();
  