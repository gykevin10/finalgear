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
                src="/icons/sephriuslogo.jpg"
              />
              Sephrius
            </td>
            <td className="md:w-2/3">
              SQUARE ENIX NEWS - LE FEU DE JUIN SEN#20
            </td>
            <td className="md:w-1/3">
              <ImageComponent
                className="w-full h-auto rounded-lg m-1"
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
            <td className="md:w-2/3">
              Final Fantasy XVI : L'Archiduché de Rosalia
            </td>
            <td className="md:w-1/3">
              <ImageComponent
                className="w-full h-auto rounded-lg m-1"
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
            <td className="md:w-2/3">
              Final Fantasy VIII #01: G-Forces et magies (Guide stratégique)
            </td>
            <td className="md:w-1/3">
              <ImageComponent
                className="w-full h-auto rounded-lg m-1"
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
