const mongoose = require("mongoose");
const Orderlists = require("./orderlist");
const { Schema } = mongoose;
const tableSchema = new mongoose.Schema({
  tableNumber: { type: Number, required: true },
  tableType: { type: String, required: true, enum: ["buffet", "a-la-carte"] },
  orderList: { type: Schema.Types.ObjectId, ref: "orderlists" },
  status: { type: String, enum: ["avaliable", "busy"] },
});

const model = mongoose.model("tables", tableSchema);

module.exports = model;
