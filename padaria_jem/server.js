const express = require('express'); 
const app = express(); 
const cors = require('cors'); 
 
const clientesRoutes = require('./routes/clientes'); 
const pedidosRoutes = require('./routes/pedidos'); 
 
app.use(cors()); 
app.use(express.json()); 
app.use(express.static('public')); 
 
app.use('/api/clientes', clientesRoutes); 
app.use('/api/pedidos', pedidosRoutes); 
 
app.listen(3000, () => { 
  console.log('Servidor rodando na porta 3000'); 
}); 