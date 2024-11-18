const express = require("express");
const session = require("express-session");
const ejs = require('ejs');
const path = require('path');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, '../public')));

app.get("/", (req, res) => res.render("coming-soon", {title: "ASPYRE - COMING SOON"}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));