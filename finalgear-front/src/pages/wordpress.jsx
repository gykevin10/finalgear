import React, { useEffect, useState } from "react"
import axios from "axios"

const wordpress = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://blog14099.wordpress.com")
        setPosts(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div>
      <h1>Articles WordPress</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>
    </div>
  )
}

export default wordpress
