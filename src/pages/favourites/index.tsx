import { ArticlesProvider } from "@/context/articles/context";
import { SportsProvider } from "@/context/sports/context";
import { TeamsProvider } from "@/context/teams/context";
import L2 from "./l2";
import { FavouritesProvider } from "@/context/favourites/context";
import { PreferencesProvider } from "@/context/preferences/context";

function Favourites() {
  return (
    <div>
      <PreferencesProvider>
        <SportsProvider>
          <TeamsProvider>
            <ArticlesProvider>
              <FavouritesProvider>
                <L2 />
              </FavouritesProvider>
            </ArticlesProvider>
          </TeamsProvider>
        </SportsProvider>
      </PreferencesProvider>
    </div>
  );
}

export default Favourites;
