import React, {useEffect} from "react";
import Gallery from "../components/Gallery";
import Recruiters from "../components/Recruiters";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Programs from "../components/Programs";
import WhyChooseUs from "../components/WhyChooseUs";
import JobProfile from "../components/JobProfile";
import AdvisoryMembers from "../components/AdvisoryMembers";
import Footer from "../components/Footer";
import InternationalCollaboration from "../components/InternationalCollaboration";
import WhyChooseUs2 from "../components/WhyChooseUs2";
import SuccessStories from "../components/SuccessStories";

function Home() {
  const url = process.env.REACT_APP_URL || "#";

  // For Background Image
  useEffect(() => {
    document.querySelectorAll('[data-bgimg]').forEach((element) => {
      const bgImage = element.getAttribute('data-bgimg');
      if (bgImage) {
        element.style.backgroundImage = `url(${bgImage})`;
      }
    });
  }, []);

  
  return (
    <div>
      <Header/>
      <Hero/>
      <Programs/>
      <WhyChooseUs/>
      <Recruiters/>
      {/* About Us */}
      <section className="bg-white pt-lg-5 pt-2 ">
        <div className="container" id="about-us">
          <div className="row justify-content-center justify-content-centers">
            <div className="col-lg-12  text-center ">
              <h2 className="title_01   mb-3">About School of Public Health</h2>
            </div>
            <p className="pt-lg-3  pe-lg-3" align="justify">The DYPU School of Public Health was established in the year 2021
              with the vision of protecting and promoting population health through quality education, impactful research,
              and meaningful community engagement. Nestled within the sprawling and picturesque campus, of D Y Patil
              deemed
              to be University in Navi Mumbai, this school is a symbol of excellence that imparts skills and competencies
              to its students to handle real-life challenges in public health. At DYPU School Of Public Health, students
              have the freedom to explore their intellectual curiosity in a collaborative community of peers and learn
              from the world’s leading public health faculty. They learn to bring bold ideas to fruition, while deepening
              analytical thinking and sharpening problem-solving skills.</p>
  
            <div className="col-lg-12 pb-3 pb-lg-0">
  
              <video id="myVideo" className="w-100 rounded-3 border video_height" width="320" height="240" controls autoplay
                muted loop>
                <source src="../src/images/dypatil/about/1.mp4" type="video/mp4"/>
              </video>
  
            </div>
          </div>
        </div>
      </section>

      <JobProfile/>
      <AdvisoryMembers/>
      {/* Internship opportunity */}
      <section className="bg-white py-lg-4 pt_001 d-none">
        <div className="container" id="internship">
          <div className="row justify-content-center">
            <div className="col-lg-9  text-center pb-4 pb-lg-0">
              <h2 className="title_01   mb-2">Internship Opportunity</h2>
  
              <p className="pt-lg-3  pe-lg-3" align="center">The internship programs offered by D Y Patil School of
                Law are designed to bridge the gap between theoretical knowledge and practical application,
                allowing students to develop essential skills and gain exposure to the legal profession.</p>
            </div>
          </div>
          <div className="row inrernshipdiv p-4">
            <div className="col-lg-3">
              <div className="internship-box side-by-side internship-devider internmg">
                <img src={`${url}images/dypatil/internship/1.png`} height="70px" alt=""/>
                <h2>Law firms</h2>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="internship-box side-by-side internship-devider internmg">
                <img src={`${url}images/dypatil/internship/2.png`} height="70px" alt=""/>
                <h2>Corporate legal departments</h2>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="internship-box side-by-side internship-devider internmg">
                <img src={`${url}images/dypatil/internship/3.png`} height="70px" alt=""/>
                <h2>Non-profit organizations</h2>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="internship-box side-by-side internmg">
                <img src={`${url}images/dypatil/internship/4.png`} height="70px" alt=""/>
                <h2>Government agencies</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InternationalCollaboration/>
      <WhyChooseUs2/>
      <SuccessStories/>
      <Gallery/>
      {/* CTA */}
      <section className="bg-white py-5">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                <div className="col-lg-8 advertise_01 text-center">
                    <div className="">
                    <h3 className="">Drive impactful change through Public Health expertise and real-world engagement with D Y
                        Patil University.</h3>
                    <p className="ctasize">Admissions Open 2025</p>
                    <button className="btn c_btn  py-lg-3 px-lg-5 px-4 px-2 fs-6 fw-bold" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">Apply
                        Now</button>
                    </div>
                </div>
                </div>
            </div>
        </section>
      <Footer/>
      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog p-0">
        <div className="modal-content ">
          <div className="modal-header">
            <div className="about_logo pb-2">
              <img src={`${url}images/dypatil/logo/3.webp`} height="50" loading="lazy" alt=""/>
              <img src={`${url}images/dypatil/logo/naac.webp`} height="15" loading="lazy" alt=""/>
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body p-0">
            <iframe aria-label='DY PATIL NAVI MUMBAI 2025 - Public Health' frameborder="0" className="zoho_form"
              src='https://forms.zohopublic.in/gladowlwebsolutionspvtltd/form/DYPATILNAVIMUMBAI2025PublicHealth/formperma/UJUsLQSjB90cQCfOhyAYojtaVxecxURtZvczgZZpFaM'></iframe>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
