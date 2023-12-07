
import cors from 'cors';
import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import userController from "./Controller/userController.js";
import psiController from "./Controller/psicController.js";
import dateController from "./Controller/agendController.js";


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
app.use(cors({origin: '*'}))

     app.get("/api/users", userController.getUser)


     app.get('/api/user/:id', userController.getUserById)

     app.post('/api/user', userController.createUser)

     app.put('/api/user/:id', userController.updateUser)

     app.delete('/api/user/:id', userController.deleteUser)



     app.get("/api/psic", psiController.getPsicologos)

     app.get('/api/psic/:id', psiController.getPsicologoById)

     app.post('/api/psic', psiController.createPsicologo)

     app.put('/api/psic/:id', psiController.updatePsicologo)

     app.delete('/api/psic/:id', psiController.deletePsicologo)



     app.get("/api/meet", dateController.getAgendamentos)

     app.get('/api/meet/:id', dateController.getAgendamentoById)

     app.post('/api/meet', dateController.createAgendamento)

     app.put('/api/meet/:id', dateController.updateAgendamento)

     app.delete('/api/meet/:id', dateController.deleteAgendamento)














   

    



    


        


        



             
        
    

    

        
   

        
        



export default app