import { useState, useEffect } from 'react';
import './skills.css'

const skillList = [
 ' Autoridade',
 ' Liderança Carismática',
 ' Noção de Combate',
 ' Credibilidade',
 ' Família',
 ' Interface',
 ' Reparos improvisados',
 ' Tecnologia Médica',
  'Primeiros socorros',
 ' Medicina biológica',
  'Recursos',
'  Negociar',
  'Cuidados pessoais',
  'Resistência',
 ' Feitos de força',
  'Natação',
  'Interrogatório',
 ' Intimidação',
  'Resistência a tortura e drogas',
  'Manha',
  'Percepção',
  'Entrevista',
 ' Liderança',
  'Sedução',
  'Trato social',
  'Persuasão',
  'Atuação',
  'Contabilidade',
  'Antropologia',
  'Biologia',
  'Botânica',
  'Química',
  'Composição',
  'Diagnose',
  'Cultura',
  'Geologia',
  'História',
  'Idioma',
 ' Pesquisa',
  'Matemática',
  'Física',
  'Programação',
  'Rastreamento',
  'Sobrevivência',
  'Zoologia',
  'Arquearia',
  'Atletismo',
  'Briga',
  'Dança',
  'Esquiva',
  'Condução',
  'Esgrima',
  'Armas curtas',
 ' Armas pesadas',
  'Armas brancas',
 ' Fuzis ',
  'Submetralhadoras',
  'Artes marciais',
  'Pilotagem - veículo a escolha',
  'Operar maquinário',
  'Furtividade',
  'Tecnologia básica',
 ' Ciberespaço',
  'Demolição',
  'Disfarce',
  'Tocar instrumento',
  'Arrombamento',
  'Falsificação'
];

const Skills = () => {
  const [skills, setPericias] = useState({});
  
  useEffect(() => {
    // Recuperar as perícias do localStorage ao montar o componente
    const storedSkills = localStorage.getItem('skills');
    if (storedSkills) {
      setPericias(JSON.parse(storedSkills));
    }
  }, []);

  const handleSkillChange = (skill, value) => {
    // Atualizar o estado das perícias e salvar no localStorage
    const updatedPericias = { ...skills, [skill]: value };
    setPericias(updatedPericias);
    localStorage.setItem('skills', JSON.stringify(updatedPericias));
  };

  return (
    <div>
      <h2>Perícias</h2>
    <div className='skill-list'>
      
      {skillList.map((skill, index) => (
        <div className='skill' key={index}>
          <label>
            {skill}
            </label>
            <input
              type="number"
              value={skills[skill] || ''}
              onChange={(e) => handleSkillChange(skill, parseInt(e.target.value))}
            />
          
        </div>
      ))}
    </div>
    </div>
  );
};

export default Skills;
