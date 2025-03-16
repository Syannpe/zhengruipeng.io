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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toast = void 0;
var Toast = /** @class */ (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _Toast___version__.set(_this, 1.0);
        return _this;
    }
    //设置持续时间
    Toast.setDuration = function (duration) {
        __classPrivateFieldSet(this, _a, duration, "f", _Toast_duration);
    };
    //获取持续时间
    Toast.getDuration = function () {
        return __classPrivateFieldGet(this, _a, "f", _Toast_duration);
    };
    Toast.showMessage = function (msg) {
        var _this = this;
        __classPrivateFieldGet(this, _a, "m", _Toast_checkInit).call(this).then(function (_) {
            if (msg.length > 200)
                msg = msg.substring(0, 200);
            __classPrivateFieldGet(_this, _a, "f", _Toast_msgList).push(msg);
            __classPrivateFieldGet(_this, _a, "m", _Toast_render).call(_this, "log");
        });
    };
    Toast.showWarning = function (msg) {
        var _this = this;
        __classPrivateFieldGet(this, _a, "m", _Toast_checkInit).call(this).then(function (_) {
            if (msg.length > 200)
                msg = msg.substring(0, 200);
            __classPrivateFieldGet(_this, _a, "f", _Toast_msgList).push(msg);
            __classPrivateFieldGet(_this, _a, "m", _Toast_render).call(_this, "warn");
        });
    };
    Toast.showError = function (msg) {
        var _this = this;
        __classPrivateFieldGet(this, _a, "m", _Toast_checkInit).call(this).then(function (_) {
            if (msg.length > 200)
                msg = msg.substring(0, 200);
            __classPrivateFieldGet(_this, _a, "f", _Toast_msgList).push(msg);
            __classPrivateFieldGet(_this, _a, "m", _Toast_render).call(_this, "error");
        });
    };
    var _a, _Toast___version__, _Toast_duration, _Toast_isInitialize, _Toast_container, _Toast_createElement, _Toast_checkInit, _Toast_msgList, _Toast_render;
    _a = Toast, _Toast___version__ = new WeakMap(), _Toast_checkInit = function _Toast_checkInit() {
        return __awaiter(this, void 0, void 0, function () {
            var cssText, stylesheet;
            return __generator(this, function (_b) {
                if (!__classPrivateFieldGet(this, _a, "f", _Toast_isInitialize)) {
                    cssText = "\n            #toast-container {\n                position: fixed;\n                left: 30vw;\n                top: 10vh;\n            \n                z-index: 1;\n                display: none;\n                grid-template-columns: 40vw;\n                grid-auto-rows: min-content;\n            }\n            \n            #toast-container > .pop-over {\n                border-radius: 20px;\n                // border: #aaffdd solid 2px;\n                width: calc(100% - 20px);\n                padding: 22px 15px;\n                text-align: center;\n                line-break: strict;\n                word-break: break-all;\n                margin:10px;\n                font-size:1.1em;\n            }\n            .log{\n                background-color: #aaffaa77;\n            }\n            .error{\n                background-color: #f007;\n            }\n            .warn{\n                background-color: #ff07;\n            }\n            ";
                    stylesheet = new CSSStyleSheet();
                    stylesheet.replaceSync(cssText);
                    document.adoptedStyleSheets = [stylesheet];
                }
                return [2 /*return*/];
            });
        });
    }, _Toast_render = function _Toast_render(type) {
        return __awaiter(this, void 0, void 0, function () {
            var that, element, prm;
            return __generator(this, function (_b) {
                if (!__classPrivateFieldGet(this, _a, "f", _Toast_msgList).length)
                    return [2 /*return*/, null];
                that = this;
                element = __classPrivateFieldGet(this, _a, "f", _Toast_createElement).call(this, __classPrivateFieldGet(that, _a, "f", _Toast_msgList)[__classPrivateFieldGet(that, _a, "f", _Toast_msgList).length - 1]);
                element.classList.add(type);
                // @ts-ignore
                document.startViewTransition(function () {
                    __classPrivateFieldGet(that, _a, "f", _Toast_container).style.display = "grid";
                });
                prm = new Promise(function (resolve) {
                    setTimeout(function () {
                        // @ts-ignore
                        var transition = document.startViewTransition(function () {
                            element.parentElement.removeChild(element);
                            __classPrivateFieldGet(that, _a, "f", _Toast_msgList).shift();
                            if (!__classPrivateFieldGet(that, _a, "f", _Toast_msgList).length)
                                __classPrivateFieldGet(that, _a, "f", _Toast_container).style.display = "none";
                        });
                        resolve();
                    }, __classPrivateFieldGet(that, _a, "f", _Toast_duration));
                });
                return [2 /*return*/];
            });
        });
    };
    //窗口持续时间
    _Toast_duration = { value: 3000 };
    //窗口是否已经初始化
    _Toast_isInitialize = { value: false };
    _Toast_container = { value: (function () {
            var div = document.createElement("div");
            // @ts-ignore
            div.id = "toast-container";
            div.style.display = "none";
            document.body.appendChild(div);
            return div;
        })() };
    //窗口元素
    _Toast_createElement = { value: function (content) {
            var div = document.createElement("div");
            // @ts-ignore
            div.innerHTML = content;
            div.className = "pop-over";
            __classPrivateFieldGet(this, _a, "f", _Toast_container).appendChild(div);
            return div;
        } };
    //消息列表
    _Toast_msgList = { value: [] };
    return Toast;
}(Object));
exports.Toast = Toast;
