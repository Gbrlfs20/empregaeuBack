import dateSchema from "../Model/agend.js";

const dateController = {
    getAgendamentos: async (req, res) => {
        try {
            const agendamentos = await dateSchema.find();
            res.json(agendamentos);
            console.log(agendamentos);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Erro ao obter agendamentos" });
        }
    },

    getAgendamentoById: async (req, res) => {
        const { id } = req.params;

        try {
            const agendamento = await dateSchema.findById(id);
            if (!agendamento) {
                return res.status(404).json({ error: "Agendamento não encontrado" });
            }
            res.json(agendamento);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Erro ao obter agendamento por ID" });
        }
    },

    createAgendamento: async (req, res) => {
        try {
            const newAgendamento = new dateSchema(req.body);
            const savedAgendamento = await newAgendamento.save();
            res.json(savedAgendamento);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Erro ao criar agendamento" });
        }
    },

    updateAgendamento: async (req, res) => {
        const { id } = req.params;

        try {
            const updatedAgendamento = await dateSchema.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedAgendamento) {
                return res.status(404).json({ error: "Agendamento não encontrado" });
            }
            res.json(updatedAgendamento);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Erro ao atualizar agendamento" });
        }
    },

    deleteAgendamento: async (req, res) => {
        const { id } = req.params;

        try {
            const deletedAgendamento = await dateSchema.findByIdAndDelete(id);
            if (!deletedAgendamento) {
                return res.status(404).json({ error: "Agendamento não encontrado" });
            }
            res.json(deletedAgendamento);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Erro ao excluir agendamento" });
        }
    },
};

export default dateController;