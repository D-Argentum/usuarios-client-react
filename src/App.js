import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TareasList from './components/tareasList'

function App() {
    return (
        <div className="App" >
            <h1>
                Lista de Tareas
            </h1>

            <TareasList />
        </div>
    );
}

export default App;