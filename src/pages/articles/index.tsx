import { ArticlesProvider } from "@/context/articles/context";
import ArticleList from "./ArticleList";
import { H2 } from "@/components/ui/heading";

function Articles() {
  return (
    <ArticlesProvider>
      <div>
        <H2>Articles</H2>
        <ArticleList />
      </div>
    </ArticlesProvider>
  );
}

export default Articles;
