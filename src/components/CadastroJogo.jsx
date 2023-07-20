import React, { useState } from 'react';
import { redirect } from 'react-router-dom';

function CadastroJogo({ cadastrarJogo, fecharEditMode }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [lancamento, setLancamento] = useState('');
  const [plataforma, setPlataforma] = useState('');
  const [imagemUrl, setImagemUrl] = useState('');
  const [preco, setPreco] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const novoJogo = {
      nome,
      descricao,
      lancamento,
      plataforma,
      imagemurl: imagemUrl,
      preco
    };

    cadastrarJogo(novoJogo);

    const voltar = function() {
      return redirect("/painel");
    }
    // Limpar os campos após o cadastro
    // setNome('');
    // setDescricao('');
    // setLancamento('');
    // setPlataforma('');
    // setImagemUrl('');
    // setPreco('');
  };

  return (
    <div className="cadastro-jogo">
      <h2>Cadastro de Jogo</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

        <label>Descrição:</label>
        <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>

        <label>Lançamento:</label>
        <input type="text" value={lancamento} onChange={(e) => setLancamento(e.target.value)} />

        <label>Plataforma:</label>
        <select value={plataforma} onChange={(e) => setPlataforma(e.target.value)}>
          <option value="">Selecione uma plataforma</option>
          <option value="PC">PC</option>
          <option value="PlayStation">PlayStation</option>
          <option value="Xbox">Xbox</option>
          <option value="Nintendo Switch">Nintendo Switch</option>
        </select>

        <label>URL da Imagem:</label>
        <input type="text" value={imagemUrl} onChange={(e) => setImagemUrl(e.target.value)} />

        <label>Preço:</label>
        <input type="text" value={preco} onChange={(e) => setPreco(e.target.value)} />

        <button type="submit">Cadastrar</button>
        <button type="submit" onClick={() => voltar()}>Voltar</button>
      </form>
    </div>
  );
}

export default CadastroJogo;
