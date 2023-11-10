import { useState } from "react";
import TimeAgo from "javascript-time-ago";
import ReplyCard from "./ReplyCard";

function Card({ text, author, created_at, children }) {
  const replies = children.length;
  const timeAgo = new TimeAgo("en-US");
  const maxCharacters = 800;

  const [isExpandedText, setIsExpandedText] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const truncatedText = isExpandedText
    ? text
    : `${text.slice(0, maxCharacters)}...`;

  const handleToggleExpand = (e) => {
    e.stopPropagation();
    setIsExpandedText(!isExpandedText);
  };

  const handleToggleReplies = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      onClick={handleToggleReplies}
      className="py-4 px-6 flex flex-col space-y-3 justify-between bg-white bg-opacity-80 shadow-md shadow-neutral-300 rounded-lg hover:shadow-sm hover:shadow-[#4699FF] hover:border-l-4 border-[#FF742B]"
    >
      <div className="flex justify-between font-semibold items-center">
        <div className="md:text-xl sm:text-lg">
          @{author}{" "}
          <span className="text-neutral-300 text-sm">
            ({timeAgo.format(new Date(created_at))})
          </span>
        </div>
        <div
          className="flex space-x-4 text-sm text-neutral-600 hover:text-[#4699FF] cursor-pointer"
          onClick={handleToggleReplies}
        >
          <i className="fa-solid fa-comments pr-1"></i>
          {replies}
        </div>
      </div>
      <div className="px-2 text-neutral-500 lg:text-sm sm:text-xs break-words overflow-hidden">
        <div dangerouslySetInnerHTML={{ __html: truncatedText }} />
        {text.length > maxCharacters && (
          <span
            onClick={handleToggleExpand}
            className="text-[#4699FF] hover:underline focus:outline-none"
          >
            {isExpandedText ? "See Less" : "See More"}
          </span>
        )}
      </div>

      {isExpanded && replies > 0 && (
        <div className="space-y-4">
          {children.map((reply, index) => (
            <ReplyCard key={index} {...reply} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Card;
