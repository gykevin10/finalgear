import Page from "@/components/Page.jsx"
import Post from "@/components/Post"
import api from "@/services/api"
import { useEffect, useState } from "react"

const test1 = () => {
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

export default test1
