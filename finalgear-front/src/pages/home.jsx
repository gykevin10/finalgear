import Header from "../components/Header"
import Footer from "../components/Footer"

const home = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="sticky top-0">
        <Header />
      </div>
      <div className="grow"></div>

      <div className="sticky bottom-0">
        <Footer />
      </div>
    </div>
  )
}

export default home
