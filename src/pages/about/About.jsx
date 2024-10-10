import "./about.css";
import SubHeader from "../../components/SubHeader";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

const About = () => {
  return (
    <>
      <SubHeader title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quos
        vero explicabo omnis voluptate asperiores blanditiis quas at corrupti
        nam?
      </SubHeader>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__secton-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, aliquid commodi totam unde illum doloremque aliquam
              incidunt temporibus non, dolor laborum, veritatis quaerat fugiat
              aperiam cupiditate voluptatum quasi corporis doloribus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, illum! Voluptatem minus, asperiores velit tenetur id
              repudiandae earum repellat sint reprehenderit maiores, quis
              cupiditate veniam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptas, praesentium! Iusto at quos ipsa natus reiciendis?
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, aliquid commodi totam unde illum doloremque aliquam
              incidunt temporibus non, dolor laborum, veritatis quaerat fugiat
              aperiam cupiditate voluptatum quasi corporis doloribus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, illum! Voluptatem minus, asperiores velit tenetur id
              repudiandae earum repellat sint reprehenderit
            </p>
          </div>
          <div className="about__secton-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__secton-image">
            <img src={MissionImage} alt="Our mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, aliquid commodi totam unde illum doloremque aliquam
              incidunt temporibus non, dolor laborum, veritatis quaerat fugiat
              aperiam cupiditate voluptatum quasi corporis doloribus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, illum! Voluptatem minus, asperiores velit tenetur id
              repudiandae earum repellat sint reprehenderit
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laudantium, consequuntur laborum asperiores reprehenderit
              laboriosam praesentium?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
