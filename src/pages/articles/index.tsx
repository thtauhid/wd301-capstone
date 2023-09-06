import { ArticlesProvider } from "@/context/articles/context";
import ArticleList from "./ArticleList";
import { H2 } from "@/components/ui/heading";
import { SportsProvider } from "@/context/sports/context";

function Articles() {
  return (
    <ArticlesProvider>
      <SportsProvider>
        <div>
          <H2>Articles</H2>
          <ArticleList />
        </div>
      </SportsProvider>
    </ArticlesProvider>
  );
}

export default Articles;
