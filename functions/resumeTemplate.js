/**
 * Generates an HTML string for a resume using the provided data.
 * @param {Object} resumeData - The data to populate the resume.
 * @return {string} The HTML string for the resume.
 */
function getResumeHtml(resumeData = {}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>
          Resume - ${resumeData.name || "Jangya Satapathy"}
        </title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 11px;
            line-height: 1.4;
            color: #333;
            background: white;
            margin: 0;
            padding: 30px;
          }
          .header {
            text-align: left;
            margin-bottom: 25px;
            border-bottom: 2px solid #333;
            padding-bottom: 15px;
          }
          .name {
            font-size: 28px;
            font-weight: bold;
            color: #000;
            margin-bottom: 5px;
          }
          .title {
            font-size: 16px;
            color: #666;
            margin-bottom: 8px;
          }
          .contact {
            font-size: 10px;
            color: #555;
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
          }
          .section {
            margin-bottom: 20px;
          }
          .section-title {
            font-size: 14px;
            font-weight: bold;
            color: #000;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .experience-item, .project-item {
            margin-bottom: 15px;
          }
          .job-title {
            font-size: 12px;
            font-weight: bold;
            color: #000;
          }
          .company {
            font-size: 11px;
            color: #333;
            margin-bottom: 2px;
          }
          .duration {
            font-size: 10px;
            color: #666;
            margin-bottom: 5px;
          }
          .responsibilities {
            list-style: none;
            margin-left: 0;
          }
          .responsibilities li {
            margin-bottom: 3px;
            position: relative;
            padding-left: 12px;
            font-size: 10px;
            line-height: 1.3;
          }
          .responsibilities li:before {
            content: "▹";
            position: absolute;
            left: 0;
            color: #666;
          }
          .skills-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 10px;
          }
          .skill-category {
            margin-bottom: 10px;
          }
          .skill-category-title {
            font-size: 11px;
            font-weight: bold;
            margin-bottom: 5px;
            color: #000;
          }
          .skill-list {
            font-size: 10px;
            color: #555;
            line-height: 1.4;
          }
          .education-item {
            margin-bottom: 10px;
          }
          .degree {
            font-size: 11px;
            font-weight: bold;
            color: #000;
          }
          .university {
            font-size: 10px;
            color: #555;
          }
          .achievement-item {
            margin-bottom: 8px;
          }
          .achievement-title {
            font-size: 11px;
            font-weight: bold;
            color: #000;
          }
          .achievement-desc {
            font-size: 10px;
            color: #555;
            margin-top: 2px;
          }
          .interests-text {
            font-size: 10px;
            color: #555;
          }
          .project-title {
            font-size: 11px;
            font-weight: bold;
            color: #000;
            margin-bottom: 3px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="name">
            ${resumeData.name || "Jangya Satapathy"}
          </div>
          <div class="title">
            ${resumeData.title ||
              "Front-End Software Engineer"}
          </div>
          <div class="contact">
            <span>
              ${resumeData.email || "jangya.satapathy@gmail.com"}
            </span>
            <span>
              ${resumeData.phone || "91-9611010508"}
            </span>
            <span>
              ${resumeData.website || "jangya.github.io"}
            </span>
            <span>
              ${resumeData.github || "github.com/jangya"}
            </span>
          </div>
        </div>
        <div class="section">
          <div class="section-title">Relevant Experience</div>
          <div class="experience-item">
            <div class="job-title">
              Senior Member Technical Staff @ Oracle
            </div>
            <div class="duration">
              June 2021 - Present // Bangalore, KA
            </div>
            <ul class="responsibilities">
              <li>
                Develop modern, performant, and robust UI for better digital
                customer experience in communication industry.
              </li>
              <li>
                Communicate and collaborate with multi-disciplinary teams of
                engineers, designers, producers, clients, and stakeholders on a
                daily basis.
              </li>
            </ul>
          </div>
          <div class="experience-item">
            <div class="job-title">
              Senior Developer @ SAP
            </div>
            <div class="duration">
              July 2018 - June 2021 // Bangalore, KA
            </div>
            <ul class="responsibilities">
              <li>
                Worked with teams across different location of SAP to develop
                software programs using MEAN stack for a cloud tool (build.me)
                which helps in designing and building enterprise app.
              </li>
              <li>
                Helped reviewing code, optimizing website performance and
                introducing new features.
              </li>
              <li>
                Wrote a node script to export data for an ex-customer and
                delete the same from system.
              </li>
              <li>
                Interfaced with product owner on a weekly basis, providing
                technological expertise and statistics about the work progress.
              </li>
            </ul>
          </div>
          <div class="experience-item">
            <div class="job-title">
              Programmer Analyst @ Cognizant
            </div>
            <div class="duration">
              June 2016 - July 2018 // Bangalore, KA
            </div>
            <ul class="responsibilities">
              <li>
                Developed and shipped highly interactive web applications for
                Apple using React framework.
              </li>
              <li>
                Accountable for bug fixing, unit testing, UX standardization,
                performance and accessibility across all web apps.
              </li>
            </ul>
          </div>
          <div class="experience-item">
            <div class="job-title">
              Software Engineer @ Summation IT
            </div>
            <div class="duration">
              Dec 2013 - June 2016 // Hyderabad, TS
            </div>
            <ul class="responsibilities">
              <li>
                Developed and maintained code for in-house and client websites
                primarily using HTML, CSS, Sass, JavaScript, jQuery and PHP.
              </li>
              <li>
                Tested sites in various browsers and devices to ensure
                cross-browser compatibility and mobile responsiveness.
              </li>
            </ul>
          </div>
        </div>
        <div class="section">
          <div class="section-title">Projects</div>
          <div class="project-item">
            <div class="project-title">DepBot</div>
            <ul class="responsibilities">
              <li>
                A command-based GitHub app built with Probot helps in upgrading
                private and public npm dependencies transitively by creating
                pull requests in your repositories.
              </li>
              <li>
                Used by SAP dev teams, reduces 80% manual efforts when dealing
                with 100+ Git repositories.
              </li>
            </ul>
          </div>
          <div class="project-item">
            <div class="project-title">Timely</div>
            <ul class="responsibilities">
              <li>
                Track and adjust your time spend inside ODC. The UI offers a
                grid table page along with dashboard and server collects data
                from punching devices and triggers mail every day.
              </li>
              <li>
                Developed for an internal HR team in Cognizant, used by 400
                colleagues.
              </li>
            </ul>
          </div>
          <div class="project-item">
            <div class="project-title">Smart Queue</div>
            <ul class="responsibilities">
              <li>
                A token based patient tracking app for avoiding physical queue
                in hospitals, developed during covid pandemic. This is a server
                less web App made with Angular and Firebase.
              </li>
              <li>
                Developed for a personal clinic, operated by 2 doctors.
              </li>
            </ul>
          </div>
        </div>
        <div class="section">
          <div class="section-title">Skills</div>
          <div class="skills-grid">
            <div>
              <div class="skill-category">
                <div class="skill-category-title">
                  Programming Languages
                </div>
                <div class="skill-list">
                  JavaScript (ES6), TypeScript, HTML, CSS/Sass, Shell Script,
                  PHP
                </div>
              </div>
              <div class="skill-category">
                <div class="skill-category-title">
                  Libraries & Frameworks
                </div>
                <div class="skill-list">
                  jQuery, React, Angular, SAP UI5, Node.js, Express, Bootstrap,
                  Material UI
                </div>
              </div>
            </div>
            <div>
              <div class="skill-category">
                <div class="skill-category-title">
                  Tools & Platforms
                </div>
                <div class="skill-list">
                  Git, Gulp, Webpack, Heroku, Docker, Firebase, Jenkins, VSCode
                </div>
              </div>
              <div class="skill-category">
                <div class="skill-category-title">
                  Database
                </div>
                <div class="skill-list">
                  MySQL, MongoDB
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="section-title">Education</div>
          <div class="education-item">
            <div class="degree">
              Biju Patnaik University of Technology
            </div>
            <div class="duration">
              2009 - 2013 // Berhampur, OD
            </div>
            <div class="university">
              Bachelor of technology in electronics and communication
              engineering with CGPA 7.2/10.
            </div>
          </div>
        </div>
        <div class="section">
          <div class="section-title">Achievements</div>
          <div class="achievement-item">
            <div class="achievement-title">
              Excellence Award
            </div>
            <div class="achievement-desc">
              Received an Excellence Award from SAP UX Engineering team for
              exceeding the expectation in 2020 Q1.
            </div>
          </div>
          <div class="achievement-item">
            <div class="achievement-title">
              Innovator
            </div>
            <div class="achievement-desc">
              DepBot was placed at top 10 among 200 plus ideas in an innovation
              competition held internally by SAP.
            </div>
          </div>
        </div>
        <div class="section">
          <div class="section-title">Interests</div>
          <div class="interests-text">
            Photography, gaming, traveling, reading, riding
          </div>
        </div>
      </body>
    </html>
  `;
}

module.exports = {getResumeHtml};
