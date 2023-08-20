import "./App.css";
import Logo from "./components/logo/logo.js";
import Header from "./components/header/header.js";
import Attributes from "./components/attributes/attributes";
import ImageUploader from "./components/characterImg/characterImg";
import Skills from "./components/skills/skills";

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
    </div>
  );
}

export default App;
