import ImageComponent from "@/components/ImageComponent"

const NextVideos = () => {
  return (
    <div className="mx-auto rounded-lg border-2 border-black bg-gray-400 text-white font-bold w-11/12 md:w-[560px] p-1 m-1">
      <h1 className="m-1 border-2 border-black bg-indigo-600 rounded-lg text-white text-center font-bold italic">
        PROCHAINES VIDEOS 🔥
      </h1>
      <table className="w-full text-center">
        <thead>
          <tr className="border-b-2">
            <td className="flex gap-1">
              <ImageComponent
                className="w-9 m-1"
                src="/icons/finalgearlogo.jpg"
              />
              FINAL GEAR
            </td>
            <td>LA GENÈSE DE FINAL FANTASY VII #2 | LA GUERRE DU WUTAI</td>
            <td>
              <ImageComponent
                className="w-[200px] h-[50px] rounded-lg m-1"
                src="/FFlogos/ffviitest.png"
              />
            </td>
          </tr>

          <tr className="border-b-2">
            <td className="flex gap-1">
              <ImageComponent
                className="w-9 m-1"
                src="/icons/sephriuslogo.jpg"
              />
              Sephrius
            </td>
            <td>SQUARE ENIX NEWS - LE FEU DE JUIN SEN#20</td>
            <td>
              <ImageComponent
                className="w-[200px] h-[50px] rounded-lg m-1"
                src="/FFlogos/SE.jpg"
              />
            </td>
          </tr>

          <tr className="border-b-2">
            <td className="flex gap-1">
              <ImageComponent
                className="w-9 m-1"
                src="/icons/corsimanialogo.jpg"
              />
              CORSIMANIA
            </td>
            <td>Final Fantasy XVI : L'Archiduché de Rosalia</td>
            <td>
              <ImageComponent
                className="w-[200px] h-[50px] rounded-lg m-1"
                src="/FFlogos/ffxvilogo.webp"
              />
            </td>
          </tr>

          <tr className="border-b-2">
            <td className="flex gap-1">
              <ImageComponent
                className="w-9 m-1"
                src="/icons/chocoboinspace.jpg"
              />
              Chocobos in Space
            </td>
            <td>
              Final Fantasy VIII #01: G-Forces et magies (Guide stratégique)
            </td>
            <td>
              <ImageComponent
                className="w-[200px] h-[50px] rounded-lg m-1"
                src="/FFlogos/ff8test.png"
              />
            </td>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default NextVideos
