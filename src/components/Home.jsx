import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

// Exemple de composant avec des propriétés sans passer par une classe react
export const Home = () => {
  return (
    <>
      <h1>Page d'accueil</h1>
      <div>
        <p>Incrémentation du compteur avec le store permet de garder le compteur en navigant de page en page</p>
        <p>Incrémentation du compteur sans le store ne garde le compteur que si on ne change pas de page</p>
      </div>
    </>
  );
};

export default Home;
