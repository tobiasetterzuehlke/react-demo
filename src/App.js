import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList/TodoList';

class App extends Component {
  state = {
    todos: [{
      id: 1,
      title: 'Test 1',
      finished: false
    },{
      id: 2,
      title: 'Test 2',
      finished: true
    }]
  };

  onItemDelete = (item) => {
    const { id } = item;
    this.setState({todos: this.state.todos.filter(todo => todo.id !== id)});
  }

  onToggle = (item) => {
    const { id } = item;
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) 
        todo.finished = !todo.finished; 
      return todo;
    })});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" width="100" />
          
          <TodoList todos={this.state.todos} onItemDelete={this.onItemDelete} onToggle={this.onToggle} />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
