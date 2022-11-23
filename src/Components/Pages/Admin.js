import React from "react";
import Articles from "components/CRUD/Articles";
import AddArticle from "components/CRUD/AddArticle";
const Admin = () => {
  return (
    <div className="admin__content" style={{ display: "flex" }}>
      <div className="row">
        <div className="col-md-8">
          <Articles />
        </div>
      </div>
      <div className="col-md-4">
        <AddArticle />
      </div>
    </div>
  );
};

export default Admin;
