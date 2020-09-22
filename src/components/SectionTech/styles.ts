import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.large};

    ${media.greaterThan('large')`
      flex-direction: row;
      padding: ${theme.spacings.xlarge} ${theme.spacings.medium} 0;
    `}
  `}
`

export const IconsContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    column-gap: ${theme.spacings.small};
    row-gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.large};

    ${media.greaterThan('small')`
      grid-template-columns: repeat(3, 1fr);
    `}

    ${media.greaterThan('medium')`
      column-gap: ${theme.spacings.xxlarge};
      row-gap: ${theme.spacings.large};
    `};
  `}
`

export const Benefit = styled.div``

export const Icons = styled.img`
  width: 7rem;
  height: 7rem;
  transition: all 0.4s;

  ${media.greaterThan('medium')`
    width: 10rem;
    height: 10rem;
  `}
`

export const IconsName = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin-top: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.xxsmall};
    font-weight: ${theme.font.bold};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`

export const IconsDescription = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
  `}
`
