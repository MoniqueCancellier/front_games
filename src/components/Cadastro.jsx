import React, { useState } from 'react';
import axios from 'axios';


const Cadastro = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleConfirmarSenhaChange = (event) => {
    setConfirmarSenha(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (senha !== confirmarSenha) {
      setMensagemErro('As senhas não coincidem. Por favor, verifique.');
    } else {
      axios
        .post('https://backend-pb2n.onrender.com/cadastrar-usuario', { usuario, senha })
        .then((response) => {
          console.log(response.data);
          // Redirecionar para a página desejada após o cadastro
        })
        .catch((error) => {
          console.error(error);
          // Tratar erros de requisição
        });
    }
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usuario">Usuário:</label>
          <input
            type="text"
            id="usuario"
            value={usuario}
            onChange={handleUsuarioChange}
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={handleSenhaChange}
          />
        </div>
        <div>
          <label htmlFor="confirmarSenha">Confirmar senha:</label>
          <input
            type="password"
            id="confirmarSenha"
            value={confirmarSenha}
            onChange={handleConfirmarSenhaChange}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      {mensagemErro && <p>{mensagemErro}</p>}
    </div>
  );
};

export default Cadastro;
