const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;
const config = require("../../../config-local.json");

const connection = mongoose.createConnection(config.mongoPath);

autoIncrement.initialize(connection);

const questionModel = new Schema(
  {
    content: { type: String, require: true },
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 }
  },
  {
    timestamps: { createdAt: "createdAt" }
  }
);

questionModel.plugin(autoIncrement.plugin, "questions");

module.exports = mongoose.model("questions", questionModel);
