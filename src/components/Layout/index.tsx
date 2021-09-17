import { ReactNode } from 'react'
import * as S from './styles'

import Footer from '../Footer'
import Menu from 'components/Menu'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Menu />
    <S.Wrapper>{children}</S.Wrapper>
    <Footer />
  </>
)

export default Layout
