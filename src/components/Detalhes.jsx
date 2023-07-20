import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Catalogo() {
  const {id} = useParams();
  const [jogos, setJogos] = useState([]);
  console.log(id);
 
  useEffect(()=>{
      axios.get(`https://backend-pb2n.onrender.com/consulta-id/${id}`).then(function(resultado){
        console.log(resultado.data)
      
        setJogos(resultado.data.jogos)
      });
      },[])

  return (
    <div>
      <h1>Catalogo de Jogos</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {jogos.map((jogos) => (
          <div key={jogos.id} style={{ width: '200px',height:'200px', margin: '10px' }}>
            <img src={jogos.imagemurl} alt={jogos.nome} style={{ width: '100%' }} />
            <p>{jogos.nome}</p>
            <p>{jogos.plataforma}</p>
            <p>{jogos.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;
