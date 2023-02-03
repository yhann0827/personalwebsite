import React from "react";
import "./Hackathon.scss";

const Hackathon = () => {
  return (
    <div className="outerdiv">
      <div className="comp__type-outerdiv">
        <span className="comp__type">Hackathon</span>
      </div>
      <div className="competition__outerdiv">
        <div className="hackComp">
          <a
            className="comp__title"
            href="https://www.loopme.my/live-post/JRhe516mYbQTGTlp"
          >
            AIA Hackathon 2022
          </a>
          <div className="prize__div">
            <div className="prize prize--gold">Best Pitch Prize</div>
            <div className="prize prize--bronze">Semi-finalist</div>
          </div>
          <div className="description__div">
            <div className="description">
              <li className="hack__list">
                Collaborated with 5 computer science students to develop an
                innovative solution for mental health challenges and the
                insurance industry. Secured a significant position in a
                competition against 50+ student groups.
              </li>
              <li className="hack__list">
                Demonstrated proficiency in UI/UX design and project management
                by creating a mobile application prototype designed to combat
                smartphone and internet addiction utilizing Figma. The project
                showcased my ability to bring creative ideas to life through
                technical execution and effective collaboration with a
                cross-functional team.
              </li>
              <li className="hack__list">
                Utilizing a combination of technical expertise in software
                development and strong problem-solving skills, developed an
                innovative solution aimed at addressing mental health challenges
                and shaping the future of the insurance industry.
              </li>
              <li className="hack__list">
                Served as project manager and UI designer, ensuring clear
                project objectives and delivering a user-friendly, visually
                appealing application.
                {/* I was the project manager and UI designer of the team. */}
                {/* <li className="hack__list--des"> */}
                {/* As a project manager, I make sure that everyone in the team
                  has a clear objective of the project and helped assemble the
                  team to create a winning result. */}
                {/* </li> */}
                {/* <li className="hack__list--des"> */}
                {/* As a UI designer, I was in charge of processing and
                  transforming our business idea into a working model that has a
                  desirable and valuable form. I make sure that the design of
                  our application is simple, beautiful and user-friendly. */}
                {/* </li> */}
              </li>
              {/* <li className="hack__list">
                Through this competition, I got to step out of my comfort zone
                and boost my confidence by pitching in front of thousands of
                people. It is a fantastic learning opportunity that strengthens
                both my hard and soft skills.
              </li> */}
            </div>
          </div>
          <div className="prototype__div">
            <button className="prototype">
              <a href="https://www.figma.com/proto/AUFOlpAJRjsafGqjMaI2yl/AIA-Hackathon?node-id=14%3A3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=14%3A3">
                View Prototype
              </a>
            </button>
          </div>
        </div>
        <div className="hackComp hackComp--varsity">
          <a className="comp__title" href="https://vhackusm.com/">
            Varsity Hackathon 2022
          </a>
          <div className="description__div">
            <div className="description">
              <li className="hack__list">
                Collaborated with two computer science students in the
                development of 'WeCare', a web application aimed at addressing
                youth suicide and providing support to those suffering from
                suicidal thoughts.
              </li>
              <li className="hack__list">
                Contributed as a UI designer, applying the six key principles of
                design (clarity, familiarity, user control, comfort,
                ease-of-use, and accessibility) to ensure a positive user
                experience.
              </li>
              <li className="hack__list">
                Participated in design thinking, prototyping, and pitching
                workshops and seminars to broaden knowledge and skills.
              </li>
              {/* <li className="hack__list">
                I am one of the UI designers of our prototype. I applied the 6
                key principles of UI design which include clarity, familiarity,
                user control, comfort, ease-of-use and accessbility when
                developing the prototype to make sure users have a great user
                experience when using our application.
              </li> */}
              {/* <li className="hack__list">
                Through the competition, I learnt the importance of teamwork and
                good communication. I have also become a more confident,
                determined and creative person.
              </li> */}
            </div>
          </div>
          <div className="prototype__div">
            <button className="prototype">
              <a href="https://www.figma.com/proto/JfNRTGF286BibfDNcAIxZc/WeCare?node-id=65%3A2766&starting-point-node-id=65%3A2766">
                View Prototype
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hackathon;
