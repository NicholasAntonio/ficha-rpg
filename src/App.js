import './App.css';
import Logo from './components/logo/logo.js';
import Header from './components/header/header.js';
import Attributes from './components/attributes/attributes';
import ImageUploader from './components/characterImg/characterImg';

function App() {
  return (
    <div className="App">
      <Logo />
      <Header />
      <ImageUploader />
      <Attributes />
    </div>
  );
}

export default App;
