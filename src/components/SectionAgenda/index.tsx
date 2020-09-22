import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { quoteSection } from 'types/api'

const SectionAgenda = ({ description, quote }: quoteSection) => (
  <Container id="agenda">
    <Heading reverseColor>{quote}</Heading>
    <S.Text dangerouslySetInnerHTML={{ __html: description }} />
  </Container>
)

export default SectionAgenda
