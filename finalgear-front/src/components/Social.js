import Image from "./ImageComponent"

const Social = () => {
  return (
    <>
      <div className="w-28 flex gap-2">
        <a href="https://www.youtube.com/channel/UCqzFLIz_Pkj864Y0MWC2amw/featured">
          <Image src="/icons/youtube.png" />
        </a>
        <a href="https://www.facebook.com/kal.gear.5/">
          <Image src="/icons/facebook.png" />
        </a>
        <a href="https://twitter.com/Kal36616414">
          <Image src="/icons/twitter.png" />
        </a>
        <a href="https://www.twitch.tv/finalgearx">
          <Image src="/icons/twitch.png" />
        </a>
        <a href="https://discord.com/invite/8GpBTD9q6y">
          <Image src="/icons/discord.png" />
        </a>
      </div>
    </>
  )
}

export default Social
