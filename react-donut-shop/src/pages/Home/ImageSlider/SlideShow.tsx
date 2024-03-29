import Poster from "./Poster";
import Style from "./SlideShow.module.css";

interface Props {
  posters: Poster[];
  currentPoster: number;
}

const SlideShow = ({ posters, currentPoster }: Props) => {
  return (
    <>
      <div
        className={Style.imagesContainer}
        style={{ transform: `translateX(-${currentPoster * 100}%)` }}
      >
        {posters.map((poster, index) => (
          <div key={index} className={Style.image}>
            <div className={Style.titleContainer}>
              <p>{poster.title}</p>
            </div>
            <img src={poster.image} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SlideShow;
