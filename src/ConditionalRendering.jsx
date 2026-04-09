import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ConditionalRendering = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>Show the Data below if the condition match!</h1>
      {loading ? (
        <h3>wait.......</h3>
      ) : (
        <div>
          <h3>The posts are,</h3>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Link to={`/conditionalrendering/${post.id}`}>
                  <strong>{post.title}</strong>
                  {/* <p>{post.body}</p> */}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ConditionalRendering;
