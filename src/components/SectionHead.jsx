import { FaCrown } from "react-icons/fa";

const SectionHead = ({ title }) => {
  return (
    <div className="section__head">
      <span>
        <FaCrown />
      </span>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHead;
