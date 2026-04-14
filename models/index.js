import  Categoria  from './Categoria.js';
import Produto from './Produto.js';
import Pedido from './Pedido.js';
import Entrega from './Entrega.js';
import avaliacao from './avaliacao.js';

const models = [Categoria, Produto, Pedido, Entrega, avaliacao];

Object.values(models).forEach(model => {
  if (model.associate) {
    model.associate(models);
  }
});