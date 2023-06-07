import ImageComponent from "@/components/ImageComponent"
import classNames from "classnames"
import { useEffect, useState } from "react"

const EVENT_START_DATE = Date.now() + 60 * 60 * 3 * 8 * 1000
const diff = () => EVENT_START_DATE - Date.now()
const init = diff()

const CountdownGame = (props) => {
  const { className } = props
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
    <div
      className={classNames(
        "flex flex-col w-11/12 h-fit mx-auto md:mx-0 md:w-[390px] p-2 gap-2 bg-gray-400 text-sm rounded-lg border-2 border-black",
        className
      )}
    >
      <div className="flex flex-col justify-between p-1 bg-gray-400 rounded-b-lg text-white font-bold gap-2">
        <div className="flex gap-2">
          <div className="flex flex-col justify-between">
            <div children className="w-60">
              <p className="font-bold text-white">
                Next Game : FINAL FANTASY XVI
              </p>
            </div>

            <div className="flex justify-betwwen items-center gap-2 w-64">
              <div>
                <p>DAYS</p>
                {String(date.getUTCDay()).padStart(2, "0")}
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

          <ImageComponent className="w-24 h-28" src="/release/ffxvicover.jpg" />
        </div>
      </div>
    </div>
  )
}

export default CountdownGame
