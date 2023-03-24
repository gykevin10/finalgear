import Page from "@/components/Page"
import ImageComponent from "@/components/ImageComponent"

const finalfantasyii = () => {
  return (
    <Page>
      <div className="flex justify-center">
        <h1 className="font-bold italic mb-3">
          FINAL FANTASY II
          <ImageComponent
            className="w-36 item-center"
            src="/FFlogos/FF2article.png"
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
                      FINAL FANTASY II
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
                src="/FFlogos/FF2article.png"
              />
            </div>
          </div>
        </div>

        <div className="m-3 w-[435px]">
          <table className="flex flex-col border-2 border-black rounded-lg">
            <thead className="flex">
              <tr className="flex flex-col">
                <th className="bg-indigo-600 text-white italic">
                  WORLD FFII NAME
                </th>
                <td>
                  <div>
                    <ImageComponent
                      className="w-[435px] h-[300px]"
                      src="/WORLDMAP/WMFF2.webp"
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
              <td>Firion</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF2/Firion.png"
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
              <td>Maria</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF2/Maria.png"
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
              <td>Guy</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF2/Guy.png"
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
              <td>Leon</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF2/Leon.png"
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
              <td>Gareth</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF2/Firion.png"
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
              <td>Gordon</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF2/Gordon.png"
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
              <td>Joseph</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF2/Joseph.png"
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
              <td>Leila</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF2/Leila.png"
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
              <td>Minnwu</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF2/Minnwu.png"
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
              <td>Cid</td>
              <td className="flex justify-start gap-3">
                <ImageComponent className="w-12" src="/FFlogos/wol-rk.png" />
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
              <td>Paul</td>
              <td className="flex justify-start gap-3">
                <ImageComponent className="w-12" src="/FFlogos/wol-rk.png" />
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
              <td>Scott</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF2/Scott.png"
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

export default finalfantasyii
