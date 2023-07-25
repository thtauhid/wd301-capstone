import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { fetchSingleArticle } from "@/context/articles/actions";
import { DetailedArticle } from "@/context/articles/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ArticleDetails() {
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

  const closeDialog = () => {
    navigate("../");
  };

  return (
    <Dialog defaultOpen onOpenChange={closeDialog}>
      <DialogContent>
        <DialogHeader>
          {article ? (
            <>
              <DialogTitle>{article.title}</DialogTitle>
              <DialogDescription>
                {article.sport.name} | {article.date}
              </DialogDescription>
            </>
          ) : (
            <DialogTitle>Loading...</DialogTitle>
          )}
        </DialogHeader>
        <img src={article?.thumbnail} alt='' className='max-h-96' />
        {article?.content}
      </DialogContent>
    </Dialog>
  );
}

export default ArticleDetails;
