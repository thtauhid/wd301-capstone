import { useArticlesState } from "@/context/articles/context";
import ArticleCard from "./ArticleCard";

function ArticleListItems() {
  const { articles } = useArticlesState();
  return (
    <div>
      {articles.map((article) => {
        return (
          <div key={article.id} className='m-2 p-2'>
            <ArticleCard article={article} />
          </div>
        );
      })}
    </div>
  );
}

export default ArticleListItems;
