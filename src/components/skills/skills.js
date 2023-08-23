import { useState, useEffect } from "react";
import "./skills.css";
import {GiSkills} from 'react-icons/gi'

const skillList = [
  "Antropologia",
"Arquearia",
"Armas brancas",
"Armas curtas",
"Armas pesadas",
"Arrombamento",
"Artes marciais",
"Atletismo",
"Atuação",
"Autoridade",
"Biologia",
"Botânica",
"Briga",
"Composição",
"Condução",
"Contabilidade",
"Credibilidade",
"Cultura",
"Ciberespaço",
"Dança",
"Demolição",
"Diagnose",
"Disfarce",
"Entrevista",
"Esgrima",
"Esquiva",
"Família",
"Feitos de força",
"Furtividade",
"Geologia",
"História",
"Idioma",
"Interface",
"Intimidação",
"Interrogatório",
"Liderança",
"Liderança Carismática",
"Manha",
"Matemática",
"Medicina biológica",
"Natação",
"Negociar",
"Noção de Combate",
"Operar maquinário",
"Persuasão",
"Pesquisa",
"Pilotagem - veículo a escolha",
"Primeiros socorros",
"Programação",
"Química",
"Rastreamento",
"Recursos",
"Reparos improvisados",
"Resistência",
"Resistência a tortura e drogas",
"Sedução",
"Sobrevivência",
"Submetralhadoras",
"Tecnologia básica",
"Tecnologia Médica",
"Tocar instrumento",
"Trato social",
"Zoologia"
];

const Skills = () => {
  const [skills, setSkills] = useState({});

  useEffect(() => {
    // Recuperar as perícias do localStorage ao montar o componente
    const storedSkills = localStorage.getItem("skills");
    if (storedSkills) {
      setSkills(JSON.parse(storedSkills));
    }
  }, []);

  const handleSkillChange = (skill, value) => {
    // Atualizar o estado das perícias e salvar no localStorage
    const updatedPericias = { ...skills, [skill]: value };
    setSkills(updatedPericias);
    localStorage.setItem("skills", JSON.stringify(updatedPericias));
  };

  return (
    <div>
      <h2>Perícias <GiSkills size={'30px'} /> </h2>
      <div className="skill-list">
        {skillList.map((skill, index) => (
          <div className="skill" key={index}>
            <label>{skill}</label>
            <input
              type="number"
              value={skills[skill] || ""}
              onChange={(e) =>
                handleSkillChange(skill, parseInt(e.target.value))
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
