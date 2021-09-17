import styled from 'styled-components'
import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort'

export const Wrapper = styled.div``

export const ArrowLink = styled(ArrowRightShort)`
  left: 0px;
  position: relative;
  transition: left 0.5s;
`

export const CardLink = styled.a`
  &:hover {
    ${ArrowLink} {
      left: 5px;
    }
  }
`
