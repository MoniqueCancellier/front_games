import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Catalogo() {
  const [busca, setBusca] = useState('');
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    axios.get('https://backend-pb2n.onrender.com/jogos').then(function (resultado) {
      console.log(resultado.data);
      setJogos(resultado.data.jogos);
    });
  }, []);

  const handleBuscaChange = (e) => {
    setBusca(e.target.value);
  };

  const pesquisarJogo = (e) => {
    e.preventDefault();
    axios
      .get("https://backend-pb2n.onrender.com/consulta-jogo/" + busca)
      .then(function (resultado) {
        console.log(resultado.data);
        setJogos(resultado.data.jogos);
      });
    console.log('Realizar busca:', busca);
  };

  return (
    <div>
      <h1>Catalogo de Jogos</h1>

      <form onSubmit={pesquisarJogo}>
        <label htmlFor="busca">Pesquisar:</label>
        <input
          type="text"
          id="busca"
          value={busca}
          onChange={handleBuscaChange}
          required
        />
        <button type="submit">Buscar</button>
      </form>

      <div className="jogos-container">
        {jogos.map((jogos) => (
          <div key={jogos.id} className="jogo-card">
            <Link to={'/catalogo/' + jogos.id}>
              <img src={jogos.imagemurl} alt={jogos.nome} className="jogos-imagem" />
            </Link>
            <p className="jogos-nome">{jogos.nome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;