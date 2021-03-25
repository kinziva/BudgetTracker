const path = require("path");

module.exports = (app) => {

  // Get request which sends index.html to browser when homepage visited
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};
