import PsiSchema from "../models/psiSchema.js";

const psiController = {
    getPsicologos: async (req, res) => {
        try {
            const psicologos = await PsiSchema.find();
            res.json(psicologos);
            console.log(psicologos);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Erro ao obter psicólogos" });
        }
    },

    getPsicologoById: async (req, res) => {
        const { id } = req.params;

        try {
            const psicologo = await PsiSchema.findById(id);
            if (!psicologo) {
                return res.status(404).json({ error: "Psicólogo não encontrado" });
            }
            res.json(psicologo);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Erro ao obter psicólogo por ID" });
        }
    },

    createPsicologo: async (req, res) => {
        try {
            const newPsicologo = new PsiSchema(req.body);
            const savedPsicologo = await newPsicologo.save();
            res.json(savedPsicologo);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Erro ao criar psicólogo" });
        }
    },

    updatePsicologo: async (req, res) => {
        const { id } = req.params;

        try {
            const updatedPsicologo = await PsiSchema.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedPsicologo) {
                return res.status(404).json({ error: "Psicólogo não encontrado" });
            }
            res.json(updatedPsicologo);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Erro ao atualizar psicólogo" });
        }
    },

    deletePsicologo: async (req, res) => {
        const { id } = req.params;

        try {
            const deletedPsicologo = await PsiSchema.findByIdAndDelete(id);
            if (!deletedPsicologo) {
                return res.status(404).json({ error: "Psicólogo não encontrado" });
            }
            res.json(deletedPsicologo);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Erro ao excluir psicólogo" });
        }
    },
};

export default psiController;