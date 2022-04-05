const app = require("./app");

const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const connectDatabase = require("./config/database");

dotenv.config({ path: "backend/config/config.env" });

// connecting database

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
