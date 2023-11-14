import TimeAgo from "javascript-time-ago";
// import en from "javascript-time-ago/locale/en";

function PostCard({ title, author, created_at, points, children, url }) {
  const comments = children.length;
  const timeAgo = new TimeAgo("en-US");

  const newUrl = new URL(url);
  const domain = newUrl.hostname;

  return (
    <div className="mx-4 p-5 text-neutral-400 flex flex-col space-y-3 justify-between bg-white bg-opacity-80 shadow-md rounded-lg hover:shadow-sm hover:shadow-[#FF742B]">
      <div className="flex flex-col justify-between space-y-0.5">
        <div className="flex justify-between lg:text-2xl sm:text-xl">
          <div>
            <div className=" text-black font-semibold">
              {title + " "}
              <a href={url} className="text-neutral-300 textlg">
                ({domain})
              </a>
            </div>
          </div>
          <div className="text-2xl hover:text-[#FF742B]">
            <a href={url}>
              <i className="fa-solid fa-square-rss"></i>
            </a>
          </div>
        </div>
        <div className="lg:text-lg sm:text-base">~{author}</div>
      </div>
      <div className="flex justify-between lg:text-lg sm:text-base text-center">
        <div className="flex space-x-5 ">
          <div className=" hover:text-[#4699FF]">
            <i className="fa-solid fa-coins "></i> {points}
          </div>
          <div className="hover:text-[#4699FF]">
            <i className="fa-solid fa-comments pr-1"></i>
            {comments}
          </div>
        </div>
        <div className=" text-[#4699ff76]">
          {timeAgo.format(new Date(created_at))}
        </div>
      </div>
    </div>
  );
}

export default PostCard;
