import "./App.css";
import Logo from "./components/logo/logo.js";
import Header from "./components/header/header.js";
import Attributes from "./components/attributes/attributes";
import ImageUploader from "./components/characterImg/characterImg";
import Skills from "./components/skills/skills";
import RPGCharacterSheet from "./components/charStatus/charStatus";
import CharArmor from "./components/charArmor/charArmor";
import CharEquipment from "./components/charEquipment/charEquipment";
import { MdOutlineSdStorage } from "react-icons/md";
import { GiTec9 } from "react-icons/gi";
import { BsPhone } from "react-icons/bs";
import {HiDocumentDownload} from "react-icons/hi";
import {RiMoneyEuroBoxLine} from 'react-icons/ri';
import { FaCodeBranch} from 'react-icons/fa';
import {FaDiceD20} from 'react-icons/fa';
import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <section>
        <Logo />
      </section>
      <main>
        <div className="left">
          <div className="character-info">
            <section className="header-and-img">
              <Header />
              <ImageUploader />
            </section>
            <Attributes />
          </div>
          <div className="char-skill">
            <Skills />
          </div>
          <div className="button-container">
            <a href="/images/regras.odt" download>
          <Button variant="outlined" color="error" endIcon={<HiDocumentDownload />}>
            Resumo das regras
          </Button>
          </a>
            <a href="https://loja-rpg-seven.vercel.app" target="_blank">
          <Button variant="outlined" color="error" endIcon={<RiMoneyEuroBoxLine />}>
            Acesse à loja
          </Button>
          </a>
            <a href="https://dice-roller-2.vercel.app" target="_blank">
          <Button variant="outlined" color="error" endIcon={<FaDiceD20 />}>
            Dice roller
          </Button>
          </a>
          </div>
        </div>
        <div className="right">
          <RPGCharacterSheet />
          <CharArmor />
          <CharEquipment title="Equipamentos" icon={<GiTec9 />} />
          <CharEquipment
            title="Implantes"
            icon={<FaCodeBranch />}
          />
          <CharEquipment
            title="Hacks"
            icon={<MdOutlineSdStorage />}
          />
          <CharEquipment title="Itens pessoais" icon={<BsPhone />} />
        </div>
      </main>
    </div>
  );
}

export default App;
