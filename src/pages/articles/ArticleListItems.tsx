import ArticleCard from "./ArticleCard";
import { Article } from "@/context/articles/types";

function ArticleListItems(props: { currentItems: Article[] }) {
  return (
    <div>
      {props.currentItems.map((article) => {
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
