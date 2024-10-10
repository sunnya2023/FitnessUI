import "./gallery.css";
import SubHeader from "../../components/SubHeader";
import HeaderImage from "../../images/header_bg_3.jpg";
import { gallery } from "../../data";

const Gallery = () => {
  return (
    <>
      <SubHeader title="Our Gallery" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut eveniet
        nulla ipsam repudiandae hic voluptatum?
      </SubHeader>
      <section className="gallery">
        <div className="container gallery__container">
          {gallery.map(({ image, id }) => {
            return (
              <article key={id}>
                <img src={image} alt={`Gallery image ${id}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
