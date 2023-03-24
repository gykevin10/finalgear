import Header from "../components/Header"
import Footer from "../components/Footer"
import NextRelease from "@/components/NextRelease"
import NextVideos from "@/components/NextVideos"

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="sticky top-0">
        <Header />
      </div>

      <div className="grow flex justify-between p-1 gap-x-1">
        <div>
          <NextRelease />
        </div>
        <div>
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
