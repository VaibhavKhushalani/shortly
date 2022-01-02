import React from "react";
import styled from "styled-components";

const FooterComp = styled.div`
  background-color: #232127;
  color: #fff;
  text-align: start;
  height: 22em;
  width: 100%;

  @media (max-width: 1000px) {
    height: 26em;
  }
  @media (max-width: 768.9px) {
    height: 50em;
  }

  .footer-middle {
    width: 100%;
    font-weight: bold;
    font-family: sans-serif;
    padding-top: 2rem;

    @media (max-width: 1000px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;

      grid-template-rows: max-content;
    }

    @media (max-width: 768.9px) {
      text-align: center;
      justify-content: center;
      grid-template-rows: max-content;
      display: grid;
      grid-template-columns: none;
    }
  }

  .list-styled-icon {
    @media (max-width: 1000px) {
      position: absolute;
      left: 50%;
      right: 50%;
      display: inline-flex;
      justify-content: center;
    }
    @media (max-width: 768.9px) {
      margin: 0px auto;
      justify-content: center;
    }
  }

  .socialIcon {
    margin-top: 5em;
    margin-right: 1em;
    margin-left: 0em;

    @media (max-width: 1000px) {
      margin-top: 5em;
      margin-right: 1em;
      margin-left: 0em;
    }
    @media (max-width: 768.9px) {
      margin-top: 1em !important;
      margin-left: 1em !important;
    }
  }

  .TitleFooter {
    float: left;
    margin-left: 140px;
    margin-right: 10px;
    transition: all 0.2s ease-in-out;
    @media (max-width: 1162px) {
      margin-left: 75px;
    }
    @media (max-width: 1100px) {
      margin: 0px auto;
      padding-left: 30px;
    }
    @media (max-width: 768.9px) {
      display: contents;
      padding-left: 0px;
    }
  }

  .container {
    float: left;
  }

  .list-unstyled-headers,
  .list-styled-icon {
    font-weight: 700;
    color: #fff;
    padding-bottom: 10px;
    margin-top: 3em;
    margin-right: 3em;
    margin-left: 7em;
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    transition: all 0.2s ease-in-out;
    cursor: auto;
    @media (max-width: 1286px) {
      margin-right: 0em;
    }
    @media (max-width: 1100px) {
      margin: 0px auto;
      padding-top: 2em;
      padding-left: 6em;
    }
    @media (max-width: 1000px) {
      padding-top: 2em;
      padding-left: 30px;
      padding-bottom: 10px;
    }
    @media (max-width: 768.9px) {
      padding-top: 2em;
      padding-left: 0px;
      padding-bottom: 0px;
      text-align: center;
    }
  }

  .list-unstyled {
    list-style-type: none;
    text-align: start;
    margin-left: 4em;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    @media (max-width: 1100px) {
      margin: 0px auto;
      padding-left: 5.4em;
    }

    @media (max-width: 1000px) {
      padding-right: 0em;
      margin-left: 0px;
      padding-left: 30px;
    }

    @media (max-width: 768.9px) {
      padding: 0px;
      text-align: center;
      display: inline-block;
    }
  }

  ul li {
    color: #778696;
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    font-weight: 500;
    margin-top: 15px;
    transition: all 0.4s ease-in-out;
  }
  ul li:hover {
    color: #2acfcf;
    transition: all 0.3s ease-in-out;
  }

  path:hover {
    fill: #2acfcf;
  }

  a {
    color: var(--mainDark);
    text-decoration: none;
  }
  a:hover {
    white-space: nowrap;
  }
`;

const Footer = () => {
  return (
    <FooterComp>
      <div className="footer-middle">
        {/*coloumn1*/}
        <div className="container">
          <ul className="TitleFooter">
            <h1>
              <a href="/">Shortly</a>
            </h1>
          </ul>
        </div>

        {/* coloumn2 */}
        <div className="container">
          <h2 className="list-unstyled-headers">Features</h2>
          <ul className="list-unstyled">
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        {/* coloumn3 */}

        <div className="container">
          <h2 className="list-unstyled-headers">Resources</h2>
          <ul className="list-unstyled">
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        {/* coloumn4 */}
        <div className="container">
          <h2 className="list-unstyled-headers">Company</h2>
          <ul className="list-unstyled">
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      {/* coloumn5 */}
      <div className="container">
        <div className="list-styled-icon">
          <a className="socialIcon" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                fill="#fff"
                d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
              />
            </svg>
          </a>
          <a className="socialIcon" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
              <path
                fill="#FFF"
                d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
              />
            </svg>
          </a>
          <a className="socialIcon" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                fill="#FFF"
                d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
              />
            </svg>
          </a>
          <a className="socialIcon" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                fill="#FFF"
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
              />
            </svg>
          </a>
        </div>
      </div>
    </FooterComp>
  );
};

export default Footer;
