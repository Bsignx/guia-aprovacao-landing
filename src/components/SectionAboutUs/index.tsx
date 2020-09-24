import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import content from './content'
import * as S from './styles'
import { Author } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionAboutUs = ({
  name,
  photo,
  role,
  socialLinks,
  title,
  description
}: Author) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      <ProfileCard
        name={name}
        role={role}
        alt={photo.alternativeText}
        image={photo.url}
        socialLinks={socialLinks}
        description={description}
      />
    </S.Content>
  </Container>
)

export default SectionAboutUs
