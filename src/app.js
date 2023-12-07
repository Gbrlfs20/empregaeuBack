
import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import userController from "./Controller/userController.js";
import psiController from "./Controller/psicController.js";
import dateController from "./Controller/agendController";


const conexao = await
conectaNaDatabase();

conexao.on("error", (erro) => {
     console.error("erro de conexão", erro);
     });
    
     conexao.once("open", () => {
     console.log("Conexão com o banco feita com sucesso");
     })

const app = express();
app.use(express.json());

     app.get("/api/users", userController.getUser)


     app.get('/api/user/:id', userController.getUserById)

     app.post('/api/user', userController.createUser)

     app.put('/api/user/:id', userController.updateUser)

     app.delete('/api/user/:id', userController.deleteUser)



     app.get("/api/psic", psiController.getPsicologos)

     app.get('/api/psic/:id', psiController.getPsicById)

     app.post('/api/psic', psiController.createPsic)

     app.put('/api/psic/:id', psiController.updatePsic)

     app.delete('/api/psic/:id', psiController.deleteUser)



     app.get("/api/meet", dateController.getPsicologos)

     app.get('/api/meet/:id', dateController.getPsicById)

     app.post('/api/meet', dateController.createPsic)

     app.put('/api/meet/:id', dateController.updatePsic)

     app.delete('/api/meet/:id', dateController.deleteUser)














   

    



    


        


        



             
        
    

    

        
   

        
        



export default app