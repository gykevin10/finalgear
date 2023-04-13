import Page from "@/components/Page"
import ImageComponent from "@/components/ImageComponent"

const finalfantasyix = () => {
  return (
    <Page>
      <ImageComponent className="w-screen h-80" src="/FFlogos/FFIXLogo.png" />

      <div className="flex justify-between">
        <div className="flex flex-col m-3 gap-x-1.5 max-w-[1000px]">
          <div className="flex border-2 border-black rounded-lg">
            <div className="flex">
              <iframe
                className="rounded-lg w-[300px] h-[460px]"
                src="https://www.youtube.com/embed/oOYyk8LWKg8"
                title="FINAL FANTASY IX : LE CRISTAL #1"
                frameborder="0"
                allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="w-[250px] h-[460px] flex flex-col">
              <p className="italic ml-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, ipsum? Asperiores, laborum. Magni consequuntur
                adipisci sit quod qui molestias quos facere cupiditate ipsum.
                Optio autem animi non! Quidem, aspernatur a?Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Perspiciatis, ipsum?
                Asperiores, laborum. Magni consequuntur adipisci sit quod qui
                molestias quos facere cupiditate ipsum. Asperiores, laborum.
                Magni consequuntur adipisci sit quod qui molestias quos facere
                cupiditate ipsum.Asperiores, laborum. Magni consequuntur
                adipisci.
              </p>
            </div>
          </div>
        </div>

        <div className="m-3 w-[420px]">
          <table className="flex flex-col border-2 border-black rounded-lg">
            <thead className="flex">
              <tr className="flex flex-col">
                <th className="bg-indigo-600 text-white italic">HERA</th>
                <td>
                  <div>
                    <ImageComponent
                      className="w-[420px] h-[300px]"
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

      <div className="flex flex-col items-end m-3">
        <div className="w-[420px] border-2 border-black rounded-lg ">
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
                <td>Hironobu Sakaguchi Shinji Hashimoto</td>
              </tr>
              <tr>
                <th>Date de sortie : </th>
                <td>07/07/2000</td>
              </tr>
            </thead>
          </table>
        </div>
        <div className="mt-8">
          <iframe
            className="rounded-lg border-2 border-black w-[420px] h-[250px]"
            src="https://www.youtube.com/embed/Y0_Rb8SdGcc?list=PLUiG5FHhZshPVEebxJ_nFppAZXDYgdLRs"
            title="LA GENÈSE DE FINAL FANTASY IX."
            frameborder="0"
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
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
