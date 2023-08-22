import { useState, useEffect } from 'react';
import "./header.css";
import { BiBody } from 'react-icons/bi'


const Header = () => {
  const [characterName, setCharacterName] = useState('');
  const [characterOrigin, setCharacterOrigin] = useState('');
  const [characterExp, setCharacterExp] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('characterName');
    const storedOrigin = localStorage.getItem('characterOrigin');
    const storedExp = localStorage.getItem('characterExp');

    if (storedName) setCharacterName(storedName);
 
    if (storedOrigin) setCharacterOrigin(storedOrigin);

    if(storedExp) setCharacterExp(storedExp);
  }, []);

  useEffect(() => {
    localStorage.setItem('characterName', characterName);
    
    localStorage.setItem('characterOrigin', characterOrigin);

    localStorage.setItem("characterExp", characterExp);
  }, [characterName, characterOrigin, characterExp]);

 

  return (
    <div className='generalSheet'>
      <h1>Características gerais <BiBody size={'30px'} /></h1>
      <div className='nameInput'>
        <label>Nome: </label>
        <input
          type="text"
          value={characterName}
          onChange={e => setCharacterName(e.target.value)}
        />
      </div>
      
      <div className='originInput'>
        <span>Origem:</span>
        <div className='originRadio'>
          <label>
            <input
              type="radio"
              value="medicanico"
              checked={characterOrigin === 'medicanico'}
              onChange={() => setCharacterOrigin('medicanico')}
            />
            Medicânico
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
          <label>
            <input
              type="radio"
              value="Corporativo"
              checked={characterOrigin === 'Corporativo'}
              onChange={() => setCharacterOrigin('Corporativo')}
            />
            Corporativo
          </label>
          <label>
            <input
              type="radio"
              value="nomade"
              checked={characterOrigin === 'nomade'}
              onChange={() => setCharacterOrigin('nomade')}
            />
            Nômade
          </label>
          <label>
            <input
              type="radio"
              value="combatente"
              checked={characterOrigin === 'combatente'}
              onChange={() => setCharacterOrigin('combatente')}
            />
            Combatente
          </label>
          <label>
            <input
              type="radio"
              value="rock"
              checked={characterOrigin === 'rock'}
              onChange={() => setCharacterOrigin('rock')}
            />
            Rock
          </label>
          <label>
            <input
              type="radio"
              value="marginal"
              checked={characterOrigin === 'marginal'}
              onChange={() => setCharacterOrigin('marginal')}
            />
            Marginal
          </label>
          <label>
            <input
              type="radio"
              value="mercenario"
              checked={characterOrigin === 'mercenario'}
              onChange={() => setCharacterOrigin('mercenario')}
            />
            Mercenário
          </label>
        </div>
      </div>
      <div className='xpInput'>
        <label> Nível e xp</label>
        <input
          type='text'
          value={characterExp}
          onChange={e => setCharacterExp(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Header;
