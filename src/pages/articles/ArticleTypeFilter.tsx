import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";
import { useSportsDispatch, useSportsState } from "@/context/sports/context";
import { Sport } from "@/context/sports/types";
import { filterArticles } from "@/context/articles/actions";
import { useArticlesDispatch } from "@/context/articles/context";
import { selectSport } from "@/context/sports/actions";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ArticleTypeFilter() {
  const { sports: sportsList, isLoading: sportsIsLoading } = useSportsState();
  const articlesDispatch = useArticlesDispatch();
  const sportsDispatch = useSportsDispatch();

  const sports = [{ id: 0, name: "All" }, ...sportsList];
  const [selected, setSelected] = useState(sports[0]);

  const handleSelect = (sport: Sport) => {
    setSelected(sport);
    filterArticles(articlesDispatch, sport.id);
    selectSport(sportsDispatch, sport.id);
  };

  if (sportsIsLoading) {
    return <p className='p-4'>Loading...</p>;
  }

  return (
    <Listbox value={selected} onChange={handleSelect}>
      {({ open }) => (
        <>
          <div className='relative mt-2 mx-4'>
            <Listbox.Button className='relative w-full cursor-default bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6'>
              <span className='flex items-center'>
                <span className='ml-3 block truncate'>{selected.name}</span>
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
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
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
  );
}
