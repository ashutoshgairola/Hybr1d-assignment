import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


import Card from "./StoryCard";
import PollCard from "./PollCard";
import Skeleton from "./Loading";
import CommentCard from "./CommentCard";

function Result({ results, page, setPage,loading }) {

  
  const [loadingPage, setLoadingPage] = useState(false);

  useEffect(() => {
    setLoadingPage(false);
  }, [results]);

  const handlePreviousPage = () => {
    // console.log(results, page, setPage, loading,"###");
    if (page > 0) {
      setPage((prevPage) => prevPage - 1);
      setLoadingPage(true);
    }
  };

  const handleNextPage = () => {
    // console.log(page,"###");

    setPage((prevPage) => prevPage + 1);
    setLoadingPage(true);
  };

  return (
    <div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 mx-8 pb-4">
        {loadingPage ? (
          <Skeleton />
        ) : (
          results.map((result) => (
            <div key={result.story_id}>
              {result._tags.includes("story") && (
                <Link to={`/post/${result.objectID}`}>
                  <Card {...result} />
                </Link>
              )}
              {result._tags.includes("comment") && <CommentCard {...result} />}
              {result._tags.includes("poll") && <p>poll</p>}
              {result._tags.includes("pollopt") && <PollCard {...result} />}
            </div>
          ))
        )}
      </div>

      <div className="flex justify-center my-4">
        <button
          onClick={handlePreviousPage}
          disabled={page === 0}
          className=" disabled:bg-neutral-500 disabled:opacity-20 px-4 py-2 mr-2 text-white bg-[#4699FF] rounded cursor-pointer"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={results.length === 0 || loading}
          className="disabled:bg-neutral-500 px-4 py-2 text-white bg-[#4699FF] rounded cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}

Result.propTypes = {
  results: PropTypes.array,
  page: PropTypes.number,
  setPage: PropTypes.func,
  loading: PropTypes.bool,
};

export default Result;
