import express from 'express';

import pedidoRoutes from './routes/pedidoRoutes.js';
import entregaRoutes from './routes/entregaRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';
import categoriaRoutes from './routes/categoriaRoutes.js';
import avaliacaoRoutes from './routes/avaliacaoRoutes.js';

const app = express();

app.use(express.json());


app.use('/pedidos', pedidoRoutes);
app.use('/entregas', entregaRoutes);
app.use('/produtos', produtoRoutes);
app.use('/categoria', categoriaRoutes);
app.use('/avaliacao', avaliacaoRoutes);

app.listen(3000, () => {
  console.log('Funcionando, tudo nos conformes...');
});