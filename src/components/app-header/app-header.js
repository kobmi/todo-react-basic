import React from "react";
//import css
import "./app-header.css";

const AppHeader = ({ liked, allPosts }) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>
        {allPosts} todos, liked {liked}
      </h2>
    </div>
  );
};

export default AppHeader;
