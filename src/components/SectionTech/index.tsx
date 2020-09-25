import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import icons from './content'
import * as S from './styles'
import { sectionBenefits } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionTech = ({ benefits, title }: sectionBenefits) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {benefits.map(({ title, description, image }, index) => (
          <S.Benefit key={index}>
            <S.Icons
              src={getImageUrl(image.url)}
              alt={image.alternativeText}
              loading="lazy"
            />
            <S.IconsName>{title}</S.IconsName>
            <S.IconsDescription>{description}</S.IconsDescription>
          </S.Benefit>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
