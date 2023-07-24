import { ArticlesProvider } from "@/context/articles/context";
import ArticleList from "./ArticleList";

function Articles() {
  return (
    <ArticlesProvider>
      <div>
        <h1>Articles</h1>
        <ArticleList />
      </div>
    </ArticlesProvider>
  );
}

export default Articles;
