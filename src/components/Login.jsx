import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erroLogin, setErroLogin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (usuario === 'admin' && senha === 'admin') {
      try {
        // Armazenar um token ou sinalizador de autenticação no AsyncStorage
        await AsyncStorage.setItem('token', 'seu_token_aqui');

        // Redirecionar para o painel
        navigate('/painel');
      } catch (error) {
        console.error(error);
      }
    } else {
      setErroLogin(true);
    }
  };

  const handleCadastrar = () => {
    navigate('/cadastro');
  };

  return (
    <div>
      <h1>Login</h1>
      {erroLogin && <p>Credenciais inválidas. Tente novamente.</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usuario">Usuário:</label>
          <input
            type="text"
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <button type="button" onClick={handleCadastrar}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Login;