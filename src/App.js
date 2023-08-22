import "./App.css";
import Logo from "./components/logo/logo.js";
import Header from "./components/header/header.js";
import Attributes from "./components/attributes/attributes";
import ImageUploader from "./components/characterImg/characterImg";
import Skills from "./components/skills/skills";
import RPGCharacterSheet from "./components/charStatus/charStatus";
import CharArmor from "./components/charArmor/charArmor";
import CharEquipment from "./components/charEquipment/charEquipment";

function App() {
  return (
    <div className="App">
      <section>
        <Logo />
      </section>
      <section className="header-and-img">
        <Header />
        <ImageUploader />
      </section>
      <Attributes />
      <Skills />
      <RPGCharacterSheet />
      <CharArmor />
      <CharEquipment title='Equipamentos'/>
      <CharEquipment title='Implantes e hacks'/>
      <CharEquipment title='Itens pessoais'/>
    </div>
  );
}

export default App;
