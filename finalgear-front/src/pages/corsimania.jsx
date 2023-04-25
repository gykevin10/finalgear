import Page from "../components/Page"

const corcimania = () => {
  return (
    <Page>
      <div className="h-screen w-screen bg-cover bg-no-repeat bg-center bg-[url('/background/FFXVI2.jpeg')]">
        <h1 className="font-bold text-2xl underline text-center">
          LES DOSSIERS DE CORCICASSE
        </h1>
        <p className="font-bold text-3xl text-yellow-600 text-center">
          CORSIMANIA
        </p>
        <iframe
          className="rounded-lg"
          width="350"
          height="200"
          src="https://www.youtube.com/embed/6MRczHmvcJE"
          title="Final Fantasy XVI : L&#39;Archiduché de Rosalia"
          frameborder="0"
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <ul className="underline">
          <li>
            <a href="https://onedrive.live.com/?authkey=%21AEKHA5FjKN6yqeI&cid=32B85494EB73232C&id=32B85494EB73232C%214389&parId=32B85494EB73232C%213965&o=OneUp">
              FINAL FANTASY VII RE
            </a>
          </li>

          <li>
            <a href="https://fr.finalfantasyxvi.com/">FINAL FANTASY XVI</a>
          </li>
        </ul>
      </div>
    </Page>
  )
}

export default corcimania
