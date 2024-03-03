import React from "react";
import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";
const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article, index) => {
        return <ArticleItem article={article} index={index}></ArticleItem>;
      })}
    </div>
  );
};

export default ArticleList;
