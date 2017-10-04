import React, {Component} from 'react';

class ToDoItem extends Component {
  constructor() {
    super();
    this.state = {
      isEdit: false
    }
  }

  componentDidMount() {
    this.setState({
      text: this.props.todo.title
    });
  }

  render() {
    let todo = this.props.todo;

    return (
      <li className="todo-item">
        <div className={this.state.isEdit ? 'hide' : ''}>
          <input
            id={"cbox" + todo.id}
            type="checkbox"
            checked={todo.done}
            onChange={this.props.handleDone.bind(null, todo.id)}
          />
          <label
            className={todo.done ? "icon-check" : "icon-check-empty"}
            htmlFor={"cbox" + todo.id}/>
          <span>{this.state.text}</span>
          <div className="controls-wrapper">
            <a
              onClick={this.handleEdit.bind(this)}
              className="icon-edit"/>
            <a
              onClick={this.props.handleDelete.bind(null, todo.id)}
              className="icon-remove"/>
          </div>
        </div>
        <div className={this.state.isEdit ? '' : 'hide'}>
          <input
            type="text"
            value={this.state.text}
            onKeyDown={this.handleEditDone.bind(this)}
            onChange={this.handleInputEdit.bind(this)}
          />
        </div>
      </li>
    );
  }

  handleEdit() {
    this.setState({
      isEdit: true,
      text: this.props.todo.title
    });
  }

  handleEditDone(e) {
    if (e.keyCode === 13 && this.state.text.length) {
      this.setState({
        isEdit: false
      });
    }
  }

  handleInputEdit(e) {
    let text = e.target.value;

    this.setState({
      text: text
    });
  }
}

export default ToDoItem;

