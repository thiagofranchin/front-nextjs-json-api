import Card from 'components/Card'
import Section from '../Section'

import cardRowApi from './content'

type Props = {
  isFluid?: boolean
  bgSection?: string
}

const CardRow = ({ isFluid, bgSection }: Props) => {
  return (
    <Section isFluid={isFluid} classSection="card-row py-5" bgColor={bgSection}>
      {cardRowApi.map(
        (
          { bgButton, textContent, title, urlImage, labelButton, arrowLink },
          index
        ) => (
          <>
            <div className="col-sm-6 col-lg-3" key={`card-${index}`}>
              <Card
                urlImage={urlImage}
                bgButton={bgButton}
                textContent={textContent}
                title={title}
                labelButton={labelButton}
                showArrowLink={arrowLink}
              />
            </div>
          </>
        )
      )}
    </Section>
  )
}

export default CardRow
