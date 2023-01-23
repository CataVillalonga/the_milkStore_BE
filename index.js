"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const milk_json_1 = __importDefault(require("./milk.json"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
//get all
app.get('/api/milks', (req, res) => {
    return res.location('/api/milks')
        .status(200)
        .json(milk_json_1.default);
});
//get by id
app.get('/api/milks/:id', (req, res) => {
    const id = req.params.id;
    const milk = milk_json_1.default.results.filter(milk => milk.id === id);
    if (milk.length !== 0) {
        return res.location('/api/milks/:id')
            .status(200)
            .json(milk);
    }
    return res.status(404)
        .json({
        error: 404,
        msg: 'Milk not found'
    });
});
//get all by type
app.get('/api/milks/type/:type', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
