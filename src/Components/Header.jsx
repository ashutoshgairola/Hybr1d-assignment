import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="sticky top-0 bg-[#FF742B] px-4 w-full h-[8vh] flex justify-between items-center">
      <div className="flex font-semibold items-center space-x-2">
        <Link to="/">
          <div id="a">
            <img
              src="https://hn.algolia.com/public/899d76bbc312122ee66aaaff7f933d13.png"
              alt="logo"
              width="50"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-center">
          <div>Search</div>
          <div>Hacker News</div>
        </div>
      </div>
      <Link to="/" id="b" className="text-white text-3xl space-x-5">
        <i className="fa-solid fa-house"></i>
      </Link>
    </div>
  );
}

export default Header;
