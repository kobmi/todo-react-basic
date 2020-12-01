import React, { Component } from "react";

//import css
import "./post-status-filter.css";

export default class PostStatusFilter extends Component {
    buttons = [
        { name: "all", label: "Все" },
        { name: "like", label: "Понравилось" },
    ];

    render() {
        const buttons = this.buttons.map(({ name, label }) => {
            const active = this.props.filter === name;
            const clazz = active ? "btn-info" : "btn-outline-info";
            return (
                <button
                    onClick={() => this.props.onFilterSelect(name)}
                    key={name}
                    type="button"
                    className={`btn ${clazz}`}
                >
                    {label}
                </button>
            );
        });
        return <div className="btn-group">{buttons}</div>;
    }
}
