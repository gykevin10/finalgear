import CreateArticle from "@/components/CreateArticle"
import Page from "@/components/Page"
import React from "react"

const notion = () => {
  return (
    <Page>
      <div>
        <h1 className="font-bold italic text-center">Article Page</h1>
        <CreateArticle />
      </div>
    </Page>
  )
}

export default notion
