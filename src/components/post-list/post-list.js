import React from "react";
import PostListItem from "../post-list-item";
//import css
import "./post-list.css";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
    const elements = posts.map((post) => {
        const { id, ...postProps } = post;
        return (
            <PostListItem
                key={id}
                {...postProps}
                onDelete={() => onDelete(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleLiked={() => {
                    onToggleLiked(id);
                }}
            />
        );
    });
    return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
