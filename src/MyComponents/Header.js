import React from 'react'
import PropTypes from 'prop-types';
import logo from '../MyComponents/1.jpg';
import { Link } from 'react-router-dom';
 
const propTypes={
    home:PropTypes.bool,
    work:PropTypes.bool,
    contact:PropTypes.bool,
    account:PropTypes.bool
};
const defaultProps = {
    home:false,
    work:false,
    contact:false,
    account:false
};

function Header(props) {
    return (
        <div   >
     <nav className="navbar navbar-expand-lg navbar-dark"   >
        <div className="container-fluid">
          <Link className="navbar-brand manish2" to="/"> <img  src="/img/navlogo.svg" alt=""/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 manish">
              <li className="nav-item">
                {props.home ?  <Link  className="nav-link active" aria-current="page" to="/">HOME</Link> : <Link  className="nav-link" aria-current="page" to="/">HOME</Link> }   
              </li>
              <li className="nav-item">
                  {props.work?  <Link className="nav-link active" to="/work">HOW IT WORKS</Link> :  <Link className="nav-link" to="/work">HOW IT WORKS</Link> }
               
              </li>
              <li className="nav-item">
               {props.contact?  <Link className="nav-link active" to="/contact">CONTACT</Link>: <Link className="nav-link" to="/contact">CONTACT</Link>}
              </li>
              {/* <li className="nav-item">
              {props.account?  <Link className="nav-link active" to="/login">MY ACCOUNT</Link>:   <Link className="nav-link" to="/login">MY ACCOUNT</Link>}
              </li> */}
              {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
              </li> */}
            </ul>
      
          </div>
        </div>
      </nav>
        </div>
    )
}
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;
