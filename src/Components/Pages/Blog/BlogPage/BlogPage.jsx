import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogList } from "../config/data";
import Chip from "../Chip/Chip";
import EmptyList from "../EmphyList/EmphyList";
import "./styles.scss";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link className="blog-goBack" to="/">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt="cover" />
          <p className="blog-desc">{blog.description}</p>
          <h1>Карта</h1>
          <img src={blog.mapCover} alt="" />
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default BlogPage;
