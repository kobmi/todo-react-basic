import React, { Component } from "react";

//import css
import "./post-add-form.css";
export default class PostAddForm extends Component {
  state = {
    text: ""
  };
  onValueChange = (e) => {
    this.setState({ text: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addPost(this.state.text);
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="bottom-panel d-flex">
        <input
          value={this.state.text}
          type="text"
          placeholder="Новая запись"
          className="form-control new-post-label"
          onChange={this.onValueChange}
        />
        <button type="submit" className="btn btn-outline-secondary">
          Добавить
        </button>
      </form>
    );
  }
}
