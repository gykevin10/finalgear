import ImageComponent from "@/components/ImageComponent"
import Link from "next/link"

const NextVideos = (props) => {
  const { video } = props

  return (
    <div className="bg-gray-400 flex rounded-lg justify-between w-11/12 h-24 md:w-[380px] mx-auto">
      <div className="flex justify-between place-items-center w-full">
        <Link href="#">
          <h1 className="text-xs text-white font-bold pl-3">{video.title}</h1>
        </Link>
        <p className="text-xs text-white pl-2">{video.date}</p>
        <ImageComponent
          className="ml-auto mr-3 w-[64px] h-[64px]"
          src={`/iconsyt/${video.name}logo.jpg`}
        />
      </div>
    </div>
  )
}

export default NextVideos
