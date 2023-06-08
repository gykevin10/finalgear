import NextRelease from "@/components/NextRelease"
import NextVideos from "@/components/NextVideos"
import CountdownRace from "@/components/CoutdownGame"
import Page from "@/components/Page"

const App = () => {
  return (
    <Page>
      <div className="flex justify-between m-1 bg-cover bg-no-repeat bg-center bg-[url('/background/joshua.jpeg')]">
        <div className="flex flex-col">
          <iframe
            className="rounded-xl md:w-[370px] md:h-[180px]"
            src="https://www.youtube.com/embed/ciYYBwdpGGI"
            title="SQUARE ENIX NEWS - UN BON MOIS DE NEWS ! -SEN#12"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          ></iframe>
          <NextRelease />
        </div>
        <div className="grid grid-cols-1 gap-2 mt-2 mx-auto md:w-fit xl:mx-0 lg:gap-x-[8.75rem] xl:gap-x-0">
          <CountdownRace />
          <NextVideos />
        </div>
      </div>
    </Page>
  )
}

export default App
