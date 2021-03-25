const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/budget',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
).then(() => {
  console.log('Connected to MongoDB')
}).catch(error => {
  console.log(error);
});
// Creating and importing routes
require("./routes/api")(app);
require("./routes/html-routes")(app);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});