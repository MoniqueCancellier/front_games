import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx';
import Catalogo from './components/Catalogo.jsx';
import Detalhes from './components/Detalhes.jsx';
import Cadastro from './components/Cadastro.jsx';
import Login from './components/Login.jsx';
import Carrinho from './components/Carrinho.jsx';
import Painel from './components/Painel.jsx';
// import CadastroJogo from './components/CadastroJogo.jsx';




const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/catalogo/:id" element={<Detalhes />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/login" element={<Carrinho/>}/>
      <Route path="/painel" element={<Painel/>}/>
    </Routes>
  );
};

export default App;