import React, { Component } from "react";
import classNames from "classnames";
//import css
import "./post-status-filter.css";

export default class PostStatusFilter extends Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "like", label: "Liked" }
  ];

  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const active = this.props.filter === name;
      const btnClassName = classNames("btn", {
        "btn-info": active,
        "btn-outline-info": !active
      });
      return (
        <button
          onClick={() => this.props.onFilterSelect(name)}
          key={name}
          type="button"
          className={btnClassName}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}
