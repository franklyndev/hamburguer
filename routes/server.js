import express from 'express';

import pedidoRoutes from './routes/pedido.routes.js';
import entregaRoutes from './routes/entrega.routes.js';
import produtoRoutes from './routes/produto.routes.js';

const app = express();

app.use(express.json());


app.use('/pedidos', pedidoRoutes);
app.use('/entregas', entregaRoutes);
app.use('/produtos', produtoRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});