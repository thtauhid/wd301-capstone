import { useArticlesState } from "@/context/articles/context";

function ArticleListItems() {
  const { articles } = useArticlesState();
  return (
    <div>
      {articles.map((article) => {
        return <div key={article.id}>{article.title}</div>;
      })}
    </div>
  );
}

export default ArticleListItems;
