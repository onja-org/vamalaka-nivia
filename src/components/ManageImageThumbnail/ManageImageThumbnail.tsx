import React from 'react'
import { UserThumbnail } from '../UserThumbnail /UserThumbnail'
// import Star from '../ManageImageThumbnail/ManageImageThumbnail.stories'
import Star from '../../assests/star.svg'
export interface ManageImageThumbnailProps {
  alt?: string
  src: string
}

const ManageImageThumbnail: React.FC<ManageImageThumbnailProps> = ({
  alt = 'thumbnail',
  src,
}) => {
  const checkImage = src ? 'yes' : 'no'
  return (
    <>
      <UserThumbnail src={src} alt={alt}>
        icon={Star}
      </UserThumbnail>
      <p>{checkImage}</p>
    </>
  )
}

export default ManageImageThumbnail
