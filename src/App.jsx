import { useState } from "react";


import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Result from "./Components/Result";
import searchService from "./service/search-service";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    try {
      setError(null);
      setLoading(true);
      const results = await searchService.search(query);
      // console.log(results)
      setSearchResults(results);
    } catch (error) {
      console.error("Error searching Hacker News:", error.message);
      setError("An error occurred while fetching results. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col space-y-4 ">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <ErrorPage error={error} />}
      {searchResults.length > 0 ? (
        <Result results={searchResults} />
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default App;
