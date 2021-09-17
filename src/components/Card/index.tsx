import * as S from './styles'

type Props = {
  bgButton?: string
  classComponent?: string
  labelButton?: string
  showArrowLink?: boolean
  textContent?: string
  title?: string
  urlImage?: string
}

const Card = ({
  bgButton,
  classComponent,
  labelButton,
  showArrowLink,
  textContent,
  title,
  urlImage
}: Props) => (
  <>
    <S.Wrapper className={`card mb-4 ${classComponent ? classComponent : ''}`}>
      {urlImage && (
        <img src={urlImage} className="card-img-top" alt="Image Card" />
      )}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{textContent}</p>

        {(showArrowLink || labelButton) && (
          <S.CardLink href="#" className={`btn btn-${bgButton}`}>
            {labelButton}
            {showArrowLink && <S.ArrowLink width="25" />}
          </S.CardLink>
        )}
      </div>
    </S.Wrapper>
  </>
)

export default Card
