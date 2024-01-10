import React from 'react'
import {Link} from 'react-router-dom'

function NavContainer() {
  return <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid shadow">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to ='/all' className="nav-link active" aria-current="page" href="#">all</Link>
        </li>
        <li className="nav-item">
          <Link to ='/fullstack' className="nav-link" href="#">full stack development</Link>
        </li>
        <li className="nav-item">
          <Link to ='/datascience' className="nav-link" href="#">data science</Link>
        </li>
        <li className="nav-item">
          <Link to ='/cybersecurity' className="nav-link" href="#">cyber security</Link>
        </li>
        <li className="nav-item">
          <Link to ='/career' className="nav-link" href="#">career</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

}

export default NavContainer