"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menu = void 0;
var electron_1 = require("electron");
var main_1 = require("./main");
exports.menu = electron_1.Menu.buildFromTemplate(main_1.menuTemplate);
