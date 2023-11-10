import React from "react";
import { Link } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

function CommentCard({ author, created_at, comment_text, story_id, onClick }) {
  const timeAgo = new TimeAgo("en-US");
 const maxCharacters = 100;
  const handleClick = () => {
    onClick();
  };

  return (
    <div
      onClick={handleClick}
      className="p-5 text-neutral-400 flex flex-col space-y-3 justify-between bg-white bg-opacity-80 shadow-md rounded-lg hover:shadow-sm hover:shadow-[#FF742B]"
    >
      <div className="flex-col justify-between space-y-1">
        <div
          className="text-sm text-black font-semibold"
          dangerouslySetInnerHTML={{
            __html: comment_text.slice(0, maxCharacters)+"...",
          }}
        ></div>
        <div className="flex justify-between items-center">
          <div className="px-3 text-xs py-0.5 bg-[#4699FF] font-semibold  text-white rounded-lg">
            Comment
          </div>
          <div className="text-xs text-right">~{author}</div>
        </div>
      </div>
      <div className="flex justify-between text-xs text-center">
        <div className="text-[#4699FF]">
          {timeAgo.format(new Date(created_at))}
        </div>
        <div className="hover:text-[#4699FF]">
          <Link to={`/post/${story_id}`}>
            <i className="fa-solid fa-link pr-1"></i> Go to Post
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
