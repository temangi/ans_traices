import Slider from "react-slick";
import scss from "./CardTours.module.scss"
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from "../images/arrowLeft.svg"
import arrowRight from "../images/arrowRight.svg"

export const MySlider = ({card}) => {
  const PrevArrow = ({onClick}) => {
    return(
      <div className={scss.prev_arrow}>
      <button className={scss.btn_arrow}  onClick={onClick}>
          <img className={scss.img_arrow} src={arrowLeft} alt="prev" />
        </button>
      </div>
    )
  }
  const NextArrow = ({onClick}) => { 
    return (
      <div className={scss.next_arrow}>
      <button className={scss.btn_arrow} onClick={onClick}>
          <img className={scss.img_arrow} src={arrowRight} alt="Arrow" />
        </button>
      </div>
    )
  }
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>,
    responsive:[
      {
        breakpoint: 450,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      }
    ]
  }
  return (
    <Slider {...settings}>
      <div className={scss.slide}>{card}</div>
      <div className={scss.slide}>{card}</div>
      <div className={scss.slide}>{card}</div>
      <div className={scss.slide}>{card}</div>
      <div className={scss.slide}>{card}</div>
      <div className={scss.slide}>{card}</div>
    </Slider>
  );
};


 
