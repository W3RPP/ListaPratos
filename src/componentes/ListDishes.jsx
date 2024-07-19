import React, { useState, useCallback } from 'react';
import './ListDishes.css'

const ListDishes = () => {
  const [pratos, setPratos] = useState([]);
  const [prato, setPrato] = useState('');
  const [nota, setNota] = useState('');

  const adicionarPrato = useCallback(() => {
    if (prato && nota) {
      setPratos((prevPratos) => [...prevPratos, { prato, nota }]);
      setPrato('');
      setNota('');
    }
  }, [prato, nota]);

  const isButtonDisabled = !prato || !nota;

  return (
    <div className='body'>
      <h1 id='titulo'>Lista dos seus Pratos Favoritos</h1>
      <div className='Lista'>
        <input
          type="text"
          placeholder="Nome do prato"
          value={prato}
          onChange={(e) => setPrato(e.target.value)}
          id='input1'
        />
        <input
          type="number"
          placeholder="Nota"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          min="0"
          step="1"
          id='input2'
        />
        <button onClick={adicionarPrato} disabled={isButtonDisabled} id='botao'>
          Adicionar Prato
        </button>
      </div>
      <ul id='ul'>
        {pratos.map((item, index) => (
          <li key={index}>
            <div className='lista2'>
                {item.prato} - Nota: {item.nota}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListDishes;
