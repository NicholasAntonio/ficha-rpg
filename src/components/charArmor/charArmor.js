import { useState, useEffect } from "react";
import "./charArmor.css";
import {BsShieldSlashFill} from 'react-icons/bs'

const CharArmor = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [selectedOption5, setSelectedOption5] = useState("");
  const [selectedOption6, setSelectedOption6] = useState("");

  useEffect(() => {
    const storedSelectValue = localStorage.getItem("selectedOption");
    if (storedSelectValue) {
      setSelectedOption(storedSelectValue);
    }

    const storedSelectValue2 = localStorage.getItem("selectedOption2");
    if (storedSelectValue2) {
      setSelectedOption2(storedSelectValue2);
    }

    const storedSelectValue3 = localStorage.getItem("selectedOption3");
    if (storedSelectValue3) {
      setSelectedOption3(storedSelectValue3);
    }

    const storedSelectValue4 = localStorage.getItem("selectedOption4");
    if (storedSelectValue4) {
      setSelectedOption4(storedSelectValue4);
    }

    const storedSelectValue5 = localStorage.getItem("selectedOption5");
    if (storedSelectValue5) {
      setSelectedOption5(storedSelectValue5);
    }

    const storedSelectValue6 = localStorage.getItem("selectedOption6");
    if (storedSelectValue6) {
      setSelectedOption6(storedSelectValue6);
    }
  }, []);

  useEffect(() => {
    if (selectedOption) {
      localStorage.setItem("selectedOption", selectedOption);
    }
  }, [selectedOption]);

  useEffect(() => {
    if (selectedOption2) {
      localStorage.setItem("selectedOption2", selectedOption2);
    }
  }, [selectedOption2]);

  useEffect(() => {
    if (selectedOption3) {
      localStorage.setItem("selectedOption3", selectedOption3);
    }
  }, [selectedOption3]);

  useEffect(() => {
    if (selectedOption4) {
      localStorage.setItem("selectedOption4", selectedOption4);
    }
  }, [selectedOption4]);

  useEffect(() => {
    if (selectedOption5) {
      localStorage.setItem("selectedOption5", selectedOption5);
    }
  }, [selectedOption5]);

  useEffect(() => {
    if (selectedOption6) {
      localStorage.setItem("selectedOption6", selectedOption6);
    }
  }, [selectedOption6]);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  const handleSelectChange2 = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption2(selectedValue);
  };

  const handleSelectChange3 = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption3(selectedValue);
  };

  const handleSelectChange4 = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption4(selectedValue);
  };

  const handleSelectChange5 = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption5(selectedValue);
  };

  const handleSelectChange6 = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption6(selectedValue);
  };

  return (
    <div className="Armor">
      <div className="body-part">
        <h2>Blindagem <BsShieldSlashFill size={'20px'} /></h2>
        <div>
          <label> Cabeça </label>
          <select
            className="custom-select"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="opcao1">Nenhuma</option>
            <option value="opcao2">Leve</option>
            <option value="opcao3">Média</option>
            <option value="opcao4">Alta</option>
          </select>
        </div>
        <div>
          <label> Torso</label>
          <select
            className="custom-select"
            value={selectedOption2}
            onChange={handleSelectChange2}
          >
            <option value="opcao1">Nenhuma</option>
            <option value="opcao2">Leve</option>
            <option value="opcao3">Média</option>
            <option value="opcao4">Alta</option>
          </select>
        </div>
        <div>
          <label> Perna Esq.</label>
          <select
            className="custom-select"
            value={selectedOption3}
            onChange={handleSelectChange3}
          >
            <option value="opcao1">Nenhuma</option>
            <option value="opcao2">Leve</option>
            <option value="opcao3">Média</option>
            <option value="opcao4">Alta</option>
          </select>
        </div>
        <div>
          <label> Perna Dir.</label>
          <select
            className="custom-select"
            value={selectedOption4}
            onChange={handleSelectChange4}
          >
            <option value="opcao1">Nenhuma</option>
            <option value="opcao2">Leve</option>
            <option value="opcao3">Média</option>
            <option value="opcao4">Alta</option>
          </select>
        </div>
        <div>
          <label> Braço Esq.</label>
          <select
            className="custom-select"
            value={selectedOption5}
            onChange={handleSelectChange5}
          >
            <option value="opcao1">Nenhuma</option>
            <option value="opcao2">Leve</option>
            <option value="opcao3">Média</option>
            <option value="opcao4">Alta</option>
          </select>
        </div>
        <div>
          <label> Braço Dir.</label>
          <select
            className="custom-select"
            value={selectedOption6}
            onChange={handleSelectChange6}
          >
            <option value="opcao1">Nenhuma</option>
            <option value="opcao2">Leve</option>
            <option value="opcao3">Média</option>
            <option value="opcao4">Alta</option>
          </select>
        </div>
      </div>
      <img alt="bodyImg" src="/images/body.png" />
    </div>
  );
};

export default CharArmor;
