import React from 'react';

function Header(){
    const url = process.env.REACT_APP_URL || "#";
    return(
    <div className="container-fluid h_nav sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg  navbar-light">
            <a href="" className="navbar-brand">
              <img src={`${url}images/dypatil/logo/3.webp`} className="hero_logo_01" loading="lazy" alt=""/>
              <img src={`${url}images/dypatil/logo/naac.webp`} className="hero_logo_02" loading="lazy" alt=""/>
            </a>
            <a href="" className="btn c_btn fw-normal btn_font d-lg-none" data-bs-toggle="modal"
              data-bs-target="#exampleModal">Enquire Now</a>
            <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center align-items-center" id="navbarCollapse">
              <div className="navbar-nav">
                {/* <!-- <a href="" className="nav-item nav-link active">Home </a> --> */}
                <a href="#programs" className="nav-item nav-link">Programs</a>
                <a href="#why-choose-us" className="nav-item nav-link">Why Choose Us </a>
                <a href="#recruiters" className="nav-item nav-link ">Recruiters</a>
                <a href="#about-us" className="nav-item nav-link active">About Us </a>
                <a href="#success-stories" className="nav-item nav-link ">Success Stories</a>
                <a href="#campuslife" className="nav-item nav-link">Life@ D Y Patil</a>
              </div>
            </div>
            <div className="d-lg-block d-none">
              <a href="" className="btn c_btn py-2 px-3 cta-rt" data-bs-toggle="modal" data-bs-target="#exampleModal">Enquire
                Now</a>
            </div>
          </nav>
        </div>
      </div>
      );
}

export default Header;