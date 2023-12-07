import mongoose from "mongoose";
import psiSchema from "./psic";
import dateSchema from "./agend";

const userSchema = new mongoose.Schema({

    nome: { type: String },
    email: { type: String },
    CPF: { type: String },
    CEP: { type: String }, 

    Psicologo: {type: psiSchema },

    Agendamento: {type: dateSchema}




},
    {
        versionKey: false

    })

const Schema = mongoose.model('Users', userSchema)

    export default Schema