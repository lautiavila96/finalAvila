"use strict";
exports.__esModule = true;
exports.paises = exports.PaisesSchema = void 0;
var mongoose = require("mongoose");
exports.PaisesSchema = new mongoose.Schema({
    nombrePais: { type: String, required: true, lowercase: true },
    superficieKm: { type: String, lowercase: true },
    capital: { type: String, lowercase: true },
    cantHabitantes: { type: String, lowercase: true},
    clima: { type: String, lowercase: true}
});
exports.paises = mongoose.model("Paises", exports.PaisesSchema, "paises");
