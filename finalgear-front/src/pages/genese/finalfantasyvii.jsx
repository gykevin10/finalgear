import Page from "@/components/Page"
import ImageComponent from "@/components/ImageComponent"

const finalfantasyvii = () => {
  return (
    <Page>
      <div className="flex justify-center">
        <h1 className="font-bold italic mb-3">
          FINAL FANTASY VII
          <ImageComponent
            className="w-36 item-center"
            src="/FFlogos/ffvii.png"
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
                      FINAL FANTASY VII
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
                src="/FFlogos/ff7logo.png"
              />
            </div>
          </div>
        </div>

        <div className="m-3 w-[435px]">
          <table className="flex flex-col border-2 border-black rounded-lg">
            <thead className="flex">
              <tr className="flex flex-col">
                <th className="bg-indigo-600 text-white italic">GAIA</th>
                <td>
                  <div>
                    <ImageComponent
                      className="w-[435px] h-[300px]"
                      src="/WORLDMAP/FF7WP.jpg"
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
              <td>Cloud</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF7/Cloud.png"
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
              <td>Aerith</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF7/Aerith.png"
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
              <td>Barret</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF7/Barret.png"
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
              <td>Tifa</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF7/Tifa.png"
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
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF7/Cid.png"
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
              <td>Vincent</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF7/Vincent.png"
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
              <td>Yuffie</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF7/Yuffie.png"
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
              <td>Cait Sith</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF7/CaitSith.png"
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
              <td>RedXIII</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF7/RedXIII.png"
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
              <td>Sephiroth</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF7/Sephiroth.png"
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
              <td>Reno</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF7/Reno.png"
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
              <td>Rude</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF7/Rude.png"
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
              <td>Rufus</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF7/Rufus.png"
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
              <td>Shelk</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF7/Shelk.png"
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
              <td>Elena</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF7/Elena.png"
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
              <td>Genesis</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF7/Genesis.png"
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
              <td>Angeal</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF7/Angeal.png"
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
              <td>Zack</td>
              <td className="flex justify-start gap-3">
                <ImageComponent
                  className="w-12"
                  src="/FFRKSprite/FF7/Zack.png"
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

export default finalfantasyvii
