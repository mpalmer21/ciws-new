const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema(
  {
    worksOrder: {
      type: String,
    },
    headType: {
      type: String,
    },
    customerName: {
      type: String,
    },
    partsRecievedFrom: {
      type: String,
    },
    customerSupply: {
      type: String,
    },
    purchaseOrderNumber: {
      type: String,
    },
    compname: {
      type: String,
    },
    compname1: {
      type: String,
    },
    compname2: {
      type: String,
    },
    compname3: {
      type: String,
    },
    compname4: {
      type: String,
    },
    compname5: {
      type: String,
    },
    compname6: {
      type: String,
    },
    compname7: {
      type: String,
    },
    compname8: {
      type: String,
    },
    compname9: {
      type: String,
    },
    compname10: {
      type: String,
    },
    compname11: {
      type: String,
    },
    compname12: {
      type: String,
    },
    compname13: {
      type: String,
    },
    compname14: {
      type: String,
    },
    compname15: {
      type: String,
    },
    compname16: {
      type: String,
    },
    compname17: {
      type: String,
    },
    compname18: {
      type: String,
    },
    norecieved: {
      type: String,
    },
    norecieved1: {
      type: String,
    },
    norecieved2: {
      type: String,
    },
    norecieved3: {
      type: String,
    },
    norecieved4: {
      type: String,
    },
    norecieved5: {
      type: String,
    },
    norecieved6: {
      type: String,
    },
    norecieved7: {
      type: String,
    },
    norecieved8: {
      type: String,
    },
    norecieved9: {
      type: String,
    },
    norecieved10: {
      type: String,
    },
    norecieved11: {
      type: String,
    },
    norecieved12: {
      type: String,
    },
    norecieved13: {
      type: String,
    },
    norecieved14: {
      type: String,
    },
    norecieved15: {
      type: String,
    },
    norecieved16: {
      type: String,
    },
    norecieved17: {
      type: String,
    },
    norecieved18: {
      type: String,
    },
    compsize: {
      type: String,
    },
    compsize1: {
      type: String,
    },
    compsize2: {
      type: String,
    },
    compsize3: {
      type: String,
    },
    compsize4: {
      type: String,
    },
    compsize5: {
      type: String,
    },
    compsize6: {
      type: String,
    },
    compsize7: {
      type: String,
    },
    compsize8: {
      type: String,
    },
    compsize9: {
      type: String,
    },
    compsize10: {
      type: String,
    },
    compsize11: {
      type: String,
    },
    compsize12: {
      type: String,
    },
    compsize13: {
      type: String,
    },
    compsize14: {
      type: String,
    },
    compsize15: {
      type: String,
    },
    compsize16: {
      type: String,
    },
    compsize17: {
      type: String,
    },
    compsize18: {
      type: String,
    },
    storelocation: {
      type: String,
    },
    storelocation1: {
      type: String,
    },
    storelocation2: {
      type: String,
    },
    storelocation3: {
      type: String,
    },
    storelocation4: {
      type: String,
    },
    storelocation5: {
      type: String,
    },
    storelocation6: {
      type: String,
    },
    storelocation7: {
      type: String,
    },
    storelocation8: {
      type: String,
    },
    storelocation9: {
      type: String,
    },
    storelocation10: {
      type: String,
    },
    storelocation11: {
      type: String,
    },
    storelocation12: {
      type: String,
    },
    storelocation13: {
      type: String,
    },
    storelocation14: {
      type: String,
    },
    storelocation15: {
      type: String,
    },
    storelocation16: {
      type: String,
    },
    storelocation17: {
      type: String,
    },
    storelocation18: {
      type: String,
    },
    damagecheck: {
      type: String,
    },
    damagecheck1: {
      type: String,
    },
    damagecheck2: {
      type: String,
    },
    damagecheck3: {
      type: String,
    },
    damagecheck4: {
      type: String,
    },
    damagecheck5: {
      type: String,
    },
    damagecheck6: {
      type: String,
    },
    damagecheck7: {
      type: String,
    },
    damagecheck8: {
      type: String,
    },
    damagecheck9: {
      type: String,
    },
    damagecheck10: {
      type: String,
    },
    damagecheck11: {
      type: String,
    },
    damagecheck12: {
      type: String,
    },
    damagecheck13: {
      type: String,
    },
    damagecheck14: {
      type: String,
    },
    damagecheck15: {
      type: String,
    },
    damagecheck16: {
      type: String,
    },
    damagecheck17: {
      type: String,
    },
    damagecheck18: {
      type: String,
    },
    date: {
      type: String,
    },
    signature: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Form || mongoose.model("Form", FormSchema);
