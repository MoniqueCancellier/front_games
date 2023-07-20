import axios from 'axios';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Home = () => {

  const [jogos, setJogos] = useState([]);
  const [index, setIndex] = useState(0);


  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  useEffect(() => {
    axios.get('https://backend-pb2n.onrender.com/jogos').then(function (resultado) {
      console.log(resultado.data);
      setJogos(resultado.data.jogos);
    });
  }, []);

  return (
    <div className="app">
      <div className="center-content">
        <header className="header">

          <h1>Boas-vindas</h1>
        </header>
        <main className="main">
          <h2 className="titulo-jogos">Jogos em destaque</h2>

          <div className="carousel-container">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              className="carousel"
            >
              {jogos.slice(0, 5).map((jogo, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-80 imagem-carrosel"
                    src={jogo.imagemurl}
                    alt="Slide"
                  />
                  <Carousel.Caption>
                    <h3 className="nomeJogo">{jogo.nome}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          <div className="game-list">{/* Lista de jogos em destaque */}</div>
        </main>
        <footer className="footer">
          <p>Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );

  useEffect(() => {
    axios.get('https://backend-pb2n.onrender.com/jogos').then(function (resultado) {
      console.log(resultado.data);

      setJogos(resultado.data.jogos);
    });
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>Boas-vindas</h1>
      </header>
      <main className="main">
        <h2>Jogos em destaque</h2>

        <div className="carousel-container">
          <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
            {jogos.map((jogo, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100 imagem-carrosel" src={jogo.imagemurl} alt="Slide" />
                <Carousel.Caption>
                  {/* Conteúdo do slide */}
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <div className="game-list">{/* Lista de jogos em destaque */}</div>
      </main>
      <footer className="footer">
        <p>Todos os direitos reservados.</p>
      </footer>
    </div>
  );

};

export default Home;
