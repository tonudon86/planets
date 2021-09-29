import React from 'react'

function Hadmin() {
  const logout= ()=>{
    localStorage.clear()
    window.location="/login";
  }
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" >Admin Dashbord</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" target="_blank" href="/admin">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link " tabindex="-1"   href="/admin-customization">create your startmap</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link " tabindex="-1"  target="_blank"  href="https://heavens-above.com/skychart2.aspx">create your startmap</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " tabindex="-1"  target="_blank"  href="https://cloudconvert.com/pdf-to-svg">PDF to SVG Converter</a>
        </li>

      </ul>
      <div className="d-flex">
      <button onClick={logout} className="btn btn-danger "> Log out</button>
  
      </div>
    </div>
  </div>
</nav>

    
 




        </div>
    )
}

export default Hadmin
