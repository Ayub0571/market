import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import "./Blog.css";
import { Link, Route } from "react-router-dom";
import Header from "./Home/Header";
import SearchBar from "./Search/SearchBar";
import BlogList from "./BlogList/BlogList";
import { blogList } from "./config/data";
import { useState } from "react";
import EmphyList from "./EmphyList/EmphyList";
import BlogPage from "./BlogPage/BlogPage";

const Blog = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filter = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filter);
  };
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };
  return (
    <>
      <Header />
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSubmit}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {!blogs.length ? <EmphyList /> : <BlogList blogs={blogs} />}
    </>
  );
};
export default Blog;
