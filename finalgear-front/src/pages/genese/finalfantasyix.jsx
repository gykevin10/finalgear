import Page from "@/components/Page"
import ImageComponent from "@/components/ImageComponent"

const finalfantasyix = () => {
  return (
    <Page>
      <div className="flex justify-center">
        <h1 className="font-bold italic mb-3">
          FINAL FANTASY IX
          <ImageComponent
            className="w-36 item-center"
            src="/FFlogos/ffix.png"
          />
        </h1>
      </div>

      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col m-3 max-w-[900px]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, ipsum? Asperiores, laborum. Magni consequuntur
            adipisci sit quod qui molestias quos facere cupiditate ipsum. Optio
            autem animi non! Quidem, aspernatur a?
          </p>
          <div className="flex flex-wrap m-3">
            <div className="w-[375px] border-2 border-black rounded-lg">
              <table className="flex flex-col">
                <thead className="flex flex-col">
                  <tr className="flex flex-col">
                    <th className="bg-indigo-600 text-white italic">
                      FINAL FANTASY IX
                    </th>
                  </tr>
                  <tr>
                    <th>Développeur : </th>
                    <td>SQUARE ENIX</td>
                  </tr>
                  <tr>
                    <th>Réalisateur : </th>
                    <td>Hironobu Sakaguchi</td>
                  </tr>
                  <tr>
                    <th>Scénariste : </th>
                    <td>Hironobu Sakaguchi</td>
                  </tr>
                  <tr>
                    <th>Compositeur : </th>
                    <td>Nobuo Uematsu</td>
                  </tr>
                  <tr>
                    <th>Producteur : </th>
                    <td>Masafumi Miyamoto</td>
                  </tr>
                  <tr>
                    <th>Date de sortie : </th>
                    <td>17/12/1988</td>
                  </tr>
                </thead>
              </table>
            </div>

            <div className="flex justify-end">
              <ImageComponent
                className="border-2 border-black rounded-lg w-[375px] h-[200px]"
                src="/FFlogos/FFIXLogo.png"
              />
            </div>
          </div>
        </div>

        <div className="m-3 w-[435px]">
          <table className="flex flex-col border-2 border-black rounded-lg">
            <thead className="flex">
              <tr className="flex flex-col">
                <th className="bg-indigo-600 text-white italic">HERA</th>
                <td>
                  <div>
                    <ImageComponent
                      className="w-[435px] h-[300px]"
                      src="/WORLDMAP/FFIXWP.jpg"
                    />
                  </div>
                </td>
              </tr>
            </thead>

            <tbody className="bg-indigo-600 text-white italic">
              <tr>
                <th className="pl-2">DONNÉES DE LA MAP</th>
              </tr>
            </tbody>

            <tfoot className="text-left p-1">
              <tr>
                <th>NOMBRE DE VILLES : </th>
                <td></td>
              </tr>
              <tr>
                <th>NOMBRE DE GROTTES : </th>
                <td></td>
              </tr>
              <tr>
                <th>NOMBRE DE DONJONS : </th>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div>
        <h2 className="p-2 text-2xl bg-indigo-600 text-white italic">
          - LES PERSONNAGES :
        </h2>
        <table className="w-full text-left m-1">
          <thead>
            <tr>
              <td>Djidane</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF9/Djidane.png"
                />
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
          <thead>
            <tr>
              <td>Grenat</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF9/Grenat.png"
                />
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
          <thead>
            <tr>
              <td>Bibi</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF9/bibi.png"
                />
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
          <thead>
            <tr>
              <td>Steiner</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF9/Steiner.png"
                />
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
          <thead>
            <tr>
              <td>Freyja</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF9/Freyja.png"
                />
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
          <thead>
            <tr>
              <td>Kweena</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF9/Kweena.png"
                />
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
          <thead>
            <tr>
              <td>Tarask</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF9/Tarask.png"
                />
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
          <thead>
            <tr>
              <td>Markus</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF9/Markus.png"
                />
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
          <thead>
            <tr>
              <td>Beatrix</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF9/Beatrix.png"
                />
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
          <thead>
            <tr>
              <td>Kuja</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF9/Kuja.png"
                />
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
    </Page>
  )
}

export default finalfantasyix
