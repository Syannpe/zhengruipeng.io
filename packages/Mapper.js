"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Mapper_map, _Mapper_symbolDefault, _Mapper_symbolFinally;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapperEvent = exports.MapperObserveKey = exports.Mapper = void 0;
//和Mapper为依赖关系
var MapperObserveKey = /** @class */ (function (_super) {
    __extends(MapperObserveKey, _super);
    function MapperObserveKey() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keylist = [];
        return _this;
    }
    MapperObserveKey.prototype.addKey = function (key) {
        this.keylist.push(key);
        return this;
    };
    MapperObserveKey.prototype.clearKeyList = function () {
        this.keylist.length = 0;
        return this;
    };
    MapperObserveKey.prototype.getValue = function (obj) {
        var value = obj;
        this.keylist.forEach(function (key) {
            value = value[key];
        });
        return value;
    };
    return MapperObserveKey;
}(Object));
exports.MapperObserveKey = MapperObserveKey;
var MapperEvent = /** @class */ (function (_super) {
    __extends(MapperEvent, _super);
    function MapperEvent(key, target, customData) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.target = target;
        _this.customData = customData;
        return _this;
    }
    return MapperEvent;
}(Object));
exports.MapperEvent = MapperEvent;
var Mapper = /** @class */ (function (_super) {
    __extends(Mapper, _super);
    function Mapper(target, options) {
        var _this = _super.call(this) || this;
        _Mapper_map.set(_this, new Map());
        _Mapper_symbolDefault.set(_this, Symbol("default"));
        _Mapper_symbolFinally.set(_this, Symbol("finally"));
        _this.target = target;
        _this.options = options;
        return _this;
    }
    Mapper.prototype.map = function (key, callback) {
        if (!__classPrivateFieldGet(this, _Mapper_map, "f").get(key)) {
            __classPrivateFieldGet(this, _Mapper_map, "f").set(key, [callback]);
        }
        else {
            //@ts-ignore:
            __classPrivateFieldGet(this, _Mapper_map, "f").get(key).push(callback);
        }
        return this;
    };
    Mapper.prototype.default = function (callback) {
        if (!__classPrivateFieldGet(this, _Mapper_map, "f").get(__classPrivateFieldGet(this, _Mapper_symbolDefault, "f"))) {
            __classPrivateFieldGet(this, _Mapper_map, "f").set(__classPrivateFieldGet(this, _Mapper_symbolDefault, "f"), [callback]);
        }
        else {
            //@ts-ignore:
            __classPrivateFieldGet(this, _Mapper_map, "f").get(__classPrivateFieldGet(this, _Mapper_symbolDefault, "f")).push(callback);
        }
        return this;
    };
    Mapper.prototype.finally = function (callback) {
        if (!__classPrivateFieldGet(this, _Mapper_map, "f").get(__classPrivateFieldGet(this, _Mapper_symbolFinally, "f"))) {
            __classPrivateFieldGet(this, _Mapper_map, "f").set(__classPrivateFieldGet(this, _Mapper_symbolFinally, "f"), [callback]);
        }
        else {
            //@ts-ignore:
            __classPrivateFieldGet(this, _Mapper_map, "f").get(__classPrivateFieldGet(this, _Mapper_symbolFinally, "f")).push(callback);
        }
        return this;
    };
    Mapper.prototype.call = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var target;
        if (typeof this.target === "object" &&
            this.options.observeKey) {
            target = this.options.observeKey.getValue(this.target);
        }
        else {
            target = this.target;
        }
        var callbacks = __classPrivateFieldGet(this, _Mapper_map, "f").get(target);
        if (!callbacks)
            callbacks = __classPrivateFieldGet(this, _Mapper_map, "f").get(__classPrivateFieldGet(this, _Mapper_symbolDefault, "f"));
        if (!callbacks)
            return;
        var finallyCBs = __classPrivateFieldGet(this, _Mapper_map, "f").get(__classPrivateFieldGet(this, _Mapper_symbolFinally, "f"));
        var mapperEvent = new MapperEvent(target, this, params);
        callbacks === null || callbacks === void 0 ? void 0 : callbacks.forEach(function (cb) {
            cb(mapperEvent);
        });
        finallyCBs === null || finallyCBs === void 0 ? void 0 : finallyCBs.forEach(function (cb) {
            cb(mapperEvent);
        });
    };
    Mapper.prototype.callSync = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var target, callbacks, mapperEvent, _a, callbacks_1, callback;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (typeof this.target === "object" &&
                            this.options.observeKey) {
                            target = this.options.observeKey.getValue(this.target);
                        }
                        else {
                            target = this.target;
                        }
                        callbacks = __classPrivateFieldGet(this, _Mapper_map, "f").get(target);
                        if (!callbacks)
                            callbacks = __classPrivateFieldGet(this, _Mapper_map, "f").get(__classPrivateFieldGet(this, _Mapper_symbolDefault, "f"));
                        if (!callbacks)
                            return [2 /*return*/];
                        mapperEvent = new MapperEvent(target, this, params);
                        _a = 0, callbacks_1 = callbacks;
                        _b.label = 1;
                    case 1:
                        if (!(_a < callbacks_1.length)) return [3 /*break*/, 4];
                        callback = callbacks_1[_a];
                        return [4 /*yield*/, callback(mapperEvent)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _a++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Mapper;
}(Object));
exports.Mapper = Mapper;
_Mapper_map = new WeakMap(), _Mapper_symbolDefault = new WeakMap(), _Mapper_symbolFinally = new WeakMap();
