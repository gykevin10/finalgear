import ImageComponent from "@/components/ImageComponent"
import React from "react"

const Loading = () => {
  return (
    <div className="flex justify-end items-center">
      <ImageComponent className="w-96" src="/GIF/vivi-walking.gif" />
    </div>
  )
}

export default Loading
