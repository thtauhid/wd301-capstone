import { ArticlesProvider } from "@/context/articles/context";
import { SportsProvider } from "@/context/sports/context";
import { TeamsProvider } from "@/context/teams/context";
import L2 from "./l2";
import { FavouritesProvider } from "@/context/favourites/context";

function Favourites() {
  return (
    <div>
      <SportsProvider>
        <TeamsProvider>
          <ArticlesProvider>
            <FavouritesProvider>
              <L2 />
            </FavouritesProvider>
          </ArticlesProvider>
        </TeamsProvider>
      </SportsProvider>
    </div>
  );
}

export default Favourites;
