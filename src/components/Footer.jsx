import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            eos velit nulla reiciendis quia incidunt ea consequatur explicabo
            distinctio consectetur?
          </p>
          <div className="footer__socials">
            <a
              href="https://kr.linkedin.com/"
              target="_blank"
              className="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="noreferrer noopener"
            >
              <RiInstagramFill />
            </a>
            <a
              href="https://x.com/?lang=ko"
              target="_blank"
              className="noreferrer noopener"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.facebook.com/?locale=ko_KR"
              target="_blank"
              className="noreferrer noopener"
            >
              <FaFacebookF />
            </a>
          </div>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/">About</Link>
          <Link to="/">Plans</Link>
          <Link to="/">Trainers</Link>
          <Link to="/">Gallery</Link>
          <Link to="/">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/">About</Link>
          <Link to="/">Plans</Link>
          <Link to="/">Trainers</Link>
          <Link to="/">Gallery</Link>
          <Link to="/">Contact</Link>
        </article>
        <article>
          <h4>Get in touch</h4>
          <Link to="/">About</Link>
          <Link to="/">Plans</Link>
          <Link to="/">Trainers</Link>
          <Link to="/">Gallery</Link>
          <Link to="/">Contact</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2024 FITNESS TUTORIALS &copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};
