// src/components/DataInput.js
import React, { useState, useEffect } from 'react';

const Attributes = () => {
  const [des, setDes] = useState('');
  const [forValue, setForValue] = useState('');
  const [con, setCon] = useState('');
  const [int, setInt] = useState('');
  const [tec, setTec] = useState('');
  const [sor, setSor] = useState('');
  const [car, setCar] = useState('');
  const [atr, setAtr] = useState('');

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('userData')) || {};
    setDes(savedData.des || '');
    setForValue(savedData.forValue || ''); 
    setCon(savedData.con || '');
    setInt(savedData.int || '');
    setTec(savedData.tec || '');
    setSor(savedData.sor || '');
    setCar(savedData.car || '');
    setAtr(savedData.atr || '');
  }, []);

  const handleSave = () => {
    const userData = {
      des,
      forValue,
      con,
      int,
      tec,
      sor,
      car,
      atr,
    };
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  return (
    <div>
      <label>DES
      <input
        type="number"
        placeholder="DES"
        value={des}
        onChange={(e) => setDes(e.target.value)}
      />
      </label>
      <label>FOR
      <input
        type="number"
        placeholder="FOR"
        value={forValue}
        onChange={(e) => setForValue(e.target.value)}
      />
      </label>
      <label>CON
      <input
        type="number"
        placeholder="CON"
        value={con}
        onChange={(e) => setCon(e.target.value)}
      />
      </label>
      <label>INT
      <input
        type="number"
        placeholder="INT"
        value={int}
        onChange={(e) => setInt(e.target.value)}
      />
      </label>
      <label>TEC
      <input
        type="number"
        placeholder="TEC"
        value={tec}
        onChange={(e) => setTec(e.target.value)}
      />
      </label>
      <label>SOR
      <input
        type="number"
        placeholder="SOR"
        value={sor}
        onChange={(e) => setSor(e.target.value)}
      />
      </label>
      <label> CAR
      <input
        type="number"
        placeholder="CAR"
        value={car}
        onChange={(e) => setCar(e.target.value)}
      />
      </label>
      <label> ATR:
      <input
        type="number"
        placeholder="ATR"
        value={atr}
        onChange={(e) => setAtr(e.target.value)}
      />
      </label>
      <button onClick={handleSave}>Salvar</button>
    </div>
  );
};

export default Attributes;
