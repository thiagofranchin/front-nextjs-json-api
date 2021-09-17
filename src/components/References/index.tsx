import Section from 'components/Section'

import * as S from './styles'

type Props = {
  title?: string
  content?: string
  alignTitle?: string
  alignBody?: string
  bgSection?: string
  isFluid?: boolean
  paddingYSection?: number
  colorTitle?: string
  colorText?: string
}

const References = ({
  content,
  title,
  alignTitle,
  alignBody,
  bgSection,
  isFluid,
  paddingYSection,
  colorTitle,
  colorText
}: Props) => (
  <Section
    bgColor={bgSection}
    isFluid={isFluid}
    classSection={`py-${paddingYSection}`}
  >
    <div className="col-12">
      <S.H2 color={colorTitle} className={`text-${alignTitle}`}>
        {title}
      </S.H2>
      <S.Paragraph
        className={`text-${alignBody}`}
        color={colorText}
        dangerouslySetInnerHTML={{ __html: `${content}` }}
      />
    </div>
  </Section>
)

export default References
