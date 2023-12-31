import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import PropTypes from "prop-types";

TimeAgo.addDefaultLocale(en);

function StoryCard({ title, author, created_at, points, num_comments }) {
  const timeAgo = new TimeAgo("en-US");

  return (
    <div className="p-5 text-neutral-400 flex flex-col space-y-3 justify-between bg-white bg-opacity-80 shadow-md rounded-lg hover:shadow-sm hover:shadow-[#FF742B]">
      <div className="flex-col justify-between space-y-1">
        <div className="text-sm text-black font-semibold">{title}</div>
        <div className="flex justify-between items-center">
          <div className="px-3 text-xs py-0.5 bg-[#FF742B] font-semibold  text-white rounded-lg">
            Story
          </div>
          <div className=" text-xs  text-right">~{author}</div>
        </div>
      </div>
      <div className="flex justify-between  text-xs text-center">
        <div className=" text-[#4699FF]">
          {timeAgo.format(new Date(created_at))}
        </div>
        <div className="px-4 border-x-2 hover:text-[#4699FF]">
          <i className="fa-solid fa-coins "></i> {points}
        </div>
        <div className="hover:text-[#4699FF]">
          <i className="fa-solid fa-comments pr-1"></i>
          {num_comments}
        </div>
      </div>
    </div>
  );
}

StoryCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  created_at: PropTypes.string,
  children: PropTypes.array,
  points: PropTypes.number,
  num_comments: PropTypes.number,
};

export default StoryCard;
