import Page from "../components/Page"
import ImageComponent from "../components/ImageComponent"

const theory = () => {
  return (
    <Page>
      <div className="h-screen bg-cover bg-no-repeat bg-center bg-[url('/background/crisiscorereunion.png')]">
        <div className="flex justify-center p-2">
          <ImageComponent className="w-8" src="/icons/chronos.jpg" />
          <h1 className="font-bold text-2xl underline text-center">
            THEORIES👀
          </h1>
          <ImageComponent className="w-8" src="/icons/chronosl.jpeg" />
        </div>
      </div>
    </Page>
  )
}

export default theory
