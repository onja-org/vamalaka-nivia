import React from 'react'
import Styled from 'styled-components'

const UserImage = Styled.img` 
   width: 226px;
   height : 226px;
   border-radius: 30px;
   border: none;
   `
export interface UserThumbnailProps {
  src?: string
  alt: string
}

export const UserThumbnail: React.FC<UserThumbnailProps> = ({ src, alt }) => {
  return <UserImage src={src} alt={alt} />
}
