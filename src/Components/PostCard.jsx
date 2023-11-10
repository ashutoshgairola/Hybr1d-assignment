import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";


function PostCard({ title, author, time, point, comments,url }) {
  const timeAgo = new TimeAgo("en-US");

  return (
    <div className="mx-4 p-5 text-neutral-400 flex flex-col space-y-3 justify-between bg-white bg-opacity-80 shadow-md rounded-lg hover:shadow-sm hover:shadow-[#FF742B]">
      <div className="flex flex-col justify-between space-y-0.5">
        <div className="flex justify-between text-2xl">
          <div>
            <div className=" text-black font-semibold">{title}</div>
          </div>
          <div className="text-2xl hover:text-[#FF742B]">
            <a href={url}>
              <i className="fa-solid fa-square-rss"></i>
            </a>
          </div>
        </div>
        <div className="">~{author}</div>
      </div>
      <div className="flex justify-between text-lg text-center">
        <div className="flex space-x-5 ">
          <div className=" hover:text-[#4699ff76]">
            <i className="fa-solid fa-coins "></i> {point}
          </div>
          <div className="hover:text-[#4699ffb7]">
            <i className="fa-solid fa-comments pr-1"></i>
            {comments}
          </div>
        </div>
        <div className=" text-[#4699FF]">{timeAgo.format(new Date(time))}</div>
      </div>
    </div>
  );
}

export default PostCard;
