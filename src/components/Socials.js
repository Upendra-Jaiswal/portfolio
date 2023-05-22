import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "../css/socials.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import classes from "./socials.module.css";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

import { AiFillLinkedin } from "react-icons/ai";

import GithubImg from "../photos/GithubImage.png";
import TwitterImg from "../photos/TwitterImage.png";
import LinkedInImg from "../photos/LinkedInImage.png";

const upendra = {
  githubhandle: "https://github.com/Upendra-Jaiswal",
  twitterhandle: "https://twitter.com/upendraj20",
  linkedinhandle: "https://www.linkedin.com/in/upendracse/",
};

const Socials = () => {
  return (
    <div className={classes.main}>
      <Container>
        <Row>
          <Router>
            <Col>
              <ul>
                <li>
                  <Link to="/">
                    <button className={classes.github}>
                      <span>
                        {" "}
                        <AiFillGithub />
                      </span>
                      Github
                    </button>
                  </Link>
                </li>

                <li>
                  {" "}
                  <Link to="/twitter">
                    <button className={classes.twitter}>
                      {" "}
                      <span>
                        {" "}
                        <AiOutlineTwitter />
                      </span>{" "}
                      Twitter{" "}
                    </button>
                  </Link>
                </li>

                <li>
                  {" "}
                  <Link to="/linkedin">
                    {" "}
                    <button className={classes.linkedIN}>
                      {" "}
                      <span>
                        {" "}
                        <AiFillLinkedin />
                      </span>
                      LinkedIN
                    </button>
                  </Link>
                </li>
              </ul>
            </Col>

            <Col>
              <Routes>
                <Route path="/" element={<GitHub />} />

                <Route path="/twitter" element={<Twitter />} />

                <Route path="/linkedIn" element={<LinkedIn />} />
              </Routes>
            </Col>
          </Router>
        </Row>
      </Container>
    </div>
    // </div>
  );
  function GitHub() {
    return (
      <div>
        <Row>
          <a href={upendra.githubhandle}>
            {" "}
            <button className={classes.insideButton}>
              go to upendra's github
            </button>
          </a>
        </Row>{" "}
        <div>
          <img src={GithubImg} alt={"GithubImg"} className="image" />
        </div>
      </div>
    );
  }
  function Twitter() {
    return (
      <div>
        {" "}
        <Row>
          <a href={upendra.twitterhandle}>
            {" "}
            <button className={classes.insideButton}>
              go to upendra's twitter
            </button>
          </a>
        </Row>
        <div>
          <img src={TwitterImg} alt={"TwitterImg"} className="image" />
        </div>
      </div>
    );
  }
  function LinkedIn() {
    return (
      <div>
        {" "}
        <div>
          <Row>
            <a href={upendra.linkedinhandle}>
              {" "}
              <button className={classes.insideButton}>
                {" "}
                go to upendra's linkedin
              </button>{" "}
            </a>
          </Row>
        </div>
        <div>
          <img src={LinkedInImg} alt={"LinkedInImg"} className="image" />
        </div>
      </div>
    );
  }
};

export default Socials;
