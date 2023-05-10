import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UsuariosList from './components/usuariosList'

function App() {
    return (
        <div className="App" >
            <h1>
                Lista de Tareas
            </h1>

            <UsuariosList />
        </div>
    );
}

export default App;