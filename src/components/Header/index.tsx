import * as S from './styles'

const Header = ({ title = 'Title page' }) => (
  <S.Wrapper className="bg-secondary text-white py-5">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  </S.Wrapper>
)

export default Header
