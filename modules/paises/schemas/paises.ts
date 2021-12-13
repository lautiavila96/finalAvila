import * as mongoose from 'mongoose'

export const PaisesSchema = new mongoose.Schema({
    nombrePais: {type: String, required: true, lowercase: true},
    superficieKm: { type: String, lowercase: true},
    capital: { type: String, lowercase: true},
    cantHabitantes: { type: String, lowercase: true},
    clima: { type: String, lowercase: true}
})

export let paises = mongoose.model("Paises", PaisesSchema, "paises");