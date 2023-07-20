import React, { useState, useEffect } from 'react';

const Contact = () => {
  return <h1>PAGINA DE CONTATO</h1>;
};

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage('Preencha todos os campos!');
      setShowErrorMessage(true);

      setTimeout(() => {
        setShowErrorMessage(false);
        setErrorMessage('');
      }, 3000);

      return;
    }

    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Mensagem:', message);

    setName('');
    setEmail('');
    setMessage('');
    setIsSent(true);

    setTimeout(() => {
      setIsSent(false);
    }, 3000);
  };

  return (
    <div>
      <h1>Entre em contato</h1>
      {isSent && (
        <div
          style={{
            backgroundColor: 'green',
            color: 'white',
            fontSize: '20px',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '10px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Mensagem enviada com sucesso!
        </div>
      )}
      {showErrorMessage && (
        <div
          style={{
            backgroundColor: 'red',
            color: 'white',
            fontSize: '20px',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '10px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactPage;
