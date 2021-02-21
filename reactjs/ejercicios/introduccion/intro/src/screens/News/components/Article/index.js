import React from "react";
import "./article.css"

export const Article = ({ title, date, author, text }) => {

  return (
    <article className="article">
      <h2>{title}</h2>
      <div>{date}</div>
      <div>{author}</div>
      <div>
        {text}
      </div>
    </article>
  );
};

Article.defaultProps = {
  author: "Admin"
}
