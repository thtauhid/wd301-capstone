import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";
import { useSportsState } from "@/context/sports/context";
import { Sport } from "@/context/sports/types";
import { useArticlesState } from "@/context/articles/context";
import { useTeamsState } from "@/context/teams/context";
import { Team } from "@/context/teams/types";
import { Article } from "@/context/articles/types";
import ArticleListItems from "../articles/ArticleListItems";
import { useUserState } from "@/context/auth/context";
import { usePreferencesState } from "@/context/preferences/context";

type CustomArticle = {
  id: number;
  title: string;
  thumbnail: string;
  sport: {
    id: number;
    name: string;
  };
  date: string;
  summary: string;
  teams: number[];
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function filterArticleByTeamId(articles: Article[], teamId: number) {
  console.table({ teamId });
  // take all articles and replace the teams object with team ids
  const articlesWithTeamIds = articles.map((article) => {
    return {
      ...article,
      teams: article.teams.map((team) => team.id),
    };
  });

  // filter articles by team id
  const filteredArticles: CustomArticle[] = articlesWithTeamIds.filter(
    (article) => article.teams.includes(teamId)
  );

  return filteredArticles;
}

function Filter() {
  const { user } = useUserState();
  const { sports: sportsList } = useSportsState();
  const { teams: teamList } = useTeamsState();
  const { articles } = useArticlesState();
  const { preferences } = usePreferencesState();

  const prefferedSports = sportsList.filter((sport) =>
    preferences.favourite_sports.includes(sport.id)
  );

  const sports = user
    ? [{ id: 0, name: "Select Sport" }, ...prefferedSports]
    : [{ id: 0, name: "Select Sport" }, ...sportsList];

  const prefferTeams = teamList.filter((team) =>
    preferences.favourite_teams.includes(team.id)
  );

  const teams = user
    ? [{ id: 0, name: "Select Team", plays: "Select Sport" }, ...prefferTeams]
    : [{ id: 0, name: "Select Team", plays: "Select Sport" }, ...teamList];

  const [selectedSport, setSelectedSport] = useState(sports[0]);
  const [selectedTeam, setSelectedTeam] = useState(teams[0]);
  const [filteredTeams, setFilteredTeams] = useState(teams);
  const [filteredArticles, setFilteredArticles] = useState<CustomArticle[]>([]);

  const handleSportSelect = (sport: Sport) => {
    setSelectedSport(sport);
    const newlyFilteredTeams = teams.filter(
      (team) => team.plays === sport.name
    );

    if (newlyFilteredTeams.length === 0) {
      setFilteredTeams([{ id: 0, name: "Select Team", plays: "Select Sport" }]);
      setSelectedTeam({ id: 0, name: "Select Team", plays: "Select Sport" });
      setFilteredArticles([]);
    } else {
      setFilteredTeams(newlyFilteredTeams);
      setSelectedTeam(newlyFilteredTeams[0]);

      const newlyFilteredArticles = filterArticleByTeamId(
        articles,
        newlyFilteredTeams[0].id
      );
      setFilteredArticles(newlyFilteredArticles);
    }
  };

  const handleTeamSelect = (team: Team) => {
    setSelectedTeam(team);
    const newlyFilteredArticles = filterArticleByTeamId(articles, team.id);
    setFilteredArticles(newlyFilteredArticles);
  };

  return (
    <>
      <Listbox value={selectedSport} onChange={handleSportSelect}>
        {({ open }) => (
          <>
            <div className='relative mt-2 mx-4'>
              <Listbox.Button className='relative w-full cursor-default bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6'>
                <span className='flex items-center'>
                  <span className='ml-3 block truncate'>
                    {selectedSport.name}
                  </span>
                </span>
                <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
                  <ChevronUpDownIcon
                    className='h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Listbox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                  {sports.map((sport) => (
                    <Listbox.Option
                      key={sport.id}
                      className={({ active }) =>
                        classNames(
                          active ? "bg-indigo-600 text-white" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={sport}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className='flex items-center'>
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "ml-3 block truncate"
                              )}
                            >
                              {sport.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className='h-5 w-5'
                                aria-hidden='true'
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>

      {/* Teams */}
      <Listbox value={selectedTeam} onChange={handleTeamSelect}>
        {({ open }) => (
          <>
            <div className='relative mt-2 mx-4'>
              <Listbox.Button className='relative w-full cursor-default bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6'>
                <span className='flex items-center'>
                  <span className='ml-3 block truncate'>
                    {selectedTeam.name}
                  </span>
                </span>
                <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
                  <ChevronUpDownIcon
                    className='h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Listbox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                  {filteredTeams.map((team) => (
                    <Listbox.Option
                      key={team.id}
                      className={({ active }) =>
                        classNames(
                          active ? "bg-indigo-600 text-white" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={team}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className='flex items-center'>
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "ml-3 block truncate"
                              )}
                            >
                              {team.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className='h-5 w-5'
                                aria-hidden='true'
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>

      {/* Articles */}
      <ArticleListItems
        currentItems={filteredArticles as unknown as Article[]}
      />
    </>
  );
}

export default Filter;
