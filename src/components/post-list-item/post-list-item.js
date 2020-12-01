import React, { Component } from "react";

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
            like,
        } = this.props;
        let classNames = "app-list-item d-flex justify-content-between";
        if (important) {
            classNames += " important";
        }
        if (like) {
            classNames += " like";
        }
        return (
            <li className={classNames}>
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
                    <button
                        onClick={onDelete}
                        type="button"
                        className="btn-trash btn-sm"
                    >
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </li>
        );
    }
}
