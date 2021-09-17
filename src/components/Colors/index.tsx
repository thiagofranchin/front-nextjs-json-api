import Section from 'components/Section'
import * as S from './styles'

import colorTemplate from './content'

type Props = {
  classComponent?: string
}

const BoxColor = () => (
  <>
    {colorTemplate.map(({ hexaColor, nameColor, textColor }, index) => (
      <>
        <div
          key={`color-${index}`}
          className={`col-md-6 col-lg-2 p-5 text-center`}
          style={{ backgroundColor: hexaColor, color: textColor }}
        >
          {nameColor}
        </div>
      </>
    ))}
  </>
)

const Colors = ({ classComponent }: Props) => (
  <S.Wrapper className={`colors ${classComponent ? classComponent : ''}`}>
    <Section>
      <BoxColor />
    </Section>
  </S.Wrapper>
)

export default Colors
