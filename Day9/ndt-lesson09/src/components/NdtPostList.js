import React,{useState, useEffect } from 'react'

export default function NdtPostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);
  return (
    <div>
      <h2>Danh sách bài viết</h2>
      <ul>
        {posts.slice(0,10).map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
