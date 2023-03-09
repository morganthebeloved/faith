import React from "react";

const About = () => {
  return (
    <div>
      <ShortNote />
      <Skills />
      <Hobbies />
    </div>
  );
};

export default About;

const ShortNote = () => {
  return (
    <div>
      <article>
        <div>
          <h1></h1>
          <p></p>
        </div>
      </article>
    </div>
  );
};

const Skills = () => {
  return (
    <div>
      <article>
        <div className="d-flex justify-content-center">
          <div className="card text-bg-success w-50 mb-3 ">
            <div className="card-header">
              <h3>ABOUT MORGAN THEBELOVED</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                What a beautiful day it will be, To be playing my guitar with the angels And be Leading
                <br />
                 Heaven Choir, We will be chanting Halleluyah with the saints And the elders, Hozzanah
                <br />
                To the one who reigns on High. So while i wait I will Play my part, I will fast And pray and
                <br />
                Preach the Word till everyone arounds me hears The Truth,that Jesus is coming soon. So 
                <br />
                So let the Heavens prepare the crown
                Cause this young boy Here has made a vow that   <br /> when the  trumpet sounds a billion souls 
                Will fly on my account.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="card text-bg-info mb-3 w-50">
            <div className="card-header">
              <h3> MY SKILLS</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                <SkillList
                  title="Proficient With"
                  list={[
                    "Html5",
                    "CSS3",
                    "BOOTSTRAP",
                    "JAVASCRIPT",
                    "REACT",
                    "GITHUB",
                  ]}
                />
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="card text-bg-primary w-50 mb-3 ">
            <div className="card-header">
              <h3>EXPOSED TO : </h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                <SkillList
                  list={[
                    "MICROSOFT OFFICE",
                    "3D ANIMATION",
                    "GRAPHICS DESIGNING",
                  ]}
                />
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="card text-bg-info mb-3 w-50">
            <div className="card-header">
              <h3>HOBBIES</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                <div>
                  <HobbyList text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📖&nbsp;&nbsp;&nbsp;READING" />
                  <HobbyList text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🎦&nbsp;&nbsp;&nbsp;ADVENTURES" />
                  <HobbyList text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📱&nbsp;&nbsp;&nbsp; LEARNING BIBLE" />
                  <HobbyList text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;👩‍💻&nbsp;&nbsp;&nbsp;CODING" />
                </div>
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

const SkillList = ({ title, list }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {list.map((eachList, index) => (
          <li key={index}>{eachList}</li>
        ))}
      </ul>
    </div>
  );
};

const Hobbies = () => {
  return (
    <div>
      <article>
        <div className="as rounded-top p-1">
          <span className="dot"></span>
          <span className="dot1"></span>
          <span className="dot2"></span>
        </div>
      </article>
    </div>
  );
};

const HobbyList = ({ img, text }) => {
  return (
    <div>
      <img src={img} alt="" />
      <span>{text}</span>
    </div>
  );
};
