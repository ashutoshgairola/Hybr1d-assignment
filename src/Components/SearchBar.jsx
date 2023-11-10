// SearchBar.jsx
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };
  return (
    <div className="flex flex-col space-y-2 mx-6 ">
      <div className="flex bg-white   rounded-lg shadow-lg">
        <input
          className="w-full py-4 px-4 rounded-lg focus:outline-none focus:border-[#FF742B] focus:ring-2 focus:ring-[#FF742B]"
          type="text"
          placeholder="Search Hacker News"
          value={query}
          onChange={handleInputChange}
        />
        <div
          className=" text-xl flex justify-center items-center p-4 rounded-lg border-r-2"
          onClick={handleSearch}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="bg-[#4699FF]  rounded-r-lg flex items-center text-white font-semibold focus:border-[#FF742B]">
          <select
            className=" py-3 mx-4 bg-[#4699FF] focus:border-0"
            name="filter "
            id="filter"
          >
            <option value="" selected disabled hidden>
              Filter
            </option>
            <option value="story">story</option>
            <option value="comment">comment</option>
            <option value="poll">poll</option>
            <option value="pollopt">pollopt</option>
            <option value="show_hn">show_hn</option>s
            <option value="ask_hn">ask_hn</option>s
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
