import Page from "@/components/Page.jsx"
import Post from "@/components/Post.jsx"
import api from "@/services/api.js"
import { useEffect, useState } from "react"

const article = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    ;(async () => {
      const {
        data: { result },
      } = await api.get("/posts")

      setPosts(result)
    })()
  }, [])

  return (
    <Page>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Page>
  )
}

export default article
