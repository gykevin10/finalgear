import ImageComponent from "@/components/ImageComponent"

const releases = [
  {
    title: "FINAL FANTASY VII CRISIS CORE REUNION",
    date: "13/12/2022",
    support: "PS5/PS4/XBOXSERIES/XBOXONE/SWITCH/PC",
    site: "Site officiel",
    name: "crisiscore",
  },
  {
    title: "DISTANT WORLDS MUSIC FROM FINAL FANTASY CORAL",
    date: "25/02/2023",
    support: "LE GRAND REX",
    site: "Site officiel",
    name: "distantworld",
  },
  {
    title: "FINAL FANTASY XVI",
    date: "22/06/2023",
    support: "PS5",
    site: "Site Officiel",
    name: "ffxvi",
  },
]

const NextRelease = () => {
  return (
    <div className="flex rounded-lg justify-between md:w-[430px] mx-auto">
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-2 border-2 border-black bg-slate-600 rounded-lg w-36 md:w-[370px] mx-auto md:mx-0 lg:mr-32 xl:mr-0">
          <h1 className="m-1 border-2 border-black bg-indigo-600 rounded-lg text-white text-center font-bold italic">
            PROCHAINES SORTIES 🎮
          </h1>
          {releases.map((release, i) => (
            <div
              className="flex justify-between bg-gray-400 h-18 m-1 rounded-lg"
              key={i}
            >
              <div className="flex flex-col p-1">
                <h1 className="text-xs text-white font-bold">
                  {release.title}
                </h1>
                <p className="text-xs text-white">{release.date}</p>
                <p className="text-xs text-white">{release.support}</p>
                <a
                  href="https://fr.store.square-enix-games.com/crisis-core-_final-fantasy-vii_-reunion"
                  className="underline text-white"
                >
                  <p className="text-xs text-white">{release.site}</p>
                </a>
              </div>

              <ImageComponent
                className="flex ml-auto m-1 p-1 w-20 h-28"
                src={`/release/${release.name}cover.jpg`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NextRelease
