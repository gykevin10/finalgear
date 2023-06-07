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

      <div className="p-1 m-1 grow flex justify-between">
        <div className="flex grid grid-cols-1 md:w-fit gap-2 mx-auto xl:mx-0">
          <iframe
            className="rounded-xl md:w-[400px] md:h-[200px]"
            src="https://www.youtube.com/embed/ciYYBwdpGGI"
            title="SQUARE ENIX NEWS - UN BON MOIS DE NEWS ! -SEN#12"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          ></iframe>
          <NextRelease />
        </div>
        <div className="grid grid-cols-1 md:w-fit gap-2 mx-auto xl:mx-0">
          <CountdownRace />
          <NextVideos />
        </div>
      </div>

      <div className="sticky bottom-0">
        <Footer />
      </div>
    </div>
  )
}

export default App
