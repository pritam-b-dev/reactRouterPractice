import React, { useEffect, useState } from "react";

const About = ({ name, user }) => {
  const [post, setPost] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div>
      <h2>Hi {name}</h2>
      <p>This is from usestate variable {user}</p>
      <h3>Data from the internet:</h3>
      {post ? (
        <div>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ) : (
        <div>
          <p>Please wait</p>
        </div>
      )}
    </div>
  );
};

export default About;
