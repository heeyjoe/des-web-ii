const express = require('express');
const cors = require('cors');
require('dotenv').config();

const tarefasRoutes = require('./routes/tarefaRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Comunicação via API RESTful
app.use('/tarefas', tarefasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});