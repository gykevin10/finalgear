import ImageComponent from "@/components/ImageComponent"
import Link from "next/link"

const videos = [
  {
    title: "SQUARE ENIX NEWS - LE FEU DE JUIN SEN#20",
    name: "Sephrius",
    date: "01 June 2023",
  },
  {
    title: "Final Fantasy XVI : L'Archiduché de Rosalia",
    name: "Corsimania",
    date: "07 July 2023",
  },
  {
    title: "THEORIE - FINAL FANTASY VII REBIRTH",
    name: "FinalGear",
    date: "07 July 2023",
  },
]

const NextVideos = () => {
  return (
    <div className="flex bg-gray-400 rounded-lg justify-between w-11/12 h-20 md:w-[390px] mx-auto">
      <div className="flex justify-between place-items-center w-full">
        <div className="flex flex-col bg-slate-600 gap-2 border-2 border-black rounded-lg">
          <h1 className="m-1 border-2 border-black bg-indigo-600 rounded-lg text-white text-center font-bold italic">
            PROCHAINES VIDEOS 🔥
          </h1>
          {videos.map((video, i) => (
            <div
              className="flex bg-gray-400 h-18 items-center m-1 rounded-lg"
              key={i}
            >
              <Link href="#">
                <h1 className="text-xs text-white font-bold pl-3">
                  {video.title}
                </h1>
              </Link>
              <p className="text-xs text-white pl-2">{video.date}</p>
              <ImageComponent
                className="ml-auto p-1 w-[60px] h-[60px]"
                src={`/iconsyt/${video.name}logo.jpg`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NextVideos
