import React from 'react';

function AdvisoryMembers(){
    const url = process.env.REACT_APP_URL || "#";
    return(
        <section className="bg-white py-5 pt_001">
            <div className="container" id="team">
                <div className="row justify-content-lg-between">
                <div className="col-lg-12  text-center">
                    <img src={`${url}images/dypatil/heading/1.png`} height="30px" alt=""/>
                    <h2 className="title_01   mb-3">Meet Our Expert Advisory Members</h2>
                </div>
                </div>
                <div className="row pt-3 team bg-white owl-carousel ">
                <div className="card d-grid">
                    <img src={`${url}images/dypatil/team/1.webp`} className="team_img" alt="..."/>
                    <div className="card-body text-center">
                    <h5 className="card-title text-white ">DR. SUMA NAIR</h5>
                    <p className="card-text text-white fw-normal text-capitalize"><b>MEMBER SECRETARY </b> <br/>dean, dypu school
                        of public health</p>
                    </div>
                </div>
                <div className="card d-grid">
                    <img src={`${url}images/dypatil/team/2.webp`} className="team_img" alt="..."/>
                    <div className="card-body text-center">
                    <h5 className="card-title text-white ">DR. DEEPAK SAXENA</h5>
                    <p className="card-text text-white fw-normal text-capitalize"><b>MEMBER </b> <br/>director, iiph gandhinagar
                    </p>
                    </div>
                </div>
                <div className="card d-grid">
                    <img src={`${url}images/dypatil/team/3.webp`} className="team_img" alt="..."/>
                    <div className="card-body text-center">
                    <h5 className="card-title text-white ">PROF. DR. SANJAY ZODPEY</h5>
                    <p className="card-text text-white fw-normal text-capitalize"><b>CO-CHAIRPERSON </b> <br/>president, public
                        health foundation of india (phfi)</p>
                    </div>
                </div>
                <div className="card d-grid">
                    <img src={`${url}images/dypatil/team/4.webp`} className="team_img" alt="..."/>
                    <div className="card-body text-center">
                    <h5 className="card-title text-white ">DR. H. VINOD BHAT</h5>
                    <p className="card-text text-white fw-normal text-capitalize"><b>CO-CHAIRPERSON </b> <br/>vice chancellor,
                        apollo university, chittoor</p>
                    </div>
                </div>
                <div className="card d-grid">
                    <img src={`${url}images/dypatil/team/5.webp`} className="team_img" alt="..."/>
                    <div className="card-body text-center">
                    <h5 className="card-title text-white ">DR. NITIKA PANT PAI</h5>
                    <p className="card-text text-white fw-normal text-capitalize"><b>MEMBER </b> <br/>associate
                        professor,department of medicine, mcgill university, canada</p>
                    </div>
                </div>
                <div className="card d-grid">
                    <img src={`${url}images/dypatil/team/6.webp`} className="team_img" alt="..."/>
                    <div className="card-body text-center">
                    <h5 className="card-title text-white ">Dr. Madhukar Pai </h5>
                    <p className="card-text text-white fw-normal text-capitalize"><b>Member</b> <br/>Associate Director, McGill
                        International TB Centre, McGill University, Canada</p>
                    </div>
                </div>
                <div className="card d-grid">
                    <img src={`${url}images/dypatil/team/7.webp`} className="team_img" alt="..."/>
                    <div className="card-body text-center">
                    <h5 className="card-title text-white ">Dr. N. Sreekumaran Nair </h5>
                    <p className="card-text text-white fw-normal text-capitalize"><b>Member</b> <br/>Professor & Head, Department
                        of Biostatistics, Jipmer, Puducherry</p>
                    </div>
                </div>
                <div className="card d-grid">
                    <img src={`${url}images/dypatil/team/8.webp`} className="team_img" alt="..."/>
                    <div className="card-body text-center">
                    <h5 className="card-title text-white ">Dr. B. Unnikrishnan </h5>
                    <p className="card-text text-white fw-normal text-capitalize"><b>Member</b> <br/>Dean, Kasturba Medical
                        College, Mangalore</p>
                    </div>
                </div>

                </div>
            </div>
        </section>
    );
}
export default AdvisoryMembers;