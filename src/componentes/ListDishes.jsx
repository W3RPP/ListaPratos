import React, { useState, useCallback } from 'react';
import './ListDishes.css'

const ListDishes = () => {
  const [pratos, setPratos] = useState([]);
  const [prato, setPrato] = useState('');
  const [nota, setNota] = useState('');
  const [editando, setEditando] = useState(null);

  const adicionarPrato = useCallback(() => {
    if (prato && nota) {
      setPratos((prevPratos) => [...prevPratos, { prato, nota }]);
      setPrato('');
      setNota('');
    }
  }, [prato, nota]);

  const editarPrato = useCallback((index) => {
    const pratoEditar = pratos[index];
    setPrato(pratoEditar.prato);
    setNota(pratoEditar.nota);
    setEditando(index);
  }, [pratos]);

  const salvarEdicao = useCallback(() => {
    if (editando !== null) {
      setPratos((prevPratos) => {
        const novoPratos = [...prevPratos];
        novoPratos[editando] = { prato, nota };
        return novoPratos;
      });
      setPrato('');
      setNota('');
      setEditando(null);
    }
  }, [prato, nota, editando]);

  const excluirPrato = useCallback((index) => {
    setPratos((prevPratos) => {
      const novoPratos = [...prevPratos];
      novoPratos.splice(index, 1);
      return novoPratos;
    });
  }, []);

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
        {editando === null ? (
          <button onClick={adicionarPrato} disabled={isButtonDisabled} id='botao'>
            Adicionar Prato
          </button>
        ) : (
          <button onClick={salvarEdicao} disabled={isButtonDisabled} id='botao'>
            Salvar Edição
          </button>
        )}
      </div>
      <ul id='ul'>
        {pratos.map((item, index) => (
          <li key={index}>
            <div className='lista2'>
              {item.prato} - Nota: {item.nota}
              <button onClick={() => editarPrato(index)} id='botao-editar'>
                Editar
              </button>
              <button onClick={() => excluirPrato(index)} id='botao-excluir'>
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListDishes;