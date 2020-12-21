import React, { Component } from "react";
//import css
import "./search-panel.css";

export default class SearchPanel extends Component {
  onUpdateSearch = (e) => {
    this.props.onUpdateSearch(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Search"
        onChange={this.onUpdateSearch}
      />
    );
  }
}
