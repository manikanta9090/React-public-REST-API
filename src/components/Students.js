import React, { useEffect, useState } from "react";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch posts");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <table border="1" cellPadding="10" align="center">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {posts.slice(0, 10).map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Posts;
