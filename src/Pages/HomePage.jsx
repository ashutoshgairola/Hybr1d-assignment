import { useState, useEffect } from "react";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import Result from "../Components/Result";
import ErrorPage from "./ErrorPage";
import searchService from "../service/search-service";
import Skeleton from "../Components/Loading";

function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);
        const results = await searchService.searchWithPagination(query, page);
        setSearchResults(results);
      } catch (error) {
        console.error("Error searching Hacker News:", error.message);
        setError("An error occurred while fetching results. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, query]);

  const handleSearch = async (query) => {
    setPage(0);
    setQuery(query);
  };

  return (
    <div className="flex flex-col space-y-4 ">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {loading && <Skeleton />}
      {error && <ErrorPage error={error} />}
      {searchResults.length > 0 && !loading ? (
        <Result results={searchResults} page={page} setPage={setPage} />
      ) : (
        !loading && <ErrorPage error="No results found." />
      )}
    </div>
  );
}

export default HomePage;
