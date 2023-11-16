import TimeAgo from "javascript-time-ago";
import PropTypes from "prop-types";

function PollCard({ author, created_at, points }) {
  const timeAgo = new TimeAgo("en-US");

  return (
    <div className="p-5 text-neutral-400 flex flex-col space-y-3 justify-between bg-white bg-opacity-80 shadow-lg rounded-lg hover:shadow-sm hover:shadow-[#4699FF]">
      <div className="flex justify-between">
        <div className="px-3 text-xs py-0.5 bg-[#4699FF] font-semibold  text-white rounded-lg">
          Pollout
        </div>
        <div className=" text-xs  text-right">~{author}</div>
      </div>

      <div className="flex justify-between text-xs">
        <div className=" text-[#4699FF]">
          {timeAgo.format(new Date(created_at))}
        </div>
        <div className=" hover:text-[#4699FF]">
          <i className="fa-solid fa-coins "></i> {points}
        </div>
      </div>
    </div>
  );
}

PollCard.propTypes = {
  points: PropTypes.number,
  author: PropTypes.string,
  created_at: PropTypes.string,
};


export default PollCard;
