import { db } from "components/firebase/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import Delete from "./Delete";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const articleRef = collection(db, "fish");
    const q = query(articleRef, orderBy("img", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    });
  }, []);
  return (
    <div style={{ paddingRight: 50 }}>
      {articles.length === 0 ? (
        <p>No articles found!</p>
      ) : (
        articles.map(({ id, name, description, img }) => (
          <div
            className="border mt-3 p-3 bg-light"
            style={{ width: 700 }}
            key={id}
          >
            <div className="row">
              <div className="col-3">
                <img src={img} alt="name" style={{ height: 180, width: 180 }} />
              </div>
              <div className="col-9 ps-3">
                <h2>{name}</h2>
                <p>{description}</p>
                <Delete id={id} img={img} />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Articles;
