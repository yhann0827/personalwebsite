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
                Worked with 5 computer science students to develop an innovative
                solution that can solve mental health challenges and build the
                future of insurance industry. Secured smenifinal slot by beating
                more than 50 groups of students.
              </li>
              <li className="hack__list">
                Created an application called, icAIAre, that helps to tackle
                smartphone and internet addiction. The prototype is built using
                Figma.
              </li>
              <li className="hack__list">
                Attended various workshop that enhanced my technical as well as
                entrepreneurial knowledge
              </li>
              <li className="hack__list">
                I was the project manager and UI designer of the team.
                <li className="hack__list--des">
                  As a project manager, I make sure that everyone in the team
                  has a clear objective of the project and helped assemble the
                  team to create a winning result.
                </li>
                <li className="hack__list--des">
                  As a UI designer, I was in charge of processing and
                  transforming our business idea into a working model that has a
                  desirable and valuable form. I make sure that the design of
                  our application is simple, beautiful and user-friendly.
                </li>
              </li>
              <li className="hack__list">
                Through this competition, I got to step out of my comfort zone
                and boost my confidence by pitching in front of thousands of
                people. It is a fantastic learning opportunity that strengthens
                both my hard and soft skills.
              </li>
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
                Collaborated with 2 computer science students to build a website
                applicaiton that helped to tackle the youth suicide issues and
                reduce global suicide rate.
              </li>
              <li className="hack__list">
                Our team created a web application named 'WeCare' to help those
                who are suffer from suicidal thoughts. We have included some
                interesting features such as free evaluation and psychological
                tests, therapy sessions booking services, chatting with new
                friends or volunteers, job hunting services, educational courses
                and more in this website.
              </li>
              <li className="hack__list">
                Attended numerous seminars and workshops on topics such as
                design thinking, prototyping and pitching.
              </li>
              <li className="hack__list">
                I am one of the UI designers of our prototype. I applied the 6
                key principles of UI design which include clarity, familiarity,
                user control, comfort, ease-of-use and accessbility when
                developing the prototype to make sure users have a great user
                experience when using our application.
              </li>
              <li className="hack__list">
                Through the competition, I learnt the importance of teamwork and
                good communication. I have also become a more confident,
                determined and creative person.
              </li>
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
