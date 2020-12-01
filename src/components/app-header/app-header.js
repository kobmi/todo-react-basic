import React from "react";
//import css
import "./app-header.css";

const AppHeader = ({ liked, allPosts }) => {
    return (
        <div className="app-header d-flex">
            <h1>Sergey Kolesnichenko</h1>
            <h2>
                {allPosts} записей, понравилось {liked}
            </h2>
        </div>
    );
};

export default AppHeader;
