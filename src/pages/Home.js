import React from "react";

function Home() {
  const url = process.env.REACT_APP_URL || "#";
  return (
    <div>
      
        <div className="container-fluid h_nav sticky-top">
    {/* <!-- <div className="d-lg-grid d-none pb-3 border-bottom">
        <button className="btn c_btn fw-normal  hide-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Admission Open for 2025-26</button>
    </div> --> */}
    <div className="container">
      <nav className="navbar navbar-expand-lg  navbar-light">
        <a href="" className="navbar-brand">
          <img src={`${url}images/dypatil/logo/3.webp`} className="hero_logo_01" loading="lazy" alt=""/>
          <img src="src/images/dypatil/logo/naac.webp" className="hero_logo_02" loading="lazy" alt=""/>
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
  {/* <!-- ======================================================================================================= --> */}

  <div className="">
    {/* <!-- ======================================================================================================= --> */}
    {/* <!-- Topbar End --> */}
    <section className="container-fluid position-relative pt_001 d-lg-block px-0 d-none hero_section text-center"
      data-bs-toggle="modal" data-bs-target="#exampleModal">
      <div className="container ">
        <div className="row pe-lg-0">
          <div className="col-lg-8">
            <div className="position-relative">
              <img src="../src/images/dypatil/hero/1.png" className="w-100 rounded-3 border video_height" alt=""/>
            </div>

          </div>
          <div className="col-lg-4 pb-3 pb-lg-0">
            <div className="border rounded-3 text-center pt-3">
              <div className="about_logo d-none">
                <img src={`${url}images/dypatil/logo/3.webp`} height="50" loading="lazy" alt=""/>
                <img src="src/images/dypatil/logo/3.webp" height="50" loading="lazy" alt=""/>
                <img src="src/images/dypatil/logo/naac.webp" height="15" loading="lazy" alt=""/>
              </div>
              <h6 className=" mt-2 py-1">Admissions Open 2025</h6>
              <iframe aria-label='DY PATIL NAVI MUMBAI 2025 - Public Health' frameborder="0" className="zoho_form"
                src='https://forms.zohopublic.in/gladowlwebsolutionspvtltd/form/DYPATILNAVIMUMBAI2025PublicHealth/formperma/UJUsLQSjB90cQCfOhyAYojtaVxecxURtZvczgZZpFaM'></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- ---------------------------------------------------------------------------------------------------- --> */}

    <section className=" d-lg-none d-block position-relative hero_section" data-bs-toggle="modal"
      data-bs-target="#exampleModal">
      <div className="container">
        <div className="row ">
          <div className="position-relative">
            <img src="src/images/dypatil/hero/1.png" className="w-100 rounded-3 border video_height" alt=""/>

          </div>
        </div>
      </div>
    </section>

    {/* <!-- ---------------------------------------------------------------------------------------------------- --> */}

    <section id="programs" className="programsSection py-3">
      <div className="container d-none d-lg-block">
        <div className="row">
          <div className="col-md-12 text-center">
            <img src="src/images/dypatil/heading/1.png" height="30px" alt=""/>
            <h2 className=" title_01 pro_01 ">Our Programs </h2>
          </div>
          <div className="col-md-12 ">
            {/* <!-- Nav pills --> */}
            <ul className="nav nav-pills nav-fill mt-3" id="programTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="tab-one-tab" data-bs-toggle="tab" data-bs-target="#tab-one"
                  type="button" role="tab" aria-controls="tab-one" aria-selected="true">Bachelor of Public
                  Health (BPH)</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="tab-two-tab" data-bs-toggle="tab" data-bs-target="#tab-two" type="button"
                  role="tab" aria-controls="tab-two" aria-selected="false">B.Sc. in Environment
                  & Sustainability</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="tab-three-tab" data-bs-toggle="tab" data-bs-target="#tab-three"
                  type="button" role="tab" aria-controls="tab-three" aria-selected="false">Master of Public
                  Health</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="tab-four-tab" data-bs-toggle="tab" data-bs-target="#tab-four" type="button"
                  role="tab" aria-controls="tab-four" aria-selected="false">Master of Public
                  Policy</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4 mb-lg-4">
          <div className="col-12">
            {/* <!-- Tab content --> */}
            <div className="tab-content" id="programTabContent">
              <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one-tab">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="programImg" data-bgimg="./images/dypatil/programs/1.webp">
                    </div>
                  </div>
                  <div className="col-sm-6">

                    <div className="course-container">
                      <div className="accordion active">
                        <div className="accordion-header">About Bachelor of Public Health (BPH)</div>
                        <div className="accordion-content">
                          <p align="justify">
                            Bachelor of Public Health (BPH) is an undergraduate degree programme
                            designed to address the growing demand for professionals who can understand, analyse
                            and respond to complex public health challenges. This interdisciplinary program
                            integrates principles from medicine, social sciences, policy and management to
                            develop well-rounded graduates capable of making a positive impact on public health
                            systems. A crucial component of the program is practical training and internships,
                            where students gain real-world experience by working with public health agencies,
                            NGOs, healthcare facilities and research institutions. Choice based electives is
                            another highlight of the programme, allowing students to tailor their education
                            based on their interests and career aspirations, making the program versatile and
                            adaptable to changing needs. Students can opt for electives in the areas of
                            epidemiology, health promotion, healthcare management, environmental health and
                            more. Bachelor of Public Health is a three year degree program. Its having extended
                            specialization & internship period, building professional skills both on academic as
                            well as the industry standards.
                          </p>
                        </div>
                      </div>
                      <div className="accordion">
                        <div className="accordion-header">Eligibility</div>
                        <div className="accordion-content">
                          <p align="justify">
                            <ul>
                              <li>Prospective candidates are required to have successfully
                                completed the 10+2 or an equivalent examination in any stream
                                from a recognized board with a minimum aggregate of 55%. </li>
                              <li>Note: The admission of Foreign Nationals / NRIs, however, shall
                                be based on the prescribed academic qualification as evaluated
                                by the Internal Admission Cell.</li>
                            </ul>
                          </p>
                        </div>
                      </div>

                      <div className="accordion">
                        <div className="accordion-header">Duration</div>
                        <div className="accordion-content">
                          <ul>
                            <li>4 Years</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <a href="" className="btn c_btn py-2 px-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Enquire
                      Now</a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-two" role="tabpanel" aria-labelledby="tab-two-tab">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="programImg" data-bgimg="./images/dypatil/programs/2.webp">
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="course-container">
                      <div className="accordion active">
                        <div className="accordion-header">About B.Sc. in Environment & Sustainability</div>
                        <div className="accordion-content">
                          <p align="justify">
                            Understanding both scientific principles and relevant policy
                            frameworks is essential if we are to address global environmental
                            challenges
                            including climate change and sustainable development. The program has a
                            strong focus
                            on practice and you will study environmental processes and their
                            management by
                            combining small group, classroom based learning with fieldwork, case
                            studies, group
                            discussion By the time you graduate, you will have an advanced
                            understanding of
                            environmental systems and processes and the policies and practices
                            involved in their
                            management. You will also have gained a wide range of practice based
                            skills, which
                            enhance your employability including the design and implementation of
                            ecological
                            surveys, conservation management, environmental appraisal and audit,
                            environmental
                            impact assessment, project. management and professional report writing.
                            B.Sc. in
                            Environmental & Sustainability is a four year degree program. Its having
                            extended
                            specialization & internship period, building professional skills both on
                            academic as
                            well as the industry standards
                          </p>
                        </div>
                      </div>
                      <div className="accordion">
                        <div className="accordion-header">Eligibility</div>
                        <div className="accordion-content">
                          <p align="justify">
                            <ul>
                              <li>An applicant for admission to the course must have completed a
                                10+2 or Pre-University examination from a recognized Institute
                                or Board. </li>
                              <li>Note: The admission of Foreign Nationals / NRIs, however, shall
                                be based on the prescribed academic qualification as evaluated
                                by the Internal Admission Cell. </li>
                            </ul>
                          </p>
                        </div>
                      </div>

                      <div className="accordion">
                        <div className="accordion-header">Duration</div>
                        <div className="accordion-content">
                          <ul>
                            <li>4 Years</li>
                          </ul>
                        </div>
                      </div>

                    </div>
                    <a href="" className="btn c_btn py-2 px-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Enquire
                      Now</a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-three" role="tabpanel" aria-labelledby="tab-three-tab">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="programImg" data-bgimg="./images/dypatil/programs/3.webp"></div>
                  </div>
                  <div className="col-sm-6">
                    <div className="course-container">
                      <div className="accordion active">
                        <div className="accordion-header">About Masters Of Public Health</div>
                        <div className="accordion-content">
                          <p align="justify">
                            The DY Patil School of Public Health (DYPSPH) has been established
                            with the vision of protecting and promoting population health through quality
                            education, impactful research and meaningful community engagement. The Masters of
                            Public Health (MPH) programme offered by the school is designed to train competent
                            and skilled specialists who will aid in problem solving and critical thinking in the
                            public health domain and effectively meet the public health needs of the country.
                          </p>
                        </div>
                      </div>
                      <div className="accordion">
                        <div className="accordion-header">Eligibility</div>
                        <div className="accordion-content">
                          <p align="justify">
                            <ul>
                              <li>The course is open to candidates with a Bachelor's / Master's /
                                Doctoral degree from a recognised university in India or abroad
                                as detailed below: </li>
                              <li>Bachelor's degree in health sciences / Professional degree in a
                                health related field</li>
                              <li>Bachelor's degree (Non health Sciences) with at least 2 years of
                                experience in a relevant health related field. </li>
                              <li>Master's degree in a health related field Doctoral degree in a
                                health profession or academic area related to public health
                                (MD/MDS/PhD) </li>
                            </ul>
                          </p>
                        </div>
                      </div>

                      <div className="accordion">
                        <div className="accordion-header">Duration</div>
                        <div className="accordion-content">
                          <ul>
                            <li> 2 Years</li>
                          </ul>
                        </div>
                      </div>

                    </div>
                    <a href="" className="btn c_btn py-2 px-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Enquire
                      Now</a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-four" role="tabpanel" aria-labelledby="tab-four-tab">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="programImg" data-bgimg="./images/dypatil/programs/4.webp"></div>
                  </div>
                  <div className="col-sm-6">
                    <div className="course-container">
                      <div className="accordion active">
                        <div className="accordion-header">About Master of Public Policy</div>
                        <div className="accordion-content">
                          <p align="justify">
                            The complexities of modern governance demand well-trained policy
                            professionals who can address pressing societal challenges. The Master of Public
                            Policy (MPP) is a two year post graduate programme that aims to equip students with
                            the skills and knowledge necessary to navigate policy landscapes and drive
                            meaningful change. MPP addresses the growing need for policy experts capable of
                            crafting effective solutions to diverse social, economic, health and environmental
                            issues. It amalgamates insights from political science, economics, law, sociology,
                            health and other fields to cultivate leaders who can design, analyse, and advocate
                            for policies that shape societies positively. MPP is a Masters’ programme of 2 years
                            duration delivered in 4 semesters with a total of 80 credits.
                          </p>
                        </div>
                      </div>
                      <div className="accordion">
                        <div className="accordion-header">Eligibility</div>
                        <div className="accordion-content">
                          <p align="justify">
                            <ul>
                              <li>First class Bachelor’s Degree in any stream (with a minimum of
                                60% marks or equivalent grade) from UGC recognized Universities.
                              </li>
                              <li>Note: The admission of foreign nationals / NRIs, however, shall
                                be based on the prescribed academic qualification as evaluated
                                by the Internal Admission Cell.</li>
                            </ul>
                          </p>
                        </div>
                      </div>

                      <div className="accordion">
                        <div className="accordion-header">Duration</div>
                        <div className="accordion-content">
                          <ul>
                            <li>2 Years</li>
                          </ul>
                        </div>
                      </div>

                    </div>
                    <a href="" className="btn c_btn py-2 px-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Enquire
                      Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-lg-none">
        <div className="row">
          <div className="col-md-12">
            <h2 className="title_01 text-center">Our Programs <span className="horizontalLine"></span></h2>
          </div>
          <div className="col-md-12">
            <div className="course-container">
              <div className="accordion active">
                <div className="accordion-header">
                  Bachelor of Public Health (BPH)</div>
                <div className="accordion-content">
                  <h6>
                    Bachelor of Public Health (BPH)</h6>
                  <p align="justify"> Bachelor of Public Health (BPH) is an undergraduate degree programme
                    designed to address the growing demand for professionals who can understand, analyse and
                    respond to complex public health challenges. This interdisciplinary program integrates
                    principles from medicine, social sciences, policy and management to develop well-rounded
                    graduates capable of making a positive impact on public health systems. A crucial
                    component of the program is practical training and internships, where students gain
                    real-world experience by working with public health agencies, NGOs, healthcare
                    facilities and research institutions. Choice based electives is another highlight of the
                    programme, allowing students to tailor their education based on their interests and
                    career aspirations, making the program versatile and adaptable to changing needs.
                    Students can opt for electives in the areas of epidemiology, health promotion,
                    healthcare management, environmental health and more. Bachelor of Public Health is a
                    three year degree program. Its having extended specialization & internship period,
                    building professional skills both on academic as well as the industry standards.</p>
                  <h6>Eligibility</h6>
                  <ul>
                    <li>Prospective candidates are required to have successfully
                      completed the 10+2 or an equivalent examination in any stream
                      from a recognized board with a minimum aggregate of 55%. </li>
                    <li>Note: The admission of Foreign Nationals / NRIs, however, shall
                      be based on the prescribed academic qualification as evaluated
                      by the Internal Admission Cell.</li>
                  </ul>
                  <h6>Duration</h6>
                  <p align="justify"> 4 Years</p>
                  <a href="" className="btn c_btn py-2 px-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Enquire
                    Now</a>
                </div>
              </div>

              <div className="accordion">
                <div className="accordion-header">B.Sc. in Environment & Sustainability</div>
                <div className="accordion-content">
                  <h6>B.Sc. in Environment & Sustainability</h6>
                  <p align="justify">Understanding both scientific principles and relevant policy frameworks
                    is essential if we are to address global environmental challenges including climate
                    change and sustainable development. The program has a strong focus on practice and you
                    will study environmental processes and their management by combining small group,
                    classroom based learning with fieldwork, case studies, group discussion By the time you
                    graduate, you will have an advanced understanding of environmental systems and processes
                    and the policies and practices involved in their management. You will also have gained a
                    wide range of practice based skills, which enhance your employability including the
                    design and implementation of ecological surveys, conservation management, environmental
                    appraisal and audit, environmental impact assessment, project. management and
                    professional report writing. B.Sc. in Environmental & Sustainability is a four year
                    degree program. Its having extended specialization & internship period, building
                    professional skills both on academic as well as the industry standards
                  </p>
                  <h6>Eligibility</h6>
                  <ul>
                    <li>An applicant for admission to the course must have completed a 10+2 or
                      Pre-University examination from a recognized Institute or Board. </li>
                    <li>Note: The admission of Foreign Nationals / NRIs, however, shall be based on the
                      prescribed academic qualification as evaluated by the Internal Admission Cell. </li>
                  </ul>
                  <h6>Duration</h6>
                  <p align="justify">4 Years</p>
                  <a href="" className="btn c_btn py-2 px-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Enquire
                    Now</a>
                </div>
              </div>

              <div className="accordion">
                <div className="accordion-header">Master of Public Health</div>
                <div className="accordion-content">
                  <h6>Master of Public Health</h6>
                  <p align="justify">The DY Patil School of Public Health (DYPSPH) has been established with
                    the vision of protecting and promoting population health through quality education,
                    impactful research and meaningful community engagement. The Masters of Public Health
                    (MPH) programme offered by the school is designed to train competent and skilled
                    specialists who will aid in problem solving and critical thinking in the public health
                    domain and effectively meet the public health needs of the country.</p>
                  <h6>Eligibility</h6>
                  <ul>
                    <li>The course is open to candidates with a Bachelor's / Master's / Doctoral degree from
                      a recognised university in India or abroad as detailed below: </li>
                    <li>Bachelor's degree in health sciences / Professional degree in a health related field
                    </li>
                    <li>Bachelor's degree (Non health Sciences) with at least 2 years of experience in a
                      relevant health related field. </li>
                    <li>Master's degree in a health related field Doctoral degree in a health profession or
                      academic area related to public health (MD/MDS/PhD) </li>
                  </ul>
                  <h6>Duration</h6>
                  <p align="justify">2 Years</p>
                  <a href="" className="btn c_btn py-2 px-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Enquire
                    Now</a>
                </div>
              </div>

              <div className="accordion">
                <div className="accordion-header">Master of Public Policy</div>
                <div className="accordion-content">
                  <h6>Master of Public Policy</h6>
                  <p align="justify">The complexities of modern governance demand well-trained policy
                    professionals who can address pressing societal challenges. The Master of Public Policy
                    (MPP) is a two year post graduate programme that aims to equip students with the skills
                    and knowledge necessary to navigate policy landscapes and drive meaningful change. MPP
                    addresses the growing need for policy experts capable of crafting effective solutions to
                    diverse social, economic, health and environmental issues. It amalgamates insights from
                    political science, economics, law, sociology, health and other fields to cultivate
                    leaders who can design, analyse, and advocate for policies that shape societies
                    positively. MPP is a Masters’ programme of 2 years duration delivered in 4 semesters
                    with a total of 80 credits.</p>
                  <h6>Eligibility</h6>
                  <ul>
                    <li>First class Bachelor’s Degree in any stream (with a minimum of 60% marks or
                      equivalent grade) from UGC recognized Universities. </li>
                    <li>Note: The admission of foreign nationals / NRIs, however, shall be based on the
                      prescribed academic qualification as evaluated by the Internal Admission Cell.</li>
                  </ul>
                  <h6>Duration</h6>
                  <p align="justify"> 2 Years</p>
                  <a href="" className="btn c_btn py-2 px-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Enquire
                    Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- ---------------------------------------------------------------------------------------------------- --> */}


    {/* <!-- ---------------------------------------------------------------------------------------------------- --> */}

    <section className="py-5 why_01" data-bgimg="images/dypatil/why/bg_01.jpg">
      <div className="container" id="why-choose-us">
        <div className="row  justify-content-center">
          <div className="col-lg-9 text-center">
            <h2 className="title_01 text-center text-white">Why D Y Patil School of Public Health? </h2>
            <p className="text-center text-white">We are committed to train competent and skilled public health
              professionals who will be leaders of tomorrow. A thoughtfully designed curriculum delivered through
              innovative pedagogy, the opportunities to collaborate and work with reputed organisations, and the space
              to engage in impactful research, all while learning alongside renowned leaders in the field makes this a
              unique school of Public Health. </p>
          </div>
        </div>
        <div className="row align-item-center">
          <div className="col-lg-5">
            <div className="border why_02 position-relative mb-3">
              <div className="px-lg-5 px-3 d-flex justify-content-between align-items-center py-3">
                <h6 className=" mb-0">Globally relevant curriculum </h6>
                <div className=" p-2 choose_us_sect position-relative">
                  <img src="src/images/dypatil/why/1.png" className="filter" alt=""/>
                </div>
              </div>
            </div>
            <div className="border why_02 position-relative mb-3">
              <div className="px-lg-5 px-3 d-flex justify-content-between align-items-center py-3">
                <h6 className=" mb-0">Multi & Interdisciplinary in nature </h6>
                <div className=" p-2 choose_us_sect position-relative">
                  <img src="src/images/dypatil/why/2.png" className="filter" alt=""/>
                </div>
              </div>
            </div>
            <div className="border why_02 position-relative mb-3">
              <div className="px-lg-5 px-3 d-flex justify-content-between align-items-center py-3">
                <h6 className=" mb-0">Technology enabled learning </h6>
                <div className=" p-2 choose_us_sect position-relative">
                  <img src="src/images/dypatil/why/3.png" className="filter" alt=""/>
                </div>
              </div>
            </div>
            <div className="border why_02 position-relative mb-3">
              <div className="px-lg-5 px-3 d-flex justify-content-between align-items-center py-3">
                <h6 className=" mb-0">Field Exposure </h6>
                <div className=" p-2 choose_us_sect position-relative">
                  <img src="src/images/dypatil/why/4.png" className="filter" alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 text-center">
            {/* <!-- <img src="src/images/dypatil/why/01.png" className="why_ph_img" alt=""/> --> */}
          </div>
          <div className="col-lg-5 pt-4 pt-lg-0">
            <div className="border why_02 position-relative mb-3">
              <div className="ps-lg-5 px-3 d-flex align-items-center py-3">
                <div className=" p-2 choose_us_sect position-relative">
                  <img src="src/images/dypatil/why/5.png" className="filter" alt=""/>
                </div>
                <h6 className="ps-3 mb-0">Holistic learning experience </h6>
              </div>
            </div>
            <div className="border why_02 position-relative mb-3">
              <div className="ps-lg-5 px-3 d-flex align-items-center py-3">
                <div className=" p-2 choose_us_sect position-relative">
                  <img src="src/images/dypatil/why/6.png" className="filter" alt=""/>
                </div>
                <h6 className="ps-3 mb-0">Subscription to online learning portals </h6>
              </div>
            </div>
            <div className="border why_02 position-relative mb-3">
              <div className="ps-lg-5 px-3 d-flex align-items-center py-3">
                <div className=" p-2 choose_us_sect position-relative">
                  <img src="src/images/dypatil/why/7.png" className="filter" alt=""/>
                </div>
                <h6 className="ps-3 mb-0">Student driven activities </h6>
              </div>
            </div>
            <div className="border why_02 position-relative mb-3">
              <div className="ps-lg-5 px-3 d-flex align-items-center py-3">
                <div className=" p-2 choose_us_sect position-relative">
                  <img src="src/images/dypatil/why/8.png" className="filter" alt=""/>
                </div>
                <h6 className="ps-3 mb-0">Collaborate and Work with Reputed Organisations</h6>
              </div>
            </div>
          </div>
        </div>\
      </div>
    </section>
    {/* <!-- ---------------------------------------------------------------------------------------------------- --> */}




    <section>
      <div className="container bg-white rounded-3 pt-5 " id="recruiters">
        <div className="row  justify-content-center">
          <div className="col-lg-9 text-center">
            <img src="src/images/dypatil/heading/1.png" height="30px" alt=""/>
            <h2 className="title_01 text-center">Our Recruiters</h2>
          </div>
        </div>
        <div
          className="row placement_01 ms-1 me-2 mx-lg-auto py-lg-2 owl-carousel justify-content-center text-center border">
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/new/1.webp" loading="lazy" className="px-3" alt="Placement Companies"/>
          </div>
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/new/2.webp" loading="lazy" className="px-3" alt="Placement Companies"/>
          </div>
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/new/3.webp" loading="lazy" className="px-3" alt="Placement Companies"/>
          </div>
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/new/4.webp" loading="lazy" className="px-3" alt="Placement Companies"/>
          </div>
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/new/5.webp" loading="lazy" className="px-3" alt="Placement Companies"/>
          </div>
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/new/6.webp" loading="lazy" className="px-3" alt="Placement Companies"/>
          </div>
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/new/7.webp" loading="lazy" className="px-3" alt="Placement Companies"/>
          </div>
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/new/8.webp" loading="lazy" className="px-3" alt="Placement Companies"/>
          </div>
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/new/9.webp" loading="lazy" className="px-3" alt="Placement Companies"/>
          </div>
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/new/10.webp" loading="lazy" className="px-3" alt="Placement Companies"/>
          </div>
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/new/11.webp" loading="lazy" className="px-3" alt="Placement Companies"/>
          </div>
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/new/12.webp" loading="lazy" className="px-3" alt="Placement Companies"/>
          </div>
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/new/13.webp" loading="lazy" className="px-3" alt="Placement Companies"/>
          </div>
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/new/14.webp" loading="lazy" className="px-3" alt="Placement Companies"/>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- ---------------------------------------------------------------------------------------------------- -->
    <!-- ---------------------------------------------------------------------------------------------------- --> */}

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

    {/* <!-- ----------------------------------------------------------------------------------------------------------- --> */}
    <section className="bg-white pt-lg-5 pt-3 d-none">
      <div className="container" id="job_profile">

        <div className="row d-flex align-items-stretch">
          <div className="col-lg-5 d-flex">
            <div className="job_profilebox bg-red shadow-lg p-4">
              <h2 className="title_01 mb-2 text-white">Job Profile</h2>
              <hr className="jobhr"/>
              <ul>
                <li><i className="bi bi-check-circle-fill pe-2 text-white"></i> Epidemiologist</li>
                <li><i className="bi bi-check-circle-fill pe-2 text-white"></i> Research Officers</li>
                <li><i className="bi bi-check-circle-fill pe-2 text-white"></i> Technical Leads</li>
                <li><i className="bi bi-check-circle-fill pe-2 text-white"></i> Program Managers</li>
                <li><i className="bi bi-check-circle-fill pe-2 text-white"></i> Biostatistician</li>
                <li><i className="bi bi-check-circle-fill pe-2 text-white"></i> Scientific Advisors</li>
                <li><i className="bi bi-check-circle-fill pe-2 text-white"></i> Health Care Consultant </li>
                <li><i className="bi bi-check-circle-fill pe-2 text-white"></i> Environmental Health Scientist</li>
                <li><i className="bi bi-check-circle-fill pe-2 text-white"></i> Clinical Dietician, Nutritionist </li>
                <li><i className="bi bi-check-circle-fill pe-2 text-white"></i> Public Health Educator</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-7 d-flex">
            <div className="industrybox shadow-lg p-4">
              <h2 className="title_01 mb-1">Industry Scope</h2>
              <hr className="industryhr"/>
              <div className="row gy-4 industryimages gy-4">
                <div className="col-lg-4 col-4">
                  <img src="src/images/dypatil/industryscope/1.png" className=""/>
                </div>
                <div className="col-lg-4 col-4">
                  <img src="src/images/dypatil/industryscope/2.png" className=""/>
                </div>
                <div className="col-lg-4 col-4">
                  <img src="src/images/dypatil/industryscope/3.png" className=""/>
                </div>
                <div className="col-lg-4 col-4">
                  <img src="src/images/dypatil/industryscope/4.png" className=""/>
                </div>
                <div className="col-lg-4 col-4">
                  <img src="src/images/dypatil/industryscope/5.png" className=""/>
                </div>
                <div className="col-lg-4 col-4">
                  <img src="src/images/dypatil/industryscope/6.png" className=""/>
                </div>
                <div className="col-lg-4 col-4">
                  <img src="src/images/dypatil/industryscope/7.png" className=""/>
                </div>
                <div className="col-lg-4 col-4">
                  <img src="src/images/dypatil/industryscope/8.png" className=""/>
                </div>
                <div className="col-lg-4 col-4">
                  <img src="src/images/dypatil/industryscope/9.png" className=""/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- ----------------------------------------------------------------------------------------------------------- --> */}
    <section className="bg-white py-5 pt_001">
      <div className="container" id="team">
        <div className="row justify-content-lg-between">
          <div className="col-lg-12  text-center">
            <img src="src/images/dypatil/heading/1.png" height="30px" alt=""/>
            <h2 className="title_01   mb-3">Meet Our Expert Advisory Members</h2>
          </div>
        </div>
        <div className="row pt-3 team bg-white owl-carousel ">
          <div className="card d-grid">
            <img src="src/images/dypatil/team/1.webp" className="team_img" alt="..."/>
            <div className="card-body text-center">
              <h5 className="card-title text-white ">DR. SUMA NAIR</h5>
              <p className="card-text text-white fw-normal text-capitalize"><b>MEMBER SECRETARY </b> <br/>dean, dypu school
                of public health</p>
            </div>
          </div>
          <div className="card d-grid">
            <img src="src/images/dypatil/team/2.webp" className="team_img" alt="..."/>
            <div className="card-body text-center">
              <h5 className="card-title text-white ">DR. DEEPAK SAXENA</h5>
              <p className="card-text text-white fw-normal text-capitalize"><b>MEMBER </b> <br/>director, iiph gandhinagar
              </p>
            </div>
          </div>
          <div className="card d-grid">
            <img src="src/images/dypatil/team/3.webp" className="team_img" alt="..."/>
            <div className="card-body text-center">
              <h5 className="card-title text-white ">PROF. DR. SANJAY ZODPEY</h5>
              <p className="card-text text-white fw-normal text-capitalize"><b>CO-CHAIRPERSON </b> <br/>president, public
                health foundation of india (phfi)</p>
            </div>
          </div>
          <div className="card d-grid">
            <img src="src/images/dypatil/team/4.webp" className="team_img" alt="..."/>
            <div className="card-body text-center">
              <h5 className="card-title text-white ">DR. H. VINOD BHAT</h5>
              <p className="card-text text-white fw-normal text-capitalize"><b>CO-CHAIRPERSON </b> <br/>vice chancellor,
                apollo university, chittoor</p>
            </div>
          </div>
          <div className="card d-grid">
            <img src="src/images/dypatil/team/5.webp" className="team_img" alt="..."/>
            <div className="card-body text-center">
              <h5 className="card-title text-white ">DR. NITIKA PANT PAI</h5>
              <p className="card-text text-white fw-normal text-capitalize"><b>MEMBER </b> <br/>associate
                professor,department of medicine, mcgill university, canada</p>
            </div>
          </div>
          <div className="card d-grid">
            <img src="src/images/dypatil/team/6.webp" className="team_img" alt="..."/>
            <div className="card-body text-center">
              <h5 className="card-title text-white ">Dr. Madhukar Pai </h5>
              <p className="card-text text-white fw-normal text-capitalize"><b>Member</b> <br/>Associate Director, McGill
                International TB Centre, McGill University, Canada</p>
            </div>
          </div>
          <div className="card d-grid">
            <img src="src/images/dypatil/team/7.webp" className="team_img" alt="..."/>
            <div className="card-body text-center">
              <h5 className="card-title text-white ">Dr. N. Sreekumaran Nair </h5>
              <p className="card-text text-white fw-normal text-capitalize"><b>Member</b> <br/>Professor & Head, Department
                of Biostatistics, Jipmer, Puducherry</p>
            </div>
          </div>
          <div className="card d-grid">
            <img src="src/images/dypatil/team/8.webp" className="team_img" alt="..."/>
            <div className="card-body text-center">
              <h5 className="card-title text-white ">Dr. B. Unnikrishnan </h5>
              <p className="card-text text-white fw-normal text-capitalize"><b>Member</b> <br/>Dean, Kasturba Medical
                College, Mangalore</p>
            </div>
          </div>

        </div>
      </div>
    </section>




    {/* <!-- ----------------------------------------------------------------------------------------------------------- --> */}






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
              <img src="src/images/dypatil/internship/1.png" height="70px" alt=""/>
              <h2>Law firms</h2>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="internship-box side-by-side internship-devider internmg">
              <img src="src/images/dypatil/internship/2.png" height="70px" alt=""/>
              <h2>Corporate legal departments</h2>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="internship-box side-by-side internship-devider internmg">
              <img src="src/images/dypatil/internship/3.png" height="70px" alt=""/>
              <h2>Non-profit organizations</h2>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="internship-box side-by-side internmg">
              <img src="src/images/dypatil/internship/4.png" height="70px" alt=""/>
              <h2>Government agencies</h2>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section>
      <div className="container bg-white rounded-3 pb-5 " id="">
        <div className="row  justify-content-center">
          <div className="col-lg-9 text-center">
            <img src="src/images/dypatil/heading/1.png" height="30px" alt=""/>
            <h2 className="title_01 text-center">International Collaboration</h2>
          </div>
        </div>
        <div
          className="row placement_01 ms-1 me-2 mx-lg-auto py-lg-2 owl-carousel justify-content-center text-center border">
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/international/1.png" loading="lazy" className="px-3"
              alt="International Collaboration"/>
          </div>
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/international/2.png" loading="lazy" className="px-3"
              alt="International Collaboration"/>
          </div>
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/international/3.png" loading="lazy" className="px-3"
              alt="International Collaboration"/>
          </div>
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/international/4.png" loading="lazy" className="px-3"
              alt="International Collaboration"/>
          </div>
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/international/5.png" loading="lazy" className="px-3"
              alt="International Collaboration"/>
          </div>
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/international/6.png" loading="lazy" className="px-3"
              alt="International Collaboration"/>
          </div>
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/international/7.png" loading="lazy" className="px-3"
              alt="International Collaboration"/>
          </div>
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/international/8.png" loading="lazy" className="px-3"
              alt="International Collaboration"/>
          </div>
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/international/9.png" loading="lazy" className="px-3"
              alt="International Collaboration"/>
          </div>
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/international/10.png" loading="lazy" className="px-3"
              alt="International Collaboration"/>
          </div>
          <div className=" company_01 border-end ">
            <img src="src/images/dypatil/placement/international/11.png" loading="lazy" className="px-3"
              alt="International Collaboration"/>
          </div>
        </div>
      </div>
    </section>
    <section className="why_dy_02" data-bgimg="images/dypatil/banners/bg_01.jpg">
      <div className="container rounded-3 py-5">
        <div className="row justify-content-center">
          <div className="col-lg-9 text-center">
            <h2 className="title_01 text-white text-center">Why Choose D Y Patil University?</h2>
          </div>
        </div>
        <div className="row placement_01 py-lg-2 owl-carousel justify-content-center text-center align-items-stretch">
          <div className="company_01 p-2 d-flex align-items-stretch">
            <div className="bg-white p-2 d-flex flex-column justify-content-center">
              <img src="src/images/dypatil/awards/1.webp" loading="lazy" className="px-3" alt="Placement Companies"/>
              <hr/>
              <p>NAAC A++ Accredited University</p>
            </div>
          </div>
          <div className="company_01 p-2 d-flex align-items-stretch">
            <div className="bg-white p-2 d-flex flex-column justify-content-center">
              <img src="src/images/dypatil/awards/2.webp" loading="lazy" className="px-3" alt="Placement Companies"/>
              <hr/>
              <p>QS International Trade Ranking (2023): #121-130 globally!</p>
            </div>
          </div>
          <div className="company_01 p-2 d-flex align-items-stretch">
            <div className="bg-white p-2 d-flex flex-column justify-content-center">
              <img src="src/images/dypatil/awards/3.webp" loading="lazy" className="px-3" alt="Placement Companies"/>
              <hr/>
              <p>UGC Recognized</p>
            </div>
          </div>
          <div className="company_01 p-2 d-flex align-items-stretch">
            <div className="bg-white p-2 d-flex flex-column justify-content-center">
              <img src="src/images/dypatil/awards/4.webp" loading="lazy" className="px-3" alt="Placement Companies"/>
              <hr/>
              <p>AICTE Approved</p>
            </div>
          </div>
          <div className="company_01 p-2 d-flex align-items-stretch">
            <div className="bg-white p-2 d-flex flex-column justify-content-center">
              <img src="src/images/dypatil/awards/5.webp" loading="lazy" className="px-3" alt="Placement Companies"/>
              <hr/>
              <p>Ranked Amongst Top 100 Universities in India by NIRF</p>
            </div>
          </div>
          <div className="company_01 p-2 d-flex align-items-stretch">
            <div className="bg-white p-2 d-flex flex-column justify-content-center">
              <img src="src/images/dypatil/awards/6.webp" loading="lazy" className="px-3" alt="Placement Companies"/>
              <hr/>
              <p>1st Rank in India by GHRDC</p>
            </div>
          </div>
          <div className="company_01 p-2 d-flex align-items-stretch">
            <div className="bg-white p-2 d-flex flex-column justify-content-center">
              <img src="src/images/dypatil/awards/7.webp" loading="lazy" className="px-3" alt="Placement Companies"/>
              <hr/>
              <p>Recognised as Category 1 University by MHRD</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- ---------------------------------------------------------------------------------------------------- --> */}


    {/* <!---our top ranked patanered end---> */}
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
                <img className="mb-4" src="src/images/dypatil/testimonal/1.png" alt=""/>
                <h5>Dr.Kiran Gaikwad</h5>
                <span className="">I feel extremely proud to be a student of the School of Public Health, D Y Patil Deemed
                  to be University, Navi Mumbai, for it is this institution which gave me a golden chance to pursue and
                  fulfill my long -cherished dream of becoming a Public Health specialist. </span>
              </div>
            </div>
            <div className="row align-items-stretch">
              <div className="testimonial-item rounded align-items-stretch p-4 p-lg-5 mb-5">
                <img className="mb-4" src="src/images/dypatil/testimonal/2.png" alt=""/>
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

    {/* <!-- ---------------------------------------------------------------------------------------------------- --> */}


