const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

const { User } = require("./models/db.model");

const port = 3000;

app.get("/", (req, res, next) => {
    res.render("home");
});
app.get("/login", (req, res, next) => {
    res.render("login");
});
app.get("/register", (req, res, next) => {
    res.render("register");
});

app.post("/register", (req, res) => {
    const newUser = new User({
        email: req.body.username,
        password: req.body.password,
    });
    newUser.save((err) => {
        if (err) console.log(err);
        else {
            res.render("secrets");
        }
    });
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password);

    User.findOne({ email: username }, (err, foundUser) => {
        if (err) {
        } else {
            if (foundUser) {
                if (foundUser.password === password) {
                    res.render("secrets");
                }
            }
        }
    });
});

app.listen(port, () => {
    console.log("server running on port 3000");
});
