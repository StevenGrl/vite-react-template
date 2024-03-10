import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import { useStore } from './store';
import { toast, ToastContainer } from 'react-toastify';
import '../assets/scss/App.scss';

import Home from './components/Home';
import MyCustomClassNavbar from './components/MyCustomClassNavbar';
import MyCustomNavbar from './components/MyCustomNavbar';
import Counter from './components/Counter';
import CounterWithStore from './components/CounterWithStore';

function App() {
  // Récupération des infos du store - Zustand
  const [connected, setConnectedUser, logout, user] = useStore((_) => [
    _.user.connected,
    _.setConnectedUser,
    _.logout,
    _.user
  ]);

  // Déclenché une fois le montage de la page terminé
  // En mode dev il est trigger 2 fois de suite, c'est normal - ça ne doit pas arriver en prod par contre
  useEffect(() => {
    // On simule une connexion qui dure 3 secondes pour afficher un loader
    // setTimeout(() => {
    setConnectedUser({ name: 'fake-connection' });
    toast.success('Vous êtes connecté ! :)');
    // }, 1000);
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      {!connected ? (
        <Spinner animation="border" role="status" size="sm" />
      ) : (
        <Container fluid className="px-0">
          {/* Exemples de navbar, importé via une class react */}
          <MyCustomClassNavbar bg="primary" theme="dark" username={user.userInfos.name} />
          <MyCustomClassNavbar bg="dark" theme="dark" username={user.userInfos.name} />
          <MyCustomClassNavbar bg="light" theme="light" />
          {/* Exemple de la même navbar sans class react */}
          <MyCustomNavbar bg="light" theme="light" username={user.userInfos.name} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/counter-with-store" element={<CounterWithStore />} />
          </Routes>
        </Container>
      )}
    </div>
  );
}

export default App;
