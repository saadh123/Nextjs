import React from "react";
import articleStyles from "../styles/Article.module.css";
import Link from "next/link";

const ArticleItem = ({ article, index }) => {
  return (
    <Link href={`/article/${index + 1}`}>
      <div className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </div>
    </Link>
  );
};

export default ArticleItem;