{/* 
    <!-- ------------------------------------------------------------------------------------------------------------------ --> */}
    <section className="bg-white pt-lg-1 pt-5">
      <div className="container" id="campuslife">
        <div className="col-md-12 text-center position-relative">
          <img src="src/images/dypatil/heading/1.png" height="30px" alt=""/>
          <h2 className=" fw-normal mb-4 text-center  display-5 title_02  d-none d-md-block">#CampusLife@
            <span className="text-red"> D Y
              Patil University</span></h2>
              <h2 className="h5 fw-normal   d-md-none ">#CampusLife@
                <span className="text-red"> D Y Patil University </span>
                
                </h2>
        </div>

        <div className="row gy-4 galleryimages ">

          <div className="col-lg-4 col-6 ">
            <img src={`${url}/images/dypatil/gallery/1.webp`} className=""/>
          </div>
          <div className="col-lg-4 col-6 ">
            <img src={`${url}/images/dypatil/gallery/2.webp`} className=""/>
          </div>
          <div className="col-lg-4 col-6 ">
            <img src={`${url}/images/dypatil/gallery/3.webp`} className=""/>
          </div>
          <div className="col-lg-4 col-6 ">
            <img src={`${url}/images/dypatil/gallery/4.webp`} className=""/>
          </div>
          <div className="col-lg-4 col-6 ">
            <img src={`${url}/images/dypatil/gallery/5.webp`} className=""/>
          </div>
          <div className="col-lg-4 col-6 ">
            <img src={`${url}/images/dypatil/gallery/6.webp`} className=""/>
          </div>
        </div>
        </div>
    </section>

    {/* <!-- ----------------------------------------------------------------------------------------------------------- --> */}
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



