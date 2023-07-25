import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Article } from "@/context/articles/types";

function SingleArticle(props: { article: Article }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.article.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex justify-between'>
          <div>
            <p>{props.article.summary}</p>
            <Button className='mt-4'>Read More</Button>
          </div>
          <img src={props.article.thumbnail} alt='' className='h-32 w-32' />
        </div>
      </CardContent>
      <CardFooter>
        <p>
          {props.article.sport.name} |{" "}
          {new Date(props.article.date).toDateString()}
          {/* TODO: make a utility fn that convert the string formatted date to a good looking date */}
        </p>
      </CardFooter>
    </Card>
  );
}

export default SingleArticle;
