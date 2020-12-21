import React, { Component } from "react";
import classNames from "classnames";

//import css
import "./post-list-item.css";

export default class PostListItem extends Component {
  render() {
    const {
      label,
      onDelete,
      onToggleImportant,
      onToggleLiked,
      important,
      like
    } = this.props;

    let liClassName = classNames(
      "app-list-item d-flex justify-content-between",
      { important, like }
    );

    return (
      <li className={liClassName}>
        <span onClick={onToggleLiked} className="app-list-item-label">
          {label}
        </span>
        <div className="d-flex justify-content-center align-items center">
          <button
            onClick={onToggleImportant}
            type="button"
            className="btn-star btn-sm"
          >
            <i className="fa fa-star"></i>
          </button>
          <button onClick={onDelete} type="button" className="btn-trash btn-sm">
            <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </li>
    );
  }
}
