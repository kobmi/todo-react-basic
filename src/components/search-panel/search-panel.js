import React, { Component } from "react";
//import css
import "./search-panel.css";

export default class SearchPanel extends Component {
    state = {
        term: "",
    };

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearch(term);
    };

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Поиск по записям"
                onChange={this.onUpdateSearch}
            />
        );
    }
}
