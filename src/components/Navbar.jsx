
export default function Navbar({ mode, handleSwitch, alertMessage, themeColor, handleThemeChange }) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`} >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">TextUtils</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
            </ul>
            <div className={`form-check form-switch mx-1 text-${mode == "light" ? "dark" : "light"}`}>
              <input className="form-check-input" type="checkbox" onClick={handleSwitch} role="switch" id="switchCheckDefault" />
              <label className="form-check-label" htmlFor="switchCheckDefault" style={mode == "dark" ? { display: "none" } : null} >Dark Mode</label>
            </div>
            <div style={mode == "light" ? { display: "none" } : null}>
              <select id="themeSelect" className='form-select-sm bg-secondary' onChange={e => handleThemeChange(e.target.value)}>

                <option value="primary">Dark-Blue</option>
                <option value="success">Dark-Green</option>
                <option value="danger">Dark-Red</option>
              </select>

            </div>


            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-danger" type="submit">Search</button>
            </form> */}
          </div>

        </div>
      </nav>

    </div>
  )
}




