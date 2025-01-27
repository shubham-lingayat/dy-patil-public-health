import React from 'react';

function Footer(){
    const url = process.env.REACT_APP_URL || "#";
    return(
        <div>
            <footer>
                {/* <!-- Copyright Start --> */}
                <div className="container-fluid copyright py-4 mb-4 mb-md-0">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                        <div className="d-flex justify-content-center align-items-center py-3">
                            <img src={`${url}images/dypatil/logo/4.webp`} className="hero_logo_01" loading="lazy" alt=""/>
                            <div className="footerImgDivider"></div>
                            <img src={`${url}images/dypatil/logo/naac-footer.webp`} className="footer_logo_02" loading="lazy" alt=""/>
                        </div>
                        {/* <!-- <div className="py-2">
                                    <p className="textBrown1">Address:</p>
                                    <p>DY Patil University Sector 7. Nerul, Mumbai -400706. INDIA</p>
                                </div> --> */}
                        <div className="footerDivider"></div>
                        <span className=" text-light">© Copyright 2025 | D Y Patil University, Navi Mumbai. | Designed and developed
                            by
                            <img src={`${url}images/dypatil/logo/gladowl_logo.webp`} height="20" width="auto" loading="lazy" alt=""/></span>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
            {/* <!-- Back to Top --> */}
            <a href="#" className="btn btn-lg bg-dark text-white btn-lg-square rounded-circle back-to-top">
                <i className="bi bi-arrow-up"></i>
            </a>
            <a href="#programs" className="btn c_btn rounded-pill px-4 left_button bg-red">Programs</a>
            <button type="button" className="btn c_btn px-4 right_button bg-red" data-bs-toggle="modal"
            data-bs-target="#exampleModal">Apply Now</button>
        </div>
    );
}
export default Footer;