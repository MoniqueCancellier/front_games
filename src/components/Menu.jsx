import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Menu = () => {
  const [gifVisible, setGifVisible] = useState(false);

  const handleLinkClick = () => {
    setGifVisible(true);
    setTimeout(() => {
      setGifVisible(false);
    }, 700); // Altere para 1000 milissegundos (1 segundo)
  };

  return (
    <div className="menuPrincipal">
      <ul className="menuPrincipal" style={styles.menu}>
        <li style={styles.menuItem}>
          <NavLink exact to="/"  style={styles.link} onClick={handleLinkClick}>
            Home
          </NavLink>
        </li>
        <li style={styles.menuItem}>
          <NavLink to="/sobre"  style={styles.link} onClick={handleLinkClick}>
            Sobre Nós
          </NavLink>
        </li>
        <li style={styles.menuItem}>
          <NavLink to="/catalogo"  style={styles.link} onClick={handleLinkClick}>
            Catálogo
          </NavLink>
        </li>
        <li style={styles.menuItem}>
          <NavLink to="/contato"  style={styles.link} onClick={handleLinkClick}>
            Contato
          </NavLink>
        </li>
        <li style={styles.menuItem}>
        <NavLink to="/login" activeClassName="activeLink" style={styles.link} onClick={handleLinkClick}>
          Login
        </NavLink>
        </li>
      </ul>

      {gifVisible && (
        <div style={styles.gifContainer}>
          <img
            src="https://i.pinimg.com/originals/ac/8f/61/ac8f610d390a504026b5e7bd2b67818f.gif"
            alt="GIF"
            style={styles.gif}
          />
        </div>
      )}

   
   
    </div>
  );
};

const styles = {
  menu: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  menuItem: {
    margin: '0 10px',
  },
  link: {
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '50px',
    background: 'linear-gradient(45deg, #c26cc7, #c77ac2)',
    boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)',
    transition: 'background 0.s ease-in-out',
  },
  activeLink: {
    background: 'linear-gradient(45deg, #c26cc7, #c77ac2)',
  },
  gifContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.8)',
    zIndex: 9999,
  },
  gif: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  cantoSuperiorDireito: {
    position: 'fixed',
    top: '20px',
    right: '20px',
  },
  cadastroButton: {
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '50px',
    background: 'linear-gradient(45deg, #c26cc7, #c77ac2)',
    color: '#fff',
    fontWeight: 'bold',
    boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)',
    transition: 'background 0.3s ease-in-out',
    cursor: 'pointer',
    textTransform: 'uppercase',
    border: 'none',
    outline: 'none',
    letterSpacing: '1px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
  },
};

export default Menu;