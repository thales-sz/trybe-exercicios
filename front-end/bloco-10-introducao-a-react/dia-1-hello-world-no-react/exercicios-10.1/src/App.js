
import './App.css';

const tarefas = ['acordar', 'jogar', 'café', 'almoço', 'jantar', 'banho']

function App() {
  const task = ( value ) => {
    return (
      <li>{value}</li>
    );
  }

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      {tarefas.map((tarefa) => <ol key = {tarefa}>{task(tarefa)}</ol>)}
    </div>
    );
}

export default App;
