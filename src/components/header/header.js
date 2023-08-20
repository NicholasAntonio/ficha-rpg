import React, { useState, useEffect } from 'react';

const Header = () => {
  const [characterName, setCharacterName] = useState('');
  const [characterOrigin, setCharacterOrigin] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('characterName');

    const storedOrigin = localStorage.getItem('characterOrigin');

    if (storedName) setCharacterName(storedName);
 
    if (storedOrigin) setCharacterOrigin(storedOrigin);
  }, []);

  useEffect(() => {
    localStorage.setItem('characterName', characterName);
    
    localStorage.setItem('characterOrigin', characterOrigin);
  }, [characterName, characterOrigin]);

 

  return (
    <div>
      <h1>Header</h1>
      <div>
        <label>Nome do Personagem</label>
        <input
          type="text"
          value={characterName}
          onChange={e => setCharacterName(e.target.value)}
        />
      </div>
      
      <div>
        <label>Origem do Personagem:</label>
        <div>
          <label>
            <input
              type="radio"
              value="medicanico"
              checked={characterOrigin === 'medicanico'}
              onChange={() => setCharacterOrigin('medicanico')}
            />
            Medicanico
          </label>
          <label>
            <input
              type="radio"
              value="trilha-rede"
              checked={characterOrigin === 'trilha-rede'}
              onChange={() => setCharacterOrigin('trilha-rede')}
            />
            Trilha-Rede
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
