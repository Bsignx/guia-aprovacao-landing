import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { SectionFaq as SectionFaqProps } from 'types/api'

const SectionFaq = ({ title, questions }: SectionFaqProps) => (
  <S.Wrapper>
    <S.Content>
      <Container>
        <Heading>{title}</Heading>

        <S.Questions>
          {questions.map(({ question, answer }, index) => (
            <S.Question key={index}>
              <Heading lineBottom>{question}</Heading>
              <div dangerouslySetInnerHTML={{ __html: answer }} />
            </S.Question>
          ))}
        </S.Questions>

        <S.ExtraQuestion>
          <Heading lineBottom>Eu tenho outra dúvida!</Heading>
          <p>
            Sem problemas! Você pode acessar qualquer uma das minhas redes
            sociais ou entrar em contato pelo email.
          </p>
        </S.ExtraQuestion>
      </Container>
    </S.Content>
  </S.Wrapper>
)

export default SectionFaq
