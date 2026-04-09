import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setPost(data);
          setLoading(false);
          document.title = `post : ${data.title}`;
        }
      });
  }, [id]);
  return (
    <div>
      <h3>
        post details of id no. : <b>{id}</b>{" "}
      </h3>
      <h1>the details are:</h1>
      {loading && <p>Please wait......</p>}
      {post && (
        <div>
          <strong>post title: {post.title}</strong>
          <p>{post.body}</p>
        </div>
      )}
      <Link to={"/conditionalrendering"}> Return to Lists</Link>
    </div>
  );
};

export default PostDetails;
