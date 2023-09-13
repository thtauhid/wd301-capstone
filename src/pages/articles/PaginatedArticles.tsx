import { useArticlesState } from "@/context/articles/context";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import ReactPaginate from "react-paginate";
import { useState } from "react";
import ArticleListItems from "./ArticleListItems";
import { useSportsState } from "@/context/sports/context";
import { useUserState } from "@/context/auth/context";
import { usePreferencesState } from "@/context/preferences/context";

function PaginatedArticles() {
  const itemsPerPage = 5; // TODO: Make this configurable by the user
  const { user, isLoading: userIsLoading } = useUserState();
  const { preferences, isLoading: preferencesIsLoading } =
    usePreferencesState();
  const { selectedSport, isLoading: sportsIsLoading } = useSportsState();

  const {
    articles,
    articlesToDisplay,
    isLoading: articlesIsLoading,
  } = useArticlesState();

  // only articles from the user's favourite sports are displayed
  const articlesFromPrefferedSports = articles.filter((article) =>
    preferences?.favourite_sports.includes(article.sport.id)
  );

  let data;

  if (user) {
    data =
      selectedSport === 0 ? articlesFromPrefferedSports : articlesToDisplay;
  } else {
    data = selectedSport === 0 ? articles : articlesToDisplay;
  }

  // const data = selectedSport === 0 ? articles : articlesToDisplay;

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (
    articlesIsLoading ||
    sportsIsLoading ||
    userIsLoading ||
    preferencesIsLoading
  ) {
    return <p className='p-4'>Loading...</p>;
  }

  if (data.length === 0)
    return <div className='text-center text-2xl mt-4'>No articles found</div>;

  return (
    <>
      <ArticleListItems currentItems={currentItems} />
      <ReactPaginate
        breakLabel='...'
        nextLabel={<ChevronRightIcon className='h-8 w-8' />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<ChevronLeftIcon className='h-8 w-8' />}
        renderOnZeroPageCount={null}
        containerClassName='flex flex-row justify-center text-lg bg-gray-100 p-2 mx-4 '
        pageClassName='mx-2 p-2'
        activeClassName='text-blue-500 font-bold border border-blue-500 rounded p-2'
        activeLinkClassName='text-blue-500'
        previousClassName='mx-2 p-2'
        nextClassName='mx-2 p-2'
        disabledClassName='text-gray-400'
      />
    </>
  );
}

export default PaginatedArticles;
