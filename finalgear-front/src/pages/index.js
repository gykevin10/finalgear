import Header from "../components/Header"
import Footer from "../components/Footer"
import NextRelease from "@/components/NextRelease"
import NextVideos from "@/components/NextVideos"
import CountdownRace from "@/components/CoutdownGame"

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="sticky top-0">
        <Header />
      </div>
      <div className="grow flex justify-between p-1 gap-x-1">
        <div className="grid w-full md:w-fit grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-2 mt-2 mx-auto xl:mx-0 lg:gap-x-[8.75rem] xl:gap-x-0">
          <div className="grid grid-cols-1">
            <iframe
              className="rounded-xl w-36 md:w-[370px] mx-auto md:mx-0 lg:mr-32 xl:mr-0"
              src="https://www.youtube.com/embed/ciYYBwdpGGI"
              title="SQUARE ENIX NEWS - UN BON MOIS DE NEWS ! -SEN#12"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            ></iframe>
            <div>
              <NextRelease />
            </div>
          </div>
        </div>
        <div className="grid w-full md:w-fit grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-2 mt-2 mx-auto xl:mx-0 lg:gap-x-[8.75rem] xl:gap-x-0">
          <div className="grid grid-cols-1">
            <CountdownRace />
            <NextVideos />
          </div>
        </div>
      </div>
      <div className="sticky bottom-0">
        <Footer />
      </div>
    </div>
  )
}

export default App
