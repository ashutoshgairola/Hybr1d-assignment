import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

function Card({ title, author, time, point, comments, onClick }) {
  const timeAgo = new TimeAgo("en-US");

  const handleClick = () => {
    onClick();
  };

  return (
    <div
      onClick={handleClick}
      className="p-5 text-neutral-400 flex flex-col space-y-3 justify-between bg-white bg-opacity-80 shadow-md rounded-lg hover:shadow-sm hover:shadow-[#FF742B]"
    >
      <div className="flex-col justify-between space-y-1">
        <div className="text-sm text-black font-semibold">{title}</div>
        <div className="flex justify-between items-center">
          <div className="px-3 text-xs py-0.5 bg-[#FF742B] font-semibold bg-opacity-40 text-white rounded-lg">
            Story
          </div>
          <div className=" text-xs  text-right">~{author}</div>
        </div>
      </div>
      <div className="flex justify-between  text-xs text-center">
        <div className=" text-[#4699FF]">{timeAgo.format(new Date(time))}</div>
        <div className="px-4 border-x-2 hover:text-[#4699FF]">
          <i className="fa-solid fa-coins "></i> {point}
        </div>
        <div className="hover:text-[#4699FF]">
          <i className="fa-solid fa-comments pr-1"></i>
          {comments}
        </div>
      </div>
    </div>
  );
}

export default Card;
