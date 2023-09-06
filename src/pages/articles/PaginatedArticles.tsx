import { useArticlesState } from "@/context/articles/context";
// import ArticleCard from "./ArticleCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import ReactPaginate from "react-paginate";
import { useState } from "react";
import ArticleListItems from "./ArticleListItems";

function PaginatedArticles() {
  const itemsPerPage = 5; // TODO: Make this configurable by the user
  const { articles } = useArticlesState();
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = articles.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(articles.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % articles.length;
    setItemOffset(newOffset);
  };

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
