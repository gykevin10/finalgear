import ImageComponent from "@/components/ImageComponent"
import api from "@/services/api"
import { useEffect, useState } from "react"

const AvatarSettingComponent = (props) => {
  const { userId } = props
  const [avatar, setAvatar] = useState(null)

  useEffect(() => {
    ;(async () => {
      const { data: result } = await api.get(`/user-avatar/${userId}`)

      setAvatar(result[0])
    })()
  }, [userId])

  return (
    <>
      <div>Avatar : </div>
      {avatar ? (
        <ImageComponent
          src={`/DFFOO/${avatar.avatarFolder}/${avatar.avatarPerso}.jpg`}
          alt="avatar"
          className="w-20 mb-2"
        />
      ) : (
        ""
      )}
      <button className="bg-white rounded text-black px-3 py-2 font-bold text-xs mb-1">
        Change Avatar
      </button>
    </>
  )
}

export default AvatarSettingComponent
