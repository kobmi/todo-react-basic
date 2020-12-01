import React, { Component } from "react";
// import components
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
//import css
import "./app.css";
export default class App extends Component {
    state = {
        posts: [
            {
                label: "Drink Coffee",
                important: false,
                like: false,
                id: Math.floor(Math.random() * 1000),
            },
            {
                label: "Learn React",
                important: false,
                like: false,
                id: Math.floor(Math.random() * 1000),
            },
            {
                label: "Build Application",
                important: false,
                like: false,
                id: Math.floor(Math.random() * 1000),
            },
        ],
        term: "",
        filter: "all",
    };

    deletePost = (id) => {
        this.setState(({ posts }) => {
            const index = posts.findIndex((post) => post.id === id);

            const newArr = [
                ...posts.slice(0, index),
                ...posts.slice(index + 1),
            ];
            return {
                posts: newArr,
            };
        });
    };

    addPost = (post) => {
        const newPost = {
            label: post,
            important: false,
            id: Math.floor(Math.random() * 1000),
        };
        this.setState(({ posts }) => {
            const newArr = [...posts, newPost];
            return {
                posts: newArr,
            };
        });
    };

    onToggleImportant = (id) => {
        this.setState(({ posts }) => {
            const index = posts.findIndex((post) => post.id === id);
            const old = posts[index];
            const newItem = {
                ...old,
                important: !old.important,
            };
            const newArr = [
                ...posts.slice(0, index),
                newItem,
                ...posts.slice(index + 1),
            ];
            return {
                posts: newArr,
            };
        });
    };
    onToggleLiked = (id) => {
        this.setState(({ posts }) => {
            const index = posts.findIndex((post) => post.id === id);
            const old = posts[index];
            const newItem = {
                ...old,
                like: !old.like,
            };
            const newArr = [
                ...posts.slice(0, index),
                newItem,
                ...posts.slice(index + 1),
            ];
            return {
                posts: newArr,
            };
        });
    };

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        });
    };

    onUpdateSearch = (term) => {
        this.setState({ term });
    };

    filterPost = (items, filter) => {
        if (filter === "like") {
            return items.filter((item) => item.like);
        } else {
            return items;
        }
    };
    onFilterSelect = (filter) => {
        this.setState({ filter });
    };

    render() {
        const { posts, term, filter } = this.state;
        const liked = posts.filter((item) => item.like).length;
        const allPosts = posts.length;

        const visiblePosts = this.filterPost(
            this.searchPost(posts, term),
            filter
        );
        return (
            <div className="app">
                <AppHeader liked={liked} allPosts={allPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deletePost}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm addPost={this.addPost} />
            </div>
        );
    }
}
