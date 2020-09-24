import React from 'react'

import {
  FaInstagram,
  FaEnvelope,
  FaFacebookF,
  FaWhatsapp
} from 'react-icons/fa'

import * as S from './styles'
import { getImageUrl } from 'utils/getImageUrl'

const icons = {
  Facebook: <FaFacebookF />,
  Instagram: <FaInstagram />,
  Whatsaap: <FaWhatsapp />,
  Email: <FaEnvelope />
}

type socialLinks = {
  title: string
  url: string
}

type Props = {
  name: string
  role: string
  image: string
  socialLinks: socialLinks[]
  description: string
  alt: string
}

const ProfileCard: React.FC<Props> = ({
  name,
  role,
  image,
  socialLinks,
  description,
  alt
}) => (
  <S.Card key={name}>
    <div>
      <S.Image src={`${getImageUrl(image)}`} alt={alt} />
      <S.Name>{name}</S.Name>
      <S.Role>{role}</S.Role>
      <S.SocialLinks>
        {socialLinks.map((item) => (
          <S.Link key={item.url}>
            <a href={item.url} title={item.title}>
              {icons[item.title]}
            </a>
          </S.Link>
        ))}
      </S.SocialLinks>
    </div>

    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
