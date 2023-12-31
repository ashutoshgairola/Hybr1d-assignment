import Header from "../Components/Header";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import searchService from "../service/search-service";
import PostCard from "../Components/PostCard";
import CommentsCard from "../Components/CommentsCard";
import ErrorPage from "./ErrorPage";
import Skeleton from "../Components/Loading";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedCommentIndex, setExpandedCommentIndex] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await searchService.getItem(id);
        // console.log(postData);
        setPost(postData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleExpandComment = (index) => {
    setExpandedCommentIndex(index === expandedCommentIndex ? null : index);
  };

  return (
    <div className="flex flex-col space-y-4">
      <Header />
      {loading && <Skeleton />}
      {error && <ErrorPage error={error} />}
      {post && (
        <div className="flex flex-col space-y-4 ">
          <PostCard {...post} />
          <div className=" flex flex-col space-y-4 mx-4 p-4 bg-neutral-800 rounded-lg bg-opacity-20">
            <div className="text-white font-bold lg:text-2xl md:text-xl">
              Comments :
            </div>
            {post.children.map((comment, index) => (
              <CommentsCard
                key={comment.id}
                {...comment}
                index={index}
                onExpand={handleExpandComment}
                isExpanded={index === expandedCommentIndex}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
