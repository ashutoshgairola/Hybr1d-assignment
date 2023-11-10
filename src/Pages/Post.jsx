import Header from "../Components/Header";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import searchService from "../service/search-service";
import PostCard from "../Components/PostCard";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await searchService.getItem(id);
        // console.log(postData);
        setPost(postData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);


  return (
    <div className="flex flex-col space-y-4">
      <Header />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {post && (
        <PostCard
          title={post.title}
          author={post.author}
          time={post.created_at}
          point={post.points}
          comments={post.children.length}
          url={post.url}
        />
      )}
    </div>
  );
};

export default Post;
