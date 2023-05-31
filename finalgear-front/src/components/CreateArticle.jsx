import { useFormik } from "formik"
import React from "react"
import * as Yup from "yup"
import axios from "axios"

const CreateArticle = () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Le titre est requis"),
    content: Yup.string().required("Le contenu est requis"),
  })

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    validationSchema,
    onSubmit: async (values) => {
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
                      content: values.title,
                    },
                  },
                ],
              },
              content: {
                rich_text: [
                  {
                    text: {
                      content: values.content,
                    },
                  },
                ],
              },
            },
          },
          {
            headers: {
              Authorization:
                "Bearer secret_W984vLT7yTTfIInxcjs0ynxbihjhiE2scJBd6rhnDU3",
              "Content-Type": "application/json",
              "Notion-Version": "2021-05-13",
            },
          }
        )

        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    },
  })

  return (
    <div className="p-2">
      <h1>Create Article</h1>

      <form onSubmit={formik.handleSubmit}>
        <div className="flex justify-between">
          <label className="flex ">
            Title : 
            <input
              type="text"
              id="title"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.title && formik.touched.title
                  ? "border-2 border-black"
                  : "font-bold italic border-2 border-black"
              }
            />
            {formik.errors.title && formik.touched.title && (
              <div className="text-red-500">{formik.errors.title}</div>
            )}
          </label>
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="border-2 border-black flex items-center bg-green-500 active:bg-green-400"
          >
            💾 SAVE
          </button>
        </div>

        <div className="flex flex-col">
          <label className="flex">
            Content : 
            {formik.errors.content && formik.touched.content && (
              <div className="text-red-500">{formik.errors.content}</div>
            )}
          </label>
          <textarea
            id="content"
            name="content"
            rows="4"
            value={formik.values.content}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.content && formik.touched.content
                ? "border-2 border-black text-blue-600 bg-slate-300"
                : "flex flex-col w-full border-2 border-black text-blue-600 bg-slate-300"
            }
          ></textarea>
        </div>
      </form>
    </div>
  )
}

export default CreateArticle