{/* 
    <!-- ------------------------------------------------------------------------------------------------------------------ --> */}

    <footer>
      {/* <!-- Copyright Start --> */}
      <div className="container-fluid copyright py-4 mb-4 mb-md-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="d-flex justify-content-center align-items-center py-3">
                <img src="src/images/dypatil/logo/4.webp" className="hero_logo_01" loading="lazy" alt=""/>
                <div className="footerImgDivider"></div>
                <img src="src/images/dypatil/logo/naac-footer.webp" className="footer_logo_02" loading="lazy" alt=""/>
              </div>
              {/* <!-- <div className="py-2">
                        <p className="textBrown1">Address:</p>
                        <p>DY Patil University Sector 7. Nerul, Mumbai -400706. INDIA</p>
                    </div> --> */}
              <div className="footerDivider"></div>
              <span className=" text-light">© Copyright 2025 | D Y Patil University, Navi Mumbai. | Designed and developed
                by
                <img src="src/images/dypatil/logo/gladowl_logo.webp" height="20" width="auto" loading="lazy" alt=""/></span>
            </div>
          </div>
        </div>
      </div>
    </footer>

    {/* <!-- Back to Top --> */}
    <a href="#" className="btn btn-lg bg-dark text-white btn-lg-square rounded-circle back-to-top">
      <i className="bi bi-arrow-up"></i>
    </a>
  </div>


    <a href="#programs" className="btn c_btn rounded-pill px-4 left_button bg-red">Programs</a>
    <button type="button" className="btn c_btn px-4 right_button bg-red" data-bs-toggle="modal"
      data-bs-target="#exampleModal">Apply Now</button>
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog p-0">
        <div className="modal-content ">
          <div className="modal-header">
            <div className="about_logo pb-2">
              <img src="src/images/dypatil/logo/3.webp" height="50" loading="lazy" alt=""/>
              <img src="src/images/dypatil/logo/naac.webp" height="15" loading="lazy" alt=""/>
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
