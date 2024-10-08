import "./about.css";
import SubHeader from "../../components/SubHeader";
import HeaderImage from "../../images/header_bg_1.jpg";

const About = () => {
  return (
    <>
      <SubHeader title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quos
        vero explicabo omnis voluptate asperiores blanditiis quas at corrupti
        nam?
      </SubHeader>
    </>
  );
};

export default About;
