"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const environment_setting_1 = require("../setting/environment.setting");
const shared_1 = __importDefault(require("../../shared"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.environment();
        this.middleware();
        this.routes();
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(environment_setting_1.env.SERVER_PORT, () => {
                console.log(`The ${environment_setting_1.env.SERVICE_NAME} running in : ${environment_setting_1.env.SERVER_HOST}:${environment_setting_1.env.SERVER_PORT}`);
            });
        });
    }
    middleware() {
        this.app.use((0, body_parser_1.urlencoded)({ extended: true }));
        this.app.use((0, body_parser_1.json)());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        // this.app.use(responseEnhancer());
    }
    database() {
        return __awaiter(this, void 0, void 0, function* () {
            // db initialized
        });
    }
    redis() {
        return __awaiter(this, void 0, void 0, function* () {
            // redis cache initialized
        });
    }
    environment() {
        dotenv.config();
    }
    routes() {
        this.app.use(`${environment_setting_1.env.SERVER_PATH}`, shared_1.default);
    }
}
exports.App = App;