import "./App.css";
import Logo from "./components/logo/logo.js";
import Header from "./components/header/header.js";
import Attributes from "./components/attributes/attributes";
import ImageUploader from "./components/characterImg/characterImg";
import Skills from "./components/skills/skills";
import RPGCharacterSheet from "./components/charStatus/charStatus";
import CharArmor from "./components/charArmor/charArmor";
import CharEquipment from "./components/charEquipment/charEquipment";
import {MdOutlineSdStorage} from 'react-icons/md'
import {GiTec9 } from 'react-icons/gi'
import {BsPhone} from 'react-icons/bs'

function App() {
  return (
    <div className="App">
      <section>
        <Logo/>
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
        </div>
      <div className="right">
      <RPGCharacterSheet />
      <CharArmor />
      <CharEquipment title= 'Equipamentos' icon={<GiTec9 />}/>
      <CharEquipment title='Implantes e hacks' icon={<MdOutlineSdStorage />}/>
      <CharEquipment title='Itens pessoais' icon={<BsPhone />}/>
      </div>
      </main>
    </div>
  );
}

export default App;
