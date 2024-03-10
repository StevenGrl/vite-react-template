import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

// Exemple de composant avec des propriétés sans passer par une classe react
const Counter = () => {
  const [count, setCount] = useState(0);

  function handleClickCount() {
    setCount(count + 1);
  }

  // Trigger à chaque fois que la valeur de count change
  useEffect(() => {
    toast.success('On vient de cliquer sur count, nouvelle valeur => ' + count);
  }, [count]);

  return <Button onClick={handleClickCount}>counter = {count}</Button>;
};

export default Counter;
