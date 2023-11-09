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
          className=" text-xl flex justify-center items-center p-4 "
          onClick={handleSearch}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="flex  ">
        <div className="bg-white py-2 px-4 rounded-lg ">
          Filter <i className="fa-solid fa-filter"></i>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
