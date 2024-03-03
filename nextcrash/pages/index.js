import Head from "next/head";
import Image from "next/image";
import ArticleList from "@/components/ArticleList";

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name="keywords" content="web development" />
      </Head>
      <ArticleList articles={articles}></ArticleList>
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const res = await fetch(`https://bff.goodinside.dev/api/p/cards/mock`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const articles = await res.json();

    return {
      props: {
        articles: articles.cards,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);

    return {
      props: {
        articles: [],
      },
    };
  }
};
