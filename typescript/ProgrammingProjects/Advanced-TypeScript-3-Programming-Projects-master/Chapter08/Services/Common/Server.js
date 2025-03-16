"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var express_1 = __importDefault(require("express"));
var Environment_1 = require("./Configuration/Environment");
var RoutingEngine_1 = require("./Routing/RoutingEngine");
var cors_1 = __importDefault(require("cors"));
var firebase_1 = __importDefault(require("firebase"));
var bodyParser = require("body-parser");
var Server = (function () {
    function Server(port, app, routingEngine) {
        if (port === void 0) { port = 3000; }
        if (app === void 0) { app = (0, express_1.default)(); }
        if (routingEngine === void 0) { routingEngine = new RoutingEngine_1.RoutingEngine(); }
        this.port = port;
        this.app = app;
        this.routingEngine = routingEngine;
    }
    Server.prototype.WithCorsSupport = function () {
        this.app.use((0, cors_1.default)());
        return this;
    };
    Server.prototype.Start = function () {
        var _this = this;
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        var router = express_1.default.Router();
        this.AddRouting(router);
        this.app.use(router);
        this.app.listen(this.port, function () { return console.log("logged onto people server at ".concat(_this.port)); });
    };
    Server.prototype.AddRouting = function (router) {
    };
    Server.prototype.WithDatabase = function () {
        firebase_1.default.initializeApp(Environment_1.Environment.fireBase);
        return this;
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9EQUF1RTtBQUN2RSwyREFBMEQ7QUFDMUQseURBQXdEO0FBQ3hELDhDQUF3QjtBQUN4QixzREFBZ0M7QUFDaEMsd0NBQTJDO0FBRTNDO0lBQ0UsZ0JBQW9CLElBQW1CLEVBQVUsR0FBb0IsRUFBWSxhQUFrRDtRQUEvRyxxQkFBQSxFQUFBLFdBQW1CO1FBQVUsb0JBQUEsRUFBQSxVQUFXLGlCQUFPLEdBQUU7UUFBWSw4QkFBQSxFQUFBLG9CQUFtQyw2QkFBYSxFQUFFO1FBQS9HLFNBQUksR0FBSixJQUFJLENBQWU7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFpQjtRQUFZLGtCQUFhLEdBQWIsYUFBYSxDQUFxQztJQUFHLENBQUM7SUFFaEksZ0NBQWUsR0FBdEI7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGNBQUksR0FBRSxDQUFDLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sc0JBQUssR0FBWjtRQUFBLGlCQWdCQztRQU5DLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQU0sTUFBTSxHQUFXLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGNBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUFnQyxLQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBeEQsQ0FBd0QsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFFUywyQkFBVSxHQUFwQixVQUFxQixNQUFjO0lBRW5DLENBQUM7SUFFTSw2QkFBWSxHQUFuQjtRQUNFLGtCQUFRLENBQUMsYUFBYSxDQUFDLHlCQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUgsYUFBQztBQUFELENBQUMsQUFuQ0QsSUFtQ0M7QUFuQ3FCLHdCQUFNIn0=