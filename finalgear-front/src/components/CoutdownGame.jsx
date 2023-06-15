import ImageComponent from "@/components/ImageComponent"
import { useEffect, useState } from "react"

const EVENT_START_DATE = Date.now() + 60 * 60 * 3 * 8 * 1000
const diff = () => EVENT_START_DATE - Date.now()
const init = diff()

const countdowns = [
  {
    title: "FINAL FANTASY XVI",
    name: "ffxvi",
  },
]

const CountdownGame = () => {
  const [dateDiff, setDateDiff] = useState(init)

  useEffect(() => {
    const timerId = setInterval(() => {
      if (diff() < 0) {
        setDateDiff(0)
        clearInterval(timerId)
        return
      }
      setDateDiff(diff())
    }, 1000)

    return () => clearInterval(timerId)
  }, [])

  const date = new Date(0 + dateDiff)

  return (
    <div className="flex flex-col justify-between w-full md:w-[370px] mx-auto">
      <div className="flex flex-col gap-2 bg-slate-600 border-2 border-black rounded-lg">
        <h1 className="m-1 bg-indigo-600 text-white text-center font-bold italic border-2 border-black rounded-lg">
          Next Game:
        </h1>
        {countdowns.map((countdown, i) => (
          <div
            className="m-1 flex justify-between bg-gray-400 border-2 border-black rounded-lg"
            key={i}
          >
            <div className="flex flex-col p-1 w-[240px]">
              <h1 className="text-xs text-white font-bold w-[140px]">
                {countdown.title}
              </h1>

              <div className="flex justify-between gap-2 text-xs text-white font-bold w-[140px]">
                <div>
                  <p>DAYS</p>
                  {String(date.getUTCDate() - 1).padStart(2, "0")}
                </div>
                <div>
                  <p>HOURS</p>
                  {String(date.getUTCHours()).padStart(2, "0")}
                </div>
                <div>
                  <p>MINUTES</p>
                  {String(date.getUTCMinutes()).padStart(2, "0")}
                </div>
                <div>
                  <p>SECONDS</p>
                  {String(date.getUTCSeconds()).padStart(2, "0")}
                </div>
              </div>
            </div>
            <ImageComponent
              className="m-1 w-24 h-28"
              src={`/release/${countdown.name}cover.jpg`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CountdownGame
