const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://aryan9211:aryan9211@cluster0.abycjm9.mongodb.net/mernstack?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo");
  });
};

module.exports = connectToMongo;
