import { useEffect, useState } from 'react';
import './App.css';

const multiplos3 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99];

const multiplos5 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

function App() {
  const [count, setCount] = useState(0);
  const [numb, setNumb] = useState('');
  const [acert, setAcert] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000)
    return () => clearInterval(timer);
  }, [setNumb])

  useEffect(() => {
    const timer = setInterval(() => {
      setNumb(Math.floor(Math.random() * (100 - 1)) + 1);
      setCount(0);
    }, 10000)
    return () => clearInterval(timer);
  }, [setNumb])

  useEffect(() => {
    multiplos3.includes(numb) || multiplos5.includes(numb) ? setAcert(true) 
    : setAcert(false);
  }, [numb, setAcert]);

  useEffect(() => {
    const timer = setInterval(() => {
      setAcert(false);
    }, 4000)
    return () => clearInterval(timer);
  }, [acert])

  return (
    <div className="App">
      <h1>{numb}</h1>
      <h3>{count}</h3>
      {acert && <h2>Acertou!!</h2>}
    </div>
  );
}

export default App;
