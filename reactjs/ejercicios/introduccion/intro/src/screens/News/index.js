import React from "react";
import { Article } from "./components";
import { news } from "./data/news";
import "./news.css"

export const News = () => {
  return (
    <div className="news">
      <h2>Noticias</h2>
      {
        news.map(elem => {
            return <Article title={elem.title} date={elem.date} author={elem.author} text={elem.text}
            />;
        })
      }
    </div>
  );
};


// news.map((elem) => {
        //   return <Article title={elem.title} date={elem.date} author={elem.author} text={elem.text} />
        // })