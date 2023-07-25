import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

import { fetchSingleArticle } from "@/context/articles/actions";
import { DetailedArticle } from "@/context/articles/types";
import { useNavigate, useParams } from "react-router-dom";

export default function ArticleDetails() {
  const navigate = useNavigate();
  const { articleID } = useParams();

  const [article, setArticle] = useState<DetailedArticle | null>(null);

  useEffect(() => {
    fetchSingleArticle(articleID!)
      .then((data) => {
        setArticle(data || null);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [articleID]);

  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
    navigate("../");
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium leading-6 text-gray-900'
                >
                  {article?.title}
                </Dialog.Title>
                {article == null && "Loading..."}
                <div className='mt-4'>
                  <img src={article?.thumbnail} alt={article?.title} />
                  <p className='text-justify mt-4'>{article?.content}</p>
                </div>

                <div className='mt-4'>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
