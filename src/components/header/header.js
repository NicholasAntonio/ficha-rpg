import "./header.css";
import { useState, useEffect } from "react";

function Header() {
  const [characterName, setCharacterName] = useState("");
  const [attributes, setAttributes] = useState({
    DES: '',
    FOR: '',
    TEC: '',
    SOR: '',
    ATR: '',
    CON: '',
    CAR: '',
  });

  const [selectedOrigin, setSelectedOrigin] = useState("");

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("characterData"));
    if (savedData) {
      setCharacterName(savedData.characterName);
      setAttributes(savedData.attributes);
      setSelectedOrigin(savedData.selectedOrigin);
    }
  }, []);

  useEffect(() => {
    const characterData = {
      characterName,
      attributes,
      selectedOrigin,
    };
    localStorage.setItem("characterData", JSON.stringify(characterData));
  }, [characterName, attributes, selectedOrigin]);

  const attributeChange = (attribute, value) => {
    setAttributes((prevAtrributes) => ({
      ...prevAtrributes,
      [attribute]: value,
    }));
  };

  const originChange = (event) => {
    setSelectedOrigin(event.target.value);
  };

  return (
    <div>
      <h1>Nome do personagem:</h1>
      <input
        type="text"
        placeholder="Nome do Personagem"
        value={characterName}
        onChange={(event) => setCharacterName(event.target.value)}
      />
      <div>
        <label>DES</label>
        <input
          type="number"
          value={attributes.DES}
          onChange={(event) =>
            attributeChange('DES', event.target.value)
          }
        />
      </div>
      <div>
        <div>
          <h2>Origem:</h2>
          <label>
            <input
              type="radio"
              value="medicanico"
              checked={selectedOrigin === "medicanico"}
              onChange={originChange}
            />
            Medicanico
          </label>
          <label>
            <input
              type="radio"
              value="trilha-rede"
              checked={selectedOrigin === "trilha-rede"}
              onChange={originChange}
            />
            Trilha-Rede
          </label>
        </div>
      </div>
    </div>
  );
}

export default Header