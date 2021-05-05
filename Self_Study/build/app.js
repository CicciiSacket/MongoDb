"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uri = void 0;
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var users_1 = require("./routes/users");
exports.uri = 'mongodb+srv://Ciccio:Ciccio@firstcluster.adi2n.mongodb.net/FirstDatabase?retryWrites=true&w=majority';
mongoose_1.default
    .connect(exports.uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function () {
    console.log("🗄  Database connected");
})
    .catch(function () {
    console.log("❌  Error connection!");
});
var app = express_1.default();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
module.exports = app.listen(3004);
app.use('/users', users_1.router);
