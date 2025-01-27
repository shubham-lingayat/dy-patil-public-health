import React from 'react';

function WhyChooseUs2(){
    const url = process.env.REACT_APP_URL || "#";
    return(<section className="why_dy_02" data-bgimg="images/dypatil/banners/bg_01.jpg">
        <div className="container rounded-3 py-5">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              <h2 className="title_01 text-white text-center">Why Choose D Y Patil University?</h2>
            </div>
          </div>
          <div className="row placement_01 py-lg-2 owl-carousel justify-content-center text-center align-items-stretch">
            <div className="company_01 p-2 d-flex align-items-stretch">
              <div className="bg-white p-2 d-flex flex-column justify-content-center">
                <img src={`${url}images/dypatil/awards/1.webp`} loading="lazy" className="px-3" alt="Placement Companies"/>
                <hr/>
                <p>NAAC A++ Accredited University</p>
              </div>
            </div>
            <div className="company_01 p-2 d-flex align-items-stretch">
              <div className="bg-white p-2 d-flex flex-column justify-content-center">
                <img src={`${url}images/dypatil/awards/2.webp`} loading="lazy" className="px-3" alt="Placement Companies"/>
                <hr/>
                <p>QS International Trade Ranking (2023): #121-130 globally!</p>
              </div>
            </div>
            <div className="company_01 p-2 d-flex align-items-stretch">
              <div className="bg-white p-2 d-flex flex-column justify-content-center">
                <img src={`${url}images/dypatil/awards/3.webp`} loading="lazy" className="px-3" alt="Placement Companies"/>
                <hr/>
                <p>UGC Recognized</p>
              </div>
            </div>
            <div className="company_01 p-2 d-flex align-items-stretch">
              <div className="bg-white p-2 d-flex flex-column justify-content-center">
                <img src={`${url}images/dypatil/awards/4.webp`} loading="lazy" className="px-3" alt="Placement Companies"/>
                <hr/>
                <p>AICTE Approved</p>
              </div>
            </div>
            <div className="company_01 p-2 d-flex align-items-stretch">
              <div className="bg-white p-2 d-flex flex-column justify-content-center">
                <img src={`${url}images/dypatil/awards/5.webp`} loading="lazy" className="px-3" alt="Placement Companies"/>
                <hr/>
                <p>Ranked Amongst Top 100 Universities in India by NIRF</p>
              </div>
            </div>
            <div className="company_01 p-2 d-flex align-items-stretch">
              <div className="bg-white p-2 d-flex flex-column justify-content-center">
                <img src={`${url}images/dypatil/awards/6.webp`} loading="lazy" className="px-3" alt="Placement Companies"/>
                <hr/>
                <p>1st Rank in India by GHRDC</p>
              </div>
            </div>
            <div className="company_01 p-2 d-flex align-items-stretch">
              <div className="bg-white p-2 d-flex flex-column justify-content-center">
                <img src={`${url}images/dypatil/awards/7.webp`} loading="lazy" className="px-3" alt="Placement Companies"/>
                <hr/>
                <p>Recognised as Category 1 University by MHRD</p>
              </div>
            </div>
          </div>
        </div>
      </section>);
    
}
export default WhyChooseUs2;