import axios from "axios";

const URL = "http://hn.algolia.com/api/v1";

const searchService = {
  getItem: async (itemId) => {
    try {
      const response = await axios.get(`${URL}/items/${itemId}`);
      return response.data;
    } catch (error) {
      console.error("Error getting item from Hacker News:", error);

      const errorMessage =
        error.response?.data?.message ||
        "Failed to fetch item details. Please try again later.";
      throw new Error(errorMessage);
    }
  },

  getUser: async (username) => {
    try {
      const response = await axios.get(`${URL}/users/${username}`);
      return response.data;
    } catch (error) {
      console.error("Error getting user from Hacker News:", error);

      const errorMessage =
        error.response?.data?.message ||
        "Failed to fetch user details. Please try again later.";
      throw new Error(errorMessage);
    }
  },

  search: async (query) => {
    try {
      const response = await axios.get(`${URL}/search`, {
        params: { query },
      });
      return response.data.hits;
    } catch (error) {
      console.error("Error searching Hacker News:", error);

      const errorMessage =
        error.response?.data?.message ||
        "Failed to fetch search results. Please try again later.";
      throw new Error(errorMessage);
    }
  },

  searchWithPagination: async (query, page) => {
    try {
      const response = await axios.get(`${URL}/search`, {
        params: { query, page },
      });
      return response.data.hits;
    } catch (error) {
      console.error("Error searching Hacker News with pagination:", error);

      const errorMessage =
        error.response?.data?.message ||
        "Failed to fetch search results. Please try again later.";
      throw new Error(errorMessage);
    }
  },

  searchByDate: async (query) => {
    try {
      const response = await axios.get(`${URL}/search_by_date`, {
        params: { query },
      });
      return response.data.hits;
    } catch (error) {
      console.error("Error searching by date on Hacker News:", error);

      const errorMessage =
        error.response?.data?.message ||
        "Failed to fetch search results by date. Please try again later.";
      throw new Error(errorMessage);
    }
  },
};

export default searchService;
