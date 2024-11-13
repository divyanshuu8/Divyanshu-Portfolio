import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/divyanshuu8/Face-Recognition-Based-Attendance-System"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    pointerEvents: "none", // Disable pointer events
                    color: "gray", // Change text color to gray
                    textDecoration: "none", // Remove underline
                    cursor: "not-allowed", // Change cursor to indicate it's not clickable
                    opacity: 0.5, // Make it slightly transparent
                  }}
                >
                  <img
                    src={externalLink}
                    alt="Visit site"
                    style={{ pointerEvents: "none" }}
                  />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Face Recognition Based Attendance System</h3>
              <p>
                A system that uses facial recognition to automatically track and
                manage attendance, logging data into an Excel file for easy
                record-keeping. This application provides a convenient and
                efficient way to manage attendance records in real-time,
                minimizing manual errors.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>OpenCV</li>
                <li>Tkinter</li>
                <li>Pandas</li>
                <li>Numpy</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/divyanshuu8/Yelp-Camp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />{" "}
                </a>
                <a
                  href="https://yelp-camp-2jja.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={externalLink}
                    alt="Visit site"
                    style={{ pointerEvents: "none" }}
                  />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Yelp-Camp: Airbnb for Campground</h3>
              <p>
                Yelp-Camp is a full-stack MERN application designed for managing
                campgrounds, where users can perform all CRUD (Create, Read,
                Update, Delete) operations. The application features an
                attractive and user-friendly visual design.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Bootstrap</li>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/divyanshuu8/ToDo-List---Dapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />{" "}
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    pointerEvents: "none", // Disable pointer events
                    color: "gray", // Change text color to gray
                    textDecoration: "none", // Remove underline
                    cursor: "not-allowed", // Change cursor to indicate it's not clickable
                    opacity: 0.5, // Make it slightly transparent
                  }}
                >
                  <img
                    src={externalLink}
                    alt="Visit site"
                    style={{ pointerEvents: "none" }}
                  />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>To-Do DApp (Decentralized Application)</h3>
              <p>
                The To-Do DApp lets users manage tasks on the Ethereum
                blockchain, using React for the front end and Solidity for smart
                contracts, transparency, and decentralized task management.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Solidity</li>
                <li>MetaMask</li>
                <li>Node</li>
                <li>React</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/divyanshuu8/web-Scraper"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />{" "}
                </a>
                <a
                  href="https://prisewise.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>priseWise - eCommerce Price Tracker</h3>
              <p>
                PriseWise is a powerful web scraping tool designed to help users
                extract and track product information from Amazon, enabling them
                to receive alerts for price changes, stock updates, and more.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Next.js</li>
                <li>Bright Data</li>
                <li>Cheerio</li>
                <li>Nodemailer</li>
                <li>MongoDB</li>
                <li>Tailwind CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/divyanshuu8/AcePrep"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />{" "}
                </a>
                <a
                  href="https://aceprep.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>AcePrep - Softskills Assessments</h3>
              <p>
                AcePrep is an innovative softskills assessment platform designed
                to help individuals improve their communication abilities. The
                platform leverages cutting-edge generative AI technology to
                assess your speaking, writing, and interpersonal skills through
                a series of interactive tests and exercises
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Gemini AI</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Node</li>
                <li>Tailwind CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://madewithluv.in/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MadeWithLuv - HomeDecor Site</h3>
              <p>
                This website sells home decor products and helps people decorate their homes. It is easy to find what you need, whether it's furniture or decorations. The site is useful for people who want to make their homes look nice and need some help.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}
      </div>
    </Container>
  );
}
