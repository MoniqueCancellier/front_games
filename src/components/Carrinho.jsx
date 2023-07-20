import React, { useState } from 'react';

const Carrinho = () => {
  const [jogosCarrinho, setJogosCarrinho] = useState([]);
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

  const adicionarAoCarrinho = (jogo) => {
    setJogosCarrinho([...jogosCarrinho, jogo]);
  };

  const alternarVisibilidadeCarrinho = () => {
    setMostrarCarrinho(!mostrarCarrinho);
  };

  const jogos = [
    { id: 1, nome: 'Jogo 1' },
    { id: 2, nome: 'Jogo 2' },
    { id: 3, nome: 'Jogo 3' },
  ];

  return (
    <div>
      <button onClick={alternarVisibilidadeCarrinho}>
        {mostrarCarrinho ? 'Ocultar Carrinho' : 'Exibir Carrinho'}
      </button>

      {mostrarCarrinho && (
        <div>
          <h2>Carrinho de Compras</h2>
          {jogosCarrinho.map((jogo) => (
            <p key={jogo.id}>{jogo.nome}</p>
          ))}
        </div>
      )}

      <h2>Catálogo de Jogos</h2>
      {jogos.map((jogo) => (
        <div key={jogo.id}>
          <h3>{jogo.nome}</h3>
          <button onClick={() => adicionarAoCarrinho(jogo)}>+</button>
        </div>
      ))}
    </div>
  );
};

export default Carrinho;
