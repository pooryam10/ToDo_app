
const express = require('express');
const bodyParser = require('body-parser');

// Database Connection
require('./utils/database');
// end Connection

const adminRoutes = require('./routes/admin');
const indexRoutes = require('./routes/index');
const {get404} = require('./controllers/erroe');

const {setStatic} = require('./utils/statics');
const Todo = require('./model/toDo');

const app = express();

// Midleweare
app.use(bodyParser.urlencoded({extended: false}));
// End Midelwear

// Ejs
app.set("view engine", "ejs");
app.set("views", "views")
// End Ejs

// Statics
setStatic(app);
// End Statics

// Route
app.use(indexRoutes);
app.use("/admin", adminRoutes);

app.get("/", (req, res) =>{

    res.render("index", {pageTitle: "My ToDo App"});

});
// End Route

// 404
app.use(get404);

app.listen(3000, () => console.log("Server start."));

