import React from "react"
import axios from "axios"

const NotionAPIExample = () => {
  const createArticle = async () => {
    try {
      const response = await axios.post(
        "https://api.notion.com/v1/pages",
        {
          parent: {
            database_id:
              "https://www.notion.so/FINAL-GEAR-PROJECT-8c4d8739385c4460b72d151d70a30ff9",
          },
          properties: {
            title: {
              title: [
                {
                  text: {
                    content: "Titre de l'article",
                  },
                },
              ],
            },
          },
        },
        {
          headers: {
            Authorization: "secret_W984vLT7yTTfIInxcjs0ynxbihjhiE2scJBd6rhnDU3",
            "Content-Type": "application/json",
            "Notion-Version": "2021-05-13",
          },
        }
      )

      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <button className="border-2 border-black" onClick={createArticle}>
        Créer un article
      </button>
    </div>
  )
}

export default NotionAPIExample
