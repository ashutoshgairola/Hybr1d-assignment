import { useState } from "react";
import TimeAgo from "javascript-time-ago";

function ReplyCard({ text, author, created_at, children }) {
  const replies = children.length;
  const timeAgo = new TimeAgo("en-US");

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = (e) => {
    e.stopPropagation();
    // console.log(isExpanded);
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      onClick={handleToggleExpand}
      className="py-4 px-6 flex flex-col space-y-3 justify-between bg-white bg-opacity-80 shadow-md shadow-neutral-300 rounded-lg hover:shadow-sm hover:shadow-[#FF742B] hover:border-l-4 border-[#4699FF]"
    >
      <div className="flex justify-between font-semibold items-center">
        <div className="lg:text-lg sm:text-base">
          @{author}
          <span className="opacity-30 text-sm">
            ({timeAgo.format(new Date(created_at))})
          </span>
        </div>
        <div
          className="flex space-x-4 text-sm text-neutral-600 hover:text-[#4699FF] cursor-pointer"
          onClick={handleToggleExpand}
        >
          <i className="fa-solid fa-comments pr-1"></i>
          {replies}
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: text }}
        className="px-2 text-neutral-500 lg:text-sm sm:text-xs break-words overflow-hidden"
      />
      {isExpanded && replies > 0 && (
        <div className=" space-y-3">
          {children.map((reply, index) => (
            <ReplyCard key={index} {...reply} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ReplyCard;
