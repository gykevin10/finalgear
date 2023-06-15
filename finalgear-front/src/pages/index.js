import NextRelease from "@/components/NextRelease"
import NextVideos from "@/components/NextVideos"
import CountdownGame from "@/components/CoutdownGame"
import Page from "@/components/Page"

const App = () => {
  return (
    <Page>
      <div className="flex flex-col md:flex-row justify-between bg-cover bg-no-repeat bg-center bg-[url('/background/jill.jpeg')]">
        <div className="m-1 flex flex-col gap-2">
          <iframe
            className="rounded-xl md:w-[370px] md:h-[180px]"
            src="https://www.youtube.com/embed/ciYYBwdpGGI"
            title="SQUARE ENIX NEWS - UN BON MOIS DE NEWS ! -SEN#12"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          ></iframe>
          <NextRelease />
        </div>
        <div className="m-1 flex flex-col gap-2">
          <CountdownGame />
          <NextVideos />
        </div>
      </div>
    </Page>
  )
}

export default App
