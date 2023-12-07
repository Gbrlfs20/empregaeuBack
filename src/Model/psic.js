import mongoose from "mongoose";

const psicSchema = new mongoose.Schema({

    nome: { type: String },
    email: { type: String },
    IES: { type: String }
},
    {
        versionKey: false

    })

const psiSchema = mongoose.model('Psicologos', psicSchema)

    export default psiSchema