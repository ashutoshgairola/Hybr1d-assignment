import { Link } from "react-router-dom";
import Card from "./Card";

function Result({ results }) {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 mx-8 pb-4 ">
      {results.map((result) => (
        <Link to={`/post/${result.objectID}`} key={result.story_id}>
          <Card
            title={result.title}
            author={result.author}
            time={result.created_at}
            point={result.points}
            comments={result.num_comments}
          />
        </Link>
      ))}
    </div>
  );
}

export default Result;
