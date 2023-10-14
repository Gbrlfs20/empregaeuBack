
async function conectaNaDatabase() {
     mongoose.connect("mongodb+srv://gabrielfs0626:gabrielads0626@cluster0.rd6bctc.mongodb.net/?retryWrites=true&w=majority");
    
    return mongoose.connection;
    }
    
     export default conectaNaDatabase;