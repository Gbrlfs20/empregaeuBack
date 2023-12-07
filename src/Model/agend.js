import mongoose from "mongoose";

const agendSchema = new mongoose.Schema({

    data: { type: Date },
    local: { type: String },
    hora: { type: String }
},
    {
        versionKey: false

    })

const dateSchema = mongoose.model('Agendamento', agendSchema)

    export default dateSchema