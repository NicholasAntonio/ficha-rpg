import React, { useState, useEffect } from 'react';

const periciasList = [
  'Acrobacia',
  'Atletismo',
  'Furtividade',
  'Intuição',
  'Investigação',
];

const Skills = () => {
  const [pericias, setPericias] = useState({});
  
  useEffect(() => {
    // Recuperar as perícias do localStorage ao montar o componente
    const storedPericias = localStorage.getItem('pericias');
    if (storedPericias) {
      setPericias(JSON.parse(storedPericias));
    }
  }, []);

  const handlePericiaChange = (pericia, value) => {
    // Atualizar o estado das perícias e salvar no localStorage
    const updatedPericias = { ...pericias, [pericia]: value };
    setPericias(updatedPericias);
    localStorage.setItem('pericias', JSON.stringify(updatedPericias));
  };

  return (
    <div>
      <h2>Perícias do Personagem</h2>
      {periciasList.map((pericia, index) => (
        <div key={index}>
          <label>
            {pericia}
            <input
              type="number"
              value={pericias[pericia] || 0}
              onChange={(e) => handlePericiaChange(pericia, parseInt(e.target.value))}
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default Skills;
