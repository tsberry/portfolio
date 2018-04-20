var express = require("express");
var exphbs = require("express-handlebars");
var router = require("./routing/router.js");

var app = express();
var PORT = process.env.PORT || 8080;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(router);

app.listen(PORT, function() {
    console.log(`App is listening on PORT ${PORT}.`);
});