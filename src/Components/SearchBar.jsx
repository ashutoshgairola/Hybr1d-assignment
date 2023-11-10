import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleSearch = () => {
    const queryString = `?query=${encodeURIComponent(
      query
    )}&tags=${encodeURIComponent(selectedFilter)}`;
    console.log(queryString, "$$$$$$$$");
    onSearch(queryString);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="flex flex-col space-y-2 mx-6 md:text-xl sm:text-lg">
      <div className="flex bg-white rounded-lg shadow-lg">
        <input
          className="w-full p-4 rounded-lg focus:outline-none focus:border-[#FF742B] focus:ring-2 focus:ring-[#FF742B]"
          type="text"
          placeholder="Search Hacker News"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <div
          className=" flex justify-center items-center p-4 rounded-lg border-r-2 cursor-pointer"
          onClick={handleSearch}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="bg-[#4699FF] rounded-r-lg flex items-center text-white font-semibold focus:border-[#FF742B]">
          <select
            className=" lg:text-lg sm:text-base md:py-3 sm:py-2 md:mx-2 lg:mx-4  bg-[#4699FF] focus:border-0 outline-none cursor-pointer"
            name="filter"
            id="filter"
            defaultValue=""
            onChange={handleFilterChange}
          >
            <option value="" disabled hidden>
              Filter
            </option>
            <option className="bg-white text-black p-2" value="story">
              story
            </option>
            <option className="bg-white text-black p-2" value="comment">
              comment
            </option>
            <option className="bg-white text-black p-2" value="pollopt">
              pollopt
            </option>
            <option className="bg-white text-black p-2" value="show_hn">
              show_hn
            </option>
            <option className="bg-white text-black p-2" value="ask_hn">
              ask_hn
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
