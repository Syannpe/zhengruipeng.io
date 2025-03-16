"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirestoreService = void 0;
var firebase_1 = __importDefault(require("firebase"));
var guid_typescript_1 = require("guid-typescript");
var FirestoreService = (function () {
    function FirestoreService(collection) {
        this.collection = collection;
    }
    FirestoreService.prototype.Get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var qry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, firebase_1.default.firestore().collection(this.collection).doc(id).get()];
                    case 1:
                        qry = _a.sent();
                        return [2, qry.data()];
                }
            });
        });
    };
    FirestoreService.prototype.GetAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var qry, items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, firebase_1.default.firestore().collection(this.collection).get()];
                    case 1:
                        qry = _a.sent();
                        items = new Array();
                        qry.forEach(function (item) {
                            items.push(item.data());
                        });
                        return [2, items];
                }
            });
        });
    };
    FirestoreService.prototype.Save = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, new Promise(function (coll) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    item.ServerID = guid_typescript_1.Guid.create().toString();
                                    return [4, firebase_1.default.firestore().collection(this.collection).doc(item.ServerID).set(item)];
                                case 1:
                                    _a.sent();
                                    coll(item);
                                    return [2];
                            }
                        });
                    }); })];
            });
        });
    };
    return FirestoreService;
}());
exports.FirestoreService = FirestoreService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlyZXN0b3JlU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZpcmVzdG9yZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQWdDO0FBQ2hDLG1EQUF1QztBQUV2QztJQUNFLDBCQUFvQixVQUFrQjtRQUFsQixlQUFVLEdBQVYsVUFBVSxDQUFRO0lBQ3RDLENBQUM7SUFDWSw4QkFBRyxHQUFoQixVQUFpQixFQUFVOzs7Ozs0QkFDYixXQUFNLGtCQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUE7O3dCQUExRSxHQUFHLEdBQUcsU0FBb0U7d0JBQ2hGLFdBQVUsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFDOzs7O0tBQ3RCO0lBQ1ksaUNBQU0sR0FBbkI7Ozs7OzRCQUNjLFdBQU0sa0JBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFBOzt3QkFBbEUsR0FBRyxHQUFHLFNBQTREO3dCQUNsRSxLQUFLLEdBQVEsSUFBSSxLQUFLLEVBQUssQ0FBQzt3QkFDbEMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQVM7NEJBQ3BCLEtBQUssQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7d0JBQzdCLENBQUMsQ0FBQyxDQUFDO3dCQUNILFdBQU8sS0FBSyxFQUFDOzs7O0tBQ2Q7SUFDWSwrQkFBSSxHQUFqQixVQUFrQixJQUFPOzs7O2dCQUN2QixXQUFPLElBQUksT0FBTyxDQUFJLFVBQU8sSUFBSTs7OztvQ0FDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxzQkFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO29DQUV6QyxXQUFNLGtCQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQTs7b0NBQW5GLFNBQW1GLENBQUM7b0NBU3BGLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozt5QkFDWixDQUFDLEVBQUM7OztLQUNKO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDO0FBL0JxQiw0Q0FBZ0IifQ==