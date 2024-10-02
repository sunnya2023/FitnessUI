import { Link } from "react-router-dom";
import { programs } from "../data.jsx";
import Card from "../UI/Card";
import { IoMdArrowDropright } from "react-icons/io";
import SectionHead from "./SectionHead";
import { FaCrown } from "react-icons/fa";

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<FaCrown />} title="Programs" />

        <div className="programs__wrapper">
          {programs.map(({ id, icon, title, info, path }) => {
            return (
              <Card className="programs__program" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">
                  Learn More <IoMdArrowDropright />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
