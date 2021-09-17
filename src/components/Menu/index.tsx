import Link from 'next/link'
import * as S from './styles'

const Menu = () => (
  <S.Wrapper>
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand"></a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-bottom"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body bg-dark text-white">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/getServerSideProps">
                  <a className="nav-link">Get Server Side Props</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/getStaticProps">
                  <a className="nav-link">Get Static Props</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/getStaticProps-revalidate">
                  <a className="nav-link">Get Static Props Revalidate</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </S.Wrapper>
)

export default Menu
