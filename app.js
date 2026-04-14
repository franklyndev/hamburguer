import express from 'express';
import pedidoRoutes from './routes/pedidoRoutes.js';
import entregaRoutes from './routes/entregaRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';
import categoriaRoutes from './routes/categoriaRoutes.js';
import avaliacaoRoutes from './routes/avaliacaoRoutes.js';

const app = express();

const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/categoria',categoriaRoutes);
app.use('/pedido',pedidoRoutes);
app.use('/entrega',entregaRoutes);
app.use('/avaliacao',avaliacaoRoutes);
app.use('/produto',produtoRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
