import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import { sectionAboutPage } from 'types/api'

import * as S from './styles'
import { getImageUrl } from 'utils/getImageUrl'

const SectionAboutProject = ({
  title,
  description,
  image
}: sectionAboutPage) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        {image.map((item, index) => (
          <S.Image
            key={index}
            src={`${getImageUrl(item.url)}`}
            alt={item.alternativeText}
          />
        ))}
        <div>
          <Heading>{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
