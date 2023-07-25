import { useArticlesState } from "@/context/articles/context";
import SingleArticle from "../../components/ui/SingleArticle";

function ArticleListItems() {
  const { articles } = useArticlesState();
  return (
    <div>
      {articles.map((article) => {
        return (
          <div key={article.id} className='m-2 p-2'>
            <SingleArticle article={article} />
          </div>
        );
      })}
    </div>
  );
}

export default ArticleListItems;
