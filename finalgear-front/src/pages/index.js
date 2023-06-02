import Header from "../components/Header"
import Footer from "../components/Footer"
import NextRelease from "@/components/NextRelease"
import NextVideos from "@/components/NextVideos"
import CountdownRace from "@/components/CoutdownGame"

const App = () => {
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
      name: "Final Gear",
      date: "07 July 2023",
    },
  ]

  // const releases = [
  //   {
  //     title: "FINAL FANTASY VII CRISIS CORE REUNION",
  //     date: "13/12/2022",
  //     support: "PS5/PS4/XBOXSERIES/XBOXONE/SWITCH/PC",
  //     site: "Site officiel",
  //   },
  //   {
  //     title: "DISTANT WORLDS MUSIC FROM FINAL FANTASY CORAL",
  //     date: "25/02/2023",
  //     support: "LE GRAND REX",
  //     site: "Site officiel",
  //   },
  //   {
  //     title: "FINAL FANTASY XVI",
  //     date: "22/06/2023",
  //     support: "PS5",
  //     site: "Site officiel",
  //   },
  // ]

  return (
    <div className="flex flex-col h-screen">
      <div className="sticky top-0">
        <Header />
      </div>
      <div className="grow flex justify-between p-1 gap-x-1">
        <div className="flex md:flex-row gap-3">
          <iframe
            className="rounded-xl w-11/12 md:w-[370px] mx-auto md:mx-0 lg:mr-32 xl:mr-0"
            src="https://www.youtube.com/embed/ciYYBwdpGGI"
            title="SQUARE ENIX NEWS - UN BON MOIS DE NEWS ! -SEN#12"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          ></iframe>
        </div>
        <div>
          <NextRelease />
        </div>
        <div className="grid w-full md:w-fit grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-2 mt-2 mx-auto xl:mx-0 lg:gap-x-[8.75rem] xl:gap-x-0">
          <div className="grid grid-cols-1">
            <CountdownRace />
            <div className="flex flex-col gap-2 border-2 border-black bg-slate-600 rounded-lg h-[360px]">
              <h1 className="m-1 border-2 border-black bg-indigo-600 rounded-lg text-white text-center font-bold italic">
                PROCHAINES VIDEOS 🔥
              </h1>
              {videos.map((video, i) => (
                <NextVideos key={i} video={video} />
              ))}
            </div>
          </div>
          {/* <ConstructorsHome /> */}
        </div>
      </div>
      <div className="sticky bottom-0">
        <Footer />
      </div>
    </div>
  )
}

export default App
