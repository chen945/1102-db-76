var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var crown76Router = require("./routes/crown76");
var crown2_76Router = require("./routes/crown2_76");
var hats_76Router = require("./routes/hats_76");
var book_76_Router = require("./routes/book_76");
var Shop_76_Router = require("./routes/shop_76");
const Shop_76 = require("./models/Shop_76");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/crown_76", crown76Router);
app.use("/crown2_76", crown2_76Router);
app.use("/book_76", book_76_Router);
app.use("/shop_76", Shop_76_Router);
// app.use("/crown2_76/shop_76/hats", hats_76Router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
