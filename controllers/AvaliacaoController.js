import Avaliacao from '../models/avaliacao.js';

class AvaliacaoController {

  async store(req, res) {
    try {
      const { pedido_id, nota, comentario } = req.body;

      // validação da nota
      if (nota < 1 || nota > 5) {
        return res.status(400).json({
          error: 'A nota deve ser entre 1 e 5'
        });
      }

      const avaliacao = await Avaliacao.create({
        pedido_id,
        nota,
        comentario
      });

      return res.status(201).json(avaliacao);

    } catch (error) {
      return res.status(500).json({
        error: 'Erro ao criar avaliação'
      });
    }
  }

}

export default new AvaliacaoController();