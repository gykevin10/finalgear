import Image from "../components/ImageComponent"
import Page from "../components/Page"

const theory = () => {
  return (
    <Page>
      <div className="flex justify-center">
        <div className="w-8">
          <Image src="/icons/chronos.jpg" />
        </div>
        <h1 className="font-bold text-2xl underline text-center">THEORIES</h1>
        <div className="w-8">
          <Image src="/images/icons/chronosl.jpeg" />
        </div>
      </div>

      <img
        className="w-full"
        src="https://p1.storage.canalblog.com/27/45/638881/46527761.png"
        alt="lifestream"
      />
    </Page>
  )
}

export default theory
