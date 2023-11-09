import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

function Card({ title, author, time, point, comments }) {
  const timeAgo = new TimeAgo("en-US");

  return (
    <div className="p-5 text-neutral-400 flex flex-col space-y-3 justify-between bg-white bg-opacity-80 shadow-md rounded-lg hover:shadow-sm hover:shadow-[#FF742B]">
      <div className="flex-col justify-between space-y-0.5">
        <div className="text-sm text-black font-semibold">{title}</div>
        <div className=" text-xs  text-right">~{author}</div>
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
