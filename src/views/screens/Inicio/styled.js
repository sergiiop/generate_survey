import styled from 'styled-components'

export const MainContainer = styled.section`
  display: grid;
  place-content: center;
  min-height: 90vh;
  @media (min-width: 50em) {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
  }
`

export const Title = styled.h1`
  font-size: 4rem;
`

export const HeroImg = styled.div``
