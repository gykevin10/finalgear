import Page from "../components/Page"

const letsplay = () => {
  return (
    <Page>
      <h1 className="font-bold text-2xl underline text-center">LET'S PLAY</h1>
      <div className="flex justify-center">
        <iframe
          className="rounded-xl"
          width="600"
          height="350"
          src="https://www.youtube.com/embed/h52kJFWIJ2M"
          title="Laissez moi vous parler du concert Distant Worlds final fantasy"
          frameborder="0"
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </Page>
  )
}

export default letsplay
