import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CadastroJogo from './CadastroJogo';
// import { useHistory } from 'react-router-dom';


function Painel() {
  const [jogos, setJogos] = useState([]);
  const [jogoEditado, setJogoEditado] = useState({
    id: '',
    nome: '',
    descricao: '',
    lancamento: '',
    plataforma: '',
    imagemurl: '',
    preco: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [exibirCadastro, setExibirCadastro] = useState(false);
  // const history = useHistory();

  useEffect(() => {
    axios.get('https://backend-pb2n.onrender.com/jogos').then(function (resultado) {
      console.log(resultado.data);
      setJogos(resultado.data.jogos);
    });
  }, []);

  async function cadastrarJogo(novoJogo) {
    try {
      const response = await axios.post('https://backend-pb2n.onrender.com/cadastro-jogos' , novoJogo);
      console.log('Jogo cadastrado com sucesso:', response.data);
      // Realizar outras ações após o cadastro
    } catch (error) {
      console.error('Erro ao cadastrar jogo:', error);
    }

  }

  function editarJogo(id) {
    axios
      .put('https://backend-pb2n.onrender.com/editar-jogo/' + id, jogoEditado)
      .then(() => {
        // Atualizar a lista de jogos após a edição
        axios.get('https://backend-pb2n.onrender.com/jogos').then(function (resultado) {
          console.log(resultado.data);
          setJogos(resultado.data);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function abrirEdicao(id) {
    // Encontrar o jogo a ser editado com base no ID
    const jogoSelecionado = jogos.find((jogo) => jogo.id === id);
    if (jogoSelecionado) {
      setJogoEditado(jogoSelecionado);
      setEditMode(true);
    }
  }

  function fecharEdicao() {
    setEditMode(false);
    setJogoEditado({
      id: '',
      nome: '',
      descricao: '',
      lancamento: '',
      plataforma: '',
      imagemurl: '',
      preco: '',
    });
  }

  const fecharEditMode = function() {    
    setEditMode(false);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setJogoEditado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    editarJogo(jogoEditado.id);
    fecharEdicao();
  }

  function handleRedirect() {
    history.push('/'); // Replace this with the correct route you want to redirect to
  }

  return (
    <div className="admin-container">
      {exibirCadastro ? (
        <CadastroJogo cadastrarJogo={cadastrarJogo} fecharEditMode={fecharEditMode} />
      ) : (
        <>
          <button className="cadastrar-button" onClick={() => setExibirCadastro(true)}>
            Cadastrar
          </button>
          <button className="voltar-button" onClick={handleRedirect}>
            Voltar
          </button>
          {jogos.map((jogo) => (
            <div key={jogo.id} className="admin-card">
              <span className="jogo-nome">
                {jogo.nome} - {jogo.id}
              </span>
              <div className="button-container">
                <button className="editar-button" onClick={() => abrirEdicao(jogo.id)}>
                  Editar
                </button>
                <button className="excluir-button">Excluir</button>
              </div>
            </div>
          ))}
        </>
      )}


      {editMode && (
        <div className="editar-container">
          <h2>Editar Jogo</h2>
          <form className="editar-form" onSubmit={handleSubmit}>
            <label>Nome:</label>
            <input type="text" name="nome" value={jogoEditado.nome} onChange={handleInputChange} />

            <label>Descrição:</label>
            <textarea
              name="descricao"
              value={jogoEditado.descricao}
              onChange={handleInputChange}
            ></textarea>

            <label>Lançamento:</label>
            <input
              type="text"
              name="lancamento"
              value={jogoEditado.lancamento}
              onChange={handleInputChange}
            />

            <label>Plataforma:</label>
            <input
              type="text"
              name="plataforma"
              value={jogoEditado.plataforma}
              onChange={handleInputChange}
            />

            <label>URL da Imagem:</label>
            <input
              type="text"
              name="imagemurl"
              value={jogoEditado.imagemurl}
              onChange={handleInputChange}
            />

            <label>Preço:</label>
            <input
              type="text"
              name="preco"
              value={jogoEditado.preco}
              onChange={handleInputChange}
            />

            <button type="submit">Salvar</button>
            <button onClick={fecharEdicao}>Cancelar</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Painel;
