import logo from './logo.svg';
import './App.css';
import ToDoList from './todolist';

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      {ToDoList()}
    </div>
  );
}

export default App;
