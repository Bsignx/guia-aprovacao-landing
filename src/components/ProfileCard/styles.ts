import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Card = styled.article`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.medium} ${theme.spacings.xlarge};
    text-align: center;
  `}
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.greaterThan('medium')`
    display: flex;
    gap: 10rem;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    img {
      width: 6.5rem;
      height: 6.5rem;
      border-radius: 100%;
      margin: auto;
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`

export const Name = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`

export const Role = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const SocialLinks = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Link = styled.li`
  ${({ theme }) => css`
    display: block;
    > a {
      padding: ${theme.spacings.xxsmall};
      color: ${theme.colors.texts};
    }

    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    color: ${theme.colors.texts};
  `}
  font-weight: 500;
  text-align: left;

  ${media.greaterThan('medium')`
    ${({ theme }) => css`
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.texts};
    `}
  `}
`
