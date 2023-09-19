import Noticia from './components/noticia';
import Categorias from './components/categorias';
import './App.css';

function App() {
  return (
    <div className="container">
      <Noticia/>
      <Categorias categoria="Jogos"/>
    </div>
  );
}

export default App;