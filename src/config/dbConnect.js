
import mongoose from "mongoose";


async function conectaNaDatabase() {
     mongoose.connect("mongodb+srv://gabrielfs0626:gabrielads0626@cluster0.rd6bctc.mongodb.net/PsiConnect?retryWrites=true&w=majority");
    
    return await mongoose.connection;
    }
    
     export default conectaNaDatabase;