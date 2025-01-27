import React from 'react';

function SuccessStories(){
    const url = process.env.REACT_APP_URL || "#";
    return(
    <section className="pt-5 " id="success-stories">
        <div className="container wow fadeInUp" data-wow-delay="0.1s">
          <div className="row">
            <div className="col-md-4">
              <div className="pt-md-5 pb-md-0 wow fadeInUp d-none d-lg-block" data-wow-delay="0.1s">
                <div className="display-2 text-red">OUR</div>
  
                <h2 className="display-4">SUCCESS<br/> STORIES</h2>
              </div>
              <div className="pt-md-5 pb-md-0 wow fadeInUp d-lg-none d-block" data-wow-delay="0.1s">
                <h2 className="title_01 text-red text-center">OUR <span className="text-dark"> SUCCESS STORIES</span></h2>
              </div>
            </div>
            <div className="col-md-8 owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
              <div className="row align-items-stretch">
                <div className="testimonial-item rounded align-items-stretch p-4 p-lg-5 mb-5">
                  <img className="mb-4" src={`${url}images/dypatil/testimonal/1.png`} alt=""/>
                  <h5>Dr.Kiran Gaikwad</h5>
                  <span className="">I feel extremely proud to be a student of the School of Public Health, D Y Patil Deemed
                    to be University, Navi Mumbai, for it is this institution which gave me a golden chance to pursue and
                    fulfill my long -cherished dream of becoming a Public Health specialist. </span>
                </div>
              </div>
              <div className="row align-items-stretch">
                <div className="testimonial-item rounded align-items-stretch p-4 p-lg-5 mb-5">
                  <img className="mb-4" src={`${url}images/dypatil/testimonal/2.png`} alt=""/>
                  <h5>Dr. Pooja Chavan Jangir</h5>
                  <span className="">My time at DYPU School of Public Health was a profound journey of growth and discovery.
                    The rigorous academic curriculum, coupled with hands-on field experiences, equipped me with invaluable
                    skills that seamlessly translated into my current job.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      );
}

export default SuccessStories;