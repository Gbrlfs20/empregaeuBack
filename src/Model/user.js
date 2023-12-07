import mongoose from "mongoose";
import psiSchema from "./psic.js";
import dateSchema from "./agend.js";

const userSchema = new mongoose.Schema({

    nome: { type: String },
    email: { type: String },
    CPF: { type: String },
    CEP: { type: String }, 

    psicologo: {type: mongoose.Schema.Types.ObjectId, ref: psiSchema },

    agendamento: {type: mongoose.Schema.Types.ObjectId, ref: dateSchema}




},
    {
        versionKey: false

    })

const Schema = mongoose.model('Users', userSchema)

    export default Schema