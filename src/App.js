import React, {Component} from 'react';
import ToDoList from './ToDoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      todos: [
        {done: false, id: 1, title: 'Buy bananas'},
        {done: true, id: 2, title: 'Watch TV'},
        {done: false, id: 3, title: 'Send email'}
      ]
    }
  }

  render() {
    return (
      <div className="todo-app">
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input
              onChange={this.handleChange.bind(this)}
              value={this.state.title}
              type="text"
            />
            <button className="icon-add"/>
          </form>
        </div>
        <ToDoList
          handleDone={this.handleDone.bind(this)}
          handleDelete={this.handleDelete.bind(this)}
          todos={this.state.todos}
        />

        {this.state.todos.length ?
          <div className="todo-info">
            <span>Total count: {this.state.todos.length}</span>
            <span>Done: {this.state.todos.filter((item) => {
              return item.done
            }).length}</span>
            <div className="buttons-wrapper">
              <button onClick={this.handleResolve.bind(this, true)}>Make all done</button>
              <button onClick={this.handleResolve.bind(this, false)}>Make all undone</button>
              <button onClick={this.handleRemoveCompleted.bind(this)}>Clear Completed</button>
            </div>
          </div> : null
        }
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();

    let inputValue = this.state.title;

    if (!inputValue.length) {
      return false;
    }

    let items = this.state.todos.concat({
      title: inputValue,
      done: false,
      id: Math.random().toString(36).substr(2, 9)
    });

    this.setState({
      todos: items,
      title: ''
    });
  }

  handleChange(e) {
    let inputValue = e.target.value;

    this.setState({
      title: inputValue
    });
  }

  handleDelete(id) {
    let items = this.state.todos.filter((todo) => {
      return todo.id !== id
    });

    this.setState({
      todos: items
    });
  }

  handleDone(id) {
    let items = this.state.todos;
    let item = items.filter((item) => {
      return item.id === id
    })[0];

    item.done = !item.done;

    this.setState({
      todos: items
    });
  }

  handleResolve(state) {
    let items = this.state.todos.map((item) => {
      item.done = state;
      return item;
    });

    this.setState({
      todos: items
    });
  }

  handleRemoveCompleted() {
    let items = this.state.todos.filter((item) => {
      return !item.done;
    });

    this.setState({
      todos: items
    });
  }
}

export default App;
