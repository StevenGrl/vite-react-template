import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useStore } from '../store';

// Exemple de composant avec des propriétés sans passer par une classe react
const CounterWithStore = () => {
  // Récupération des infos du store - Zustand
  const [count, incrementCounter] = useStore((_) => [_.count, _.incrementCounter]);

  function handleClickCount() {
    incrementCounter(count);
  }

  // Trigger à chaque fois que la valeur de count change
  useEffect(() => {
    toast.success('On vient de cliquer sur count, nouvelle valeur => ' + count);
  }, [count]);

  return <Button onClick={handleClickCount}>counter = {count}</Button>;
};

export default CounterWithStore;
