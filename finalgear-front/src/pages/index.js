import Header from "../components/Header"
import Footer from "../components/Footer"
import NextRelease from "@/components/NextRelease"

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="sticky top-0">
        <Header />
      </div>
      <div className="grow">
        <NextRelease />
      </div>

      <div className="sticky bottom-0">
        <Footer />
      </div>
    </div>
  )
}

export default App
