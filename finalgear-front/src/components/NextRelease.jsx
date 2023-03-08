import ImageComponent from "@/components/ImageComponent"

const NextRelease = () => {
  return (
    <>
      <div className="rounded-lg border-2 border-black max-w-[560px] max-h-[450px]">
        <h1 className="text-black italic font-bold text-center underline">
          NEXT RELEASE
        </h1>

        <div className="flex flex-row justify-start">
          <div className="mr-2 ml-1 mb-1 ">
            <ImageComponent
              style={{ width: 110, height: 150 }}
              src="/release/ff7cc.jpg"
            />
          </div>
          <div className="flex flex-col mr-2">
            <h2>FINAL FANTASY VII CRISIS CORE REUNION</h2>
            <p>13/12/2022</p>
            <p className="text-xs">PS5/PS4/XBOXSERIES/XBOXONE/SWITCH/PC</p>
            <p>
              <a
                href="https://store.eu.square-enix-games.com/fr_FR/product/769892/crisis-core-final-fantasy-vii-reunion"
                className="underline"
              >
                Site officiel
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-start">
          <div className="mr-2 ml-1 mb-1">
            <ImageComponent
              style={{ width: 110, height: 150 }}
              src="/release/distantworld.jpg"
            />
          </div>
          <div className="flex flex-col mr-2">
            <h3>DISTANT WORLDS MUSIC FROM FINAL FANTASY CORAL</h3>
            <p>25/02/2023</p>
            <p className="text-xs">LE GRAND REX</p>
            <p>
              <a
                href="https://www.fnacspectacles.com/artist/distant-worlds/?gclsrc=aw.ds&kClkId=221123154712475327&kVsId=221123154712475035&gclid=CjwKCAiApvebBhAvEiwAe7mHSKlu5Q-XDq3Mb-qj-rpeo3ZuNv0za8g62mxe8uB0RVSM3hh3CAtodxoCiFwQAvD_BwE"
                className="underline"
              >
                Tickets
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default NextRelease
