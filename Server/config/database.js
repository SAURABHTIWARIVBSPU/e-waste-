const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose.connect(process.env.MONGO_URL, {  // ✅ Corrected (MONGO_URL)
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfully."))
  .catch((error) => {
    console.log("DB Connection failed.");
    console.error(error);
    process.exit(1);
  });
};
