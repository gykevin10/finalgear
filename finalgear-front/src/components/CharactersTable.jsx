import ImageComponent from "@/components/ImageComponent"

const CharactersTable = () => {
  return (
    <div>
      <table className="w-full text-left m-1">
        <thead>
          <tr>
            <td></td>
            <td className="flex justify-start gap-3">
              <ImageComponent className="w-12" src="" />
            </td>
            <td>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, ipsum? Asperiores, laborum. Magni consequuntur
                adipisci sit quod qui molestias quos facere cupiditate ipsum.
              </p>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default CharactersTable
