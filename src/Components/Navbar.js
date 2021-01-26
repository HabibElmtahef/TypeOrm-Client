import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
 <nav className="navbar navbar-expand-lg navbar-light bg-light position-sticky">
  <div className="container">
    <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="https://www.flaticon.com/svg/static/icons/svg/720/720711.svg" alt="" width={35} height={30} className="d-inline-block align-top me-2" />
          <h5 style={{fontSize:"20px"}} >HbGames</h5>
          </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item " >
          <Link className="nav-link" to="/" ><i class="fas fa-gamepad"></i> Games</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" ><i class="fas fa-star"></i> Reviews</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" ><i class="fas fa-inbox"></i> Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/create"  ><i class="fas fa-plus-circle"></i> Add Game</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
        
    )
}

export default Navbar
