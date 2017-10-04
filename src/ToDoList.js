import React, {Component} from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      done: false
    };
  }

  render() {
    return (
      <div className="todo-list">
        <ul>
          {
            this.props.todos.map((todo) => {
              return (
                <ToDoItem
                  key={todo.id}
                  todo={todo}
                  handleDone={this.props.handleDone}
                  handleDelete={this.props.handleDelete}
                />
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default ToDoList;