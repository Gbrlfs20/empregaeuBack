
import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";

const conexao = await
conectaNaDatabase();

conexao.on("error", (erro) => {
     console.error("erro de conexão", erro);
     });
    
     conexao.once("open", () => {
     console.log("Conexão com o banco feita com sucesso");
     })

const app = express();



const usuario = [
{id: 1, nome: "Camilla Alves", email: "milla@gmail.com", CPF:"892384203-00", CEP: "83028-000" },
{id: 2, nome: "João Fernando", email: "jf@gmail.com", CPF:"465324-00", CEP: "65789-000"}
]





   

    app.post('/usuario', (req, res) => {
        usuario.push(req.body);
        res.status(201).send('Usuário cadastrado com Sucesso!')
        })



    app.delete('/usuario/:id', (req, res) => {
        const id = req.params.id
        let newUsu =  buscaUsuario(id)
        usuario.pop(newUsu);
        res.status(201).send('Campo deletado!')
        })


        app.get('/usuario/:id', (req, res) => {
            const id = req.params.id
            let newUsu =  buscaUsuario(id) 
            res.status(200).json(usuario[newUsu])
            })


        

        app.get('/usuario', (req, res) => {
             res.status(200).json(usuario)
             })


             app.put('/usuario/:id', (req, res) => {
                let index = buscaUsuario(req.params.id);
                usuario[index].nome = req.body.nome;
                res.json(usuario);
              })

              app.put('/usuario/:id', (req, res) => {
                let index = buscaUsuario(req.params.id);
                usuario[index].CEP = req.body.CEP;
                res.json(usuario);
              })
        
    

    function buscaUsuario(id) {
        return usuario.findIndex(usuario => usuario.id == id)
        }

        
   

        app.use(express.json());
        



export default app