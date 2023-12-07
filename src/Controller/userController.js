import Schema from "../Model/user.js";

const userController = 
{
    getUser: async(req, res) => 
    {
        try
        {   const users = await Schema.find()
            res.json(users)
            console.log(users)
        } 
            catch(erro) {console.log(erro)}
    }, 

    getUserById: async(req, res) => 
    { 
        const {id} = req.params

        try
        {   const user = await Schema.findById(id)
            res.json(user)
        } 
            catch(erro) {console.log(erro)}
    },

    createUser: async(req, res) => 
    { 

        try
        { 
            const newUser = new Schema(req.body)
            const saveUser = await newUser.save()
                res.json(saveUser)
        } 
        
            catch(erro) {console.log(erro)}
    },

    updateUser: async(req, res) => 
    { 
        const {id} = req.params

        try
        { 
           const updateUser = await Schema.findByIdAndUpdate(id, req.body)
                res.json(updateUser)
        } 
        
            catch(erro) {console.log(erro)}
    },

    deleteUser: async(req, res) => 
    { 
        const {id} = req.params

        try
        { 
           const deleteUser = await Schema.findByIdAndDelete(id)
                res.json(updateUser)
        } 
        
            catch(erro) {console.log(erro)}
    },





}

    export default userController