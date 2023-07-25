import { Article } from "@/context/articles/types";
import { Link } from "react-router-dom";
import { H3 } from "@/components/ui/heading";
import Button from "@/components/ui/button";

function ArticleCard(props: { article: Article }) {
  return (
    <div className='border flex'>
      <img src={props.article.thumbnail} alt='' className='h-48 w-48' />
      <div className='p-4'>
        <H3>{props.article.title}</H3>
        <p className='mt-4'>{props.article.summary}</p>
        <Link to={`/articles/${props.article.id}`}>
          <Button>Read More</Button>
        </Link>
      </div>
    </div>
  );
}

export default ArticleCard;
