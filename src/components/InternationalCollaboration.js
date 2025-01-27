import React from 'react';

function InternationalCollaboration(){
    const url = process.env.REACT_APP_URL || "#";
    return(<section>
        <div className="container bg-white rounded-3 pb-5 " id="">
          <div className="row  justify-content-center">
            <div className="col-lg-9 text-center">
              <img src={`${url}images/dypatil/heading/1.png`} height="30px" alt=""/>
              <h2 className="title_01 text-center">International Collaboration</h2>
            </div>
          </div>
          <div
            className="row placement_01 ms-1 me-2 mx-lg-auto py-lg-2 owl-carousel justify-content-center text-center border">
            <div className=" company_01 border-end ">
              <img src={`${url}images/dypatil/placement/international/1.png`} loading="lazy" className="px-3"
                alt="International Collaboration"/>
            </div>
            <div className=" company_01 border-end ">
              <img src={`${url}images/dypatil/placement/international/2.png`} loading="lazy" className="px-3"
                alt="International Collaboration"/>
            </div>
            <div className=" company_01 border-end ">
              <img src={`${url}images/dypatil/placement/international/3.png`} loading="lazy" className="px-3"
                alt="International Collaboration"/>
            </div>
            <div className=" company_01 border-end ">
              <img src={`${url}images/dypatil/placement/international/4.png`} loading="lazy" className="px-3"
                alt="International Collaboration"/>
            </div>
            <div className=" company_01 border-end ">
              <img src={`${url}images/dypatil/placement/international/5.png`} loading="lazy" className="px-3"
                alt="International Collaboration"/>
            </div>
            <div className=" company_01 border-end ">
              <img src={`${url}images/dypatil/placement/international/6.png`} loading="lazy" className="px-3"
                alt="International Collaboration"/>
            </div>
            <div className=" company_01 border-end ">
              <img src={`${url}images/dypatil/placement/international/7.png`} loading="lazy" className="px-3"
                alt="International Collaboration"/>
            </div>
            <div className=" company_01 border-end ">
              <img src={`${url}images/dypatil/placement/international/8.png`} loading="lazy" className="px-3"
                alt="International Collaboration"/>
            </div>
            <div className=" company_01 border-end ">
              <img src={`${url}images/dypatil/placement/international/9.png`} loading="lazy" className="px-3"
                alt="International Collaboration"/>
            </div>
            <div className=" company_01 border-end ">
              <img src={`${url}images/dypatil/placement/international/10.png`} loading="lazy" className="px-3"
                alt="International Collaboration"/>
            </div>
            <div className=" company_01 border-end ">
              <img src={`${url}images/dypatil/placement/international/11.png`} loading="lazy" className="px-3"
                alt="International Collaboration"/>
            </div>
          </div>
        </div>
      </section>);
}
export default InternationalCollaboration;