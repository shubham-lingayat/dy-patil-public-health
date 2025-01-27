import React from 'react';

function Hero(){
    const url = process.env.REACT_APP_URL || "#";
    return(
        <div>
            <section className="container-fluid position-relative pt_001 d-lg-block px-0 d-none hero_section text-center"
                data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="container ">
                    <div className="row pe-lg-0">
                    <div className="col-lg-8">
                        <div className="position-relative">
                        <img src={`${url}images/dypatil/hero/1.png`} className="w-100 rounded-3 border video_height" alt=""/>
                        </div>

                    </div>
                    <div className="col-lg-4 pb-3 pb-lg-0">
                        <div className="border rounded-3 text-center pt-3">
                        <div className="about_logo d-none">
                            <img src={`${url}images/dypatil/logo/3.webp`} height="50" loading="lazy" alt=""/>
                            <img src={`${url}images/dypatil/logo/3.webp`} height="50" loading="lazy" alt=""/>
                            <img src={`${url}images/dypatil/logo/naac.webp`} height="15" loading="lazy" alt=""/>
                        </div>
                        <h6 className=" mt-2 py-1">Admissions Open 2025</h6>
                        <iframe aria-label='DY PATIL NAVI MUMBAI 2025 - Public Health' frameborder="0" className="zoho_form"
                            src='https://forms.zohopublic.in/gladowlwebsolutionspvtltd/form/DYPATILNAVIMUMBAI2025PublicHealth/formperma/UJUsLQSjB90cQCfOhyAYojtaVxecxURtZvczgZZpFaM'></iframe>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
                {/* ***************************************** */}
            <section className=" d-lg-none d-block position-relative hero_section" data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            <div className="container">
                <div className="row ">
                <div className="position-relative">
                    <img src={`${url}images/dypatil/hero/1.png`} className="w-100 rounded-3 border video_height" alt=""/>

                </div>
                </div>
            </div>
            </section>
        </div>
    );
}
export default Hero;