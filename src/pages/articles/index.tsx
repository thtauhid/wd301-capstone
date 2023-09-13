import { ArticlesProvider } from "@/context/articles/context";
import ArticleList from "./ArticleList";
import { H2 } from "@/components/ui/heading";
import { SportsProvider } from "@/context/sports/context";
import { PreferencesProvider } from "@/context/preferences/context";

function Articles() {
  return (
    <ArticlesProvider>
      <SportsProvider>
        <PreferencesProvider>
          <div>
            <H2>Trending News</H2>
            <ArticleList />
          </div>
        </PreferencesProvider>
      </SportsProvider>
    </ArticlesProvider>
  );
}

export default Articles;
