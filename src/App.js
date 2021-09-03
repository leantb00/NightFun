import logo from './logoTipoNightFun.png';
import './App.css';
import logoTipoFacebook from './logoTipoFacebook.png';

function App() {
 return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Seja Bem Vindo Ao NightFun.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           <img  src={logoTipoFacebook} alt="logoTipoFacebook.png" ></img> {/* logotipo Do facebook incluído como link */} 
        </a>
      </header>
    </div>
  );
}

export default App;
