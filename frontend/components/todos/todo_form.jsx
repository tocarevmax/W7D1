import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {title: "", body: ""}
    // debugger;
    // console.log(this.props.receiveTodo);
    // this.props.receiveTodo = this.props.receiveTodo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault;
    this.props.receiveTodo
  }

  update()

  render() {
    return (
      <form>
        <label>Title
          <input onChange type="text" name="title" value={this.state.title}></input>
        </label>

        <label>Body
          <input type="text" name="body" value={this.state.body}></input>
        </label>

        <input type="submit" name="" value="New Todo"></input>
      </form>
    );
  }
}

export default TodoForm;
