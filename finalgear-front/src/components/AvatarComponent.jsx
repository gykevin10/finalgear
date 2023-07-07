import ImageComponent from "@/components/ImageComponent"
import api from "@/services/api"
import { useEffect, useState } from "react"

const AvatarComponent = (props) => {
  const { userId } = props
  const [avatar, setAvatar] = useState(null)

  useEffect(() => {
    ;(async () => {
      const { data: result } = await api.get(`/user-avatar/${userId}`)

      setAvatar(result[0])
    })()
  }, [userId])

  return (
    <div>
      {avatar ? (
        <ImageComponent
          src={`/DFFOO/${avatar.avatarFolder}/${avatar.avatarPerso}.jpg`}
          alt="#"
          className="w-8 mr-3"
        />
      ) : (
        ""
      )}
    </div>
  )
}

export default AvatarComponent
