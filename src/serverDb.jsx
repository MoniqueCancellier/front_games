const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Configuração do pool de conexões com o ElephantSQL
const pool = new Pool({
  user: 'seu_usuario',
  host: 'seu_host',
  database: 'vdlznfhc',
  password: 'ljJOS6gUBUVwFjGnkB_m5jMs5DmROhNr',
  port: 5432, // Porta padrão do PostgreSQL
});

// Middleware para fazer o parse do corpo da requisição como JSON
app.use(express.json());

// Exemplo de rota para buscar jogos no banco de dados
app.get('/jogos', (req, res) => {
  // Realize a consulta ao banco de dados
  pool.query('SELECT * FROM jogos', (err, result) => {
    if (err) {
      console.error('Erro na consulta ao banco de dados:', err);
      res.status(500).send('Erro ao buscar jogos');
    } else {
      res.json(result.rows);
    }
  });
});

app.post('/jogos', (req, res) => {
  console.log(req)
  const { nome, descricao, lancamento, plataforma, imagemurl, preco } = req.body;
console.log(jogos)
  pool.query(
    'INSERT INTO jogos (nome, descricao, lancamento, plataforma, imagemurl, preco) VALUES ($1, $2, $3, $4, $5, $6)',
    [nome, descricao, lancamento, plataforma, imagemurl, preco],
    (err) => {
      if (err) {
        console.error('Erro na inserção no banco de dados:', err);
        res.status(500).send('Erro ao inserir jogo');
      } else {
        res.status(201).send('Jogo inserido com sucesso');
      }
    }
  );
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
